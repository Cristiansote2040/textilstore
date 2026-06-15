'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function ProductPage({ params }) {
  const { id } = use(params);
  const product = products.find(p => p.id === parseInt(id));
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Producto no encontrado</h1>
        <Link href="/productos" style={{ color: '#2D2D2D', textDecoration: 'underline' }}>
          Volver a productos
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Breadcrumb */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '40px',
        fontSize: '14px',
        color: '#888',
        opacity: 0,
        animation: 'fadeIn 0.5s ease-out forwards'
      }}>
        <Link href="/" style={{ color: '#888' }}>Inicio</Link>
        <span>/</span>
        <Link href="/productos" style={{ color: '#888' }}>Productos</Link>
        <span>/</span>
        <span style={{ color: '#1A1A1A' }}>{product.name}</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start'
      }}>
        {/* Image */}
        <div style={{
          position: 'sticky',
          top: '120px',
          opacity: 0,
          animation: 'fadeIn 0.6s ease-out forwards'
        }}>
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
            />

            {discount > 0 && (
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: '#E53935',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                -{discount}% OFF
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div style={{ opacity: 0, animation: 'fadeIn 0.6s ease-out 0.2s forwards' }}>
          <p style={{
            fontSize: '14px',
            color: '#888',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '12px'
          }}>
            {product.category.replace('-', ' ')}
          </p>

          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            {product.name}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '30px'
          }}>
            <span style={{ fontSize: '32px', fontWeight: '700' }}>
              ${product.price.toLocaleString('es-AR')}
            </span>
            {product.originalPrice && (
              <>
                <span style={{
                  fontSize: '20px',
                  color: '#888',
                  textDecoration: 'line-through'
                }}>
                  ${product.originalPrice.toLocaleString('es-AR')}
                </span>
                <span style={{
                  background: '#E8F5E9',
                  color: '#4CAF50',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Ahorrás ${(product.originalPrice - product.price).toLocaleString('es-AR')}
                </span>
              </>
            )}
          </div>

          <p style={{
            color: '#666',
            lineHeight: '1.8',
            marginBottom: '40px'
          }}>
            {product.description}
          </p>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                Color: <span style={{ fontWeight: '400', color: '#888' }}>{selectedColor}</span>
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: selectedColor === color ? '2px solid #2D2D2D' : '2px solid #eee',
                      background: getColorHex(color),
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      transform: selectedColor === color ? 'scale(1.1)' : 'scale(1)'
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                Talle: <span style={{ fontWeight: '400', color: '#888' }}>{selectedSize}</span>
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      minWidth: '50px',
                      padding: '10px 16px',
                      border: selectedSize === size ? '1px solid #2D2D2D' : '1px solid #eee',
                      background: selectedSize === size ? '#2D2D2D' : 'white',
                      color: selectedSize === size ? 'white' : '#1A1A1A',
                      borderRadius: '4px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Cantidad
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #eee',
                  background: 'white',
                  borderRadius: '4px',
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
              >
                -
              </button>
              <span style={{ fontSize: '18px', fontWeight: '600', width: '40px', textAlign: 'center' }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #eee',
                  background: 'white',
                  borderRadius: '4px',
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="btn-primary"
              style={{
                flex: 1,
                padding: '18px 40px',
                fontSize: '16px',
                cursor: product.inStock ? 'pointer' : 'not-allowed',
                opacity: product.inStock ? 1 : 0.5
              }}
            >
              {product.inStock ? 'Agregar al Carrito' : 'Sin Stock'}
            </button>
          </div>

          {/* Product Info */}
          <div style={{
            borderTop: '1px solid #eee',
            paddingTop: '30px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Categoría</p>
                <p style={{ fontSize: '14px', fontWeight: '500' }}>{product.category.replace('-', ' ')}</p>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Disponibilidad</p>
                <p style={{ fontSize: '14px', fontWeight: '500', color: product.inStock ? '#4CAF50' : '#E53935' }}>
                  {product.inStock ? 'En stock' : 'Sin stock'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="position: sticky"] {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

function getColorHex(colorName) {
  const colors = {
    'Negro': '#1A1A1A',
    'Blanco': '#FFFFFF',
    'Gris': '#888888',
    'Azul Marino': '#1A3A5C',
    'Azul': '#2563EB',
    'Coco': '#C4A77D',
    'Marrón': '#8B4513',
    'Chocolate': '#5D4037',
    'Crudo': '#D4C4A8',
    'Beige': '#F5F5DC',
    'Rosa Palido': '#FFD1DC',
    'Off White': '#FAF9F6',
    'Manteca': '#F5E6D3',
    'Obispo': '#7D3C5E',
    'Latte': '#C8A685',
    'Verde Botella': '#228B22',
    'Verde Musgo': '#4A5D23',
    'Verde': '#22C55E',
    'Oliva': '#808000',
    'Amatista': '#9966CC',
    'Frambuesa': '#E91E63',
    'Vison': '#BFA98A',
    'Lacre': '#D4A574',
    'Beige Claro': '#E8DCC4',
    'Natural': '#F5DEB3',
    'Light Pink': '#FFB6C1',
    'Magenta': '#FF00FF',
    'Ginger': '#FF7F50',
    'Amarillo Pastel': '#FFFACD',
    'True Navy': '#1A2B4C',
    'Dark Brick': '#8B3A3A',
    'Brown': '#8B4513',
    'Stone': '#928E85',
    'Dusty Green': '#9CAF88',
    'Aura': '#B4A7D6',
    'Sand': '#C2B280',
    'Glass': '#E8E4E1',
    'Marquise': '#4A4A4A',
    'Gris Perla': '#B8B8B8',
    'Moonlight': '#E2DFD2',
    'Nuez': '#7B5E57',
    'Mauve': '#E0B0FF',
    'Feather Gray': '#C4C4C4',
    'Iron': '#434B4D',
    'Dusk': '#4B4E6D',
    'Volcan': '#4A3728',
    'Deep Lake': '#1E4D5B',
    'Brush': '#C4A77D',
    'Fairy Tale': '#FFE4E1',
    'Caramel': '#D2691E',
    'Palta': '#9ACD32',
    'Humo': '#707070',
    'Tabaco': '#8B5A2B',
    'Rosa Nostalgic': '#D4A5A5',
    'Orchid': '#DA70D6',
    'Ocre Oscuro': '#CC7722',
    'Azalea': '#F747B6',
    'Green Leaves': '#4A7C59',
    'Turquoise': '#40E0D0',
    'Turttle': '#5F8575',
    'Perla': '#EAE0C8'
  };
  return colors[colorName] || '#888';
}