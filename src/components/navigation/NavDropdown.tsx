import React from 'react';
import Link from 'next/link';
import { NavItem } from '@/types/config';

export interface NavDropdownProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function NavDropdown({ items, isOpen, onClose }: NavDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      role="menu"
      className="absolute top-full left-0 z-50 mt-2 w-72 rounded-lg border border-brand-border bg-brand-white p-2 shadow-lg"
    >
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            onClick={onClose}
            className="block rounded-md p-3 text-sm text-brand-charcoal transition-colors hover:bg-brand-gray hover:text-brand-navy"
          >
            <div className="font-semibold">{item.title}</div>
            {item.description && <p className="mt-0.5 text-xs text-gray-500">{item.description}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
