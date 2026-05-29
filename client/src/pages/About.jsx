import React from 'react';
import { Zap, Brain, Database, Rocket, Shield, Code } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Chatbot",
      description: "Powered by cutting-edge AI technology to provide intelligent, contextual responses to your queries."
    },
    {
      icon: Database,
      title: "Custom Data Training",
      description: "Train Nova AI on your own data to create personalized AI models tailored to your specific needs."
    },
    {
      icon: Zap,
      title: "Real-Time Responses",
      description: "Get instant, lightning-fast responses to your questions with our optimized AI engine."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data and conversations are encrypted and kept private on our secure servers."
    },
    {
      icon: Code,
      title: "Easy Integration",
      description: "Integrate Nova AI into your applications with our simple and well-documented API."
    },
    {
      icon: Rocket,
      title: "Continuous Innovation",
      description: "Always improving with new features and capabilities being added regularly."
    }
  ];

  return (
    <div className='min-h-screen bg-[#273449] text-white py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent'>
            About Nova AI
          </h1>
          <p className='text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
            Nova AI is an innovative artificial intelligence platform designed to revolutionize how you interact with technology. 
            Combining advanced conversational AI with personalized learning capabilities.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className='bg-[#273a57] rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-indigo-500 transition duration-300 transform hover:scale-105'
              >
                <div className='bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <IconComponent size={24} className='text-indigo-400' />
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* What is Nova AI Section */}
        <div className='bg-[#273a57] rounded-xl p-6 sm:p-8 lg:p-12 border border-gray-700 mb-12 sm:mb-16'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6'>What is Nova AI?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold mb-3 text-indigo-400'>Intelligent Chatbot</h3>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed mb-6'>
                Nova AI functions as a sophisticated chatbot capable of understanding natural language, learning from context, 
                and providing meaningful responses. Whether you need quick answers, detailed explanations, or creative assistance, 
                Nova AI is here to help.
              </p>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                Our conversational engine is trained on vast amounts of data and continuously learns from user interactions to 
                improve its accuracy and relevance.
              </p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold mb-3 text-indigo-400'>Your Own AI Model</h3>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed mb-6'>
                Upload your own data and train Nova AI to understand your specific domain, business processes, or unique requirements. 
                Create a personalized AI model that speaks your language and understands your context.
              </p>
              <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                Whether it's customer support, knowledge base Q&A, or domain-specific assistance, Nova AI adapts to your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Development Status Section */}
        <div className='bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-xl p-6 sm:p-8 lg:p-12 border border-indigo-700/50 mb-12 sm:mb-16'>
          <div className='flex items-center gap-3 mb-4'>
            <Rocket size={28} className='text-indigo-400' />
            <h2 className='text-2xl sm:text-3xl font-bold'>Currently in Development</h2>
          </div>
          <p className='text-gray-300 text-sm sm:text-base leading-relaxed mb-4'>
            Nova AI is actively being developed with exciting new features and improvements being added regularly. 
            We're constantly working to enhance performance, add new capabilities, and expand our AI's understanding.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
            <div className='bg-[#273a57]/50 rounded-lg p-4'>
              <p className='text-indigo-300 font-semibold mb-2'>🚀 Coming Soon</p>
              <ul className='text-gray-400 text-sm space-y-1'>
                <li>• Advanced analytics dashboard</li>
                <li>• Multi-language support</li>
                <li>• Real-time collaboration</li>
              </ul>
            </div>
            <div className='bg-[#273a57]/50 rounded-lg p-4'>
              <p className='text-indigo-300 font-semibold mb-2'>✨ Improvements</p>
              <ul className='text-gray-400 text-sm space-y-1'>
                <li>• Enhanced model accuracy</li>
                <li>• Faster processing speed</li>
                <li>• Better customization options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Nova AI */}
        <div className='bg-[#273a57] rounded-xl p-6 sm:p-8 lg:p-12 border border-gray-700'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-8'>Why Choose Nova AI?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/20'>
                  <span className='text-indigo-400 font-bold'>✓</span>
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>User-Friendly Interface</h3>
                <p className='text-gray-300 text-sm sm:text-base'>Clean, intuitive design that makes interacting with AI simple and enjoyable.</p>
              </div>
            </div>
            
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/20'>
                  <span className='text-indigo-400 font-bold'>✓</span>
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Customizable & Scalable</h3>
                <p className='text-gray-300 text-sm sm:text-base'>From personal projects to enterprise solutions, Nova AI scales with your needs.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/20'>
                  <span className='text-indigo-400 font-bold'>✓</span>
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Data Privacy</h3>
                <p className='text-gray-300 text-sm sm:text-base'>Your data is secure and encrypted. We prioritize your privacy and security.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500/20'>
                  <span className='text-indigo-400 font-bold'>✓</span>
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Active Development</h3>
                <p className='text-gray-300 text-sm sm:text-base'>Continuous updates and improvements to keep Nova AI at the forefront of AI technology.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className='text-center mt-12 sm:mt-16'>
          <p className='text-gray-400 text-sm sm:text-base'>
            Ready to experience the power of Nova AI? Start chatting now and discover what our AI can do for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
