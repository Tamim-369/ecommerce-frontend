import { Search, ShoppingCart, User, Menu, LogOut, LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-indigo-600">
              ShopHub
            </button>
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
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="text-gray-600 hover:text-indigo-600 flex items-center gap-1"
                  >
                    <User size={20} />
                    <span>John Doe</span>
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      <button
                        onClick={() => onNavigate('profile')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Your Profile
                      </button>
                      <button
                        onClick={() => onNavigate('orders')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Orders
                      </button>
                      <button
                        onClick={() => onNavigate('settings')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </button>
                      <button
                        onClick={() => {
                          setIsAuthenticated(false);
                          setIsProfileDropdownOpen(false);
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut size={16} />
                        <span>Sign out</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('login')}
                  className="text-gray-600 hover:text-indigo-600 font-medium flex items-center gap-1"
                >
                  <LogIn size={20} />
                  <span>Sign in</span>
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-1"
                >
                  <UserPlus size={20} />
                  <span>Sign up</span>
                </button>
              </div>
            )}
            <button 
              onClick={() => onNavigate('cart')}
              className="text-gray-600 hover:text-indigo-600 flex items-center gap-1"
            >
              <ShoppingCart size={20} />
              <span>Cart (2)</span>
            </button>
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
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => onNavigate('profile')}
                  className="text-gray-600 hover:text-indigo-600 flex items-center gap-2 w-full py-2"
                >
                  <User size={20} />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => {
                    setIsAuthenticated(false);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-indigo-600 flex items-center gap-2 w-full py-2"
                >
                  <LogOut size={20} />
                  <span>Sign out</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onNavigate('login');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <LogIn size={20} />
                  <span>Sign in</span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('signup');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  <UserPlus size={20} />
                  <span>Sign up</span>
                </button>
              </>
            )}
            <button 
              onClick={() => {
                onNavigate('cart');
                setIsMenuOpen(false);
              }}
              className="text-gray-600 hover:text-indigo-600 flex items-center gap-2 w-full py-2"
            >
              <ShoppingCart size={20} />
              <span>Cart (2)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}