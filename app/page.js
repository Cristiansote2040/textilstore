'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const slides = [
  {
    id: 1,
    title: "TEXTIL SHOP",
    subtitle: "DISTRIBUIDORES MAYORISTAS DE TELAS",
    description: "Encontrá las mejores telas para tus proyectos. Calidad premium al mejor precio.",
    image: "https://acdn-us.mitiendanube.com/stores/001/218/934/products/61880508-1cd3-493d-a611-9d549cc0e472-2a48f01365fc967f6f17678912404963-480-0.webp",
    bg: "linear-gradient(135deg, #1C1917 0%, #292524 100%)",
    cta: "Ver Catálogo"
  },
  {
    id: 2,
    title: "ENVÍOS A TODO EL PAÍS",
    subtitle: "MÁS DE 300 ARTÍCULOS EN STOCK",
    description: "Envíos gratis a CABA y GBA. Encontrá la tela perfecta para tu negocio.",
    image: "https://acdn-us.mitiendanube.com/stores/005/133/153/products/hero1-e7f67c14c6824a43bd17777327393130-480-0.webp",
    bg: "linear-gradient(135deg, #292524 0%, #44403C 100%)",
    cta: "Explorar Productos"
  },
  {
    id: 3,
    title: "TELAS DE CALIDAD",
    subtitle: "ESPECIALISTAS EN VENTA MAYORISTA",
    description: "Las mejores telas nacionales e importadas. Precio mayorista desde 10 metros.",
    image: "https://i0.wp.com/rapitelas.com/wp-content/uploads/2026/05/20.jpg?resize=576%2C1026&ssl=1",
    bg: "linear-gradient(135deg, #1C1917 0%, #78350F 100%)",
    cta: "Ver Telas"
  }
];

const banners = [
  { title: "Especial Navidad", image: "https://i0.wp.com/rapitelas.com/wp-content/uploads/2026/04/CORTINA-BLACKOUT-PERLA.jpeg?resize=300%2C300&ssl=1", link: "#" },
  { title: "Para sábanas y deco", image: "https://i0.wp.com/rapitelas.com/wp-content/uploads/2026/02/CUERINA-LINO00005.jpg?resize=300%2C300&ssl=1", link: "#" },
  { title: "Almohadones y manteles", image: "https://i0.wp.com/rapitelas.com/wp-content/uploads/2023/02/cortina-tropical.webp?resize=300%2C300&ssl=1", link: "#" },
  { title: "Para mesas de eventos", image: "https://acdn-us.mitiendanube.com/stores/001/218/934/products/18a48aa5-7929-43d5-a5ea-b2e3439eac61-871a2c33d2c8578a9f17727458064387-480-0.webp", link: "#" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.slice(0, 8);

  return (
    <div style={{ background: '#FEFCF9' }}>
      {/* Hero Carousel */}
      <section style={{
        position: 'relative',
        height: '85vh',
        minHeight: '600px',
        overflow: 'hidden',
        background: '#1C1917'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(184,134,11,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.08) 0%, transparent 50%)',
          zIndex: 0
        }} />
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: slide.bg,
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              opacity: 0.12
            }}>
              <img
                src={slide.image}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(40px)' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, rgba(28,25,23,0.95) 0%, rgba(28,25,23,0.7) 50%, transparent 100%)',
              zIndex: 1
            }} />

            <div style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 40px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10
            }}>
              <div style={{
                opacity: currentSlide === index ? 1 : 0,
                transform: currentSlide === index ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s ease 0.3s'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#B8860B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginBottom: '16px',
                  fontWeight: 600
                }}>
                  {slide.subtitle}
                </p>
                <h1 style={{
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '24px',
                  lineHeight: 1.1
                }}>
                  {slide.title}
                </h1>
                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '36px',
                  maxWidth: '480px',
                  lineHeight: 1.7
                }}>
                  {slide.description}
                </p>
                <Link
                  href="/productos"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 100%)',
                    color: 'white',
                    padding: '16px 36px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 25px rgba(184, 134, 11, 0.4)',
                    fontWeight: 600,
                    fontSize: '15px',
                    letterSpacing: '0.5px',
                    boxShadow: '0 8px 25px rgba(184, 134, 11, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {slide.cta}
                </Link>
              </div>

              <div style={{
                position: 'relative',
                opacity: currentSlide === index ? 1 : 0,
                transform: currentSlide === index ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 0.8s ease 0.5s'
              }}>
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
                }}>
                  <img
                    src={slide.image}
                    alt=""
                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Dots */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 20
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                background: currentSlide === index 
                  ? 'linear-gradient(135deg, #B8860B 0%, #D4AF37 100%)' 
                  : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>

