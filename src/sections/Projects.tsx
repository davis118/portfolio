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
      title: "QR Attendance App",
      description:
        "A secure attendance system built with Next.js and Supabase using JWT-based QR codes and geolocation fencing. Features server-side rendering for improved performance and secure authentication.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Next.js",
        "Supabase",
        "JWT",
        "Geolocation",
        "SSR",
        "Resend",
      ],
      category: "fullstack",
      github: "https://github.com",
      live: "https://attendance-ra.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Data Analytics E-book (Co-Author)",
      description:
        "Developed 14 automated data analytics modules analyzing financial disclosures, web scraping, sentiment analysis, and CEO linguistic style. Created interactive student-facing website with Wolfram Cloud and React.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Mathematica",
        "Wolfram Cloud",
        "React",
        "Data Analysis",
        "Financial Analytics",
      ],
      category: "ai",
      github: "https://github.com",
      live: "https://www.CreativeDataAnalytics.org",
      featured: true,
    },
    {
      id: 3,
      title: "Faculty Expertise Dashboard",
      description:
        "Full-stack dashboard with semantic search enabling users to explore faculty expertise and discover research areas. Features automated pipeline for 7,000+ papers and LLM analysis achieving 85% accuracy.",
      image: "/api/placeholder/400/250",
      technologies: [
        "React",
        "Semantic Search",
        "LLM Analysis",
        "Data Pipeline",
        "Dashboard",
      ],
      category: "ai",
      github: "https://github.com",
      live: "https://gies-dashboard.vercel.app/",
      featured: true,
    },
    {
      id: 4,
      title: "VEX Robotics Competition",
      description:
        "Led 3-member robotics team qualifying for VEX Worlds. Optimized robot subsystems with Fusion 360 and developed path following algorithms with motion profiling achieving 180% speedup.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Fusion 360",
        "VEX Robotics",
        "Motion Profiling",
        "Path Planning",
        "C++",
      ],
      category: "robotics",
      github: null,
      live: null,
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI/ML" },
    { id: "robotics", label: "Robotics" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on, from AI research
            tools to robotics competitions. Each project represents unique
            challenges in AI, full-stack development, and robotics engineering.
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
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "primary" : "outline"}
              size="sm"
              className={
                activeFilter === filter.id ? "" : "bg-white hover:bg-primary-50"
              }
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col">
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
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
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
                    href={project.github || undefined}
                    className="flex-1"
                    disabled={!project.github}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    href={project.live || undefined}
                    className="flex-1"
                    disabled={!project.live}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
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
          <Card className="w-full mx-auto">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-secondary-600 mb-6">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s discuss how we can work together!
            </p>
            <Button size="lg" href="mailto:dal534413@utdallas.edu">
              Get In Touch
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
