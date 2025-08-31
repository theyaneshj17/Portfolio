import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ExternalLink, Github, Code, Brain, Database, Globe, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'ai-ml', name: 'AI/ML', icon: Brain },
    { id: 'data', name: 'Data Engineering', icon: Database },
    { id: 'research', name: 'Research', icon: Globe },
    { id: 'tools', name: 'Tools & Platforms', icon: Zap }
  ];

  const projects = [
    {
      id: 1,
      title: 'IntelliFlow Enterprise AI Orchestration System',
      description: 'LLM-powered workflow orchestration with intent classification across MCP servers, constructing Neo4j knowledge graph with 50K+ entities enabling multi-hop reasoning for IT, data, and research automation.',
      image: './MCP.png',
      category: 'ai-ml',
      technologies: ['LLM', 'Neo4j', 'FastAPI', 'MCP', 'Knowledge Graphs', 'Graph-RAG'],
      github: 'https://github.com/theyaneshj17/IntelliFlow---Enterprise-AI-Orchestration-System',
      features: [
        'LLM-powered workflow orchestration',
        'Intent classification across MCP servers',
        'Neo4j knowledge graph with 50K+ entities',
        'Multi-hop reasoning capabilities'
      ],
      impact: 'Enterprise automation for IT, data, and research workflows'
    },
    {
      id: 2,
      title: 'Distributed Data Warehouse Platform',
      description: 'End-to-end ELT pipeline processing 6M+ reviews using Python from GCS to MongoDB (Bronze), PySpark transformations on Dataproc (Silver), and dimensional modeling in BigQuery (Gold layer).',
      image: './gcp.png',
      category: 'data',
      technologies: ['GCP', 'PySpark', 'BigQuery', 'Power BI', 'MongoDB', 'Dataproc'],
      github: 'https://github.com/theyaneshj17/yelp-us-business-insights-gcp',
      features: [
        'End-to-end ELT pipeline',
        '6M+ reviews processing',
        'Bronze-Silver-Gold architecture',
        'Interactive Power BI dashboards'
      ],
      impact: 'Regional insights across 120K+ businesses and 500K+ users'
    },
    {
      id: 3,
      title: 'Video Intelligence Microservices Platform',
      description: 'Distributed video analysis system leveraging FastAPI microservices, Kafka message queues, and Redis caching to achieve 90%+ cache hit rates while converting YouTube content into business insights.',
      image: './Microservices.png',
      category: 'ai-ml',
      technologies: ['Docker', 'FastAPI', 'Kafka', 'Redis', 'LangChain', 'ChromaDB'],
      github: 'https://github.com/theyaneshj17/video-intelligence',
      features: [
        'Distributed video analysis',
        'FastAPI microservices',
        'Kafka message queues',
        'RAG-powered transcript analysis'
      ],
      impact: '90%+ cache hit rates, scalable video content analysis'
    },
    {
      id: 4,
      title: 'Biomedical Knowledge Graph & Graph-RAG',
      description: 'Ontology-enriched biomedical Knowledge Graph in Neo4j using two-stage LLM-based triple extraction pipeline, improving multi-hop QA accuracy by 25% via hybrid Graph-RAG system.',
      image: './MSLD.png',
      category: 'research',
      technologies: ['Neo4j', 'FAISS', 'Cosine Similarity', 'Flask', 'Knowledge Graphs', 'Graph-RAG'],
      github: 'https://github.com/theyaneshj17/biomedical-kg',
      features: [
        'Biomedical Knowledge Graph',
        'LLM-based triple extraction',
        'Hybrid Graph-RAG system',
        'Multi-hop QA improvement'
      ],
      impact: '25% improvement in multi-hop QA accuracy (Poster, MSLD 2025)'
    },
    {
      id: 5,
      title: 'Alzheimer\'s Subtype Discovery System',
      description: 'Self-supervised autoencoder guided by Gaussian Mixture Model clustering for Alzheimer\'s disease subtype discovery, achieving 92% accuracy in subtype classification.',
      image: './AAIC.png',
      category: 'research',
      technologies: ['PyTorch', 'Gaussian Mixture Models', 'Autoencoders', 'Neuroimaging', 'Statistical Analysis'],
      github: 'https://github.com/theyaneshj17/alzheimers-discovery',
      features: [
        'Self-supervised autoencoder',
        'GMM clustering guidance',
        'Neuroimaging analysis',
        'Statistical validation'
      ],
      impact: '92% accuracy in Alzheimer\'s subtype discovery (First Author, AAIC 2025)'
    },
    {
      id: 6,
      title: 'Healthcare Data Pipeline & API Optimization',
      description: 'FHIR streaming pipeline on Databricks with Delta Lake and PySpark, processing 5,000+ records/min from Azure Event Hubs, with API migration from Azure VMs to Container Instances.',
      image: './Microservices.png',
      category: 'data',
      technologies: ['Azure Synapse', 'Databricks', 'Delta Lake', 'PySpark', 'Azure Event Hubs', 'C#'],
      github: 'https://github.com/theyaneshj17/healthcare-pipeline',
      features: [
        'FHIR streaming pipeline',
        '5,000+ records/min processing',
        'Delta Lake integration',
        'API optimization'
      ],
      impact: '60% cost reduction ($30K annually), 4x faster execution'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/50 via-transparent to-neural-50/50 dark:from-primary-900/50 dark:via-transparent dark:to-neural-900/50"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-neural-300/20 to-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-primary-300/20 to-neural-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            Featured{' '}
            <span className="bg-gradient-to-r from-primary-600 to-neural-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my work in artificial intelligence, machine learning, and data engineering. 
            Each project represents a unique challenge and innovative solution.
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-dark-700/50 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-neural-100 dark:from-primary-900/30 dark:to-neural-900/30 overflow-hidden">
                  <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
                  {project.image && project.image !== '/api/placeholder/400/300' ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-neural-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Code className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay with GitHub link */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-600 transition-colors duration-300"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium border border-primary-200/50 dark:border-primary-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-xs">
                          <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/theyaneshj17"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-neural-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto glow-hover"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
