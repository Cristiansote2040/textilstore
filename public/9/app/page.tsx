import Link from "next/link";
import Image from "next/image";
import { products, categories, getFeaturedProducts } from "@/data/products";
import { Truck, CreditCard, Percent, Headphones } from "lucide-react";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Banner with Video Background */}
      <section className="relative h-[60vh] min-h-[400px] sm:h-[70vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/90 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 sm:mb-6 animate-pulse">
              🔥 delivery gratis desde $5.000
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
              Las mejores <span className="text-primary-light">burgers</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 font-medium">
              Deliciosas, cremosas, irresistibles
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/productos"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Menú
              </Link>
              <Link
                href="https://wa.me/5491112345678"
                target="_blank"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all"
              >
                💬 Pedir por WhatsApp
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Info Banners - Responsive */}
      <section className="bg-gray-50 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="text-primary" size={14} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-xs sm:text-sm truncate">Envío gratis</p>
                <p className="text-xs text-gray-500 hidden sm:block">desde $5.000</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CreditCard className="text-primary" size={14} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-xs sm:text-sm truncate">3 Cuotas</p>
                <p className="text-xs text-gray-500 hidden sm:block">sin interés</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Percent className="text-primary" size={14} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-xs sm:text-sm truncate">10% OFF</p>
                <p className="text-xs text-gray-500 hidden sm:block">transferencia</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Headphones className="text-primary" size={14} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-xs sm:text-sm truncate">Asesoría</p>
                <p className="text-xs text-gray-500 hidden sm:block">personalizada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Responsive */}
      <section className="py-6 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8">
            Categorías
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/productos?categoria=${category.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-sm hover:shadow-md transition text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-1 sm:mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition">
                    <span className="text-lg sm:text-2xl">
                      {category.slug === "hamburguesas" && "🍔"}
                      {category.slug === "pizzas" && "🍕"}
                      {category.slug === "bebidas" && "🥤"}
                      {category.slug === "postres" && "🍰"}
                      {category.slug === "ensaladas" && "🥗"}
                      {category.slug === "acompanamientos" && "🍟"}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Responsive */}
      <section className="py-6 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/productos/${product.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="relative h-28 sm:h-36 md:h-40 lg:h-48 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    {product.originalPrice && (
                      <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                        -{(Math.round((1 - product.price / product.originalPrice) * 100))}%
                      </span>
                    )}
                  </div>
                  <div className="p-2 sm:p-3 lg:p-4">
                    <h3 className="font-semibold text-xs sm:text-sm text-gray-800 mb-1 line-clamp-1 group-hover:text-primary transition">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-sm sm:text-lg lg:text-xl font-bold text-primary">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/productos"
              className="inline-block bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-primary-dark transition"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-8 sm:py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
            ¿Pedís ya?
          </h2>
          <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6">
            Escribinos por WhatsApp
          </p>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition"
          >
            💬 Pedir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}