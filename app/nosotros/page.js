import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '120px 40px',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', opacity: 0, animation: 'fadeIn 0.6s ease-out forwards' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '24px' }}>
            Sobre Nosotros
          </h1>
          <p style={{ fontSize: '18px', color: '#888', lineHeight: '1.8' }}>
            Somos una empresa dedicada a ofrecer productos textiles de la más alta calidad,
            con años de experiencia en el sector y un compromiso inquebrantable con la satisfacción del cliente.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '120px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px'
        }}>
          <div style={{ opacity: 0, animation: 'fadeIn 0.6s ease-out forwards' }}>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '20px' }}>🎯</span>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>Nuestra Misión</h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px' }}>
              Brindar a nuestros clientes acceso a productos textiles de primera calidad,
              ofreciendo una experiencia de compra excepcional y un servicio al cliente personalizado.
              Nos esforzamos por mantener los más altos estándares de calidad en cada uno de nuestros productos.
            </p>
          </div>

          <div style={{ opacity: 0, animation: 'fadeIn 0.6s ease-out 0.2s forwards' }}>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '20px' }}>👁️</span>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>Nuestra Visión</h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px' }}>
              Convertirnos en la tienda de referencia para productos textiles en Argentina,
              expandiendo nuestra presencia nacional mientras mantenemos la calidad y el servicio que nos caracteriza.
              Buscamos innovar constantemente y adaptarnos a las tendencias del mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '120px 40px', background: '#F5F5F5' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', opacity: 0, animation: 'fadeIn 0.6s ease-out forwards' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>Nuestros Valores</h2>
            <p style={{ color: '#888', fontSize: '16px' }}>Los pilares que guían nuestro trabajo diario</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px'
          }}>
            {[
              { icon: '💎', title: 'Calidad', desc: 'Solo trabajamos con productos de primera línea' },
              { icon: '🤝', title: 'Confianza', desc: 'Construimos relaciones duraderas con nuestros clientes' },
              { icon: '⚡', title: 'Rapidez', desc: 'Entregas eficientes a todo el país' },
              { icon: '💬', title: 'Atención', desc: 'Soporte personalizado en cada etapa' }
            ].map((value, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out ${0.2 + index * 0.15}s forwards`
                }}
              >
                <span style={{ fontSize: '40px', display: 'block', marginBottom: '20px' }}>{value.icon}</span>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>{value.title}</h3>
                <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '120px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          textAlign: 'center'
        }}>
          {[
            { number: '5+', label: 'Años de experiencia' },
            { number: '1000+', label: 'Clientes satisfechos' },
            { number: '500+', label: 'Productos' },
            { number: '24/7', label: 'Soporte' }
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${0.2 + index * 0.1}s forwards`
              }}
            >
              <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '8px' }}>{stat.number}</div>
              <div style={{ color: '#888', fontSize: '14px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 40px', background: '#2D2D2D', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', color: 'white', opacity: 0, animation: 'fadeIn 0.6s ease-out forwards' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '20px' }}>
            ¿Listo para conocernos?
          </h2>
          <p style={{ color: '#888', fontSize: '16px', marginBottom: '30px' }}>
            Explora nuestro catálogo y descubrí la mejor selección de productos textiles
          </p>
          <Link href="/productos" className="btn-primary" style={{ display: 'inline-block', background: 'white', color: '#1A1A1A' }}>
            Ver Productos
          </Link>
        </div>
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
          section > div:nth-child(4) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          section > div:nth-child(3), section > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}