import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Brain, Code, Database, Cloud, Wrench, TrendingUp, Zap, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-ml', name: 'AI/ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'programming', name: 'Programming', icon: Code, color: 'from-green-500 to-emerald-500' },
    { id: 'data', name: 'Data Engineering', icon: Database, color: 'from-orange-500 to-red-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-indigo-500 to-blue-500' },
    { id: 'tools', name: 'Tools & Frameworks', icon: Wrench, color: 'from-yellow-500 to-orange-500' }
  ];

  const skills = [
    // AI/ML Skills
    {
      name: 'Machine Learning',
      category: 'ai-ml',
      level: 'Advanced',
      description: 'Deep understanding of ML algorithms, model training, and evaluation',
      technologies: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Deep Learning',
      category: 'ai-ml',
      level: 'Advanced',
      description: 'Expertise in neural networks, CNNs, RNNs, and transformer architectures',
      technologies: ['PyTorch', 'TensorFlow', 'Keras', 'Transformers'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Natural Language Processing',
      category: 'ai-ml',
      level: 'Advanced',
      description: 'Advanced NLP techniques including BERT, GPT, and custom language models',
      technologies: ['Hugging Face', 'SpaCy', 'NLTK', 'BERT'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Computer Vision',
      category: 'ai-ml',
      level: 'Intermediate',
      description: 'Image processing, object detection, and computer vision applications',
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },

    // Programming Skills
    {
      name: 'Python',
      category: 'programming',
      level: 'Expert',
      description: 'Primary language for AI/ML development and data science',
      technologies: ['Python 3.x', 'NumPy', 'Pandas', 'Matplotlib'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'JavaScript/TypeScript',
      category: 'programming',
      level: 'Intermediate',
      description: 'Full-stack development and interactive web applications',
      technologies: ['ES6+', 'React', 'Node.js', 'TypeScript'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'SQL & NoSQL',
      category: 'programming',
      level: 'Advanced',
      description: 'Database design, optimization, and complex querying',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },

    // Data Engineering Skills
    {
      name: 'Data Processing',
      category: 'data',
      level: 'Advanced',
      description: 'Large-scale data processing and ETL pipeline development',
      technologies: ['Apache Spark', 'Pandas', 'Dask', 'Apache Beam'],
      icon: Database,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Data Architecture',
      category: 'data',
      level: 'Advanced',
      description: 'Designing scalable data infrastructure and data lakes',
      technologies: ['Data Lakes', 'Data Warehouses', 'ETL/ELT', 'Data Modeling'],
      icon: Database,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Big Data Technologies',
      category: 'data',
      level: 'Advanced',
      description: 'Handling petabytes of data with distributed systems',
      technologies: ['Hadoop', 'Spark', 'Kafka', 'Airflow'],
      icon: Database,
      color: 'from-orange-500 to-red-500'
    },

    // Cloud & DevOps Skills
    {
      name: 'Cloud Platforms',
      category: 'cloud',
      level: 'Advanced',
      description: 'Multi-cloud deployment and infrastructure management',
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes'],
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'DevOps & CI/CD',
      category: 'cloud',
      level: 'Intermediate',
      description: 'Automated deployment and infrastructure as code',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Monitoring & Logging',
      category: 'cloud',
      level: 'Intermediate',
      description: 'System monitoring, alerting, and observability',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger'],
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500'
    },

    // Tools & Frameworks
    {
      name: 'MLOps Tools',
      category: 'tools',
      level: 'Intermediate',
      description: 'Machine learning model lifecycle management',
      technologies: ['MLflow', 'Kubeflow', 'Weights & Biases', 'DVC'],
      icon: Wrench,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Research Tools',
      category: 'tools',
      level: 'Advanced',
      description: 'Academic research and experimentation frameworks',
      technologies: ['Jupyter', 'LaTeX', 'Git', 'Docker'],
      icon: Wrench,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'from-green-500 to-emerald-500';
      case 'Advanced':
        return 'from-blue-500 to-cyan-500';
      case 'Intermediate':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary-50/50 via-transparent to-neural-50/50 dark:from-primary-900/50 dark:via-transparent dark:to-neural-900/50"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-neural-300/20 to-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-br from-primary-300/20 to-neural-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
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
            Technical{' '}
            <span className="bg-gradient-to-r from-primary-600 to-neural-600 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit of technologies and methodologies that enable me to 
            build innovative AI solutions and robust data systems.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-neural-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-dark-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50 overflow-hidden"
            >
              {/* Skill Header */}
              <div className={`p-6 bg-gradient-to-br ${skill.color} text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-white/80 text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>

              {/* Skill Content */}
              <div className="p-6">
                {/* Skill Level */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Skill Level
                    </span>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} text-white`}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Neural Network Visualization */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-dark-700">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className={`w-2 h-2 rounded-full animate-neural-pulse ${
                          i < (skill.level === 'Expert' ? 5 : skill.level === 'Advanced' ? 4 : 3)
                            ? 'bg-gradient-to-r from-primary-500 to-neural-500' 
                            : 'bg-gray-300 dark:bg-dark-600'
                        }`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-2">
                    Skill Level: {skill.level}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-neural-50 dark:from-primary-900/30 dark:to-neural-900/30 rounded-2xl p-8 border border-primary-200/50 dark:border-primary-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm constantly expanding my skill set through research, experimentation, and staying 
              current with the latest developments in AI/ML. Every project is an opportunity to 
              learn and grow.
            </p>
            <div className="flex justify-center items-center space-x-6 mt-6">
              {[TrendingUp, Zap, Globe].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-neural-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
