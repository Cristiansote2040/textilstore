import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#1A1A1A',
      color: 'white',
      padding: '80px 40px 40px',
      marginTop: '120px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '60px',
          marginBottom: '60px'
        }}>
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '20px', fontFamily: 'Playfair Display, serif' }}>
              TEXTIL<span style={{ color: '#888' }}>STORE</span>
            </h3>
            <p style={{ color: '#888', lineHeight: '1.8', fontSize: '14px' }}>
              Tu destino confiable para moda y textiles de calidad. Nos dedicamos a ofrecerte los mejores productos con atención personalizada.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/productos" style={{ color: '#888', fontSize: '14px', transition: 'color 0.2s' }}>Productos</Link></li>
              <li><Link href="/nosotros" style={{ color: '#888', fontSize: '14px', transition: 'color 0.2s' }}>Nosotros</Link></li>
              <li><Link href="/contacto" style={{ color: '#888', fontSize: '14px', transition: 'color 0.2s' }}>Contacto</Link></li>
              <li><Link href="/carrito" style={{ color: '#888', fontSize: '14px', transition: 'color 0.2s' }}>Carrito</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Categorías
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/productos?category=calzado" style={{ color: '#888', fontSize: '14px' }}>Calzado</Link></li>
              <li><Link href="/productos?category=remeras" style={{ color: '#888', fontSize: '14px' }}>Remeras</Link></li>
              <li><Link href="/productos?category=telas-punto" style={{ color: '#888', fontSize: '14px' }}>Telas de Punto</Link></li>
              <li><Link href="/productos?category=hogar" style={{ color: '#888', fontSize: '14px' }}>Hogar</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Contacto
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ color: '#888', fontSize: '14px' }}>
                📍 Av. Principal 1234, Buenos Aires
              </li>
              <li style={{ color: '#888', fontSize: '14px' }}>
                📞 +54 9 11 2345-6789
              </li>
              <li style={{ color: '#888', fontSize: '14px' }}>
                ✉️ contacto@textilstore.com
              </li>
              <li style={{ color: '#888', fontSize: '14px' }}>
                📷 @textilstore
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            © 2026 TextilStore. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#666', fontSize: '14px' }}>Términos</a>
            <a href="#" style={{ color: '#666', fontSize: '14px' }}>Privacidad</a>
            <a href="#" style={{ color: '#666', fontSize: '14px' }}>Cookies</a>
          </div>
        </div>
      </div>

      <style>{`
        footer a:hover {
          color: white !important;
        }
        @media (max-width: 768px) {
          footer > div > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}