import React from 'react';

const Logo = ({ size = 140 }) => (
  <div style={{ width: size, height: size }} className="flex items-center justify-center">
    <img
      src="/images/fluxbit 4.png"
      width={size}
      height={size}
      alt="Fluxbit Logo"
      style={{ objectFit: 'contain', width: size, height: size }}
    />
  </div>
);

export default Logo; 