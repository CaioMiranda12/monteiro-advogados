'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface MobileMenuProps {
  items: { label: string; href: string }[]
  open: boolean
  onClose: () => void
}

export function MobileMenu({ items, open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-navy flex flex-col">
      <div className="flex items-center justify-between px-6 h-20">
        <span className="font-serif text-xl font-medium text-white">
          Monteiro <span className="text-gold">&</span> Advogados
        </span>
        <button onClick={onClose} aria-label="Fechar menu" className="p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M6 18L18 6"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col px-6 pt-8 gap-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="font-serif text-2xl font-light text-white/80 hover:text-white transition-colors border-b border-white/10 pb-6"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-6 mt-8">
        <Link
          href="/contato"
          onClick={onClose}
          className="block text-center bg-gold text-navy font-medium py-4 rounded-sm"
        >
          Fale Conosco
        </Link>
      </div>
    </div>
  )
}