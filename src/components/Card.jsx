import React, { useState, useEffect } from 'react';

const Card = ({ title, children, id, isVisible }) => (
  <div 
    className={`w-full md:w-3/4 lg:w-2/3 mx-auto mb-8 p-6 bg-white rounded-lg shadow-lg 
      transform transition-all duration-700 ease-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
  >
    <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{title}</h2>
    {children}
  </div>
);

export default Card;