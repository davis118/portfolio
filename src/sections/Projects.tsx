"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "TypeScript", "Framer Motion"],
      category: "frontend",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "AI Chat Application",
      description:
        "An intelligent chat application powered by OpenAI API, featuring real-time conversations, context awareness, and multi-language support.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      category: "ai",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Framer Motion, featuring smooth animations and clean design.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "A weather dashboard application that displays current weather conditions, forecasts, and interactive maps using multiple weather APIs.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      category: "frontend",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
    {
      id: 6,
      title: "Blog CMS",
      description:
        "A content management system for blogs with markdown support, SEO optimization, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one
            represents a unique challenge and learning opportunity in my
            development journey.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                {/* Project Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">📱</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.github}
                      className="flex-1"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" href={project.live} className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s discuss how we can work together!
            </p>
            <Button size="lg" href="mailto:your.email@example.com">
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
