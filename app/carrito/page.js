'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CarritoPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  if (cart.length === 0) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ opacity: 0, animation: 'fadeIn 0.6s ease-out forwards' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1.5" style={{ marginBottom: '30px' }}>
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>El carrito está vacío</h1>
          <p style={{ color: '#888', marginBottom: '30px' }}>
            Agregá productos para continuar con tu compra
          </p>
          <Link href="/productos" className="btn-primary" style={{ display: 'inline-block' }}>
            Ver Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        marginBottom: '40px',
        opacity: 0,
        animation: 'fadeIn 0.5s ease-out forwards'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px' }}>Carrito</h1>
        <p style={{ color: '#888' }}>{cart.length} producto{cart.length !== 1 ? 's' : ''} en tu carrito</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>
        {/* Cart Items */}
        <div style={{ opacity: 0, animation: 'fadeIn 0.5s ease-out 0.1s forwards' }}>
          {cart.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                gap: '24px',
                padding: '24px',
                background: 'white',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #eee',
                opacity: 0,
                animation: `fadeIn 0.4s ease-out ${0.2 + index * 0.1}s forwards`
              }}
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{item.product.name}</h3>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#888',
                      padding: '4px'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3,6 5,6 21,6" />
                      <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" />
                    </svg>
                  </button>
                </div>

                <p style={{ fontSize: '14px', color: '#888', marginBottom: '16px' }}>
                  {item.color} {item.size && `/ ${item.size}`}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        border: '1px solid #ddd',
                        background: 'white',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                      }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: '16px', fontWeight: '600', minWidth: '30px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        border: '1px solid #ddd',
                        background: 'white',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                      }}
                    >
                      +
                    </button>
                  </div>

                  <span style={{ fontSize: '20px', fontWeight: '700' }}>
                    ${(item.product.price * item.quantity).toLocaleString('es-AR')}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            style={{
              background: 'none',
              border: 'none',
              color: '#888',
              fontSize: '14px',
              cursor: 'pointer',
              marginTop: '20px',
              textDecoration: 'underline'
            }}
          >
            Vaciar carrito
          </button>
        </div>

        {/* Summary */}
        <div style={{
          opacity: 0,
          animation: 'fadeIn 0.5s ease-out 0.3s forwards'
        }}>
          <div style={{
            background: '#F5F5F5',
            borderRadius: '12px',
            padding: '30px',
            position: 'sticky',
            top: '120px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>Resumen</h3>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#888' }}>Subtotal</span>
                <span>${total.toLocaleString('es-AR')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#888' }}>Envío</span>
                <span style={{ color: '#4CAF50' }}>Gratis</span>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #ddd',
              paddingTop: '16px',
              marginTop: '16px',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '18px', fontWeight: '600' }}>Total</span>
                <span style={{ fontSize: '24px', fontWeight: '700' }}>
                  ${total.toLocaleString('es-AR')}
                </span>
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%', padding: '16px' }}>
              Finalizar Compra
            </button>

            <p style={{ fontSize: '12px', color: '#888', textAlign: 'center', marginTop: '16px' }}>
              Simulation only - No real payment
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}