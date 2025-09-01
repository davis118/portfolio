"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Senior Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Led development of multiple web applications using React, Node.js, and AWS.",
    },
    {
      icon: Briefcase,
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description:
        "Built scalable web applications and managed cloud infrastructure.",
    },
    {
      icon: GraduationCap,
      title: "Computer Science",
      company: "University Name",
      period: "2016 - 2020",
      description:
        "Bachelor's degree with focus on software engineering and algorithms.",
    },
  ];

  const skills = [
    "React & Next.js",
    "Node.js & Express",
    "TypeScript",
    "Python",
    "AWS",
    "Docker",
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
            I&apos;m a passionate developer with a love for creating innovative
            solutions and learning new technologies. Let me tell you more about
            my journey.
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
                  <span className="text-gray-700">Born: January 1, 1998</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">
                    Location: San Francisco, CA
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-blue-600" size={20} />
                  <span className="text-gray-700">Experience: 4+ years</span>
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

        {/* Bottom Section - Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Philosophy
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              &ldquo;I believe in writing clean, maintainable code that not only
              solves the immediate problem but also considers future scalability
              and maintainability. Every project is an opportunity to learn and
              grow, and I approach each challenge with curiosity and
              determination.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
