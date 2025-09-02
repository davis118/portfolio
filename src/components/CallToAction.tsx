"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
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

export default CallToAction;
