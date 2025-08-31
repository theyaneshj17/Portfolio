import React from 'react';
import { motion } from 'framer-motion';

import { Quote, Star, User, Linkedin, ExternalLink } from 'lucide-react';

const Recommendations: React.FC = () => {
  const recommendations = [
    {
      name: 'Samson Stubbs',
      title: 'Director of Data Engineering',
      company: 'UnitedHealth Group',
      avatar: './images/profile-photo.png',
      text: 'I am writing to wholeheartedly recommend Theyanesh for any software engineering or data science position for which he might apply. In my role as the Director of Data Engineering, I had the pleasure of working closely with him for the past three years. During this time, he has not only demonstrated exceptional technical prowess but has also established himself as an invaluable asset to our team.',
      rating: 5,
      linkedin: 'https://linkedin.com/in/samson-stubbs-0b12ba5b/',
      relationship: 'Former Director'
    },
    {
      name: 'Saurabh Srivastava',
      title: 'Senior Software Engineer Manager',
      company: 'UnitedHealth Group',
      avatar: './images/profile-photo.png',
      text: 'I had the pleasure of working with Theyaneshwaran on an enterprise analytical platform. Despite joining as a fresher, Theyaneshwaran quickly mastered the intricacies of the product and underlying technologies. His ability to learn swiftly and his enthusiasm for tackling complex problems have made him an invaluable team player.',
      rating: 5,
      linkedin: 'https://linkedin.com/in/theyaneshj17/details/recommendations/?detailScreenTabIndex=0',
      relationship: 'Former Manager'
    },
    {
      name: 'Kalyan Kumar',
      title: 'Technical Lead',
      company: 'UnitedHealth Group',
      avatar: './images/profile-photo.png',
      text: 'Theyanesh demonstrates exceptional intelligence, meticulousness, and reliability as a developer. Unlike many others who hastily complete tasks, Theyanesh takes the time to ask relevant questions, ensuring that the work aligns precisely with the requirements. His strong work ethic allows him to take ownership of tasks and see them through to completion.',
      rating: 5,
      linkedin: 'https://linkedin.com/in/kalyan-kumar-281020179/',
      relationship: 'Technical Lead'
    }
  ];

  const endorsements = [
    { skill: 'Machine Learning', count: 47, endorsers: ['Dr. Sarah J.', 'Michael C.', 'Dr. Emily R.', 'Alex T.'] },
    { skill: 'Python', count: 52, endorsers: ['Dr. Sarah J.', 'Michael C.', 'Dr. Emily R.', 'Alex T.', 'Dr. Priya P.'] },
    { skill: 'Data Engineering', count: 43, endorsers: ['Michael C.', 'Alex T.', 'David K.', 'Dr. Priya P.'] },
    { skill: 'Deep Learning', count: 38, endorsers: ['Dr. Sarah J.', 'Dr. Emily R.', 'Dr. Priya P.', 'Alex T.'] },
    { skill: 'AWS', count: 35, endorsers: ['Michael C.', 'David K.', 'Alex T.', 'Dr. Sarah J.'] },
    { skill: 'PyTorch', count: 41, endorsers: ['Dr. Sarah J.', 'Dr. Emily R.', 'Dr. Priya P.', 'Alex T.', 'Michael C.'] },
    { skill: 'Neo4j', count: 28, endorsers: ['Dr. Priya P.', 'Alex T.', 'Dr. Emily R.'] },
    { skill: 'Apache Spark', count: 32, endorsers: ['Michael C.', 'David K.', 'Alex T.'] }
  ];

  return (
    <section id="recommendations" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-neural-50/50 via-transparent to-primary-50/50 dark:from-neural-900/50 dark:via-transparent dark:to-primary-900/50"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-br from-primary-300/20 to-neural-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-br from-neural-300/20 to-primary-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
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
            Professional{' '}
            <span className="bg-gradient-to-r from-primary-600 to-neural-600 bg-clip-text text-transparent">
              Recommendations
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Endorsements and recommendations from colleagues, managers, and research collaborators 
            who have witnessed my work and contributions firsthand.
          </motion.p>
        </motion.div>

        {/* Recommendations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary-400 dark:text-primary-500" />
                  <div className="flex space-x-1">
                    {[...Array(rec.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Recommendation Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{rec.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-neural-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {rec.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {rec.name}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 text-xs">
                      {rec.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {rec.company}
                    </p>
                  </div>
                </div>

                {/* Relationship & LinkedIn */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {rec.relationship}
                  </span>
                  <motion.a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 text-xs"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>View Profile</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Endorsements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 px-6 py-3 rounded-full">
              <User className="w-6 h-6 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Skill Endorsements</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {endorsements.map((endorsement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50 text-center"
              >
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                  {endorsement.skill}
                </h4>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-3">
                  {endorsement.count}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  endorsements
                </p>
                
                {/* Top Endorsers */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                    Top Endorsers
                  </p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {endorsement.endorsers.slice(0, 3).map((endorser, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                      >
                        {endorser}
                      </span>
                    ))}
                    {endorsement.endorsers.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                        +{endorsement.endorsers.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 glow-hover"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
