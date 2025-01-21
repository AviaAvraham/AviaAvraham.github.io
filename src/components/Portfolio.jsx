import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import BackToTop from './BackToTop';
import MilitaryService from './sections/MilitaryService';


{/*
Note to future self:

Hey! How awesome future me is?
This is just a reminder to use "npm run dev -- --host" to run it locally and make it accessible on mobile, 
possibly "npm install" or something is needed
Also, to update the web, push the changes to git, and than run "npm run deploy", or just "npm deploy"

Claude from yesterday (20/01/2025) should have some more notes about it

Have a good one me!

*/}
// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Add scroll-padding to html element to account for fixed header
    document.documentElement.style.scrollPadding = '80px 0 0 0';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      // Clean up scroll-padding on unmount
      document.documentElement.style.scrollPadding = '0';
    };
  }, []);

  

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <About isVisible={isVisible.about} />
        <Experience isVisible={isVisible.experience} />
        <Education isVisible={isVisible.education} />
        <Projects isVisible={isVisible.projects} />
        <MilitaryService isVisible={isVisible.military_service} />
        <Contact isVisible={isVisible.contact} />
      </main>

	  <Footer />
	  <BackToTop />
    </div>
  );
};
export default Portfolio;