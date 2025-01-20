import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const DesktopMenu = ({ sections, activeSection, setActiveSection }) => (
  <ul className="hidden md:flex space-x-6">
    {sections.map(({ id, icon: Icon, label }) => (
      <li key={id}>
        <a
          href={`#${id}`}
          className={`flex items-center space-x-2 hover:text-green-200 transition-colors
            ${activeSection === id ? 'text-green-200' : ''}`}
          onClick={() => setActiveSection(id)}
        >
          <Icon size={18} />
          <span>{label}</span>
        </a>
      </li>
    ))}
  </ul>
);

export default DesktopMenu;