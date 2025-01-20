import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


const MobileMenu = ({ sections, isMenuOpen, setIsMenuOpen, setActiveSection }) => (
  <div className={`md:hidden transition-all duration-300 ease-in-out 
    ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
    <ul className="py-2">
      {sections.map(({ id, icon: Icon, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="flex items-center space-x-2 py-2 px-4 hover:bg-green-700 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection(id);
            }}
          >
            <Icon size={18} />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default MobileMenu;