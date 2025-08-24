
// 1. Import the new fonts: Forum and Poppins
import { Forum, Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

// 2. Configure the sans-serif font (Poppins)
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '700'], // Include weights you'll use
  variable: '--font-poppins' 
});

// 3. Configure the serif font (Forum)
const forum = Forum({ 
  subsets: ["latin"], 
  weight: ['400'], // Forum only has the 400 weight
  variable: '--font-forum' 
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
      <body className={`${poppins.variable} ${forum.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}