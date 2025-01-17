import { useQuery, gql } from "@apollo/client";
import { Zap, Shield, Star } from 'lucide-react'; // Removed 'LucideIcon'

// Define the GraphQL query
const GET_FEATURES = gql`
  query GetFeatures {
    features {
      id
      title
      description
      icon
    }
  }
`;

// Map the icon names to Lucide icons
const iconMap = {
  zap: Zap,
  shield: Shield,
  star: Star,
} as const;

// Type definition for features
type Feature = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

// Type guard to check if the icon is valid
function isValidIcon(icon: string): icon is keyof typeof iconMap {
  return icon in iconMap;
}

// Main component
export default function Features() {
  const { loading, error, data } = useQuery<{ features: Feature[] }>(GET_FEATURES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.features.map((feature) => {
            const Icon = isValidIcon(feature.icon) ? iconMap[feature.icon] : Zap;
            return (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
