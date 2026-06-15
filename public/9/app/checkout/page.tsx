"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CheckCircle, ArrowLeft, CreditCard, Truck, MapPin } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    cp: "",
    observaciones: "",
  });

  if (items.length === 0 && step !== 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
          <Link href="/productos" className="text-primary hover:underline">
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
      clearCart();
    }
  };

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-xl p-8 shadow-sm max-w-md mx-4">
          <CheckCircle size={80} className="mx-auto text-green-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">¡Pedido confirmado!</h1>
          <p className="text-gray-600 mb-6">
            Tu pedido ha sido recibido. Te enviaremos un email con los detalles.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Este es un pedido de simulación - No se realizó ningún cargo real.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back */}
        <Link
          href="/cart"
          className="inline-flex items-center text-gray-500 hover:text-primary mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Volver al carrito
        </Link>

        <h1 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">Finalizar compra</h1>

        {/* Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`flex items-center gap-2 ${step === 0 ? "text-primary" : "text-green-500"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 0 ? "bg-primary" : "bg-green-500"} text-white`}>
              1
            </div>
            <span className="hidden sm:inline">Envío</span>
          </div>
          <div className="w-8 h-px bg-gray-300" />
          <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-gray-400"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary" : "bg-gray-300"} text-white`}>
              2
            </div>
            <span className="hidden sm:inline">Pago</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm">
              {step === 0 && (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin size={24} className="text-primary" />
                    <h2 className="text-lg font-bold">Datos de envío</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Código Postal
                      </label>
                      <input
                        type="text"
                        value={formData.cp}
                        onChange={(e) => setFormData({ ...formData, cp: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Dirección *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.direccion}
                        onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        value={formData.ciudad}
                        onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Observaciones
                      </label>
                      <textarea
                        value={formData.observaciones}
                        onChange={(e) => setFormData({ ...formData, observaciones: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                  >
                    Continuar al pago
                  </button>
                </>
              )}

              {step === 1 && (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <CreditCard size={24} className="text-primary" />
                    <h2 className="text-lg font-bold">Método de pago</h2>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 mb-2">💳 Simulación de pago</p>
                    <p className="text-xs text-gray-500">
                      Esta es una tienda de demostración. No se realizará ningún cargo real.
                    </p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" defaultChecked className="text-primary" />
                      <span className="ml-3">Efectivo / Transferencia</span>
                    </label>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" className="text-primary" />
                      <span className="ml-3">MercadoPago (simulado)</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                  >
                    Confirmar pedido
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="w-full mt-3 py-3 text-gray-600 hover:text-primary"
                  >
                    Volver a datos de envío
                  </button>
                </>
              )}
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold mb-4">Tu pedido</h2>
              <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-12 relative bg-gray-100 rounded">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">x{item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Envío</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}