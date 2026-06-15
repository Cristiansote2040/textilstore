'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultColor = product.colors?.[0] || 'Default';
    const defaultSize = product.sizes?.[0] || null;
    addToCart(product, defaultColor, defaultSize, 1);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/producto/${product.id}`}>
      <div
        className="product-card"
        style={{
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid transparent'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(184, 134, 11, 0.15)';
          e.currentTarget.style.borderColor = '#B8860B';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
          e.currentTarget.style.borderColor = 'transparent';
        }}
      >
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '280px',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.08)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />

          {discount > 0 && (
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
              color: 'white',
              padding: '8px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
            }}>
              -{discount}% OFF
            </div>
          )}

          {!product.inStock && (
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              Sin stock
            </div>
          )}

          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.3s ease'
            }}
            className="add-btn"
          >
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              style={{
                background: '#2D2D2D',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: product.inStock ? 'pointer' : 'not-allowed',
                opacity: product.inStock ? 1 : 0.5
              }}
            >
              Agregar
            </button>
          </div>
        </div>

        <div style={{ padding: '20px' }}>
          <p style={{
            fontSize: '11px',
            color: '#888',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '8px'
          }}>
            {product.category.replace('-', ' ')}
          </p>

          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '12px',
            lineHeight: '1.4',
            color: '#1A1A1A'
          }}>
            {product.name}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#1A1A1A'
            }}>
              ${product.price.toLocaleString('es-AR')}
            </span>
            {product.originalPrice && (
              <span style={{
                fontSize: '14px',
                color: '#888',
                textDecoration: 'line-through'
              }}>
                ${product.originalPrice.toLocaleString('es-AR')}
              </span>
            )}
          </div>

          {product.colors && product.colors.length > 0 && (
            <div style={{
              display: 'flex',
              gap: '6px',
              marginTop: '16px'
            }}>
              {product.colors.slice(0, 4).map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: getColorHex(color),
                    border: '1px solid #eee'
                  }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span style={{ fontSize: '12px', color: '#888' }}>
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
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