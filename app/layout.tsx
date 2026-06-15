import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import Toast from "@/components/Toast";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TextilStore - Tienda de Textiles y Moda",
  description: "Tu destino confiable para moda y textiles de calidad. Encuentra las mejores telas, calzado y prendas de vestir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main style={{ flex: 1, paddingTop: '140px' }}>
            {children}
          </main>
          <Footer />
          <CartSidebar />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}