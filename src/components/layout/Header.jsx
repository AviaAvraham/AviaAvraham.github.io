import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, FolderTree, Mail } from 'lucide-react';
import Navigation from './Navigation';

const Header = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'projects', icon: FolderTree, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-green-600 text-white shadow-lg">
		<Navigation 
		  sections={sections}
		  activeSection={activeSection}
		  setActiveSection={setActiveSection}
		/>
	</header>
  );
};

export default Header;