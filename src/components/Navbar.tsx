import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              ShopHub
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-96 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/login"
              className="text-gray-600 hover:text-indigo-600 flex items-center gap-1"
            >
              <User size={20} />
              <span>Account</span>
            </Link>
            <Link 
              to="/cart"
              className="text-gray-600 hover:text-indigo-600 flex items-center gap-1"
            >
              <ShoppingCart size={20} />
              <span>Cart (0)</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            <Link 
              to="/login"
              className="text-gray-600 hover:text-indigo-600 flex items-center gap-2 w-full py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={20} />
              <span>Account</span>
            </Link>
            <Link 
              to="/cart"
              className="text-gray-600 hover:text-indigo-600 flex items-center gap-2 w-full py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={20} />
              <span>Cart (0)</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}