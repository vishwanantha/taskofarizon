import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Order Status</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Returns & Replacements</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Accessibility</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Login</Link></li>
            </ul>
          </div>

          {/* Shopping */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shopping</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">On Sale Items</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Our Brands</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Trade Customers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">View Your Cart</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Support</h3>
            <div className="space-y-2 text-gray-600">
              <p>Ref # R101718257</p>
              <p className="text-xl font-semibold">(855) 298-4922</p>
              <div className="mt-4">
                <p className="font-semibold">Ready to Order?</p>
                <p>Talk with our Sales Associates</p>
                <p>Monday - Friday: 6:00 a.m. to 6:00 p.m. PST</p>
                <p>Saturday - Sunday: 8:00 a.m. to 5:00 p.m. PST</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Already Order?</p>
                <Link href="#" className="text-blue-600 hover:text-blue-800">File a Return or Replacement here.</Link>
                <br />
                <Link href="#" className="text-blue-600 hover:text-blue-800">View Your Order Status here.</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-sm text-gray-600">© 2024 PatioProductsUSA. All Rights Reserved.</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 flex justify-center space-x-4">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bCvgv75jV6ytsSarVatOSp1eG7lxhN.png" 
            alt="Payment Methods" 
            width={400} 
            height={40} 
            className="h-10 object-contain"
          />
        </div>
      </div>
    </footer>
  )
}

