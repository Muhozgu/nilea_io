import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-gray-900">NexusAI</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#case-studies" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
            <Button asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#services" className="block text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#about" className="block text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#case-studies" className="block text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
            <Button asChild className="w-full">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
