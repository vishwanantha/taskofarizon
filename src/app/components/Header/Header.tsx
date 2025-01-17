import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-[#003366] text-white py-2 text-center">
        <span>We&apos;ve Moved!- Check us out now at </span>
        <span className="bg-red-500 px-2 py-1 rounded ml-1">
          PatioHeatandShade
        </span>
      </div>

      {/* Secondary Header */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">(855) 298-4922</span>
            </div>
            <div>
              <button className="text-sm text-gray-600 hover:underline">
                Call Center Hours
              </button>
            </div>
          </div>

          <div className="bg-green-600 text-white px-3 py-1 rounded">
            Save Up To 12%
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-600 hover:underline">
              Are You A Pro?
            </button>
            <button className="text-sm text-gray-600 hover:underline">
              Login/Sign Up
            </button>
            <button className="text-sm text-gray-600 hover:underline">
              Order Status
            </button>
            <button className="text-sm text-gray-600 hover:underline">
              My Favorites
            </button>
            <button className="text-sm text-gray-600 hover:underline font-bold">
              CART (0)
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://sanccms.z14.web.core.windows.net/site/theme/www_patioproductsusa_com/ppu_site_logo.png"
              alt="PatioProductsUSA"
              width={300}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for Anything"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <button className="absolute right-2 top-2 text-gray-500">
                🔍
              </button>
            </div>
          </div>

          <div className="flex items-center text-sm">
            <span className="text-blue-500 font-medium">
              📋 Featured Guide:
            </span>
            <Link href="/guide" className="ml-2 hover:underline text-blue-500">
              Which Heater Brand Should You Buy?
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-100 border-t py-2">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-6 text-sm text-gray-600">
            <Link href="/brands" className="hover:underline">
              Brands
            </Link>
            <Link href="/heating" className="hover:underline">
              Heating
            </Link>
            <Link href="/shading" className="hover:underline">
              Shading
            </Link>
            <Link href="/cooling" className="hover:underline">
              Cooling
            </Link>
            <Link href="/cooking" className="hover:underline">
              Cooking
            </Link>
            <Link href="/furniture" className="hover:underline">
              Furniture & Entertainment
            </Link>
            <Link href="/lighting" className="hover:underline">
              Outdoor Lighting
            </Link>
            <Link href="/learning-center" className="hover:underline">
              Learning Center
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
