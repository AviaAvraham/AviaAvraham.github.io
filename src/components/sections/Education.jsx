import React from 'react';
import Card from '../Card';
import TimelineItem from '../TimelineItem';
import { FaLaptopCode } from 'react-icons/fa';
import { FaRobot } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import { SiUipath } from "react-icons/si";

const Education = ({ isVisible }) => {
  
  const courses = [
    { name: "Network Security", icon: <BsGlobe2 className="text-green-600" /> },
    { name: "Introduction to Machine Learning", icon: <FaLaptopCode className="text-blue-600" /> },
    { name: "Information Security Project", icon: <SiUipath className="text-orange-600" /> },
    { name: "Deep Learning on Computational Accelerators Project", icon: <FaRobot className="text-indigo-600" /> }
  ];
  
  return (
  <section id="education">
    <Card title="Education" id="education" isVisible={isVisible}>
      <div className="relative pl-4 border-l-2 border-green-500">
        <TimelineItem 
          title="Computer Science Student / Technion"
          date="October 2021 – March 2025 (Expected graduation)"
        >
          <h4 className="text-gray-600 font-bold mb-2">Notable Coursework</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-lg"
                  >
                    <div className="text-3xl mb-3">{course.icon}</div>
                    <span className="text-gray-700 font-medium">{course.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ul>
        </TimelineItem>
      </div>
    </Card>
  </section>
);
}

export default Education;