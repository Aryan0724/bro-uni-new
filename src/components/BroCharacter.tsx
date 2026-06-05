import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

// Robot pose choreography per module
// Contextual actions that feel meaningful and deliberate.
const POSES = [
  { action: "Idle",    rotY: 0,             posX: 0, posY: -1.2 }, // Mod 1 — Examining
  { action: "Walking", rotY: Math.PI / 4,   posX: 0, posY: -1.2 }, // Mod 2 — Searching/Processing
  { action: "Yes",     rotY: -Math.PI / 6,  posX: 0, posY: -1.2 }, // Mod 3 — Comprehension
  { action: "Idle",    rotY: Math.PI / 2.5, posX: 0, posY: -1.2 }, // Mod 4 — Deep profile
  { action: "Running", rotY: -Math.PI / 3,  posX: 0, posY: -1.2 }, // Mod 5 — High speed execution
  { action: "ThumbsUp",rotY: Math.PI / 12,  posX: 0, posY: -1.2 }, // Mod 6 — Approval
];

export function BroCharacter({ progress, hoveredCard }: { progress: MotionValue<number>; hoveredCard: number | null; }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/RobotExpressive.glb");
  const { actions } = useAnimations(animations, group);

  const [currentAction, setCurrentAction] = useState<string>("Idle");
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [previousAction, setPreviousAction] = useState<string>("Idle");

  useEffect(() => {
    if (!actions || !currentAction || !actions[currentAction]) return;

    const action = actions[currentAction];
    
    // Slow down movement actions for weight and scale
    if (["Walking", "Running", "Yes", "ThumbsUp"].includes(currentAction)) {
      action.setEffectiveTimeScale(0.5);
    } else {
      action.setEffectiveTimeScale(1.0);
    }

    if (["Jump", "Punch", "ThumbsUp", "Yes"].includes(currentAction)) {
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
    } else {
      action.setLoop(THREE.LoopRepeat, Infinity);
    }

    action.reset().play();
    
    if (previousAction && previousAction !== currentAction && actions[previousAction]) {
      const prev = actions[previousAction];
      action.crossFadeFrom(prev, 1.0, true);
    } else {
      action.fadeIn(1.0);
    }
  }, [actions, currentAction, previousAction]);

  useFrame((state, delta) => {
    if (!group.current || !actions) return;

    const p = progress.get();
    const n = POSES.length;
    const raw = p * n;
    const idx = Math.min(Math.floor(raw), n - 1);
    const nextIdx = Math.min(idx + 1, n - 1);
    const t = THREE.MathUtils.smootherstep(raw - idx, 0, 1);

    const A = POSES[idx];
    const B = POSES[nextIdx];

    // Update animation action
    const targetAction = A.action;
    if (currentAction !== targetAction) {
      setPreviousAction(currentAction);
      setCurrentAction(targetAction);
    }

    // Interpolate rotation and position
    let targetRotY = THREE.MathUtils.lerp(A.rotY, B.rotY, t);
    const targetPosY = THREE.MathUtils.lerp(A.posY, B.posY, t);
    const targetPosX = THREE.MathUtils.lerp(A.posX, B.posX, t);

    // Interactive tracking logic
    if (hoveredCard !== null) {
      // Look at the hovered card (alternating left/right)
      const isRightCard = hoveredCard % 2 === 0;
      const lookTargetRotY = isRightCard ? -Math.PI / 4 : Math.PI / 4;
      targetRotY = THREE.MathUtils.damp(group.current.rotation.y, lookTargetRotY, 4, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0, 4, delta);
    } else {
      // Mouse-tracking subtle sway
      const mouseX = (state.pointer.x * Math.PI) / 8;
      const mouseY = (state.pointer.y * Math.PI) / 12;
      targetRotY += mouseX;
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x, -mouseY, 4, delta
      );
    }

    // Gentle floating bob
    const time = state.clock.elapsedTime;
    const floatY = Math.sin(time * 1.2) * 0.04;
    
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y, targetPosY + floatY, 3, delta
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x, targetPosX, 4, delta
    );
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z, 0, 4, delta
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y, targetRotY, 4, delta
    );
  });

  return (
    <group
      ref={group}
      dispose={null}
      position={[0, -1.2, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
      onClick={(e) => {
        e.stopPropagation();
        if (!clicked) {
          setClicked(true);
          setTimeout(() => setClicked(false), 1300);
        }
      }}
    >
      {/* Robot model — scaled down so full robot is easily visible */}
      <primitive object={scene} scale={0.5} />
    </group>
  );
}

useGLTF.preload("/RobotExpressive.glb");
