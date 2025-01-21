import React, { useState, useEffect } from 'react';

const ProjectCard = ({ 
  name, 
  description, 
  image, 
  links = [] // Optional array of links
}) => (
  <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    {image ? (
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    ) : (
      <div className="flex items-center justify-center h-40 bg-gray-100">
        <span className="text-gray-500 text-lg font-medium">
          No Image Available
        </span>
      </div>
    )}
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map(({ label, url }, index) => (
            <a 
              key={index} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-3 py-1 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);


export default ProjectCard;