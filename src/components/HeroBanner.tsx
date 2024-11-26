import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-indigo-600/70" />
      <div className="relative h-[500px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Summer Collection <br /> 2024
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Discover our latest collection of premium products at unbeatable prices.
            Shop now and get up to 50% off on selected items.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Shop Now
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}