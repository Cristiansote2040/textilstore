'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { getCartCount, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = getCartCount();

  return (
    <>
      {/* Marquee Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #1C1917 0%, #292524 50%, #1C1917 100%)',
        color: 'white',
        padding: '10px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 101
      }}>
        <div style={{
          display: 'flex',
          animation: 'marquee 20s linear infinite',
          whiteSpace: 'nowrap'
        }}>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🚚 ENVÍOS A TODO EL PAÍS
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🎉 ENVÍOS GRÁTIS DESDE $60.000
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            💳 3 CUOTAS SIN INTERÉS
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📞 ATENCIÓN: LUN-VIE 8:30-13HS
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🏭 MAYORISTA DE TELAS EN ROLLO
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🚚 ENVÍOS A TODO EL PAÍS
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🎉 ENVÍOS GRÁTIS DESDE $60.000
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            💳 3 CUOTAS SIN INTERÉS
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📞 ATENCIÓN: LUN-VIE 8:30-13HS
          </span>
          <span style={{ marginRight: '60px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🏭 MAYORISTA DE TELAS EN ROLLO
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        style={{
          position: 'fixed',
          top: '40px',
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(254, 252, 249, 0.98)' : 'rgba(254, 252, 249, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(184, 134, 11, 0.1)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '16px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <h1 style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#1C1917',
                letterSpacing: '-0.02em',
                fontFamily: 'Playfair Display, serif'
              }}>
                TEXTIL<span style={{ color: '#B8860B' }}>SHOP</span>
              </h1>
            </Link>

            {/* Navigation */}
            <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
              <Link href="/productos" className="nav-link">
                Productos
              </Link>
              <Link href="/nosotros" className="nav-link">
                Nosotros
              </Link>
              <Link href="/contacto" className="nav-link">
                Contacto
              </Link>
            </nav>

            {/* Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Search */}
              <button style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: '#1C1917'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '8px',
                  color: '#1C1917'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: 'linear-gradient(135deg, #B8860B 0%, #8B6914 100%)',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: '700',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(184, 134, 11, 0.4)'
                  }}>
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  display: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px'
                }}
                className="menu-toggle"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1917" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <style>{`
          .nav-link {
            position: relative;
            font-size: 14px;
            font-weight: 600;
            color: #1C1917;
            text-decoration: none;
            transition: color 0.2s ease;
            letter-spacing: 0.3px;
          }
          .nav-link:hover {
            color: #B8860B;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #B8860B, #D4AF37);
            transition: width 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 768px) {
            .menu-toggle {
              display: block !important;
            }
            nav {
              display: none !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}