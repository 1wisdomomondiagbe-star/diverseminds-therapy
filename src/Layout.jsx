import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, MessageCircle } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Organisation name strip */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-end">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-right leading-snug">
            DiverseMinds Special Education Needs &amp; Consult Ltd.
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                DiverseMinds
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Services
              </a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                FAQ
              </a>
              <Link to={createPageUrl('Blog')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Blog
              </Link>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                    Contact us
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Get in touch</h4>
                    <a
                      href="mailto:diversemindsfoundation@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
                    >
                      <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Email us</div>
                        <div className="text-xs text-gray-500">Send us a message</div>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/2348168349969"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">WhatsApp</div>
                        <div className="text-xs text-gray-500">Chat with us</div>
                      </div>
                    </a>
                  </div>
                </PopoverContent>
              </Popover>
              <Button 
                onClick={() => navigate('/GetSupport')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2"
                >
                  Services
                </a>
                <a 
                  href="#faq" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2"
                >
                  FAQ
                </a>
                <Link
                  to={createPageUrl('Blog')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2"
                >
                  Blog
                </Link>
                <div className="px-2 space-y-2">
                  <p className="text-sm font-medium text-gray-900">Contact us</p>
                  <a
                    href="mailto:diversemindsfoundation@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-sm text-gray-700">Email us</span>
                  </a>
                  <a
                    href="https://wa.me/2348168349969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="bg-green-100 p-2 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">WhatsApp</span>
                  </a>
                </div>
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/GetSupport');
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
