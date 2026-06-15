import { Product, Category } from "@/types";

export const categories: Category[] = [
  { id: "1", name: "Hamburguesas", slug: "hamburguesas", image: "/images/categorias/hamburguesas.jpg" },
  { id: "2", name: "Pizzas", slug: "pizzas", image: "/images/categorias/pizzas.jpg" },
  { id: "3", name: "Bebidas", slug: "bebidas", image: "/images/categorias/bebidas.jpg" },
  { id: "4", name: "Postres", slug: "postres", image: "/images/categorias/postres.jpg" },
  { id: "5", name: "Ensaladas", slug: "ensaladas", image: "/images/categorias/ensaladas.jpg" },
  { id: "6", name: "Acompañamientos", slug: "acompanamientos", image: "/images/categorias/acompanamientos.jpg" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Hamburguesa Clásica",
    slug: "hamburguesa-clasica",
    price: 2500,
    description: "Deliciosa hamburguesa con carne 100% de res, queso cheddar, lechuga, tomate y cebolla.",
    category: "hamburguesas",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    inStock: true,
    featured: true,
    sku: "HAM-001"
  },
  {
    id: "2",
    name: "Hamburguesa Deluxe",
    slug: "hamburguesa-deluxe",
    price: 3200,
    originalPrice: 3800,
    description: "Doble carne, doble queso, bacon crujiente, huevo frito y salsa especial.",
    category: "hamburguesas",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    inStock: true,
    featured: true,
    sku: "HAM-002"
  },
  {
    id: "3",
    name: "Hamburguesa Vegetariana",
    slug: "hamburguesa-vegetariana",
    price: 2800,
    description: "Hamburguesa de lentejas y verduras con aguacate y rúcula.",
    category: "hamburguesas",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400",
    inStock: true,
    sku: "HAM-003"
  },
  {
    id: "4",
    name: "Pizza Margherita",
    slug: "pizza-margherita",
    price: 3500,
    description: "Salsa de tomate, mozzarella fresca, albahaca y aceite de oliva.",
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
    inStock: true,
    featured: true,
    sku: "PIZ-001"
  },
  {
    id: "5",
    name: "Pizza Pepperoni",
    slug: "pizza-pepperoni",
    price: 4200,
    description: "Mozzarella, pepperoni fresco y orégano italiano.",
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
    inStock: true,
    sku: "PIZ-002"
  },
  {
    id: "6",
    name: "Pizza Cuatro Quesos",
    slug: "pizza-cuatro-quesos",
    price: 4800,
    description: "Mozzarella, gorgonzola, parmesano y ricota.",
    category: "pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    inStock: true,
    sku: "PIZ-003"
  },
  {
    id: "7",
    name: "Gaseosa Cola 500ml",
    slug: "gaseosa-cola",
    price: 800,
    description: "Refrescante gaseosa sabor cola.",
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
    inStock: true,
    sku: "BEB-001"
  },
  {
    id: "8",
    name: "Jugo Natural",
    slug: "jugo-natural",
    price: 1200,
    description: "Jugo exprimido de naranja natural.",
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
    inStock: true,
    sku: "BEB-002"
  },
  {
    id: "9",
    name: "Agua Mineral 500ml",
    slug: "agua-mineral",
    price: 500,
    description: "Agua mineral sin gas.",
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400",
    inStock: true,
    sku: "BEB-003"
  },
  {
    id: "10",
    name: "Flan de Caramelo",
    slug: "flan-caramelo",
    price: 1500,
    description: "Flan casero con salsa de caramelo y crema.",
    category: "postres",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400",
    inStock: true,
    featured: true,
    sku: "POS-001"
  },
  {
    id: "11",
    name: "Brownie con Helado",
    slug: "brownie-helado",
    price: 1800,
    description: "Brownie de chocolate con bola de helado de vainilla.",
    category: "postres",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?w=400",
    inStock: true,
    sku: "POS-002"
  },
  {
    id: "12",
    name: "Ensalada César",
    slug: "ensalada-cesar",
    price: 2200,
    description: "Lechuga romana, crutones, parmesano y aderezo César.",
    category: "ensaladas",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400",
    inStock: true,
    sku: "ENS-001"
  },
  {
    id: "13",
    name: "Papas Fritas",
    slug: "papas-fritas",
    price: 1000,
    description: "Papas fritas crujientes con sal y especias.",
    category: "acompanamientos",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
    inStock: true,
    featured: true,
    sku: "ACO-001"
  },
  {
    id: "14",
    name: "Aros de Cebolla",
    slug: "aros-cebolla",
    price: 1200,
    description: "Aros de cebolla empanizados y crujientes.",
    category: "acompanamientos",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400",
    inStock: true,
    sku: "ACO-002"
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}