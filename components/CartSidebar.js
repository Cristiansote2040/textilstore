'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartSidebar() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  if (!isOpen) return null;

  const total = getCartTotal();
  const count = getCartCount();

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 200,
          opacity: 0,
          animation: 'fadeIn 0.3s ease-out forwards'
        }}
      />

      <div className="cart-sidebar animate-slide-in" style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '420px',
        maxWidth: '100vw',
        background: 'white',
        zIndex: 201,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          padding: '24px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600' }}>
            Carrito ({count})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1.5" style={{ marginBottom: '20px' }}>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p style={{ color: '#888', fontSize: '14px' }}>El carrito está vacío</p>
              <Link
                href="/productos"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  color: '#2D2D2D',
                  fontSize: '14px',
                  textDecoration: 'underline'
                }}
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '16px',
                    background: '#FAFAFA',
                    borderRadius: '8px'
                  }}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                      {item.product.name}
                    </h4>
                    <p style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>
                      {item.color} {item.size && `/ ${item.size}`}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '24px',
                            height: '24px',
                            border: '1px solid #ddd',
                            background: 'white',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '14px', width: '20px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '24px',
                            height: '24px',
                            border: '1px solid #ddd',
                            background: 'white',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}
                        >
                          +
                        </button>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '600' }}>
                        ${(item.product.price * item.quantity).toLocaleString('es-AR')}
                      </span>
                    </div>
                  </div>
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3,6 5,6 21,6" />
                      <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid #eee',
            background: '#FAFAFA'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '14px', color: '#888' }}>Total</span>
              <span style={{ fontSize: '20px', fontWeight: '700' }}>
                ${total.toLocaleString('es-AR')}
              </span>
            </div>
            <Link
              href="/carrito"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '16px',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              Ver Carrito
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .cart-sidebar {
          animation: slideInRight 0.3s ease-out;
        }
        @media (max-width: 480px) {
          .cart-sidebar {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}