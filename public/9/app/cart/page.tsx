"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Tu carrito está vacío
          </h1>
          <p className="text-gray-500 mb-6">
            Parece que no agregaste ningún producto todavía
          </p>
          <Link
            href="/productos"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition"
          >
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Mi Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <div className="w-24 h-24 relative bg-gray-100 rounded-lg flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <Link
                      href={`/productos/${item.slug}`}
                      className="font-semibold text-gray-800 hover:text-primary text-sm sm:text-base"
                    >
                      {item.name}
                    </Link>
                    <span className="font-bold text-primary text-sm sm:text-base whitespace-nowrap">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-primary font-bold text-sm mt-1 sm:hidden">
                    ${item.price.toLocaleString()} c/u
                  </p>
                  <div className="flex items-center gap-3 mt-2 sm:mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      <Plus size={14} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold mb-4">Resumen del pedido</h2>
              <div className="space-y-3 border-b pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium text-green-600">Gratis</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span className="text-primary">${totalPrice.toLocaleString()}</span>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2"
              >
                Continuar compra
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/productos"
                className="block w-full text-center py-3 text-gray-600 hover:text-primary"
              >
                Agregar más productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}