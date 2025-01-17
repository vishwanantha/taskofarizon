import {
  LampFloor,
  UtensilsCrossed,
  Sun,
  Umbrella,
  Snowflake,
} from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Patio Lighting", icon: LampFloor, color: "bg-[#00A7D1]" },
  { name: "Outdoor Cooking", icon: UtensilsCrossed, color: "bg-[#59B7E7]" },
  { name: "Patio Heating", icon: Sun, color: "bg-[#0088E2]" },
  { name: "Patio Shading", icon: Umbrella, color: "bg-[#005B97]" },
  { name: "Patio Cooling", icon: Snowflake, color: "bg-[#002B4B]" },
];

export function Navigation() {
  return (
    <div className="w-full px-4 py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] flex-1 bg-blue-600"></div>
          <h2 className="px-4 text-lg font-medium text-gray-900 whitespace-nowrap">
            What are you Shopping for Today?
          </h2>
          <div className="h-[1px] flex-1 bg-blue-600"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name
                .toLowerCase()
                .replace(" ", "-")}`}
              className="flex flex-col items-center group"
            >
              <div
                className={`${category.color} rounded-full p-6 transition-transform group-hover:scale-110`}
              >
                <category.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="mt-3 text-sm text-gray-600 text-center">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
