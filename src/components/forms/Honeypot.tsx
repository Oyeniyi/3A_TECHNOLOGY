import React from 'react';

export interface HoneypotProps {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Invisible honeypot input field designed to trap automated spam bots.
 * Screen-reader and visually hidden; must remain empty for legitimate users.
 */
export function Honeypot({ name = 'hp_field', value, onChange }: HoneypotProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <label htmlFor={name}>Leave this field blank</label>
      <input
        type="text"
        id={name}
        name={name}
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
