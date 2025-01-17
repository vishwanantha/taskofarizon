"use client";

import { ApolloProvider } from "@apollo/client";

import client from "@/lib/apollo-client";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/navigation";
import { Header } from "./components/Header/Header";

import Home1 from "./components/page";
import Footer from "./components/Footer";
import ProductCards from "./components/product-card";
export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen flex flex-col">
        <main>
          <Header />

          <Hero />
          <Navigation />

          <Home1 />
          <ProductCards />
          <Footer />
        </main>
      </div>
    </ApolloProvider>
  );
}
