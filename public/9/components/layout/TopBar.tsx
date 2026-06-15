"use client";

import { Search, ShoppingCart, User, Menu, X, Phone, Home, Package, Contact } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <>
      {/* Promo Bar - Responsive */}
      <div className="bg-primary text-white text-center py-1.5 px-2 text-xs sm:text-sm font-medium overflow-hidden">
        <span className="whitespace-nowrap">
          <span className="hidden sm:inline">🍔 </span>Envíos gratis desde $5.000 | 3 cuotas sin interés | 10% OFF
        </span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* Desktop: Single Row with Logo & Icons */}
          <div className="hidden sm:flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                RESTO<span className="text-gray-800">BURGER</span>
              </h1>
            </Link>

            {/* Desktop Icons */}
            <div className="flex items-center gap-4">
              <Link href="/contacto" className="flex items-center gap-1 text-gray-600 hover:text-primary text-sm">
                <Phone size={18} />
                <span>Contacto</span>
              </Link>
              <Link href="/cuenta" className="flex items-center gap-1 text-gray-600 hover:text-primary text-sm">
                <User size={18} />
                <span>Mi cuenta</span>
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-1 text-gray-600 hover:text-primary relative text-sm"
              >
                <ShoppingCart size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span>Carrito</span>
              </button>
            </div>
          </div>

          {/* Mobile: Two Rows */}
          <div className="sm:hidden">
            {/* Row 1: Logo */}
            <div className="h-14 flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-xl font-bold text-primary">
                  RESTO<span className="text-gray-800">BURGER</span>
                </h1>
              </Link>
            </div>

            {/* Row 2: Cart & Menu */}
            <div className="flex items-center justify-between pb-2">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-gray-600 hover:text-primary relative flex items-center gap-1"
              >
                <ShoppingCart size={20} />
                <span className="text-sm">Carrito</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className="p-2 text-gray-600 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar - Desktop Only */}
          <div className="hidden md:block pb-3">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:block bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-6 h-10">
              <Link href="/" className="text-gray-700 hover:text-primary font-medium text-sm">
                Inicio
              </Link>
              <Link href="/productos" className="text-gray-700 hover:text-primary font-medium text-sm">
                Productos
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-primary font-medium text-sm">
                Contacto
              </Link>
              <Link href="/cuenta" className="text-gray-700 hover:text-primary font-medium text-sm">
                Mi cuenta
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Full Screen */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {/* Search mobile */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base"
                />
              </div>

              {/* Menu Links with Icons */}
              <Link
                href="/"
                className="flex items-center gap-3 py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home size={20} />
                <span className="font-medium">Inicio</span>
              </Link>
              <Link
                href="/productos"
                className="flex items-center gap-3 py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Package size={20} />
                <span className="font-medium">Productos</span>
              </Link>
              <Link
                href="/contacto"
                className="flex items-center gap-3 py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Contact size={20} />
                <span className="font-medium">Contacto</span>
              </Link>
              <Link
                href="/cuenta"
                className="flex items-center gap-3 py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User size={20} />
                <span className="font-medium">Mi cuenta</span>
              </Link>

              {/* Cart summary mobile */}
              <div className="mt-4 pt-4 border-t">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsOpen(true);
                  }}
                  className="flex items-center justify-between w-full py-3 px-3 rounded-lg bg-primary text-white"
                >
                  <span className="font-medium">Ver Carrito</span>
                  <span className="bg-white text-primary px-2 py-0.5 rounded-full text-sm font-bold">
                    {totalItems} items
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}