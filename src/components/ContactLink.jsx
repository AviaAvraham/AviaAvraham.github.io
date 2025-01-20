import React, { useState, useEffect } from 'react';

const ContactLink = ({ href, icon, text }) => (
  <a href={href} className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
    {icon}
    <span className="text-gray-700">{text}</span>
  </a>
);

export default ContactLink;