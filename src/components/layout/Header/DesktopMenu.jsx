import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const DesktopMenu = ({ sections, activeSection, setActiveSection }) => (
  <ul className="hidden md:flex space-x-6">
    {sections.map(({ id, icon: Icon, label }) => (
      <li key={id}>
        <a
          href={`#${id}`}
          className={`flex items-center space-x-2 hover:text-green-200 transition-colors relative
            group ${activeSection === id ? 'text-green-200' : ''}`}
          onClick={() => setActiveSection(id)}
        >
          <Icon size={18} />
          <span>{label}</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-300 
            group-hover:w-full" />
        </a>
      </li>
    ))}
  </ul>
);
export default DesktopMenu;