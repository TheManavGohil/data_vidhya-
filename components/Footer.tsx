import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white py-16 border-t border-b border-[#1A1A1A]">
      <div className="max-w-8xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div>
                <Image src="/images/logo.svg" alt="Datavidhya" width={30} height={30} />
              </div>
              <span className={`${inter.className} text-white text-2xl font-medium`}>
                Datavidhya
              </span>
            </div>
          </div>

          {/* Support Column */}
          <div className="col-span-1">
            <h3 className={`${inter.className} text-white text-lg font-medium mb-6`}>
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/faq" 
                  className={`${inter.className} text-[#808080] hover:text-white transition-colors`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`${inter.className} text-[#808080] hover:text-white transition-colors`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h3 className={`${inter.className} text-white text-lg font-medium mb-6`}>
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/platform" 
                  className={`${inter.className} text-[#808080] hover:text-white transition-colors`}
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className={`${inter.className} text-[#808080] hover:text-white transition-colors`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/combo-pack" 
                  className={`${inter.className} text-[#808080] hover:text-white transition-colors`}
                >
                  Combo Pack
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses" 
                  className={`${inter.className} text-[#808080] hover:text-white transition-colors`}
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1">
            <h3 className={`${inter.className} text-white text-lg font-medium mb-6`}>
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className={`${inter.className} text-[#808080] hover:text-white transition-colors`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service" 
                  className={`${inter.className} text-[#808080] hover:text-white transition-colors`}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center w-full ">
          {/* Social Media Icons */}
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <Link 
              href="https://twitter.com" 
              className="text-[#808080] hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link 
              href="https://instagram.com" 
              className="text-[#808080] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link 
              href="https://youtube.com" 
              className="text-[#808080] hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
            <Link 
              href="https://linkedin.com" 
              className="text-[#808080] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>

          {/* Copyright */}
          <div className={`${inter.className} text-[#808080] text-sm`}>
            © 2025 Datavidhya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
