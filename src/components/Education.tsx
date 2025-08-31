import React from 'react';
import { motion } from 'framer-motion';

import { GraduationCap, Award, Calendar, MapPin, ExternalLink, Brain, Database, TrendingUp } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Indiana University Bloomington',
      location: 'Indiana, USA',
      period: 'August 2024 - May 2026',
      description: 'Focusing on machine learning, artificial intelligence, and data engineering with research emphasis on neuroimaging and biomedical applications.',
      gpa: '3.9/4.0',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      courses: [
        'Big Data & Applications',
        'Engineering Cloud Computing',
        'Elements of AI',
        'Statistics',
        'Computational Linguistics'
      ]
    },
    {
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      institution: 'College of Engineering Guindy, Anna University',
      location: 'Chennai, India',
      period: 'August 2016 - April 2020',
      description: 'Comprehensive computer science education with focus on software engineering, databases, and programming fundamentals.',
      gpa: '9.26/10.0',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      courses: [
        'Operating Systems',
        'Computer System Architecture',
        'Digital Signal Processing',
        'Image Processing',
        'Data Structures and Object Oriented Programming',
        'Cryptography and Network Security'
      ],
      finalYearProject: 'MACHINE LEARNING BASED MOBILE BANKING AUTHENTICATION endorsed with AIMO'
    }
  ];

  const awards = [
    {
      title: 'AIMO Award Endowment Award',
      organization: 'All India Manufacturers Organisation Industrial Research and Development Trust',
      year: '2020',
      description: 'Endorsed for Final Year Project on "MACHINE LEARNING BASED MOBILE BANKING AUTHENTICATION"',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      pdfLink: './AAIC_Poster1.pdf'
    },
    {
      title: 'AAIC 2025 Fellowship Recipient',
      organization: 'Alzheimer\'s Association International Conference',
      year: '2025',
      description: 'Received fellowship for research on Alzheimer\'s disease subtype discovery using machine learning and neuroimaging.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      pdfLink: './AAIC_Poster1.pdf'
    },
    {
      title: 'First Author Publication',
      organization: 'AAIC 2025 Conference',
      year: '2025',
      description: 'First author on research paper presenting novel ML approach for Alzheimer\'s subtype classification achieving 92% accuracy.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      pdfLink: './AAIC_Poster1.pdf'
    },
    {
      title: 'MSLD 2025 Poster Presentation',
      organization: 'Machine Learning in Drug Discovery Conference',
      year: '2025',
      description: 'Presented research on biomedical knowledge graphs and Graph-RAG systems improving multi-hop QA accuracy by 25%.',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      pdfLink: './MSLD_2025_Poster.pdf'
    },
    {
      title: 'Ace Awards Winner',
      organization: 'Professional Recognition',
      year: '2023',
      description: 'Outstanding performance and contribution in professional role.',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Spot Awards',
      organization: 'Professional Recognition',
      year: '2023',
      description: 'Multiple spot awards for exceptional work and innovation.',
      icon: Award,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      year: '2024',
      description: 'Demonstrates expertise in designing distributed systems on AWS.',
      icon: ExternalLink,
      color: 'from-orange-500 to-red-500',
      link: 'https://aws.amazon.com/certification/'
    },
    {
      title: 'Google Cloud Professional Data Engineer',
      organization: 'Google Cloud',
      year: '2024',
      description: 'Certified in designing and building data processing systems on Google Cloud.',
      icon: ExternalLink,
      color: 'from-blue-500 to-indigo-500',
      link: 'https://cloud.google.com/certification/data-engineer'
    },
    {
      title: 'Microsoft Azure Data Engineer Associate',
      organization: 'Microsoft',
      year: '2023',
      description: 'Certified in implementing and managing data solutions on Azure.',
      icon: ExternalLink,
      color: 'from-blue-600 to-blue-700',
      link: 'https://learn.microsoft.com/certifications/azure-data-engineer/'
    }
  ];

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/50 via-transparent to-neural-50/50 dark:from-primary-900/50 dark:via-transparent dark:to-neural-900/50"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-neural-300/20 to-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-primary-300/20 to-neural-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            Education &{' '}
            <span className="bg-gradient-to-r from-primary-600 to-neural-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My academic journey with key courses, final year project recognition, and professional achievements 
            that have shaped my expertise in artificial intelligence, machine learning, and data engineering.
          </motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 px-6 py-3 rounded-full">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Education</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {edu.institution}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {edu.gpa}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Key Courses
                  </h4>
                  <ul className="space-y-2">
                    {edu.courses.map((course, courseIndex) => (
                      <motion.li
                        key={courseIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: courseIndex * 0.1 }}
                        className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {edu.finalYearProject && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-dark-700">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Final Year Project
                    </h4>
                    <div className="bg-gradient-to-r from-primary-50 to-neural-50 dark:from-primary-900/30 dark:to-neural-900/30 p-4 rounded-xl border border-primary-200/50 dark:border-primary-700/50">
                      <p className="text-sm text-primary-700 dark:text-primary-300 font-medium">
                        {edu.finalYearProject}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 px-6 py-3 rounded-full">
              <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">Awards & Recognition</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${award.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <award.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {award.title}
                </h4>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {award.organization} • {award.year}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {award.description}
                </p>
                {award.pdfLink && (
                  <motion.a
                    href={award.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                  >
                    <span>View PDF</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 px-6 py-3 rounded-full">
              <ExternalLink className="w-6 h-6 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Professional Certifications</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {cert.organization} • {cert.year}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
