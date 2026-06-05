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
  title: "BRO University | Master AI, Neuroscience & Blockchain",
  description:
    "Join a private next-generation education community offering premium expert-led sessions in AI, Neuroscience, and Blockchain. Expert instructors. Real outcomes.",
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
