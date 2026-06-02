import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BRO University | Where Intelligence Is Born",
  description:
    "A next-generation institution fusing Neuroscience, AI, and Semiconductor Sciences. Not a university. A movement.",
  keywords: [
    "Neuroscience",
    "Artificial Intelligence",
    "Semiconductor Sciences",
    "Gen Z University",
    "Future of Education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body
        className={`${spaceGrotesk.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
