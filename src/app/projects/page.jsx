'use client';
import ProjectCard from '../components/ui/Cards/ProjectCard';
import React from 'react';
import projects from '../data/projectsData';
import DeviceCheck from '../components/DeviceCheck';
import ScrollProgress from '../components/ui/ScrollProgress';
import Navigationbar from '../components/ui/Navigationbar';
import Footer from '../components/Footer/footer';

export default function ProjectsPage() {
  return (
    <DeviceCheck>
      <ScrollProgress/>
      <Navigationbar/>
      <div className="bg-black text-white min-h-screen py-20">
      <div className="text-start ml-10 mb-14">
        <p className="text-lime-500">Bringing ideas to life and setting you up for the future</p>
        <h1 className="text-7xl font-bold">Next level digital products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
    <Footer/>
    </DeviceCheck>
  );
}
