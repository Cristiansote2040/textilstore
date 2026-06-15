'use client';

import { useCart } from '@/context/CartContext';

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="toast">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polyline points="20,6 9,17 4,12" />
        </svg>
        <span style={{ fontSize: '14px', fontWeight: '500' }}>{toast}</span>
      </div>
    </div>
  );
}