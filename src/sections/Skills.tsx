"use client";

import { motion } from "framer-motion";
import Card from "../components/Card";
import {
  Code,
  Database,
  Cloud,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "TypeScript" },
        { name: "Python" },
        { name: "C++" },
        { name: "HTML/CSS" },
      ],
    },
    {
      icon: Database,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Vite" },
      ],
    },
    {
      icon: Cloud,
      title: "Developer Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub Actions" },
        { name: "VS Code" },
        { name: "Visual Studio" },
        { name: "Jupyter" },
      ],
    },
    {
      icon: Palette,
      title: "Libraries",
      skills: [
        { name: "FAISS" },
        { name: "OpenAI" },
        { name: "Pandas" },
        { name: "GSAP" },
        { name: "shadcn/ui" },
      ],
    },
    {
      icon: Smartphone,
      title: "Robotics & Automation",
      skills: [
        { name: "Fusion 360" },
        { name: "VEX Robotics" },
        { name: "Motion Profiling" },
        { name: "Path Planning" },
      ],
    },
    {
      icon: Globe,
      title: "Other Technologies",
      skills: [
        { name: "Supabase" },
        { name: "Mathematica" },
        { name: "Wolfram Cloud" },
        { name: "Server-Side Rendering" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            I&apos;ve worked with a variety of technologies and frameworks.
            Here&apos;s a comprehensive overview of my technical skills and
            proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-secondary-50 h-full w-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <category.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 border border-primary-200 transition-all duration-200 hover:scale-105 hover:shadow-sm"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
