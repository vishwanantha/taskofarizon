import Image from "next/image";
import Link from "next/link";

export default function OutdoorLighting() {
  const categories = [
    {
      title: "Path Lights",
      image:
        "https://images.patioproductsusa.com/supplier/progress-lighting/products/p5204-31_1k.jpg/300/300/1",
      href: "#",
    },
    {
      title: "Outdoor Wall Lights",
      image:
        "https://images.patioproductsusa.com/supplier/progress-lighting/products/p560023-031_1k.jpg/300/300/1",
      href: "#",
    },
    {
      title: "Outdoor Ceiling Lights",
      image:
        "https://images.patioproductsusa.com/supplier/quoizel-lighting/products/ro1914ac_1k.jpg/300/300/1",
      href: "#",
    },
    {
      title: "Outdoor Post Lights",
      image:
        "https://images.patioproductsusa.com/supplier/quoizel-lighting/products/mre9009wt_1k.jpg/300/300/1",
      href: "#",
    },
  ];

  const benefits = [
    {
      title: "Low Price Guarantee",
      href: "#",
    },
    {
      title: "Extra Year Warranty",
      href: "#",
    },
    {
      title: "Volume Discounts",
      href: "#",
    },
    {
      title: "Free Design Consultation",
      href: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <Link
          href="#"
          className="text-xl md:text-2xl text-gray-800 hover:text-gray-600 transition-colors"
        >
          Shop All Outdoor Lighting
        </Link>
      </div>

      {/* Product Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <Link
              href={category.href}
              className="group flex items-center text-gray-800 hover:text-gray-600"
            >
              <span className="text-lg font-medium">{category.title}</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="w-full px-4 py-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="h-[1px] flex-1 bg-blue-500"></div>
            <h2 className="px-4 text-lg font-medium text-gray-900 whitespace-nowrap">
              Why Choose PatioProductsUSA?
            </h2>
            <div className="h-[1px] flex-1 bg-blue-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Link
              key={index}
              href={benefit.href}
              className="text-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              {benefit.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
