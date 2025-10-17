import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  image?: string;
  emoji?: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  onClick?: () => void;
  className?: string;
}

export function BlogCard({
  image,
  emoji,
  category,
  title,
  excerpt,
  date,
  readTime,
  featured,
  onClick,
  className = '',
}: BlogCardProps) {
  return (
    <article
      className={`bg-white rounded-xl border border-warmgray-200 hover:shadow-lg hover:border-coral transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="h-40 bg-gradient-to-br from-coral/10 to-teal/10 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">
        {emoji ? emoji : image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : '📝'}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block bg-coral/10 text-coral text-xs font-bold px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-charcoal mb-3 flex-1 group-hover:text-coral transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-warmgray-600 text-sm mb-4 flex-1 line-clamp-2">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-warmgray-200">
          <div className="text-xs text-warmgray-600 space-y-1">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readTime} read
            </div>
          </div>
          <button className="btn-text text-sm flex items-center gap-1 group-hover:gap-2">
            <span>Read</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
