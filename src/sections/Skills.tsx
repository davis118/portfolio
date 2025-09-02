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
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      icon: Database,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vite", level: 80 },
      ],
    },
    {
      icon: Cloud,
      title: "Developer Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub Actions", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Visual Studio", level: 85 },
        { name: "Jupyter", level: 80 },
      ],
    },
    {
      icon: Palette,
      title: "AI & Data Libraries",
      skills: [
        { name: "FAISS", level: 75 },
        { name: "OpenAI", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "GSAP", level: 80 },
        { name: "shadcn/ui", level: 75 },
      ],
    },
    {
      icon: Smartphone,
      title: "Robotics & Automation",
      skills: [
        { name: "Fusion 360", level: 85 },
        { name: "VEX Robotics", level: 90 },
        { name: "Motion Profiling", level: 80 },
        { name: "Path Planning", level: 85 },
      ],
    },
    {
      icon: Globe,
      title: "Other Technologies",
      skills: [
        { name: "Supabase", level: 80 },
        { name: "Mathematica", level: 75 },
        { name: "Wolfram Cloud", level: 80 },
        { name: "Server-Side Rendering", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-secondary-50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <category.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-secondary-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
