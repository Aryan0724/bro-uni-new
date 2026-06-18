import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";
import BANavbar from "@/components/BANavbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BRO University | Master AI, Neuroscience & Semiconductors",
  description:
    "India's next-generation deep tech university focused on Artificial Intelligence, Neuroscience, Semiconductors, Nanotechnology, and Future Innovation. A research-driven ecosystem where students become innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${chakraPetch.variable} antialiased`}
      >
        <BANavbar />
        {children}
      </body>
    </html>
  );
}
