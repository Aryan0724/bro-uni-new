import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

export function BroCharacter({ progress }: { progress: MotionValue<number> }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/RobotExpressive.glb");
  const { actions } = useAnimations(animations, group);
  
  const [currentAction, setCurrentAction] = useState<string>("Idle");
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Automatically change cursor to pointer when hovering over the robot
  useCursor(hovered);

  useEffect(() => {
    // Play the current action and crossfade from the previous one
    if (actions && currentAction && actions[currentAction]) {
      const action = actions[currentAction];
      action.reset().fadeIn(0.3).play();
      
      // If it's a one-shot animation like Jump, we don't want it to loop forever
      if (currentAction === "Jump" || currentAction === "Punch" || currentAction === "ThumbsUp") {
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
      } else {
        action.setLoop(THREE.LoopRepeat, Infinity);
      }

      return () => {
        action.fadeOut(0.3);
      };
    }
  }, [actions, currentAction]);

  useFrame((state, delta) => {
    if (!group.current || !actions) return;

    const offset = progress.get();

    // --- CINEMATIC ACTION SEQUENCING ---
    // Trigger different baseline actions based on how far down they scrolled
    let targetAction = "Idle";
    if (offset > 0.2 && offset < 0.5) targetAction = "Walking";
    else if (offset >= 0.5 && offset < 0.8) targetAction = "Dance";
    else if (offset >= 0.8) targetAction = "Wave";

    // --- INTERACTIVE OVERRIDES ---
    // If the user interacts with the robot, override the scroll-based animation
    if (clicked) {
      targetAction = "Jump";
    } else if (hovered && targetAction === "Idle") {
      // Only do thumbs up if we are idle, otherwise it interrupts walking/dancing
      targetAction = "ThumbsUp";
    }

    if (currentAction !== targetAction) {
      setCurrentAction(targetAction);
    }

    // --- CINEMATIC CAMERA & POSITION CHOREOGRAPHY ---
    let targetX = 0;
    const targetY = -1; // Keep it centered vertically
    let targetZ = 0;
    let targetRotY = 0;

    // Choreograph based on scroll phases
    if (offset < 0.3) {
      // Phase 1: Idle in the center
      targetX = 0;
      targetZ = 2;
      targetRotY = 0;
    } else if (offset < 0.6) {
      // Phase 2: Walking to the right
      targetX = THREE.MathUtils.lerp(0, 3, (offset - 0.3) / 0.3);
      targetZ = 0;
      targetRotY = -Math.PI / 4; 
    } else if (offset < 0.8) {
      // Phase 3: Dancing on the left
      targetX = THREE.MathUtils.lerp(3, -3, (offset - 0.6) / 0.2);
      targetZ = 3;
      targetRotY = Math.PI / 4; 
    } else {
      // Phase 4: Waving close up in the center
      targetX = THREE.MathUtils.lerp(-3, 0, (offset - 0.8) / 0.2);
      targetZ = 5;
      targetRotY = 0; 
    }

    // --- MOUSE TRACKING (Looking at the cursor) ---
    // Make the robot feel alive by having it subtly track the mouse cursor
    // Only apply strong tracking when idle or hovering
    let targetRotX = 0;
    if (targetAction === "Idle" || targetAction === "ThumbsUp" || targetAction === "Wave") {
      const mouseX = (state.pointer.x * Math.PI) / 4; // look left/right
      const mouseY = (state.pointer.y * Math.PI) / 8; // look up/down
      
      targetRotY += mouseX;
      targetRotX = -mouseY; 
    }

    // Smoothly animate to the targets
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 4, delta);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 4, delta);
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, targetZ, 4, delta);
    
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 5, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 5, delta);
  });

  return (
    <group 
      ref={group} 
      dispose={null} 
      position={[0, -1, 0]}
      // Add Interaction Handlers
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (!clicked) {
          setClicked(true);
          // The jump animation is about 1 second long
          setTimeout(() => setClicked(false), 1200); 
        }
      }}
    >
      <primitive object={scene} scale={0.6} />
    </group>
  );
}

useGLTF.preload("/RobotExpressive.glb");
