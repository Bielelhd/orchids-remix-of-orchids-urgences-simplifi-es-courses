import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urgences Simplifiées | Formations en Médecine d'Urgence",
  description:
    "Maîtrisez les urgences médicales avec des protocoles clairs et pratiques. Formations en ligne pour médecins et étudiants en médecine en Algérie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  );
}
