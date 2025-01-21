import React from 'react';
import Card from '../Card';
import TimelineItem from '../TimelineItem';

// Sections/Experience.jsx
const Experience = ({ isVisible }) => (
  <section id="experience">
    <Card title="Experience" id="experience" isVisible={isVisible}>
    <div className="relative pl-4 border-l-2 border-green-500">
        <TimelineItem 
          title="Software Engineer / Intel RealSense"
          date="2023 – Present"
        >
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Contributed to the development and maintenance of the RealSense SDK, focusing on feature implementation and bug resolution, with experience in Agile methodologies.</li>
            <li>Enhanced the Pythonic unit test framework by extending support to additional devices</li>
            <li>Created a REST wrapper, enabling users to interact with the SDK across multiple programming languages and platforms</li>
          </ul>
        </TimelineItem>
      </div>
      <div className="relative pl-4 border-l-2 border-green-500">
        <TimelineItem 
          title="Tech Support / Dell Support"
          date="2020 – 2021"
        >
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Responsible for providing technical support for the company's clients, including software, 
              computers and docking stations, fault detection and parts replacement in faulty devices.</li>
          </ul>
        </TimelineItem>
      </div>
	  {/* for more items, just reuse div:
	  <div className="relative pl-4 border-l-2 border-green-500">
        <TimelineItem 
          title="Software Engineer / Intel RealSense"
          date="2023 – Present"
        >
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Contributed to the development and maintenance of the RealSense SDK</li>
            <li>Enhanced the Pythonic unit test framework</li>
            <li>Created a REST wrapper for cross-platform SDK interaction</li>
          </ul>
        </TimelineItem>
	  */}
    </Card>
  </section>
);

export default Experience;