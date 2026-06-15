import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-primary mb-4">
              RESTO<span className="text-white">BURGER</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Las mejores hamburgesas y pizzas de la ciudad. Delivery disponible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-400 hover:text-primary">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-primary">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/cuenta" className="text-gray-400 hover:text-primary">
                  Mi cuenta
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-gray-400">Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-400">11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary" />
                <span className="text-gray-400">info@restoburger.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={18} className="text-primary" />
                <span className="text-gray-400">Lun-Dom: 11:00 - 23:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} RestoBurger. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}