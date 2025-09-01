"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
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

  const skills = [
    "React & Next.js",
    "Python & C++",
    "AI & Machine Learning",
    "Robotics & Automation",
    "Data Analysis",
    "Full-Stack Development",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I&apos;m a Computer Science student at UT Dallas with a passion for
            AI research, robotics, and full-stack development. My experience
            spans from AI visualization tools to robotics competitions and
            academic research projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Personal Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-gray-700">Born: 2003</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">
                    Location: Richardson, TX
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-blue-600" size={20} />
                  <span className="text-gray-700">Experience: 2+ years</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Quick Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Experience & Education
            </h3>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <exp.icon className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
