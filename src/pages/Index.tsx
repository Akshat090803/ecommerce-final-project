
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Truck, Shield, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(3);

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setFeaturedProducts(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Wide Selection",
      description: "Thousands of products across multiple categories"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your doorstep"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payment",
      description: "Your transactions are protected with bank-level security"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support",
      description: "24/7 support team ready to help you"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Modern Hero Section with Blur Effects */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Modern Blur Backdrop */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        
        {/* Animated Glass Morphism Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-xl border border-white/10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full backdrop-blur-xl border border-white/10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full backdrop-blur-xl border border-white/10 animate-pulse" style={{ animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-fade-in">
            {/* Modern Header with Glass Effect */}
            <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-scale-in">
                Welcome to <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">EStore</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-2xl">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 backdrop-blur-sm text-gray-200 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose EStore?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 p-6 rounded-2xl hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview - Real Data */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-gray-400 text-lg">
              Check out our most popular items
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-800 rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-700"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded mb-4"></div>
                    <div className="flex items-center justify-between">
                      <div className="h-8 bg-gray-700 rounded w-20"></div>
                      <div className="h-4 bg-gray-700 rounded w-24"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        ${product.price}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`} 
                          />
                        ))}
                        <span className="ml-1 text-gray-400 text-sm">({product.rating})</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-2xl backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-2xl">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
