import React, { useState } from 'react';
import { ArrowRight, Users, Shield, Lightbulb, Mail, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team = [
    {
      id: 1,
      name: 'Dr. Maria Rodriguez',
      role: 'Chief AI Officer',
      bio: 'Former Google AI Research, PhD in Machine Learning from Stanford',
      expertise: ['Machine Learning', 'Ethical AI', 'Strategy'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=400&h=500&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'VP Engineering',
      bio: 'Built AI systems at OpenAI and Anthropic, 15+ years experience',
      expertise: ['Deep Learning', 'NLP', 'Architecture'],
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&w=400&h=500&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Head of Design',
      bio: 'Design lead at Figma, passionate about accessible AI interfaces',
      expertise: ['UX Design', 'User Research', 'Accessibility'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=400&h=500&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 4,
      name: 'Alex Kim',
      role: 'Product Manager',
      bio: 'Led product at Slack and Microsoft, expert in scaling teams',
      expertise: ['Product Strategy', 'Team Building', 'Growth'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=400&h=500&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 5,
      name: 'Emma Wilson',
      role: 'Ethics & Compliance Officer',
      bio: 'AI ethics researcher, published multiple papers on responsible AI',
      expertise: ['AI Ethics', 'Governance', 'Policy'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400&h=500&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 6,
      name: 'James Rodriguez',
      role: 'Solutions Architect',
      bio: 'Enterprise architect with 12 years in complex system design',
      expertise: ['System Design', 'DevOps', 'Security'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=500&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const culturePoints = [
    {
      icon: '🤝',
      title: 'Collaboration First',
      description: 'We believe the best ideas come from diverse perspectives working together. Open dialogue and mutual respect drive everything we do.'
    },
    {
      icon: '🎯',
      title: 'Impact Focused',
      description: 'Every project, every decision is measured by real-world impact. We celebrate outcomes that matter to our clients and their users.'
    },
    {
      icon: '🌱',
      title: 'Continuous Learning',
      description: 'AI moves fast. We invest heavily in our team\'s growth through conferences, training, and hands-on experimentation with new technologies.'
    },
    {
      icon: '⚖️',
      title: 'Ethical Foundation',
      description: 'Ethics aren\'t an afterthought. Every project includes rigorous fairness testing and alignment with our values of responsible AI.'
    },
    {
      icon: '🚀',
      title: 'Innovation Culture',
      description: 'We give our team 20% time to explore new ideas. Some of our best solutions came from this dedicated innovation space.'
    },
    {
      icon: '🌍',
      title: 'Diverse & Inclusive',
      description: 'We\'re stronger with diverse experiences, backgrounds, and perspectives. We actively build a workplace where everyone belongs.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-py bg-gradient-to-br from-white via-warmgray-50 to-white">
        <div className="container-tight max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            We believe in a future where technology
            <span className="text-gradient block mt-2">amplifies human potential</span>
          </h1>

          <p className="text-xl text-warmgray-600 mb-4">
            We're FutureWeb AI, and we're here to guide you there.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Story
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Democratizing AI for Everyone
              </h2>

              <p className="text-lg text-warmgray-600 mb-4 leading-relaxed">
                FutureWeb AI was founded on a simple but powerful idea: the most transformative technology should be the most accessible. We were tired of AI that felt like magic—opaque, intimidating, and disconnected from real human needs.
              </p>

              <p className="text-lg text-warmgray-600 mb-8 leading-relaxed">
                So, we built a different kind of AI company. One that starts with empathy, is driven by collaboration, and is measured by the tangible value it creates for our partners. Our mission is to demystify and democratize artificial intelligence, building a future where businesses of all sizes can thrive with tools that are powerful, practical, and profoundly human-centric.
              </p>

              <button className="btn-primary">
                Learn More About Our Work <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Image */}
            <div className="hidden lg:flex items-center justify-center h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-py bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-warmgray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-warmgray-50 rounded-2xl border border-warmgray-200 hover:border-coral hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Human-Centered Everything</h3>
              <p className="text-warmgray-600">
                We design for people first. Every decision, from model architecture to UI, is made with the end-user in mind. Technology should serve humanity, not the other way around.
              </p>
            </div>

            <div className="p-8 bg-warmgray-50 rounded-2xl border border-warmgray-200 hover:border-coral hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Radical Clarity</h3>
              <p className="text-warmgray-600">
                We reject jargon. We communicate complex ideas with simple, honest language. No black boxes, no hidden agendas—transparency is our foundation.
              </p>
            </div>

            <div className="p-8 bg-warmgray-50 rounded-2xl border border-warmgray-200 hover:border-coral hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Ethical by Design</h3>
              <p className="text-warmgray-600">
                Ethics isn't a checkbox; it's a foundational principle. We bake fairness, accountability, and transparency into everything we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Culture & Workplace
            </h2>
            <p className="text-xl text-warmgray-600 max-w-2xl mx-auto">
              Working at FutureWeb AI means being part of a team that's passionate about making a real difference.
            </p>
          </div>

          {/* Culture Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {culturePoints.map((point, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-warmgray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{point.title}</h3>
                <p className="text-warmgray-600">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Office Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
                alt="Team working together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Weekly Strategy Sessions</span>
              </div>
            </div>

            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
                alt="Modern office"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Collaborative Workspace</span>
              </div>
            </div>

            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold">Team Building & Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-py bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              The Minds Behind the Machine
            </h2>
            <p className="text-xl text-warmgray-600 max-w-2xl mx-auto">
              Our team brings together deep expertise in AI, business strategy, and human-centered design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className="bg-white rounded-2xl overflow-hidden border border-warmgray-200 hover:shadow-xl hover:border-coral transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-coral/10 to-teal/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover Social Links */}
                  {hoveredMember === member.id && (
                    <div className="absolute inset-0 bg-charcoal/80 flex items-center justify-center gap-4">
                      <a
                        href={member.social.linkedin}
                        className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-charcoal hover:bg-coral hover:text-white transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-charcoal hover:bg-coral hover:text-white transition-all duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@futurewebai.com`}
                        className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-charcoal hover:bg-coral hover:text-white transition-all duration-300"
                        aria-label="Email"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-1">{member.name}</h3>
                  <p className="text-coral font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-warmgray-600 text-sm mb-4">{member.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="text-xs bg-warmgray-100 text-charcoal px-2.5 py-1 rounded-full font-medium">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py bg-charcoal text-white text-center">
        <div className="container-tight max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Want to join our mission?
          </h2>
          <p className="text-lg text-warmgray-300 mb-8">
            We're always looking for talented individuals passionate about making AI more human-centered and accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary text-charcoal">
              Get to Know Us
            </button>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Recognition & Awards</h2>
            <p className="text-warmgray-600">Honored to be recognized by leading organizations and publications</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: 'AI Innovation Award', org: 'Tech Leaders 2024' },
              { icon: '⭐', title: 'Best Workplace', org: 'Great AI Companies' },
              { icon: '💡', title: 'Most Ethical AI', org: 'AI Ethics Summit' },
              { icon: '🚀', title: 'Fastest Growing', org: 'AI 100 List' }
            ].map((award, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-warmgray-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">{award.icon}</div>
                <p className="font-bold text-charcoal mb-1">{award.title}</p>
                <p className="text-sm text-warmgray-600">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
