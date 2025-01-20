import React from 'react';
import Card from '../Card';
import ProjectSection from '../ProjectSection';

const Projects = ({ isVisible }) => (
  <section id="projects">
    <Card title="Projects" id="projects" isVisible={isVisible}>
      <div className="space-y-6">
        <ProjectSection 
          title="Leadership Experience"
          items={[
            ["CTF Team Leader", "Led the Technion CTF team, Technipwn"],
            ["Project Co-Lead at RealSense", "Guided students in developing a web-based viewer"]
          ]}
        />
        <ProjectSection 
          title="Personal Projects"
          items={[
            ["Clarify", "Flutter-based AI dictionary app"],
            ["KdamTree", "Interactive course prerequisite visualization tool"]
          ]}
        />
      </div>
    </Card>
  </section>
);

export default Projects;