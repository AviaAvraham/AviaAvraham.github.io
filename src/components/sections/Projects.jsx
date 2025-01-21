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
              description="Led the **Technion CTF team, Technipwn**, mentoring the current leaders and organizing training sessions focused on cybersecurity challenges. 
              Directed the team at the **DEFCON 2024** conference"
              image="CTF-lead.jpg"
              links={[
                { label: "Technipwn", url: "https://technionctf.com" }
              ]}
            />
            <ProjectCard 
              name="Project Co-Lead at RealSense" 
              description="Co-led a Technion project as part of work at RealSense, guiding students to develop a web-based viewer for RealSense products, providing mentorship and technical oversight through the process."
              image="RS-Viewer.png"
            />
            <ProjectCard 
            name="“Soft Landing” Mentor" 
            description="Mentored new Computer Science students at the Technion throught their first semester."
          />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              name="Clarify" 
              description="Flutter-based app designed to assist students and learning individuals in their learning process as an AI dictionary, currently in beta phase and with plans to release on Google Play and Chrome Web Store."
              image="Clarify.png"
            />

            <ProjectCard 
              name="KdamTree" 
              description="An interactive tree for courses for students on the Technion, showing prerequisite and follow-up courses for every course"
              image="KdamTree.jpg"
              links={[
                { label: "Link", url: "https://aviaavraham.github.io/KdamTree/" },
                { label: "Source Code", url: "https://github.com/AviaAvraham/KdamTree" }
              ]}
            />

            <ProjectCard 
              name="Technion “CS Doing Good” Hackathon 2024" 
              description="AI-driven webapp diary, designed to encourage self-reflection by providing users with prompts to write about. Aimed at being a writing-based therapy tool"
            />

            <ProjectCard 
              name="Technion “CS Doing Good” Hackathon 2022" 
              description="Image-recognition-based app, aimed at visually impaired people to identify supermarket products, reading aloud product details from the store’s database"
            />
          </div>
        </div>
      </div>
    </Card>
  </section>
);

export default Projects;