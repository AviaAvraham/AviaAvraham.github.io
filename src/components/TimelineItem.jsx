import React, { useState, useEffect } from 'react';

const TimelineItem = ({ title, date, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-500 mb-2">{date}</p>
    {children}
  </div>
);

export default TimelineItem;