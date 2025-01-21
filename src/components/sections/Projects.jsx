import React from 'react';
import Card from '../Card';
import ProjectCard from '../ProjectCard';

const Projects = ({ isVisible }) => (
  <section id="projects">
    <Card title="Projects" id="projects" isVisible={isVisible}>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Leadership Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              name="CTF Team Leader" 
              description="Led the Technion CTF team, Technipwn"
              links={[
                { label: "GitHub", url: "https://github.com/example" },
                { label: "More Info", url: "https://example.com" }
              ]}
            />
            <ProjectCard 
              name="Project Co-Lead at RealSense" 
              description="Guided students in developing a web-based viewer"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              name="Clarify" 
              description="Flutter-based AI dictionary app"
              image="/path/to/clarify-image.jpg"
            />
            <ProjectCard 
              name="KdamTree" 
              description="Interactive course prerequisite visualization tool"
              links={[
                { label: "Demo", url: "https://demo.example.com" },
                { label: "Source Code", url: "https://github.com/example/kdamtree" }
              ]}
            />
          </div>
        </div>
      </div>
    </Card>
  </section>
);

export default Projects;