{/* Wholesale Section */}
      <section style={{ background: 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #1C1917 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23B8860B\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(184,134,11,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-30%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#B8860B', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '20px', fontWeight: 600 }}>VENTA MAYORISTA</p>
          <h2 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px', fontWeight: 700, lineHeight: 1.2 }}>¿QUERÉS COMPRAR AL POR MAYOR?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.8 }}>
            Somos distribuidores mayoristas de telas de la mejor calidad. Trabajamos con precios exclusivos para retail y negocios de confección. Encontrá la mejor relación precio-calidad del mercado.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>📦</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>ENVÍOS A TODO EL PAÍS</div>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>💎</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>CALIDAD PREMIUM</div>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>💰</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>PRECIOS EXCLUSIVOS</div>
            </div>
          </div>
          <Link href="/contacto" style={{ 
            display: 'inline-block', 
            background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 100%)', 
            color: 'white', 
            padding: '18px 50px', 
            borderRadius: '50px', 
            fontSize: '16px', 
            fontWeight: 600, 
            textDecoration: 'none', 
            letterSpacing: '1px', 
            boxShadow: '0 8px 30px rgba(184,134,11,0.4)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(184,134,11,0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(184,134,11,0.4)';
            }}
          >
            CONTACTANOS
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ background: '#1C1917', padding: '16px 0 0 0' }}>
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '28px', fontWeight: 600, letterSpacing: '3px', margin: '0 0 16px 0', padding: 0 }}>CATEGORÍAS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' }}>
          {categories.slice(1, 5).map((cat, index) => {
            const catImages = [
              'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
              'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
              'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80',
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
            ];
            const catNames = ['CALZADO', 'REMERAS', 'TELAS', 'HOGAR'];
            const catIcons = ['👟', '👕', '🧶', '🏠'];
            return (
            <Link
              key={cat.id}
              href={`/productos?category=${cat.id}`}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                overflow: 'hidden',
                height: '180px',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseOver={(e) => {
                const img = e.currentTarget.querySelector('img');
                const overlay = e.currentTarget.querySelectorAll('div')[1];
                if(img) img.style.transform = 'scale(1.15)';
                if(overlay) overlay.style.background = 'rgba(184,134,11,0.4)';
              }}
              onMouseOut={(e) => {
                const img = e.currentTarget.querySelector('img');
                const overlay = e.currentTarget.querySelectorAll('div')[1];
                if(img) img.style.transform = 'scale(1)';
                if(overlay) overlay.style.background = 'rgba(0,0,0,0.5)';
              }}
            >
              <img 
                src={catImages[index]} 
                alt={cat.name}
                style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', transition: 'background 0.3s' }} />
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px', transition: 'transform 0.3s' }}>{catIcons[index]}</div>
                <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '2px', transition: 'text-shadow 0.3s' }}>{catNames[index]}</div>
              </div>
            </Link>
            ); })}
        </div>
      </section>

      {/* Banners Grid */}
      <section style={{ padding: '80px 40px', background: '#FAF8F5' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{
              fontSize: '13px',
              color: '#B8860B',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              marginBottom: '12px',
              fontWeight: 600
            }}>
              Colecciones especiales
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: '#1C1917',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}>
              DESTACADOS DEL MES
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {banners.map((banner, index) => (
              <Link
                key={index}
                href={banner.link}
                style={{
                  display: 'block',
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(0,0,0,0.04)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(184, 134, 11, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={banner.image}
                    alt={banner.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.08)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                    pointerEvents: 'none'
                  }} />
                </div>
                <div style={{ padding: '24px 20px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#1C1917', marginBottom: '8px' }}>{banner.title}</h3>
                  <span style={{ fontSize: '13px', color: '#B8860B', fontWeight: 600, letterSpacing: '0.05em' }}>DESCUBRIR →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <div>
            <h2 style={{ fontSize: '36px', marginBottom: '8px', color: '#1C1917' }}>Productos Destacados</h2>
            <p style={{ color: '#78716C' }}>Los más elegidos por nuestros clientes</p>
          </div>
          <Link href="/productos" style={{
            color: '#B8860B',
            fontWeight: 600,
            fontSize: '15px'
          }}>
            Ver todos los productos →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px'
        }}>
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
        padding: '80px 40px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '60px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚚</div>
            <h3 style={{ fontSize: '22px', marginBottom: '12px', fontWeight: 600 }}>ENVÍOS A TODO EL PAÍS</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>Despachamos a todas las provincias</p>
          </div>
          <div>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>💳</div>
            <h3 style={{ fontSize: '22px', marginBottom: '12px', fontWeight: 600 }}>3 CUOTAS SIN INTERÉS</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>Pagá en cuotas con tu tarjeta</p>
          </div>
          <div>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>⭐</div>
            <h3 style={{ fontSize: '22px', marginBottom: '12px', fontWeight: 600 }}>CALIDAD PREMIUM</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>Los mejores productos del mercado</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#1C1917' }}>SOMOS TEXTIL SHOP</h2>
        <p style={{ fontSize: '18px', color: '#78716C', lineHeight: '1.8', marginBottom: '30px' }}>
          Nos dedicamos a la distribución mayorista de telas. Encontrá las mejores telas nacionales e importadas para tu negocio.
        </p>
        <Link href="/contacto" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 100%)',
          color: 'white',
          padding: '14px 32px',
          borderRadius: '8px',
          fontWeight: 600,
          boxShadow: '0 8px 25px rgba(184, 134, 11, 0.3)'
        }}>
          Contactanos
        </Link>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          section > div:first-child, section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          section > div:nth-child(3) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          section > div:nth-child(3), section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}