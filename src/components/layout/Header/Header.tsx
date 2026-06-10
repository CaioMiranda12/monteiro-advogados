'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NavLink } from './NavLink'
import { MobileMenu } from './MobileMenu'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Áreas de Atuação', href: '/areas' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = isHome && !scrolled

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isTransparent
          ? 'bg-transparent'
          : 'bg-white border-b border-border'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className={`
            font-serif text-xl font-medium tracking-wide transition-colors duration-300
            ${isTransparent ? 'text-white' : 'text-navy'}
          `}
        >
          Monteiro <span className="text-gold">&</span> Advogados
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              transparent={isTransparent}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contato"
            className={`
              text-sm font-medium px-5 py-2.5 rounded-sm
              transition-colors duration-200
              ${isTransparent
                ? 'bg-gold text-navy hover:bg-gold-dark'
                : 'bg-navy text-gold hover:bg-navy-mid'
              }
            `}
          >
            Fale Conosco
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <MenuIcon transparent={isTransparent} />
        </button>

      </div>

      <MobileMenu
        items={navItems}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  )
}

function MenuIcon({ transparent }: { transparent: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke={transparent ? '#ffffff' : '#1A1A2E'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}