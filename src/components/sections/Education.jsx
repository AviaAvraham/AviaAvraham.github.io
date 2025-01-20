import React from 'react';
import Card from '../Card';
import TimelineItem from '../TimelineItem';

const Education = ({ isVisible }) => (
  <section id="education">
    <Card title="Education" id="education" isVisible={isVisible}>
      <div className="relative pl-4 border-l-2 border-green-500">
        <TimelineItem 
          title="Computer Science Student / Technion"
          date="October 2021 – March 2025 (Expected graduation)"
        >
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Network Security</li>
            <li>Introduction to Machine Learning</li>
            <li>Deep Learning on Computational Accelerators Project</li>
            <li>Information Security Project</li>
          </ul>
        </TimelineItem>
      </div>
    </Card>
  </section>
);

export default Education;