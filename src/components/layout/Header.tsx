'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, User, Globe } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Globe className="w-4 h-4 mr-1" />
              Study Abroad Platform
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hover:text-blue-600">Login</Link>
            <Link href="/register" className="hover:text-blue-600">Register</Link>
            <Link href="/help" className="hover:text-blue-600">Help</Link>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            StudyAbroad+
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/universities" className="text-gray-700 hover:text-blue-600 font-medium">
              Universities
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium">
              Courses
            </Link>
            <Link href="/consultancies" className="text-gray-700 hover:text-blue-600 font-medium">
              Consultancies
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-blue-600 font-medium">
              Destinations
            </Link>
            <Link href="/scholarships" className="text-gray-700 hover:text-blue-600 font-medium">
              Scholarships
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-600 font-medium">
              Events
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Free Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/universities" className="text-gray-700 hover:text-blue-600">
                Universities
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-blue-600">
                Courses
              </Link>
              <Link href="/consultancies" className="text-gray-700 hover:text-blue-600">
                Consultancies
              </Link>
              <Link href="/destinations" className="text-gray-700 hover:text-blue-600">
                Destinations
              </Link>
              <Link href="/scholarships" className="text-gray-700 hover:text-blue-600">
                Scholarships
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600">
                Events
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
