"use client";

import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function CuentaPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsLogin(true);
      setFormData({ nombre: "", email: "", password: "", confirmarPassword: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {isLogin ? "Mi Cuenta" : "Crear Cuenta"}
          </h1>
          <p className="text-gray-500 mt-2">
            {isLogin
              ? "Ingresá a tu cuenta para ver tus pedidos"
              : "Registrate para crear una cuenta"}
          </p>
          <p className="text-xs text-yellow-600 mt-2">
            ⚠️ Esta es una simulación - No se guardan datos reales
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {isLogin ? "¡Bienvenido!" : "¡Cuenta creada!"}
              </h2>
              <p className="text-gray-500">
                {isLogin
                  ? "Has iniciado sesión correctamente"
                  : "Tu cuenta ha sido creada exitosamente"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmar contraseña
                  </label>
                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="password"
                      required
                      value={formData.confirmarPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmarPassword: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
              >
                {isLogin ? "Iniciar sesión" : "Crear cuenta"}
              </button>
            </form>
          )}

          {!submitted && (
            <div className="mt-6 text-center">
              <p className="text-gray-500">
                {isLogin ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:underline ml-1 font-medium"
                >
                  {isLogin ? "Crear cuenta" : "Iniciar sesión"}
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Account Info (Simulated) */}
        {isLogin && !submitted && (
          <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-sm p-5 sm:p-6">
            <h2 className="font-semibold text-gray-800 mb-4">Mi información</h2>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-500">Nombre:</span>
                <span className="font-medium">Juan Pérez</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email:</span>
                <span className="font-medium">juan@ejemplo.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Pedidos:</span>
                <span className="font-medium">3</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t space-y-2">
              <a href="#" className="block text-primary hover:underline text-sm">
                Mis pedidos
              </a>
              <a href="#" className="block text-primary hover:underline text-sm">
                Datos personales
              </a>
              <a href="#" className="block text-gray-500 hover:text-gray-700 text-sm">
                Cerrar sesión
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}