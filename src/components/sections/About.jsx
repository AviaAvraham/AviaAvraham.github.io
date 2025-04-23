import React from 'react';
import Card from '../Card';
import ReactMarkdown from "react-markdown";
import { FaPython, FaCode, FaLaptopCode, FaCogs } from 'react-icons/fa';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FcAndroidOs, FcLinux } from "react-icons/fc";
import { IoMdPeople, IoMdRocket } from 'react-icons/io';


const About = ({ isVisible }) => {
  const skills = [
    { name: "Python", icon: <FaPython className="text-green-600" /> },
    { name: "C/C++", icon: <FaCode className="text-blue-600" /> },
    { name: "Dart/Kotlin", icon: <FcAndroidOs className="text-purple-600" /> },
    { name: "Full-Stack Development", icon: <FaLaptopCode className="text-indigo-600" /> },
    { name: "Problem-Solving", icon: <IoMdRocket className="text-orange-600" /> },
    { name: "Team Collaboration", icon: <IoMdPeople className="text-yellow-600" /> },
    { name: "Self-Learning", icon: <FaMagnifyingGlass className="text-red-600" /> },
    { name: "Linux & Windows Development", icon: <FcLinux className="text-blue-900" /> },
    { name: "Object Oriented Design", icon: <FaCogs className="text-gray-600" /> },
  ];
  
  return (
    <section id="about">
      <Card title="About Me" id="about" isVisible={isVisible}>
        <div className="space-y-6">
          {/* About Me Section */}
          <div className="space-y-4">
            <ReactMarkdown className="text-gray-600">
              Newgrad B.Sc. in Computer Science at The Technion, **GPA 90**, recognized twice on Technion's Computer Science Dean's list.
            </ReactMarkdown>
            <ReactMarkdown className="text-gray-600">
              Proficient in Python, C/C++, and various web frameworks, with a solid foundation in software development and problem-solving. Known for excellent social skills and self-learning abilities.
            </ReactMarkdown>
            <ReactMarkdown className="text-gray-600">
              **Seeking a full-time position in software development**
            </ReactMarkdown>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Card>
    </section>
  )
};

export default About;
