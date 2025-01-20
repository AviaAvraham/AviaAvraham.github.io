import React from 'react';
import Card from '../Card';

const About = ({ isVisible }) => (
  <section id="about">
    <Card title="About Me" id="about" isVisible={isVisible}>
      <div className="space-y-4">
        <p className="text-gray-600">
          Newgrad B.Sc. in Computer Science at The Technion, GPA 90, recognized twice on Technion's Computer Science Dean's list.
        </p>
        <p className="text-gray-600">
          Proficient in Python, C/C++, and various web frameworks, solid foundation in software development and problem-solving.
          Excellent social skills and self-learning abilities.
        </p>
        <p className="text-gray-600">
          Seeking a full-time position in software development.
        </p>
      </div>
    </Card>
  </section>
);

export default About;