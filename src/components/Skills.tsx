import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, Brain, Wrench, BarChart3, Sparkles, ArrowRight, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      name: 'Programming & Core',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      accent: 'from-blue-400 to-cyan-400',
      description: 'Building robust foundations with modern development practices',
      skills: [
        { name: 'Python', logo: '🐍', length: 'short' },
        { name: 'R', logo: '📊', length: 'short' },
        { name: 'C++', logo: '⚡', length: 'short' },
        { name: 'SQL', logo: '🗄️', length: 'short' },
        { name: 'Git', logo: '📝', length: 'short' },
        { name: 'Docker', logo: '🐳', length: 'medium' },
        { name: 'Kubernetes', logo: '☸️', length: 'long' }
      ],
      highlight: 'Python'
    },
    {
      name: 'Data & Cloud Platforms',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      accent: 'from-purple-400 to-pink-400',
      description: 'Orchestrating data flows across enterprise cloud ecosystems',
      skills: [
        { name: 'Azure Synapse', logo: '☁️', length: 'long' },
        { name: 'Azure ADF', logo: '🔧', length: 'medium' },
        { name: 'AWS S3', logo: '☁️', length: 'short' },
        { name: 'AWS Lambda', logo: 'λ', length: 'medium' },
        { name: 'AWS Redshift', logo: '🔴', length: 'medium' },
        { name: 'Databricks', logo: '🧱', length: 'medium' },
        { name: 'Snowflake', logo: '❄️', length: 'medium' },
        { name: 'dbt', logo: '🔄', length: 'short' },
        { name: 'Airflow', logo: '🌪️', length: 'medium' }
      ],
      highlight: 'Azure Synapse'
    },
    {
      name: 'Big Data & Processing',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      accent: 'from-green-400 to-emerald-400',
      description: 'Processing massive datasets with distributed computing',
      skills: [
        { name: 'Hadoop', logo: '🐘', length: 'medium' },
        { name: 'PySpark', logo: '🔥', length: 'medium' },
        { name: 'Delta Lake', logo: '🔺', length: 'medium' },
        { name: 'Azure Event Hubs', logo: '📡', length: 'long' },
        { name: 'FHIR', logo: '🏥', length: 'short' },
        { name: 'Medallion Architecture', logo: '🏅', length: 'long' }
      ],
      highlight: 'PySpark'
    },
    {
      name: 'Analytics & Visualization',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      accent: 'from-orange-400 to-red-400',
      description: 'Transforming raw data into actionable insights',
      skills: [
        { name: 'Pandas', logo: '🐼', length: 'medium' },
        { name: 'NumPy', logo: '🔢', length: 'medium' },
        { name: 'Matplotlib', logo: '📈', length: 'medium' },
        { name: 'Tableau', logo: '📊', length: 'medium' },
        { name: 'Power BI', logo: '💡', length: 'medium' },
        { name: 'ggplot2', logo: '📊', length: 'medium' },
        { name: 'dplyr', logo: '🔧', length: 'short' },
        { name: 'A/B Testing', logo: '🧪', length: 'medium' }
      ],
      highlight: 'Tableau'
    },
    {
      name: 'Machine Learning & AI',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      accent: 'from-indigo-400 to-purple-400',
      description: 'Creating intelligent systems that learn and adapt',
      skills: [
        { name: 'PyTorch', logo: '🔥', length: 'medium' },
        { name: 'TensorFlow', logo: '🧠', length: 'medium' },
        { name: 'Scikit-learn', logo: '🔬', length: 'medium' },
        { name: 'MLflow', logo: '📊', length: 'medium' },
        { name: 'RAG', logo: '🔍', length: 'short' },
        { name: 'Transformers', logo: '🤖', length: 'medium' },
        { name: 'Causal Inference', logo: '🔗', length: 'long' },
        { name: 'GenAI', logo: '✨', length: 'short' },
        { name: 'LangChain', logo: '⛓️', length: 'medium' },
        { name: 'LangGraph', logo: '🕸️', length: 'medium' }
      ],
      highlight: 'PyTorch'
    },
    {
      name: 'Tools & Frameworks',
      icon: Wrench,
      color: 'from-yellow-500 to-orange-500',
      accent: 'from-yellow-400 to-orange-400',
      description: 'Leveraging cutting-edge tools for rapid development',
      skills: [
        { name: 'Whisper', logo: '🤫', length: 'medium' },
        { name: 'GPT-4V', logo: '👁️', length: 'short' },
        { name: 'BGE Embeddings', logo: '🔤', length: 'medium' },
        { name: 'Neo4j', logo: '🕸️', length: 'short' },
        { name: 'FAISS', logo: '🔍', length: 'short' },
        { name: 'Flask', logo: '🍶', length: 'short' },
        { name: 'FastAPI', logo: '⚡', length: 'medium' },
        { name: 'GitHub Actions', logo: '🐙', length: 'medium' },
        { name: 'CI/CD', logo: '🔄', length: 'short' }
      ],
      highlight: 'FastAPI'
    }
  ];

  // Function to determine grid layout based on skill lengths
  const getGridLayout = (skills: any[]) => {
    const shortSkills = skills.filter(s => s.length === 'short');
    const mediumSkills = skills.filter(s => s.length === 'medium');
    const longSkills = skills.filter(s => s.length === 'long');
    
    // Calculate optimal columns based on content
    if (skills.length <= 4) return 'grid-cols-2';
    if (skills.length <= 6) return 'grid-cols-3';
    if (skills.length <= 9) return 'grid-cols-3';
    return 'grid-cols-4';
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-neural-50/30 via-transparent to-primary-50/30 dark:from-neural-900/30 dark:via-transparent dark:to-primary-900/30"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary-300/15 to-neural-300/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-neural-300/15 to-primary-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-200/10 to-neural-200/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-neural-100 dark:from-primary-900/30 dark:to-neural-900/30 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Technical Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
          >
            Crafting{' '}
            <span className="bg-gradient-to-r from-primary-600 via-neural-600 to-primary-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            A comprehensive toolkit for building intelligent systems, processing data at scale, and driving insights through advanced analytics.
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-dark-700/50 h-full overflow-hidden">
                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Category Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: hoveredCategory === index ? 1 : 0, x: hoveredCategory === index ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary-600 dark:text-primary-400"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid Layout */}
                <div className="relative z-10">
                  <div className={`grid ${getGridLayout(category.skills)} gap-3`}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        className={`group/skill relative p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                          skill.name === category.highlight 
                            ? 'bg-gradient-to-r from-primary-50 to-neural-50 dark:from-primary-900/20 dark:to-neural-900/20 border border-primary-200/50 dark:border-primary-700/50' 
                            : 'hover:bg-gray-50 dark:hover:bg-dark-700/50 border border-transparent hover:border-gray-200/50 dark:hover:border-dark-600/50'
                        }`}
                      >
                        <div className="flex flex-col items-center text-center space-y-2">
                          {/* Logo/Icon */}
                          <div className={`text-2xl transition-transform duration-300 group-hover/skill:scale-110 ${
                            skill.name === category.highlight ? 'animate-pulse' : ''
                          }`}>
                            {skill.logo}
                          </div>
                          
                          {/* Skill Name */}
                          <span className={`text-xs font-medium leading-tight ${
                            skill.name === category.highlight 
                              ? 'text-primary-700 dark:text-primary-300' 
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {skill.name}
                          </span>
                          
                          {/* Highlight Indicator */}
                          {skill.name === category.highlight && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5 + skillIndex * 0.1 }}
                              className="absolute -top-1 -right-1 text-primary-500 dark:text-primary-400"
                            >
                              <Zap className="w-3 h-3" />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Subtle Border Glow on Hover */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-50 to-neural-50 dark:from-primary-900/20 dark:to-neural-900/20 px-8 py-4 rounded-2xl border border-primary-200/30 dark:border-primary-700/30">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-neural-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-primary-800 dark:text-primary-200 font-semibold">
                Continuous Innovation
              </p>
              <p className="text-primary-600 dark:text-primary-400 text-sm">
                Embracing emerging technologies and industry best practices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;