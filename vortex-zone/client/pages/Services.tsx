import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>('strategy');

  const services = [
    {
      id: 'strategy',
      phase: 'Phase 1',
      title: 'AI Strategy & Consulting',
      color: 'coral',
      description: 'Your roadmap to intelligent transformation. Before writing a single line of code, we help you build a robust AI strategy that aligns with your business objectives, technical capabilities, and ethical standards.',
      includes: [
        'Discovery & Assessment',
        'Roadmap Development',
        'Ethical Framework',
        'ROI Analysis'
      ],
      details: [
        {
          icon: '🔍',
          title: 'Discovery & Assessment',
          description: 'Comprehensive analysis of your business processes, data landscape, and AI opportunities'
        },
        {
          icon: '🗺️',
          title: 'Roadmap Development',
          description: 'Custom implementation plan with clear milestones, timelines, and success metrics'
        },
        {
          icon: '⚖️',
          title: 'Ethical Framework',
          description: 'Development of ethical guidelines and governance for responsible AI implementation'
        },
        {
          icon: '📊',
          title: 'ROI Analysis',
          description: 'Detailed cost-benefit analysis and return on investment projections'
        }
      ],
      pricing: '$25,000',
      pricingPeriod: 'flat fee',
      duration: '4-week engagement',
      features: [
        '4-week engagement',
        'Stakeholder workshops',
        'Comprehensive strategy document',
        'ROI analysis & projections',
        'Implementation roadmap'
      ],
      caseStudy: 'HealthPlus: Healthcare AI Strategy'
    },
    {
      id: 'development',
      phase: 'Phase 2',
      title: 'Custom AI Development',
      color: 'teal',
      description: 'Bespoke intelligent solutions built for your specific challenges. From machine learning models to natural language processing, we engineer AI that works for your business.',
      includes: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Systems',
        'Predictive Analytics'
      ],
      details: [
        {
          icon: '🧠',
          title: 'Machine Learning Models',
          description: 'Custom-trained models optimized for your specific use cases and performance requirements'
        },
        {
          icon: '💬',
          title: 'Natural Language Processing',
          description: 'Intelligent chatbots, sentiment analysis, and text understanding systems'
        },
        {
          icon: '👁️',
          title: 'Computer Vision & Image Recognition',
          description: 'Advanced image analysis and visual data processing solutions'
        },
        {
          icon: '🔮',
          title: 'Predictive Analytics & Forecasting',
          description: 'Forecast future trends and patterns to drive strategic decisions'
        }
      ],
      pricing: 'Custom',
      pricingPeriod: 'project-based',
      duration: '12-16 week typical project',
      features: [
        'Agile sprint delivery',
        'Regular progress reviews',
        'Transparent communication',
        'Testing & validation',
        'Documentation & handoff'
      ],
      caseStudy: 'TechCorp: Customer Support AI'
    },
    {
      id: 'integration',
      phase: 'Phase 3',
      title: 'Integration & Growth',
      color: 'coral',
      description: 'We ensure your AI doesn\'t just work—it thrives. Seamless integration with your existing systems and comprehensive team training for sustainable, scalable growth.',
      includes: [
        'API & Systems Integration',
        'Custom Dashboard Development',
        'Team Training & Workshops',
        'Ongoing Support & Maintenance'
      ],
      details: [
        {
          icon: '🔗',
          title: 'API & Systems Integration',
          description: 'Seamless integration with your existing software and data systems'
        },
        {
          icon: '📈',
          title: 'Custom Dashboard & UI Development',
          description: 'Beautiful, intuitive interfaces for monitoring and managing AI systems'
        },
        {
          icon: '👥',
          title: 'Comprehensive Team Training & Workshops',
          description: 'Empower your team with the knowledge to use and manage AI effectively'
        },
        {
          icon: '🛡️',
          title: 'Ongoing Support & Maintenance',
          description: 'Continuous monitoring, updates, and optimization for long-term success'
        }
      ],
      pricing: '$15,000',
      pricingPeriod: 'per phase',
      duration: '4-6 week integration phase',
      features: [
        'Full system integration',
        'Custom dashboard',
        'Team training sessions',
        '90-day support included',
        'Performance monitoring'
      ],
      caseStudy: 'RetailPro: Post-Launch Growth'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We immerse ourselves in your world to understand your unique context, challenges, and opportunities.',
      duration: 'Weeks 1-2',
      activities: ['Discovery workshops', 'Stakeholder interviews', 'Process mapping', 'Goal alignment']
    },
    {
      number: '02',
      title: 'Design',
      description: 'We architect the solution, aligning on goals, ethics, and a clear plan tailored to your needs.',
      duration: 'Weeks 3-4',
      activities: ['Solution architecture', 'Ethical review', 'Technical planning', 'Budget & timeline']
    },
    {
      number: '03',
      title: 'Develop',
      description: 'We build in agile sprints, with transparent communication and regular updates at every step.',
      duration: 'Weeks 5-12',
      activities: ['Agile development', 'Bi-weekly demos', 'Continuous testing', 'Quality assurance']
    },
    {
      number: '04',
      title: 'Deploy & Grow',
      description: 'We launch, support, and help you scale the impact of your AI across your organization.',
      duration: 'Weeks 13+',
      activities: ['Production deployment', 'Team training', 'Performance monitoring', 'Optimization']
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-py bg-gradient-to-br from-white via-warmgray-50 to-white">
        <div className="container-tight">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-8 text-sm text-warmgray-600">
              <a href="/" className="hover:text-coral transition-colors">Home</a>
              <span>/</span>
              <span className="text-charcoal font-semibold">Services</span>
            </nav>

            <div className="text-center mb-12">
              <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Services
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
                AI Services Designed for <span className="text-gradient">Human Impact</span>
              </h1>
              
              <p className="text-xl text-warmgray-600 mb-12 max-w-2xl mx-auto">
                We believe AI should enhance human potential, not replace it. Our comprehensive services are designed to work with your team, amplifying your strengths and addressing your unique challenges with thoughtful, practical solutions.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-xl border border-warmgray-200 text-center">
                <div className="text-4xl font-bold text-coral mb-2">250+</div>
                <p className="text-warmgray-600 font-medium">Projects Delivered</p>
              </div>
              <div className="p-8 bg-white rounded-xl border border-warmgray-200 text-center">
                <div className="text-4xl font-bold text-coral mb-2">98%</div>
                <p className="text-warmgray-600 font-medium">Client Satisfaction</p>
              </div>
              <div className="p-8 bg-white rounded-xl border border-warmgray-200 text-center">
                <div className="text-4xl font-bold text-coral mb-2">3.2x</div>
                <p className="text-warmgray-600 font-medium">Average ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation Tabs */}
      <section className="sticky top-20 z-20 bg-white border-b border-warmgray-200 backdrop-blur-sm">
        <div className="container-tight">
          <div className="flex overflow-x-auto gap-8 py-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setExpandedService(service.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                  expandedService === service.id
                    ? `bg-${service.color} text-white`
                    : 'text-warmgray-600 hover:text-charcoal'
                }`}
              >
                <span className="text-sm">📌</span> {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight">
          {services.map((service) => (
            expandedService === service.id && (
              <div key={service.id} className="max-w-5xl mx-auto animate-fade-in">
                {/* Main Service Card */}
                <div className="bg-white rounded-2xl p-8 md:p-12 border border-warmgray-200 mb-12">
                  <div className={`inline-block bg-${service.color}/10 text-${service.color} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                    {service.phase}
                  </div>
                  
                  <h2 className="text-4xl font-bold text-charcoal mb-4">{service.title}</h2>
                  <p className="text-lg text-warmgray-600 mb-8">{service.description}</p>

                  {/* What's Included Grid */}
                  <h3 className="text-2xl font-bold text-charcoal mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="p-6 bg-warmgray-50 rounded-xl border border-warmgray-200">
                        <div className="text-3xl mb-3">{detail.icon}</div>
                        <h4 className="font-bold text-charcoal mb-2">{detail.title}</h4>
                        <p className="text-warmgray-600 text-sm">{detail.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <button className="btn-primary flex items-center gap-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="btn-secondary">Download Service Details</button>
                  </div>
                </div>

                {/* Pricing & Features */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Pricing Card */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl p-8 border border-warmgray-200 sticky top-32">
                      <h3 className="font-bold text-charcoal mb-2">Investment</h3>
                      <div className="mb-6">
                        <div className="text-4xl font-bold text-coral">{service.pricing}</div>
                        <p className="text-sm text-warmgray-600">{service.pricingPeriod}</p>
                      </div>

                      <div className="mb-6 pb-6 border-b border-warmgray-200">
                        <p className="text-sm text-warmgray-600 mb-2">Typical Duration</p>
                        <p className="font-semibold text-charcoal">{service.duration}</p>
                      </div>

                      <h4 className="font-bold text-charcoal mb-4">What's Included</h4>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-warmgray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="btn-primary w-full mb-3">Schedule Consultation</button>
                      <p className="text-xs text-warmgray-600 text-center">No obligation. 30 minutes.</p>
                    </div>
                  </div>

                  {/* Case Study & Details */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Case Study Preview */}
                    <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
                      <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Related Case Study
                      </div>
                      <h4 className="text-xl font-bold text-charcoal mb-3">{service.caseStudy}</h4>
                      <p className="text-warmgray-600 mb-6">
                        See how we applied this service to deliver real-world results for a leading organization in their industry.
                      </p>
                      <button className="btn-text">
                        <span>Read Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Process for this service */}
                    <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
                      <h4 className="text-xl font-bold text-charcoal mb-6">Our Proven Process</h4>
                      <div className="space-y-4">
                        {processSteps.slice(0, 3).map((step, idx) => (
                          <div key={idx} className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center font-bold text-coral">
                                {step.number}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-charcoal mb-1">{step.title}</h5>
                              <p className="text-sm text-warmgray-600">{step.description}</p>
                              <p className="text-xs text-warmgray-500 mt-2">{step.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Complete Process Timeline */}
      <section className="section-py bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Our Collaborative Process</h2>
            <p className="text-xl text-warmgray-600 max-w-2xl mx-auto">
              A proven 4-phase approach designed to deliver results while keeping you informed every step of the way.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Card */}
                <div className="bg-warmgray-50 rounded-2xl p-6 border border-warmgray-200 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-bold text-charcoal mb-3">{step.title}</h3>
                  <p className="text-warmgray-600 text-sm mb-4">{step.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-coral font-semibold mb-2">{step.duration}</p>
                    <div className="space-y-2">
                      {step.activities.map((activity, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal"></div>
                          <span className="text-xs text-warmgray-600">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-coral to-teal"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Why Choose FutureWeb AI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Proven Track Record</h3>
              <p className="text-warmgray-600">
                250+ successful projects with 98% client satisfaction. Our results speak for themselves.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Expert Team</h3>
              <p className="text-warmgray-600">
                PhDs in machine learning, former Google & OpenAI engineers, and leading UX designers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">True Partnership</h3>
              <p className="text-warmgray-600">
                We're invested in your success. Your wins are our wins, measured by real business impact.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Ethical by Default</h3>
              <p className="text-warmgray-600">
                AI ethics isn't an afterthought—it's baked into everything we build from day one.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Transparent Pricing</h3>
              <p className="text-warmgray-600">
                No hidden fees. Clear pricing models aligned with your project scope and budget.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Long-term Support</h3>
              <p className="text-warmgray-600">
                We don't just build and leave. We provide ongoing support and optimization for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py bg-white">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-warmgray-50 rounded-xl border border-warmgray-200 p-6 cursor-pointer hover:border-coral transition-colors">
              <summary className="flex items-center justify-between font-bold text-charcoal">
                <span>What's your typical engagement model?</span>
                <ChevronDown className="w-5 h-5 group-open:hidden" />
                <ChevronUp className="w-5 h-5 hidden group-open:block" />
              </summary>
              <p className="text-warmgray-600 mt-4">
                We offer flexible engagement models: fixed-price projects, time-and-materials, and retainer-based partnerships. Most clients start with our Strategy phase to align on goals, then proceed to Development and Integration.
              </p>
            </details>

            <details className="group bg-warmgray-50 rounded-xl border border-warmgray-200 p-6 cursor-pointer hover:border-coral transition-colors">
              <summary className="flex items-center justify-between font-bold text-charcoal">
                <span>How long does a typical project take?</span>
                <ChevronDown className="w-5 h-5 group-open:hidden" />
                <ChevronUp className="w-5 h-5 hidden group-open:block" />
              </summary>
              <p className="text-warmgray-600 mt-4">
                Strategy typically takes 4-6 weeks. Custom AI development ranges from 12-16 weeks depending on complexity. Integration and team training adds 4-6 weeks. We work in agile sprints with regular check-ins.
              </p>
            </details>

            <details className="group bg-warmgray-50 rounded-xl border border-warmgray-200 p-6 cursor-pointer hover:border-coral transition-colors">
              <summary className="flex items-center justify-between font-bold text-charcoal">
                <span>Do you work with companies of all sizes?</span>
                <ChevronDown className="w-5 h-5 group-open:hidden" />
                <ChevronUp className="w-5 h-5 hidden group-open:block" />
              </summary>
              <p className="text-warmgray-600 mt-4">
                Absolutely. We work with startups, mid-market companies, and enterprises. Our approach is tailored to your size, budget, and specific needs. We've successfully worked with teams ranging from 10 to 10,000+ employees.
              </p>
            </details>

            <details className="group bg-warmgray-50 rounded-xl border border-warmgray-200 p-6 cursor-pointer hover:border-coral transition-colors">
              <summary className="flex items-center justify-between font-bold text-charcoal">
                <span>What's included in the strategy phase?</span>
                <ChevronDown className="w-5 h-5 group-open:hidden" />
                <ChevronUp className="w-5 h-5 hidden group-open:block" />
              </summary>
              <p className="text-warmgray-600 mt-4">
                The strategy phase includes comprehensive discovery workshops, data readiness assessment, ethical framework development, detailed ROI analysis, and a complete implementation roadmap. You'll walk away with a clear, actionable plan.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-py bg-charcoal text-white">
        <div className="container-tight max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-warmgray-300 mb-8">
            Let's discuss which service is right for your organization and how we can help you achieve your AI goals.
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            <span>Schedule a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
