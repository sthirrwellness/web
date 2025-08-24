import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

// Configure the sans-serif font
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter' 
});

// Configure the serif font
const lora = Lora({ 
  subsets: ["latin"], 
  weight: ['400', '500'],
  variable: '--font-lora' 
});

export const metadata: Metadata = {
  title: "Sthirr Wellness",
  description: "We're building a balanced space for your wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}