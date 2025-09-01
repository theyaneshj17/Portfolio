import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Brain, Bot, User, Download } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isLoading?: boolean;
}

interface ProfileData {
  name: string;
  title: string;
  experience: string;
  education: string;
  skills: string[];
  achievements: string[];
  resumeUrl: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. I can help you learn more about Theyaneshwaran Jayaprakash, his experience, skills, and provide his resume. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Profile data for the chatbot to reference
  const profileData: ProfileData = {
    name: "Theyaneshwaran Jayaprakash",
    title: "AI Engineer & ML Research Engineer",
    experience: "4+ years of experience in AI/ML, currently working as AI Engineer Intern at FocusKPI, Inc. and ML Research Assistant at IU School of Medicine",
    education: "Master's degree in Computer Science from Indiana University, specialized in AI/ML",
    skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Data Engineering", "Python", "TensorFlow", "PyTorch", "AWS", "Azure", "MLOps", "Healthcare Analytics", "Clinical Data Processing"],
    achievements: ["Published research papers", "Multiple certifications (AZ900, DP100, DP900)", "Awards for innovation and performance", "Healthcare technology expertise"],
    resumeUrl: "./Theyaneshwaran_Jayaprakash_Resume.pdf"
  };

  // Enhanced company experience data
  const companyExperience = {
    "UnitedHealth Group": {
      role: "Senior Software Engineer",
      duration: "2021-2023",
      responsibilities: [
        "Led development of healthcare analytics platforms using machine learning",
        "Implemented NLP solutions for clinical document processing",
        "Built data pipelines for healthcare data integration",
        "Collaborated with clinical teams to develop AI-powered diagnostic tools",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["Python", "Machine Learning", "NLP", "Healthcare APIs", "Cloud Computing", "Data Engineering"]
    },
    "FocusKPI": {
      role: "AI Engineer Intern",
      duration: "2024-Present",
      responsibilities: [
        "Developing AI solutions for business intelligence",
        "Implementing machine learning models for data analysis",
        "Working on natural language processing projects"
      ],
      technologies: ["Python", "ML", "NLP", "Data Science"]
    },
    "IU School of Medicine": {
      role: "ML Research Assistant",
      duration: "2023-Present",
      responsibilities: [
        "Researching advanced machine learning algorithms",
        "Publishing papers in AI/ML conferences",
        "Developing innovative solutions for medical data analysis"
      ],
      technologies: ["Research", "Advanced ML", "Medical AI", "Academic Publishing"]
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const callClaudeAPI = async (userMessage: string): Promise<string> => {
    try {
      const apiKey = process.env.REACT_APP_CLAUDE_API_KEY;
      const model = process.env.REACT_APP_CLAUDE_MODEL || 'claude-3-haiku-20240307';
      
      if (!apiKey) {
        throw new Error('Claude API key not found');
      }

      const systemPrompt = `You are an AI assistant for Theyaneshwaran Jayaprakash's portfolio. You have access to his profile information and should provide helpful, professional responses about his background, experience, and skills. 

Profile Information:
- Name: ${profileData.name}
- Title: ${profileData.title}
- Experience: ${profileData.experience}
- Education: ${profileData.education}
- Key Skills: ${profileData.skills.join(', ')}
- Achievements: ${profileData.achievements.join(', ')}

Company Experience:
${Object.entries(companyExperience).map(([company, details]) => 
  `${company} (${details.duration}): ${details.role}
  - Key responsibilities: ${details.responsibilities.join(', ')}
  - Technologies: ${details.technologies.join(', ')}`
).join('\n\n')}

When someone asks about his resume, provide the download link: ${profileData.resumeUrl}

Be professional, informative, and helpful. If someone asks about his experience, skills, or background, provide detailed information. If they want his resume, offer to help them download it.`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: model,
          max_tokens: 1000,
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: userMessage
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`);
      }

      const data = await response.json();
      return data.content[0].text;
    } catch (error) {
      console.error('Claude API error:', error);
      // Fallback to local responses if API fails
      return generateFallbackResponse(userMessage);
    }
  };

  const generateFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for specific company mentions
    if (lowerMessage.includes('unitedhealth') || lowerMessage.includes('united health')) {
      const uhg = companyExperience["UnitedHealth Group"];
      return `${profileData.name} worked at ${Object.keys(companyExperience)[0]} as a ${uhg.role} from ${uhg.duration}. During his time there, he ${uhg.responsibilities[0].toLowerCase()}, ${uhg.responsibilities[1].toLowerCase()}, and ${uhg.responsibilities[2].toLowerCase()}. He worked with technologies like ${uhg.technologies.slice(0, 3).join(', ')} and gained extensive experience in healthcare technology and AI applications.`;
    }
    
    if (lowerMessage.includes('focuskpi') || lowerMessage.includes('focus kpi')) {
      const focuskpi = companyExperience["FocusKPI"];
      return `${profileData.name} is currently working as an ${focuskpi.role} at ${Object.keys(companyExperience)[1]} since ${focuskpi.duration}. He's ${focuskpi.responsibilities[0].toLowerCase()} and ${focuskpi.responsibilities[1].toLowerCase()}.`;
    }
    
    if (lowerMessage.includes('iu') || lowerMessage.includes('indiana university') || lowerMessage.includes('school of medicine')) {
      const iu = companyExperience["IU School of Medicine"];
      return `${profileData.name} serves as an ${iu.role} at ${Object.keys(companyExperience)[2]} since ${iu.duration}. He's ${iu.responsibilities[0].toLowerCase()}, ${iu.responsibilities[1].toLowerCase()}, and ${iu.responsibilities[2].toLowerCase()}.`;
    }
    
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return `I'd be happy to provide ${profileData.name}'s resume! You can download it directly from the portfolio or I can provide the link. His resume contains detailed information about his ${profileData.experience}, education, and technical skills.`;
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return `${profileData.name} has ${profileData.experience}. His key roles include: Senior Software Engineer at UnitedHealth Group (2021-2023) where he led healthcare analytics platforms, AI Engineer Intern at FocusKPI (2024-Present), and ML Research Assistant at IU School of Medicine (2023-Present). His expertise spans machine learning, deep learning, and natural language processing.`;
    }
    
    if (lowerMessage.includes('skills') || lowerMessage.includes('technologies')) {
      return `${profileData.name} is proficient in ${profileData.skills.slice(0, 6).join(', ')}, and many more. His technical expertise covers the full spectrum of AI/ML development, from research to production deployment, with special focus on healthcare analytics and clinical data processing.`;
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('degree')) {
      return `${profileData.name} holds a ${profileData.education} from Indiana University, where he specialized in Artificial Intelligence and Machine Learning. His academic background provides a strong foundation for his research and engineering work.`;
    }
    
    if (lowerMessage.includes('achievements') || lowerMessage.includes('awards')) {
      return `${profileData.name} has received multiple awards including performance awards, spot awards, and has published research papers. He also holds several professional certifications in cloud computing and data platforms, and has expertise in healthcare technology.`;
    }
    
    return `I'd be happy to tell you more about ${profileData.name}! He's a passionate AI Engineer and ML Research Engineer with expertise in machine learning, deep learning, and data engineering. He has significant experience at UnitedHealth Group developing healthcare AI solutions, and is currently working on cutting-edge ML research. What specific aspect would you like to know more about?`;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await callClaudeAPI(userMessage.text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing some technical difficulties. Let me provide you with information from my local knowledge base.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      
      // Add fallback response
      const fallbackResponse = generateFallbackResponse(userMessage.text);
      const fallbackMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: fallbackResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about his experience",
    "What did he do at UnitedHealth Group?",
    "What are his skills?",
    "Can I get his resume?"
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = profileData.resumeUrl;
    link.download = 'Theyaneshwaran_Jayaprakash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary-600 to-neural-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center justify-center glow-hover"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-md h-[600px] bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-neural-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">Portfolio Assistant</h3>
                      <p className="text-sm text-white/80">Powered by Claude Haiku</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-dark-900">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                          : 'bg-gradient-to-br from-neural-500 to-neural-600'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`px-4 py-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-primary-500 to-neural-500 text-white'
                          : 'bg-white dark:bg-dark-700 text-gray-900 dark:text-white border border-gray-200 dark:border-dark-600'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-2 ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-neural-500 to-neural-600 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="px-4 py-3 bg-white dark:bg-dark-700 rounded-2xl border border-gray-200 dark:border-dark-600">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ y: [0, -10, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                              className="w-2 h-2 bg-neural-400 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="p-4 bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
                  <div className="flex justify-center mb-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleResumeDownload}
                      className="px-4 py-2 bg-gradient-to-r from-primary-600 to-neural-600 text-white text-sm rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 text-center">
                    Quick questions:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setInputText(question)}
                        className="px-3 py-2 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200 border border-primary-200/50 dark:border-primary-700/50"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
                <div className="flex space-x-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Theyaneshwaran's profile, experience, or skills..."
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="px-4 py-3 bg-gradient-to-r from-primary-600 to-neural-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
