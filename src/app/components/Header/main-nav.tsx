import Link from 'next/link'

const navItems = [
  { name: 'Brands', href: '/brands' },
  { name: 'Heating', href: '/heating' },
  { name: 'Shading', href: '/shading' },
  { name: 'Cooling', href: '/cooling' },
  { name: 'Cooking', href: '/cooking' },
  { name: 'Furniture & Entertainment', href: '/furniture' },
  { name: 'Outdoor Lighting', href: '/lighting' },
  { name: 'Learning Center', href: '/learning' },
]

export function MainNav() {
  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="py-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 -mb-[1px]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
   )
}