import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 2000);
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-tight py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center">
                <span className="text-white font-bold text-sm">FW</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">FutureWeb</span>
                <span className="text-coral">AI</span>
              </span>
            </div>
            <p className="text-warmgray-200 mb-6 leading-relaxed">
              Making AI accessible, ethical, and profoundly human-centered. We transform complexity into clarity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-coral transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-coral transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-coral transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-warmgray-300">
              <li><Link to="/services" className="hover:text-coral transition-colors">AI Strategy</Link></li>
              <li><Link to="/services" className="hover:text-coral transition-colors">Custom Development</Link></li>
              <li><Link to="/services" className="hover:text-coral transition-colors">Integration</Link></li>
              <li><Link to="/services" className="hover:text-coral transition-colors">Team Training</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-warmgray-300">
              <li><Link to="/about" className="hover:text-coral transition-colors">About Us</Link></li>
              <li><Link to="/work" className="hover:text-coral transition-colors">Case Studies</Link></li>
              <li><Link to="/insights" className="hover:text-coral transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-coral transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-warmgray-300 text-sm mb-4">
              Get insights on AI and business transformation.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-3 py-2 rounded bg-charcoal-light border border-warmgray-500 text-white placeholder-warmgray-500 focus:border-coral focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-coral rounded hover:bg-coral-dark transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-coral text-sm">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-charcoal-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-warmgray-400 text-sm">
          <p>&copy; 2024 FutureWeb AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-coral transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-coral transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-coral transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
