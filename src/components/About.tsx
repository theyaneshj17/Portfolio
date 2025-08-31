import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/50 via-transparent to-neural-50/50 dark:from-dark-800/50 dark:via-transparent dark:to-neural-900/50"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-neural-300/20 to-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-primary-300/20 to-neural-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-primary-600 to-neural-600 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Passionate about artificial intelligence and its potential to transform the world. 
            Combining technical expertise with creative thinking to build innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a dedicated AI Engineer and ML Research Engineer with <strong className="text-primary-600 dark:text-primary-400">4+ years of experience</strong> in pushing the boundaries of what's possible 
                with artificial intelligence. My journey in AI/ML began with curiosity and has evolved 
                into a deep expertise in building intelligent systems that make a real impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently working as an AI Engineer Intern at FocusKPI, Inc. and serving as an ML Research Assistant at IU School of Medicine, 
                I've developed a comprehensive understanding of both the theoretical foundations and practical applications of machine learning, 
                natural language processing, and data engineering.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                What Drives Me
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'AI/ML Innovation',
                  'Research Excellence',
                  'Real-world Impact',
                  'Continuous Learning',
                  'Technical Leadership',
                  'Cross-domain Collaboration'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Neural Network Visualization */}
            <div className="relative p-6 bg-gradient-to-br from-primary-50 to-neural-50 dark:from-dark-800 dark:to-neural-900 rounded-2xl border border-primary-200/50 dark:border-neural-700/50">
              <div className="absolute inset-0 bg-neural-pattern opacity-5 rounded-2xl"></div>
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Neural Network Architecture
                </h4>
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-3 h-3 bg-primary-500 rounded-full animate-neural-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                  Building intelligent systems, one neuron at a time
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Profile Photo Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-80 h-80 bg-gradient-to-br from-primary-200 to-neural-200 dark:from-primary-800 dark:to-neural-800 rounded-2xl shadow-2xl border-4 border-white dark:border-dark-700 overflow-hidden flex items-center justify-center"
              >
                {/* Profile Photo - Updated to match uploaded PNG */}
                <img 
                  src="/images/profile-photo.png" 
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Award className="w-4 h-4 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <BookOpen className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
