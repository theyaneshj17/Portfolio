import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Brain, Database, TrendingUp, GraduationCap, Award, Star, Trophy, X, FileText, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<{ 
    pdf: string; 
    image: string;
    title: string; 
    conference: string;
    type: string;
    fellowship: boolean;
  } | null>(null);

  const openPosterModal = (poster: { 
    pdf: string; 
    image: string;
    title: string; 
    conference: string;
    type: string;
    fellowship: boolean;
  }) => {
    setSelectedPoster(poster);
  };

  const closePosterModal = () => {
    setSelectedPoster(null);
  };

  const researchExperience = [
    {
      title: 'ML Research Assistant',
      company: 'IU School of Medicine',
      location: 'Indiana, USA',
      period: 'September 2024 - Present',
      description: 'Conducting cutting-edge research in machine learning and neuroimaging, focusing on Alzheimer\'s disease subtype discovery and validation.',
      technologies: ['PyTorch', 'Gaussian Mixture Models', 'Neuroimaging', 'Statistical Analysis', 'Bayesian MCMC'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Developed self-supervised autoencoder guided by GMM clustering, achieving 92% accuracy in Alzheimer\'s subtype discovery',
        'Validated identified subtypes via multidimensional analysis across neuroimaging and behavioral data domains',
        'Employed ANOVA, hypothesis testing, and Bayesian MCMC inference to quantify statistical significance'
      ],
      poster: {
        pdf: './AAIC_Poster1.pdf',
        image: './AAIC.png',
        link: 'https://epostersonline.com/aaic2025/poster/102531',
        conference: 'AAIC 2025 & AIC 2025',
        type: 'First Author Publication',
        fellowship: true,
        title: 'Deep Learning Framework for Characterizing Tau-PET Spatial Heterogeneity and Exploring Functional Connectivity in Alzheimer\'s Disease: A Self-supervised Approach'
      }
    },
    {
      title: 'NLP Research Engineer',
      company: 'Research Project',
      location: 'Remote',
      period: 'January 2025 - Present',
      description: 'Improving LLM reasoning through knowledge graphs and biomedical ontology enrichment.',
      technologies: ['Neo4j', 'FAISS', 'Cosine Similarity', 'Flask', 'Knowledge Graphs', 'Graph-RAG'],
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Built ontology-enriched biomedical Knowledge Graph in Neo4j using two-stage LLM-based triple extraction pipeline',
        'Improved multi-hop QA accuracy by 25% via hybrid Graph-RAG system integrating symbolic retrieval and semantic ranking'
      ],
      poster: {
        pdf: './MSLD_2025_Poster.pdf',
        image: './MSLD.png',
        link: 'https://msld.ai/',
        conference: 'MSLD 2025',
        type: 'Poster Presentation',
        fellowship: false,
        title: 'Improving LLM Reasoning Through Knowledge Graphs'
      }
    }
  ];

  const professionalExperience = [
    {
      title: 'AI Engineer Intern',
      company: 'FocusKPI, Inc',
      location: 'California, USA',
      period: 'June 2025 - Present',
      description: 'Architecting and deploying scalable AI systems for medical device analysis and multi-modal AI agents.',
      technologies: ['AWS ECS', 'RAG', 'BGE Embeddings', 'Whisper', 'GPT-4V', 'LangChain', 'LangGraph'],
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Architected and deployed scalable Model Context Protocol (MCP) client-server system on AWS ECS, processing 75,000+ FDA medical device records',
        'Engineered real-time multi-modal AI agent with desktop overlay integration, achieving sub-5 second latency for speech transcription and visual analysis',
        'Orchestrated multi-agent workflows using LangChain and LangGraph for context management across audio, visual, and text data streams'
      ]
    },
    {
      title: 'Senior Data Engineer',
      company: 'UnitedHealth Group',
      location: 'Chennai, India',
      period: 'March 2023 - August 2024',
      description: 'Led design and implementation of scalable data infrastructure supporting AI/ML workflows and data migration.',
      technologies: ['Python', 'Apache Spark', 'Azure Synapse', 'Snowflake', 'dbt', 'Power BI', 'Microsoft Fabric'],
      icon: Database,
      color: 'from-orange-500 to-red-500',
      achievements: [
        'Optimized ELT efficiency by parallelizing workflows and tuning SQL performance, reducing monthly processing time from 5 to 2 days',
        'Cut compute costs by 50% (6K to 3K Data Warehouse Units) through optimization',
        'Migrated 50TB+ data from Azure Synapse to Snowflake using dbt and PySpark, implementing cross-cloud ETL pipeline in ADF',
        'Developed Power BI semantic models in Microsoft Fabric, optimizing Direct Lake/Query modes with row-level security'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'UnitedHealth Group',
      location: 'Hyderabad, India',
      period: 'October 2020 - February 2023',
      description: 'Built data pipelines and infrastructure for healthcare data processing and API optimization.',
      technologies: ['Azure Synapse', 'Databricks', 'Delta Lake', 'PySpark', 'Azure Event Hubs', 'C#', 'GitHub Actions'],
      icon: Database,
      color: 'from-indigo-500 to-blue-500',
      achievements: [
        'Integrated 25+ data sources from Oracle, Teradata, and Databricks into Azure Synapse using Medallion architecture',
        'Built FHIR streaming pipeline on Databricks with Delta Lake and PySpark, processing 5,000+ records/min from Azure Event Hubs',
        'Migrated APIs from Azure VMs to Container Instances, enabling cross-cloud Snowflake queries, reducing costs by 60% ($30K annually)',
        'Automated CI/CD for 7 repositories with GitHub Actions, halving release cycles and improving deployment reliability'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
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
            
            <span className="bg-gradient-to-r from-primary-600 to-neural-600 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My journey through the world of AI, machine learning, and data engineering. 
            Each role has shaped my expertise and passion for building intelligent systems.
          </motion.p>
        </motion.div>

        {/* Research Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full">
              <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200">Research Experience</h3>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400"></div>

            <div className="space-y-12">
              {researchExperience.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-start gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'
                  }`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <experience.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                              {experience.title}
                            </h3>
                            <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Two Column Layout */}
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Main Content (2/3 width) */}
                        <div className="lg:col-span-2">
                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            {experience.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                              Technologies & Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200/50 dark:border-purple-700/50"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Key Achievements */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, achievementIndex) => (
                                <motion.li
                                  key={achievementIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                                  className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                                >
                                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Column - Poster Section (1/3 width) */}
                        <div className="lg:col-span-1">
                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-purple-200/50 dark:border-purple-700/50 h-full">
                            <div className="text-center">
                              {/* Tags */}
                              <div className="flex flex-col space-y-2 mb-4">
                                {experience.poster.fellowship && (
                                  <div className="flex items-center justify-center space-x-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                                    <Trophy className="w-3 h-3 text-yellow-600" />
                                    <span className="text-xs font-semibold text-yellow-700">Fellowship</span>
                                  </div>
                                )}
                                <div className="flex items-center justify-center space-x-1 bg-purple-500/20 px-2 py-1 rounded-full">
                                  <Star className="w-3 h-3 text-purple-600" />
                                  <span className="text-xs font-semibold text-purple-700">{experience.poster.type}</span>
                                </div>
                              </div>

                              {/* Conference */}
                              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4">
                                {experience.poster.conference}
                              </p>
                              
                              {/* Poster Image - Clickable to open PDF */}
                              <div className="mb-4">
                                <div className="group cursor-pointer" onClick={() => openPosterModal(experience.poster)}>
                                  <div className="relative overflow-hidden rounded-lg border-2 border-purple-200 dark:border-purple-700">
                                    <img 
                                      src={experience.poster.image} 
                                      alt={`${experience.poster.conference} Poster`}
                                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                      <div className="text-white text-center">
                                        <p className="text-xs font-semibold">Click to View PDF</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Conference Link - Only for AAIC */}
                              {experience.poster.conference.includes('AAIC') && (
                                <a 
                                  href={experience.poster.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-1 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  <span>Official Site</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 px-6 py-3 rounded-full">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Professional Experience</h3>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400"></div>

            <div className="space-y-12">
              {professionalExperience.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-start gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'
                  }`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-dark-700/50"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <experience.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {experience.title}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                              className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-neural-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto glow-hover"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View Full Resume</span>
          </motion.button>
        </motion.div>
      </div>

      {/* PDF Poster Modal */}
      {selectedPoster && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closePosterModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-6xl h-[90vh] bg-white dark:bg-dark-800 shadow-2xl rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePosterModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
              <h3 className="text-xl font-bold mb-1">
                {selectedPoster.title}
              </h3>
              <p className="text-purple-100">
                {selectedPoster.conference} • {selectedPoster.type}
                {selectedPoster.fellowship && ' • Fellowship Recipient'}
              </p>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-full pt-20">
              <iframe
                src={`${selectedPoster.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-0"
                title={`${selectedPoster.conference} Poster`}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Experience;