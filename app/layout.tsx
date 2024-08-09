import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import InitTheme from "@/components/theme/InitTheme";
import NavBar from "@/components/navbar/NavBar";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Rlappy",
  description: `
    RLappy connects users who need laptops with those looking to rent out their own. Explore a wide range of high-quality laptops, manage rentals with ease, and start earning by renting out your laptop. Enjoy flexible rental options, quality assurance, and dedicated support.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <InitTheme/>
      <body className={`${poppins.className} text-default`}>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
