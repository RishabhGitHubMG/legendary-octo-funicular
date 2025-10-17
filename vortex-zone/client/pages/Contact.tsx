import React, { useState } from 'react';
import { Mail, Phone, Clock, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    helpWith: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', helpWith: 'general', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-py bg-gradient-to-br from-white via-warmgray-50 to-white">
        <div className="container-tight max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Let's Talk About<br />
            <span className="text-gradient">What's Next</span>
          </h1>

          <p className="text-xl text-warmgray-600">
            Have a project in mind? Just curious? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-warmgray-200">
                <h2 className="text-3xl font-bold text-charcoal mb-8">Send us a message</h2>

                {submitted ? (
                  <div className="bg-coral/10 border border-coral rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">✓</div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Thank You!</h3>
                    <p className="text-warmgray-600">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-warmgray-200 text-charcoal placeholder-warmgray-500 focus:border-coral focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-warmgray-200 text-charcoal placeholder-warmgray-500 focus:border-coral focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-warmgray-200 text-charcoal placeholder-warmgray-500 focus:border-coral focus:outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>

                    {/* Help With */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        How can we help? *
                      </label>
                      <select
                        name="helpWith"
                        value={formData.helpWith}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-warmgray-200 text-charcoal focus:border-coral focus:outline-none transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="strategy">Strategy Consultation</option>
                        <option value="quote">Project Quote</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Tell us a bit more... *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-warmgray-200 text-charcoal placeholder-warmgray-500 focus:border-coral focus:outline-none transition-colors"
                        placeholder="What's on your mind?"
                      />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>

                    <p className="text-xs text-warmgray-600 text-center">
                      We respect your privacy. See our privacy policy for details.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-warmgray-200 mb-8">
                <h3 className="text-xl font-bold text-charcoal mb-6">Other Ways to Connect</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <p className="text-sm text-warmgray-600 mb-1">Email</p>
                      <a href="mailto:hello@futurewebai.com" className="font-semibold text-charcoal hover:text-coral transition-colors">
                        hello@futurewebai.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-warmgray-600 mb-1">Phone</p>
                      <a href="tel:+15551234567" className="font-semibold text-charcoal hover:text-coral transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <p className="text-sm text-warmgray-600 mb-1">Office Hours</p>
                      <p className="font-semibold text-charcoal">
                        Mon-Fri, 9am-5pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-8 border border-warmgray-200">
                <h3 className="text-xl font-bold text-charcoal mb-6">Follow Us</h3>

                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-lg bg-warmgray-100 flex items-center justify-center hover:bg-coral hover:text-white transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-warmgray-100 flex items-center justify-center hover:bg-coral hover:text-white transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-warmgray-100 flex items-center justify-center hover:bg-coral hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-sm text-warmgray-600 mt-6">
                  Connect with us on social media to stay updated on the latest news and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Trust Section */}
      <section className="section-py bg-white">
        <div className="container-tight max-w-3xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-warmgray-50 rounded-xl p-6 border border-warmgray-200">
              <h3 className="font-bold text-charcoal mb-3">What's your typical response time?</h3>
              <p className="text-warmgray-600">
                We aim to respond to all inquiries within 24 hours during business hours. For urgent matters, call us directly at +1 (555) 123-4567.
              </p>
            </div>

            <div className="bg-warmgray-50 rounded-xl p-6 border border-warmgray-200">
              <h3 className="font-bold text-charcoal mb-3">How long does an initial consultation take?</h3>
              <p className="text-warmgray-600">
                Our free initial consultations typically last 30 minutes. We'll discuss your goals, challenges, and how we might be able to help.
              </p>
            </div>

            <div className="bg-warmgray-50 rounded-xl p-6 border border-warmgray-200">
              <h3 className="font-bold text-charcoal mb-3">Do you work with companies of all sizes?</h3>
              <p className="text-warmgray-600">
                Yes! We work with startups, mid-market companies, and enterprises. Every organization has unique needs, and we tailor our approach accordingly.
              </p>
            </div>

            <div className="bg-warmgray-50 rounded-xl p-6 border border-warmgray-200">
              <h3 className="font-bold text-charcoal mb-3">What's your confidentiality policy?</h3>
              <p className="text-warmgray-600">
                We take confidentiality seriously. All conversations and project details are protected under strict NDAs. Your business is safe with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
