import Image from "next/image";
import Link from "next/link";

const heaters = [
  {
    id: 1,
    name: "Infratech Heater",
    image:
      "https://images.patioproductsusa.com/site/common/patio/content/infratech-buying-guide.jpg",

    guide: "Buying Guide",
  },
  {
    id: 2,
    name: "Bromic Heater",
    image:
      "https://images.patioproductsusa.com/site/common/patio/content/bromic-buying-guide.jpg",

    guide: "Buying Guide",
  },
  {
    id: 3,
    name: "Innova Heater",
    image:
      "https://images.patioproductsusa.com/site/common/patio/content/innova-buying-guide.jpg?v1",

    guide: "Buying Guide",
  },
];

const umbrellas = [
  {
    id: 1,
    name: "Treasure Garden",
    image:
      "https://images.patioproductsusa.com/site/common/patio/promos/2022/shop-simplyshade-umbrellas.jpg?v1",
  },
  {
    id: 2,
    name: "Bambrella",
    image:
      "https://images.patioproductsusa.com/site/common/patio/promos/2022/shop-galtech-umbrellas.jpg?v1",
  },
  {
    id: 3,
    name: "Galtech",
    image:
      "https://images.patioproductsusa.com/site/common/patio/promos/2022/shop-galtech-umbrellas.jpg?v1",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            BRING ON THE <span className="italic font-serif">heat</span>
          </h1>
          <p className="text-lg text-gray-600">
            Get your patio ready for longer, cooler nights with top heater
            brands!
          </p>
        </div>

        {/* Heaters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {heaters.map((heater) => (
            <div
              key={heater.id}
              className="overflow-hidden border-none shadow-lg rounded-lg"
            >
              <div className="p-0">
                <div className="relative h-64">
                  <Image
                    src={heater.image || "/placeholder.svg"}
                    alt={heater.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-2">{heater.name}</h2>
                  <Link
                    href="#"
                    className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {heater.guide}
                  </Link>
                </div>
                <div className="px-6 pb-6">
                  <div className="h-12 relative"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Umbrella Section */}

        <div className="w-full px-4 py-8">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-[1px] flex-1 bg-blue-500"></div>
              <h2 className="px-4 text-lg font-medium text-gray-900 whitespace-nowrap">
                Gear up for Umbrella Season
              </h2>
              <div className="h-[1px] flex-1 bg-blue-500"></div>
            </div>
          </div>

          {/* Umbrella Size Guide */}
          <div className="relative h-[200px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nt7ekYB8TnBZONiCqmKzvvj5LaV6Cw.png"
              alt="Umbrella Size Guide"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Umbrella Size Guide</h3>
              <p className="mb-4">Which Canopy Width do You Need?</p>
              <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                Read More
              </button>
            </div>
          </div>

          {/* Umbrella Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {umbrellas.map((umbrella) => (
              <div
                key={umbrella.id}
                className="relative h-48 rounded-lg overflow-hidden"
              >
                <Image
                  src={umbrella.image || "/placeholder.svg"}
                  alt={umbrella.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
                  <h3 className="text-center font-semibold">{umbrella.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Section */}
        <div className="relative h-[200px] mb-16 rounded-lg overflow-hidden">
          <Image
            src="https://images.patioproductsusa.com/site/common/patio/promos/2022/trending-products.png?v3"
            alt="What's Trending"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy bg-opacity-90 flex justify-between items-center px-8">
            <h2 className="text-2xl text-white font-semibold">
              What's Trending?
            </h2>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Explore →
            </Link>
          </div>
        </div>

        {/* Bottom Banner */}

        <div className="w-full px-4 py-8">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-[1px] flex-1 bg-blue-500"></div>
              <Link
                href="#"
                className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Outdoor Patio Lighting
              </Link>
              <div className="h-[1px] flex-1 bg-blue-500"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
