"use client";

import { useQuery } from "@apollo/client";
import { GET_FEATURED_PRODUCTS } from "@/lib/queries";

import Image from "next/image";

// Define the Product type
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string; // Optional image field
}

export default function Home2() {
  const { data, loading, error } = useQuery<{ featuredProducts: Product[] }>(
    GET_FEATURED_PRODUCTS
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data?.featuredProducts?.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border bg-white shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {product.name}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <div className="aspect-video relative mb-4">
                  <Image
                    src={product.image || "https://placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 font-bold">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
