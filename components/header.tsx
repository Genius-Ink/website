'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Products', href: '#products', hasDropdown: true },
    { name: 'Company', href: '#company', hasDropdown: true },
    { name: 'Use Cases', href: '#use-cases', hasDropdown: true },
    { name: 'Tools', href: '#tools', hasDropdown: true },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-primary-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-orange to-accent-coral rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="font-display font-bold text-2xl text-primary-900">GeniusRails</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-primary-700 hover:text-primary-900 transition-colors font-medium flex items-center gap-1 group"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#login"
              className="px-6 py-2.5 text-primary-900 hover:text-accent-orange transition-colors font-semibold"
            >
              Sign In
            </Link>
            <Link href="#beta" className="btn-primary">
              Create Account
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-primary-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-primary-700 hover:text-primary-900 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-primary-100">
              <Link href="#login" className="text-primary-900 font-semibold py-2">
                Sign In
              </Link>
              <Link href="#beta" className="btn-primary justify-center">
                Create Account
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}