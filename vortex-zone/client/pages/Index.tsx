import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Brain, Layers } from 'lucide-react';

export default function Index() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-warmgray-50 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:min-h-auto py-20">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-coral to-coral-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold">1</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-teal-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold">2</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-coral to-teal border-2 border-white flex items-center justify-center text-white text-xs font-bold">3</div>
                </div>
                <span className="text-sm font-medium text-warmgray-600">Trusted by 250+ innovative teams</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-charcoal">
                AI that feels <span className="text-gradient">human.</span>
              </h1>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-charcoal">
                Growth that feels <span className="text-gradient">natural.</span>
              </h2>

              {/* Subheadline */}
              <p className="text-lg text-warmgray-600 mb-8 leading-relaxed max-w-2xl">
                We move beyond the hype to deliver practical, powerful AI solutions. We partner with you to build intelligent systems that empower your team, engage your customers, and accelerate your business—thoughtfully and responsibly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="btn-primary">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="btn-secondary">
                  <span>See Our Work</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-warmgray-200">
                <div>
                  <div className="text-2xl font-bold text-coral mb-1">98%</div>
                  <div className="text-sm text-warmgray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-coral mb-1">3.2x</div>
                  <div className="text-sm text-warmgray-600">Average ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-coral mb-1">24h</div>
                  <div className="text-sm text-warmgray-600">Avg. Response</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex items-center justify-center relative h-full">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Central orb */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-coral/20 to-teal/20 blur-2xl animate-pulse"></div>

                {/* Floating cards */}
                <div className="absolute top-10 right-0 p-4 bg-white rounded-xl shadow-lg border border-warmgray-200 w-48 animate-slide-up">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-coral" />
                    </div>
                    <h3 className="font-semibold text-sm text-charcoal">AI Assistant</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-warmgray-200 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-coral to-teal"></div>
                    </div>
                    <p className="text-xs text-warmgray-600">Learning your patterns</p>
                  </div>
                </div>

                <div className="absolute bottom-20 left-0 p-4 bg-white rounded-xl shadow-lg border border-warmgray-200 w-48 animate-slide-down">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-semibold text-sm text-charcoal">Analytics</h3>
                  </div>
                  <div className="text-2xl font-bold text-coral mb-1">+42%</div>
                  <p className="text-xs text-warmgray-600">Efficiency gain</p>
                </div>

                <div className="absolute bottom-0 right-10 p-4 bg-white rounded-xl shadow-lg border border-warmgray-200 w-44 animate-slide-up">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-coral" />
                    </div>
                    <h3 className="font-semibold text-sm text-charcoal">Team</h3>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-5 h-5 rounded-full bg-coral/30 border border-white"></div>
                    <div className="w-5 h-5 rounded-full bg-teal/30 border border-white"></div>
                    <div className="w-5 h-5 rounded-full bg-coral/50 border border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight">
          <div className="section-header">
            <h2 className="section-title text-center">Our human-centered approach to AI</h2>
            <p className="section-subtitle text-center mx-auto">
              We believe technology should enhance human potential, not replace it. Our services are designed to empower your team and amplify your impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-white rounded-2xl p-8 border border-warmgray-200 hover:border-coral transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">AI Strategy & Consulting</h3>
              <p className="text-warmgray-600 mb-6">Your roadmap to intelligent transformation. We help you identify opportunities, navigate risks, and build a practical, ethical AI strategy tailored to your unique goals.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>Opportunity & Risk Assessment</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>Data Readiness Evaluation</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>Custom Implementation Roadmap</span>
                </li>
              </ul>
              <button className="btn-text">Explore Strategy <ArrowRight className="w-4 h-4" /></button>
            </div>

            {/* Service Card 2 - Featured */}
            <div className="group relative md:scale-105 bg-white rounded-2xl p-8 border border-coral shadow-xl">
              <div className="absolute -top-3 left-6 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Custom AI Development</h3>
              <p className="text-warmgray-600 mb-6">Bespoke intelligent solutions built for your specific challenges. From machine learning models to natural language processing, we engineer AI that works for your business.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>Machine Learning Models</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>Natural Language Processing</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>Computer Vision Systems</span>
                </li>
              </ul>
              <button className="btn-primary">View Projects <ArrowRight className="w-4 h-4" /></button>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white rounded-2xl p-8 border border-warmgray-200 hover:border-coral transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Integration & Growth</h3>
              <p className="text-warmgray-600 mb-6">We ensure your AI doesn't just work—it thrives. Seamless integration with your existing systems and comprehensive team training for sustainable, scalable growth.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>API & Systems Integration</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>Custom Dashboard Development</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-warmgray-700">
                  <span className="text-coral font-bold">✓</span>
                  <span>Ongoing Support & Maintenance</span>
                </li>
              </ul>
              <button className="btn-text">Learn About Integration <ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-py bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">Our Differentiator</div>

              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-12">
                The human factor is our
                <span className="text-gradient block mt-2">core algorithm</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-coral/20 mb-2">01</div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3">We Listen First</h3>
                  <p className="text-warmgray-600 mb-4">Your business, your challenges, your people—they're our starting point. We never begin with a solution in search of a problem. Our discovery process ensures we understand your context completely.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Deep Discovery</span>
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Stakeholder Interviews</span>
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Process Mapping</span>
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold text-coral/20 mb-2">02</div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3">Explainable & Ethical</h3>
                  <p className="text-warmgray-600 mb-4">We believe in AI you can trust. We build transparent models and champion ethical principles, so you understand how and why decisions are made. No black boxes, no hidden agendas.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Model Interpretability</span>
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Bias Detection</span>
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Ethical Framework</span>
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-bold text-coral/20 mb-2">03</div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3">Partners, not Vendors</h3>
                  <p className="text-warmgray-600 mb-4">We're with you for the long haul. Your success is our success, and we measure ours by the tangible value we create for you. From implementation to scaling, we're your dedicated AI team.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Dedicated Manager</span>
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Progress Reviews</span>
                    <span className="text-xs bg-warmgray-100 text-charcoal px-3 py-1.5 rounded-full">Scalable Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block">
              <div className="relative p-8 bg-gradient-to-br from-warmgray-50 to-warmgray-100 rounded-2xl">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-white rounded-xl border border-warmgray-200 text-center">
                    <div className="text-3xl font-bold text-coral mb-2">92%</div>
                    <p className="text-sm text-warmgray-600">Long-term retention</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-warmgray-200 text-center">
                    <div className="text-3xl font-bold text-coral mb-2">4.9/5</div>
                    <p className="text-sm text-warmgray-600">Partner satisfaction</p>
                  </div>
                </div>

                {/* Process visualization */}
                <svg viewBox="0 0 300 300" className="w-full h-auto">
                  <circle cx="150" cy="150" r="40" fill="#FF6B6B" opacity="0.2" />
                  <circle cx="150" cy="150" r="35" fill="none" stroke="#FF6B6B" strokeWidth="2" />

                  {/* Lines to satellites */}
                  <line x1="150" y1="150" x2="240" y2="150" stroke="#4ECDC4" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="150" y1="150" x2="60" y2="150" stroke="#4ECDC4" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="150" y1="150" x2="150" y2="50" stroke="#4ECDC4" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="150" y1="150" x2="150" y2="250" stroke="#4ECDC4" strokeWidth="2" strokeDasharray="5,5" />

                  {/* Satellites */}
                  <circle cx="240" cy="150" r="25" fill="#4ECDC4" opacity="0.1" />
                  <circle cx="240" cy="150" r="20" fill="none" stroke="#4ECDC4" strokeWidth="2" />
                  <text x="240" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1A1D21">Define</text>

                  <circle cx="60" cy="150" r="25" fill="#4ECDC4" opacity="0.1" />
                  <circle cx="60" cy="150" r="20" fill="none" stroke="#4ECDC4" strokeWidth="2" />
                  <text x="60" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1A1D21">Ideate</text>

                  <circle cx="150" cy="50" r="25" fill="#4ECDC4" opacity="0.1" />
                  <circle cx="150" cy="50" r="20" fill="none" stroke="#4ECDC4" strokeWidth="2" />
                  <text x="150" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1A1D21">Build</text>

                  <circle cx="150" cy="250" r="25" fill="#4ECDC4" opacity="0.1" />
                  <circle cx="150" cy="250" r="20" fill="none" stroke="#4ECDC4" strokeWidth="2" />
                  <text x="150" y="255" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1A1D21">Scale</text>

                  <text x="150" y="155" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1A1D21">Your Team</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-py bg-gradient-to-br from-charcoal to-charcoal-light relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
        </div>

        <div className="container-tight relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build
            <span className="text-gradient block mt-2">what's next?</span>
          </h2>

          <p className="text-xl text-warmgray-200 mb-12 max-w-2xl mx-auto">
            Let's start a conversation about your vision. Whether you're just exploring AI possibilities or ready to build, we're here to help you take the next step.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-charcoal-light/50 backdrop-blur rounded-xl p-6 border border-charcoal-light">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-lg font-bold text-white mb-2">Free Consultation</h3>
              <p className="text-warmgray-300 text-sm mb-4">30-minute strategy session to discuss your goals</p>
              <button className="btn-primary w-full">Schedule Now</button>
            </div>

            <div className="bg-charcoal-light/50 backdrop-blur rounded-xl p-6 border border-charcoal-light">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-white mb-2">AI Readiness Assessment</h3>
              <p className="text-warmgray-300 text-sm mb-4">Complete our 2-minute assessment</p>
              <button className="btn-secondary w-full">Take Assessment</button>
            </div>

            <div className="bg-charcoal-light/50 backdrop-blur rounded-xl p-6 border border-charcoal-light">
              <div className="text-4xl mb-3">👋</div>
              <h3 className="text-lg font-bold text-white mb-2">Quick Question?</h3>
              <p className="text-warmgray-300 text-sm mb-4">Send us a message, we'll respond within 24h</p>
              <button className="btn-text w-full text-center justify-center">Contact Us</button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-charcoal-light">
            <div className="flex items-center gap-2 text-warmgray-200">
              <span className="text-coral">✓</span>
              <span>No obligation, ever</span>
            </div>
            <div className="flex items-center gap-2 text-warmgray-200">
              <span className="text-coral">✓</span>
              <span>Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2 text-warmgray-200">
              <span className="text-coral">✓</span>
              <span>100% confidential</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
