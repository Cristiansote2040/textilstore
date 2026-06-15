"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, categories, getProductsByCategory } from "@/data/products";
import { Filter, X } from "lucide-react";

function ProductosContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("categoria");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const filteredProducts = selectedCategory === "all"
    ? products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    : getProductsByCategory(selectedCategory).filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  const getCategoryName = (slug: string) => {
    const cat = categories.find(c => c.slug === slug);
    return cat?.name || slug;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Responsive */}
      <div className="bg-primary text-white py-5 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Productos</h1>
          <p className="mt-1 sm:mt-2 text-white/80 text-sm sm:text-base">
            Encontrá lo que buscas
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilters(true)}
          className="lg:hidden flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border mb-4"
        >
          <Filter size={18} />
          <span className="text-sm font-medium">Filtrar</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold mb-4">Categorías</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition ${
                    selectedCategory === "all"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Todos los productos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedCategory === cat.slug
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-bold mb-4">Rango de Precio</h2>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 0 && priceRange[1] === 10000}
                      onChange={() => setPriceRange([0, 10000])}
                      className="text-primary"
                    />
                    <span className="ml-2">Todos</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 0 && priceRange[1] === 1500}
                      onChange={() => setPriceRange([0, 1500])}
                      className="text-primary"
                    />
                    <span className="ml-2">Hasta $1.500</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 1500 && priceRange[1] === 3000}
                      onChange={() => setPriceRange([1500, 3000])}
                      className="text-primary"
                    />
                    <span className="ml-2">$1.500 - $3.000</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 3000 && priceRange[1] === 10000}
                      onChange={() => setPriceRange([3000, 10000])}
                      className="text-primary"
                    />
                    <span className="ml-2">Más de $3.000</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Category Title */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                {selectedCategory === "all"
                  ? "Todos los productos"
                  : getCategoryName(selectedCategory)}
              </h2>
              <p className="text-gray-500">{filteredProducts.length} productos</p>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No se encontraron productos</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/productos/${product.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                      <div className="relative h-48 bg-gray-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition"
                        />
                        {product.originalPrice && (
                          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-primary transition">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {getCategoryName(product.category)}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-primary">
                            ${product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 sm:w-96 bg-white overflow-y-auto">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-bold">Filtros</h2>
              <button onClick={() => setShowFilters(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-3">Categorías</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-2 rounded-lg ${
                    selectedCategory === "all" ? "bg-primary text-white" : "bg-gray-100"
                  }`}
                >
                  Todos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg ${
                      selectedCategory === cat.slug ? "bg-primary text-white" : "bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Precio</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price-mobile"
                      checked={priceRange[0] === 0 && priceRange[1] === 10000}
                      onChange={() => setPriceRange([0, 10000])}
                    />
                    <span className="ml-2">Todos</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price-mobile"
                      checked={priceRange[0] === 0 && priceRange[1] === 1500}
                      onChange={() => setPriceRange([0, 1500])}
                    />
                    <span className="ml-2">Hasta $1.500</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price-mobile"
                      checked={priceRange[0] === 1500 && priceRange[1] === 3000}
                      onChange={() => setPriceRange([1500, 3000])}
                    />
                    <span className="ml-2">$1.500 - $3.000</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price-mobile"
                      checked={priceRange[0] === 3000}
                      onChange={() => setPriceRange([3000, 10000])}
                    />
                    <span className="ml-2">Más de $3.000</span>
                  </label>
                </div>
              </div>
              <button
                onClick={() => setShowFilters(false)}
                className="w-full mt-6 bg-primary text-white py-3 rounded-lg"
              >
                Aplicar filtros
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductosPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Cargando...</p>
        </div>
      </div>
    }>
      <ProductosContent />
    </Suspense>
  );
}