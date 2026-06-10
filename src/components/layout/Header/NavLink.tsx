'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  transparent: boolean
  children: React.ReactNode
}

export function NavLink({ href, transparent, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={`
        relative text-sm font-medium transition-colors duration-200
        after:absolute after:bottom-0 after:left-0 after:h-px after:w-0
        after:bg-gold after:transition-all after:duration-200
        hover:after:w-full
        ${isActive ? 'after:w-full' : ''}
        ${transparent
          ? 'text-white/80 hover:text-white'
          : 'text-gray hover:text-navy'
        }
        ${isActive && !transparent ? 'text-navy' : ''}
      `}
    >
      {children}
    </Link>
  )
}