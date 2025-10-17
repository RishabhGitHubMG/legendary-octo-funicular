import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode | LucideIcon;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
  onClick?: () => void;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
  ctaText,
  ctaHref,
  variant = 'default',
  className = '',
  onClick,
}: FeatureCardProps) {
  const baseClasses = 'rounded-2xl border transition-all duration-300 flex flex-col';

  const variantClasses = {
    default: 'bg-white border-warmgray-200 p-8 hover:shadow-xl hover:border-coral hover:-translate-y-2 group',
    featured: 'bg-white border-coral shadow-xl p-8 md:scale-105 group',
    minimal: 'bg-warmgray-50 border-warmgray-200 p-6 hover:shadow-lg hover:border-coral',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {/* Icon */}
      {Icon && (
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 ${
          variant === 'featured'
            ? 'bg-gradient-to-br from-teal to-teal-dark'
            : 'bg-gradient-to-br from-coral to-coral-dark group-hover:scale-110'
        }`}>
          {typeof Icon === 'function' ? (
            <Icon className="w-8 h-8 text-white" />
          ) : (
            <span className="text-2xl">{Icon}</span>
          )}
        </div>
      )}

      {/* Content */}
      <h3 className="text-2xl font-bold text-charcoal mb-3 flex-1">{title}</h3>
      <p className="text-warmgray-600 mb-6 flex-1">{description}</p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-8 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-warmgray-700">
              <span className="text-coral font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {ctaText && (
        <button className={ctaHref ? 'btn-text' : 'btn-primary'}>
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
