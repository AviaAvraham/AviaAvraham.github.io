import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import DesktopMenu from './Header/DesktopMenu';
import MobileMenu from './Header/MobileMenu';


const Navigation = ({ sections, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <h1 className="text-xl font-bold">Avia Avraham</h1>
        
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-green-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <DesktopMenu sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      <MobileMenu 
        sections={sections} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        setActiveSection={setActiveSection}
      />
    </nav>
  );
};

export default Navigation;