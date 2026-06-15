'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '120px 40px',
        background: 'linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', opacity: 0, animation: 'fadeIn 0.6s ease-out forwards' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '24px' }}>
            Contacto
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
            ¿Tenés alguna consulta? Estamos aquí para ayudarte.
            Escribinos y te respondemos a la brevedad.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section style={{ padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          {/* Contact Info */}
          <div style={{ opacity: 0, animation: 'fadeIn 0.6s ease-out forwards' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '40px' }}>
              Información de Contacto
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#F5F5F5',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>📍</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Dirección</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>
                    Av. Principal 1234, Buenos Aires, Argentina
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#F5F5F5',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>📞</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Teléfono</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>+54 9 11 2345-6789</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#F5F5F5',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>✉️</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Email</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>contacto@textilstore.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#F5F5F5',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>📷</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Instagram</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>@textilstore</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#F5F5F5',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '24px' }}>💬</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>WhatsApp</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>+54 9 11 2345-6789</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div style={{
              marginTop: '40px',
              background: '#F5F5F5',
              borderRadius: '12px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p style={{ color: '#888' }}>Mapa de ubicación</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ opacity: 0, animation: 'fadeIn 0.6s ease-out 0.2s forwards' }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid #eee'
            }}>
              <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px' }}>
                Envianos un mensaje
              </h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid #eee',
                      borderRadius: '4px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2D2D2D'}
                    onBlur={(e) => e.target.style.borderColor = '#eee'}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #eee',
                        borderRadius: '4px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #eee',
                        borderRadius: '4px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid #eee',
                      borderRadius: '4px',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '16px' }}>
                  Enviar Mensaje
                </button>

                {submitted && (
                  <div style={{
                    padding: '16px',
                    background: '#E8F5E9',
                    borderRadius: '4px',
                    color: '#4CAF50',
                    textAlign: 'center',
                    fontSize: '14px'
                  }}>
                    ✅ Mensaje enviado correctamente
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}