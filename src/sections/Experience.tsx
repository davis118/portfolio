"use client";

import { motion } from "framer-motion";
import Card from "../components/Card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "AI Team Intern",
      company: "Qihoo 360",
      period: "Jun. 2025 - Jul. 2025",
      description:
        "Developed internal visualization tools with React and Vue.js, created customer-facing LLM performance comparisons, and designed security monitoring dashboards using GSAP.",
    },
    {
      icon: Briefcase,
      title: "Research Assistant, Faculty Expertise Dashboard",
      company: "University of Illinois, Urbana-Champaign",
      period: "Nov. 2024 - Current",
      description:
        "Created automated pipeline for 7,000+ papers, built full-stack dashboard with semantic search, and achieved 85% accuracy in sustainability relevance analysis.",
    },
    {
      icon: Briefcase,
      title: "Robotics Team Lead",
      company: "Concordia International School",
      period: "Jun. 2023 - Jul. 2025",
      description:
        "Led 3-member robotics team, optimized subsystems with Fusion 360, developed path following algorithms achieving 180% speedup, qualified for VEX Worlds.",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Experience Timeline
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My journey through AI research, robotics competitions, and
            full-stack development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <exp.icon className="text-primary-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-secondary-900">
                      {exp.title}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-secondary-500 text-sm mb-2">
                      {exp.period}
                    </p>
                    <p className="text-secondary-700">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
