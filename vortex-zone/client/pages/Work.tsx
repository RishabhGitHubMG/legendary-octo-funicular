import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Clock, Users, Target } from 'lucide-react';

export default function Work() {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const caseStudies = [
    {
      id: 1,
      title: 'Customer Support AI Revolution',
      company: 'TechCorp',
      industry: 'SaaS / Technology',
      emoji: '💬',
      excerpt: 'How we helped a customer support team deliver 70% faster responses while maintaining human touch.',
      challenge: 'TechCorp was facing overwhelming customer support volume, with response times stretching to 48 hours and customer satisfaction scores dropping below 60%. Their human team was struggling to scale while maintaining quality.',
      solution: 'We implemented a hybrid AI-human support system using natural language processing to handle common queries while seamlessly escalating complex issues to human agents with full context. The system learns from each interaction to improve over time.',
      results: {
        'Response Time': { before: '48h', after: '2h', improvement: '-95%', icon: '⚡' },
        'Satisfaction': { before: '58%', after: '85%', improvement: '+47%', icon: '😊' },
        'Cost Reduction': { before: 'High', after: 'Reduced 40%', improvement: '-40%', icon: '💰' },
        'Resolution Rate': { before: '65%', after: '88%', improvement: '+35%', icon: '✅' }
      },
      timeline: '16 weeks',
      team: '4 engineers, 1 project manager',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'AWS'],
      impact: 'Generated $2.3M additional revenue through improved customer retention',
      testimonial: {
        quote: 'FutureWeb AI transformed how we serve customers. Their solution kept our team at the center of every decision while delivering impressive efficiency gains.',
        author: 'Sarah Chen',
        role: 'CTO, TechCorp'
      }
    },
    {
      id: 2,
      title: 'Healthcare Diagnosis AI System',
      company: 'HealthPlus',
      industry: 'Healthcare',
      emoji: '🏥',
      excerpt: 'Diagnosis assistance system improving accuracy by 87% and helping doctors make better decisions.',
      challenge: 'Healthcare professionals were struggling with diagnostic consistency, and patient wait times were increasing. The system needed to enhance human expertise, not replace it.',
      solution: 'We built an AI-assisted diagnosis system that analyzes patient data and medical imaging to provide evidence-based recommendations. The system highlights key findings and confidence levels, empowering doctors with data-driven insights.',
      results: {
        'Diagnostic Accuracy': { before: '82%', after: '95%', improvement: '+16%', icon: '🎯' },
        'Doctor Confidence': { before: '72%', after: '91%', improvement: '+26%', icon: '💪' },
        'Patient Outcomes': { before: 'Baseline', after: '+18% improvement', improvement: '+18%', icon: '❤️' },
        'Processing Time': { before: '45min', after: '8min', improvement: '-82%', icon: '⏱️' }
      },
      timeline: '20 weeks',
      team: '5 engineers, 2 medical advisors, 1 PM',
      technologies: ['Computer Vision', 'Deep Learning', 'TensorFlow', 'Django', 'Docker'],
      impact: 'Helped diagnose 5,000+ patients with improved accuracy and reduced errors by 85%',
      testimonial: {
        quote: 'This system made our team better at their jobs. It\'s like having a senior consultant reviewing every case with you. That\'s the gold standard for medical AI.',
        author: 'Dr. Michael Rivera',
        role: 'Chief of Radiology, HealthPlus'
      }
    },
    {
      id: 3,
      title: 'Fraud Detection Platform',
      company: 'FinanceWise',
      industry: 'Financial Services',
      emoji: '🔒',
      excerpt: 'Real-time fraud detection reducing financial losses by 65% with minimal false positives.',
      challenge: 'FinanceWise was losing millions annually to fraudulent transactions. Existing systems had high false positive rates, frustrating customers with blocked legitimate transactions.',
      solution: 'We developed a sophisticated anomaly detection system using gradient boosting and neural networks, analyzing transaction patterns in real-time. The system learns from confirmed frauds to adapt to new attack patterns.',
      results: {
        'Fraud Detection': { before: '68%', after: '94%', improvement: '+38%', icon: '🎯' },
        'False Positives': { before: '12%', after: '2.3%', improvement: '-81%', icon: '✨' },
        'Loss Reduction': { before: '$4.2M/year', after: '$1.5M/year', improvement: '-65%', icon: '💰' },
        'Customer Complaints': { before: 'High', after: 'Down 78%', improvement: '-78%', icon: '😊' }
      },
      timeline: '14 weeks',
      team: '3 engineers, 1 data scientist, 1 PM',
      technologies: ['XGBoost', 'Neural Networks', 'Real-time Processing', 'Kafka', 'PostgreSQL'],
      impact: 'Prevented $2.7M in fraud losses while maintaining 97.7% customer transaction approval rate',
      testimonial: {
        quote: 'The system caught sophisticated fraud attempts we didn\'t even know were happening. More importantly, our customers are happier with fewer false positives.',
        author: 'Jennifer Walsh',
        role: 'VP Risk Management, FinanceWise'
      }
    },
    {
      id: 4,
      title: 'Personalized Learning Platform',
      company: 'EduFlow',
      industry: 'EdTech',
      emoji: '📚',
      excerpt: 'AI-powered learning paths improving student outcomes by 52% and engagement by 68%.',
      challenge: 'EduFlow\'s one-size-fits-all curriculum wasn\'t effective for diverse learning styles. Student engagement and completion rates were stagnating.',
      solution: 'We created an adaptive learning system that personalizes content, pacing, and teaching methods based on individual student performance and learning preferences. The system recommends optimal learning sequences and identifies struggling students early.',
      results: {
        'Learning Outcomes': { before: 'Baseline', after: '+52% improvement', improvement: '+52%', icon: '📈' },
        'Engagement': { before: '45%', after: '76%', improvement: '+68%', icon: '🎉' },
        'Completion Rate': { before: '62%', after: '84%', improvement: '+35%', icon: '✅' },
        'Time to Mastery': { before: '8.5 weeks', after: '5.2 weeks', improvement: '-39%', icon: '⚡' }
      },
      timeline: '18 weeks',
      team: '4 engineers, 1 education specialist, 1 PM',
      technologies: ['Collaborative Filtering', 'NLP', 'React', 'Python', 'MongoDB'],
      impact: '10,000+ students engaged with personalized learning, 2,400 hours saved annually',
      testimonial: {
        quote: 'Students are learning faster and enjoying it more. Parents love seeing their kids engaged with their education. This is what EdTech should be.',
        author: 'David Kumar',
        role: 'Founder & CEO, EduFlow'
      }
    }
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-py bg-gradient-to-br from-white via-warmgray-50 to-white">
        <div className="container-tight max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Case Studies
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            AI Solutions That <span className="text-gradient">Deliver Results</span>
          </h1>
          
          <p className="text-xl text-warmgray-600 mb-12">
            Explore how we've helped leading organizations transform their operations with practical, ethical AI solutions that drive measurable business impact.
          </p>

          {/* Case Study Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudies.map((study, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCase(idx)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedCase === idx
                    ? 'border-coral bg-coral/5'
                    : 'border-warmgray-200 hover:border-coral'
                }`}
              >
                <div className="text-3xl mb-2">{study.emoji}</div>
                <div className="text-sm font-semibold text-charcoal">{study.company}</div>
                <div className="text-xs text-warmgray-600">{study.industry}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="container-tight max-w-5xl">
          <div className="bg-white rounded-2xl overflow-hidden border border-warmgray-200 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image/Visual */}
              <div className="h-64 lg:h-full bg-gradient-to-br from-coral/20 to-teal/20 flex items-center justify-center">
                <div className="text-9xl">{currentCase.emoji}</div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  Featured Case Study
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                  {currentCase.title}
                </h2>

                <p className="text-lg text-warmgray-600 mb-8">
                  {currentCase.excerpt}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-warmgray-50 rounded-xl border border-warmgray-200">
                  <div>
                    <div className="text-2xl font-bold text-coral mb-1">
                      {Object.keys(currentCase.results)[0].split(' ')[0]}
                    </div>
                    <p className="text-xs text-warmgray-600">improvement</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-coral mb-1">{currentCase.timeline}</div>
                    <p className="text-xs text-warmgray-600">timeline</p>
                  </div>
                </div>

                <button className="btn-primary w-full">
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Case Study View */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight max-w-5xl">
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-coral" />
                The Challenge
              </h3>
              <p className="text-warmgray-600 leading-relaxed">
                {currentCase.challenge}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-teal" />
                Our Solution
              </h3>
              <p className="text-warmgray-600 leading-relaxed">
                {currentCase.solution}
              </p>
            </div>
          </div>

          {/* Results Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-charcoal mb-8 text-center">The Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(currentCase.results).map(([key, value]: [string, any]) => (
                <div key={key} className="bg-white rounded-xl p-6 border border-warmgray-200 text-center group hover:shadow-lg transition-all duration-300 hover:border-coral">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <p className="text-sm text-warmgray-600 mb-3">{key}</p>
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-coral mb-1">{value.after}</div>
                    <div className="text-xs text-warmgray-500">was {value.before}</div>
                  </div>
                  <div className="inline-block bg-coral/10 text-coral px-3 py-1 rounded-full text-sm font-semibold">
                    {value.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-coral" />
                Timeline
              </h4>
              <p className="text-3xl font-bold text-coral mb-2">{currentCase.timeline}</p>
              <p className="text-sm text-warmgray-600">Total engagement period</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal" />
                Team
              </h4>
              <p className="text-3xl font-bold text-teal mb-2">{currentCase.team.split(',').length}</p>
              <p className="text-sm text-warmgray-600">{currentCase.team}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <h4 className="font-bold text-charcoal mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {currentCase.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-coral/10 text-coral px-3 py-1 rounded-full font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Impact & Testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-coral/10 to-teal/10 rounded-2xl p-8 border border-coral/20">
              <h4 className="text-xl font-bold text-charcoal mb-4">Business Impact</h4>
              <p className="text-lg text-charcoal font-semibold">
                {currentCase.impact}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <p className="text-lg font-semibold text-charcoal italic mb-4 leading-relaxed">
                "{currentCase.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coral/20"></div>
                <div>
                  <div className="font-bold text-charcoal">{currentCase.testimonial.author}</div>
                  <div className="text-sm text-warmgray-600">{currentCase.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies Quick View */}
      <section className="section-py bg-white">
        <div className="container-tight">
          <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">More Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter((_, idx) => idx !== selectedCase)
              .slice(0, 3)
              .map((study, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCase(caseStudies.findIndex(cs => cs.id === study.id))}
                  className="bg-warmgray-50 rounded-xl border border-warmgray-200 overflow-hidden group hover:shadow-lg hover:border-coral transition-all duration-300 text-left h-full"
                >
                  <div className="h-48 bg-gradient-to-br from-coral/20 to-teal/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-6xl">{study.emoji}</div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-coral transition-colors">
                      {study.company}
                    </h3>
                    <p className="text-warmgray-600 text-sm mb-4">{study.title}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-warmgray-200">
                      <span className="text-xs font-semibold text-coral">{study.industry}</span>
                      <ArrowRight className="w-4 h-4 text-coral" />
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py bg-charcoal text-white text-center">
        <div className="container-tight max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to achieve similar results?
          </h2>
          <p className="text-lg text-warmgray-300 mb-8">
            Let's discuss how we can help your organization achieve its AI goals and drive measurable business impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start a Project <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary text-charcoal">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
