import React, { useState, useEffect } from 'react';

const ProjectSection = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <ul className="space-y-4 text-gray-600">
      {items.map(([name, description], index) => (
        <li key={index} className="flex items-start">
          <span className="h-2 w-2 mt-2 mr-2 bg-green-500 rounded-full flex-shrink-0"></span>
          <span>
            <strong>{name}</strong> – {description}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectSection;