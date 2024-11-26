import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

const featuredProducts = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
    discount: 20,
  },
  {
    id: 2,
    title: "Smart Watch Series 5",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Designer Backpack",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80",
    discount: 15,
  },
  {
    id: 4,
    title: "Premium Sunglasses",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
  },
];

const latestProducts = [
  {
    id: 5,
    title: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Wireless Earbuds",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80",
    discount: 10,
  },
  {
    id: 7,
    title: "Smart Speaker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80",
    discount: 25,
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      case "profile":
        return <Profile />;
      default:
        return (
          <>
            <HeroBanner />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {/* Featured Products */}
              <section className="mb-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Featured Products
                  </h2>
                  <button className="text-indigo-600 hover:text-indigo-500 font-medium">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </section>

              {/* Promotional Banner */}
              <section className="mb-16">
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90" />
                  <div className="relative h-[200px] flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80"
                      alt="Promotional Banner"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative px-8 text-white">
                      <h2 className="text-3xl font-bold mb-2">Special Offer</h2>
                      <p className="text-lg mb-4">
                        Get 20% off on all accessories
                      </p>
                      <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Latest Products */}
              <section>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Latest Products
                  </h2>
                  <button className="text-indigo-600 hover:text-indigo-500 font-medium">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {latestProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </section>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {renderPage()}
    </div>
  );
}

export default App;
