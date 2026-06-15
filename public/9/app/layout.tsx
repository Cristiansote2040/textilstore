import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import CartSlide from "@/components/cart/CartSlide";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "RestoBurger - Las mejores hamburgesas y pizzas",
  description: "Delivery de hamburgesas, pizzas y más",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <TopBar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartSlide />
        </CartProvider>
      </body>
    </html>
  );
}