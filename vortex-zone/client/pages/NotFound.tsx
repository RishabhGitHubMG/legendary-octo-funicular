import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="w-full">
      <section className="section-py bg-gradient-to-br from-white via-warmgray-50 to-white">
        <div className="container-tight max-w-2xl mx-auto text-center">
          <div className="mb-12">
            <div className="text-9xl font-bold text-coral/30 mb-4">404</div>
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4">Page Not Found</h1>
            <p className="text-xl text-warmgray-600 mb-8">
              Hmm, it seems like this page doesn't exist. Let's get you back on track.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-warmgray-200 mb-12">
            <p className="text-warmgray-600 mb-8">
              The page you're looking for might have been moved or removed. Don't worry, we have plenty of content to explore!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/" className="btn-primary justify-center flex items-center gap-2">
                Back to Home <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary justify-center flex items-center gap-2">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn-text justify-center flex items-center gap-2">
                Learn About Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-text justify-center flex items-center gap-2">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-warmgray-600 mb-6">Or check out our popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/work" className="px-4 py-2 rounded-lg border border-warmgray-200 text-charcoal hover:border-coral hover:text-coral transition-colors">
                Case Studies
              </Link>
              <Link to="/insights" className="px-4 py-2 rounded-lg border border-warmgray-200 text-charcoal hover:border-coral hover:text-coral transition-colors">
                Insights
              </Link>
              <Link to="/" className="px-4 py-2 rounded-lg border border-warmgray-200 text-charcoal hover:border-coral hover:text-coral transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
