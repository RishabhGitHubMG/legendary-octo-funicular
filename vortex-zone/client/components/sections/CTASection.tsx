import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButton {
  text: string;
  variant: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  href?: string;
}

interface CTASectionProps {
  headline: string;
  subheadline?: string;
  buttons?: CTAButton[];
  variant?: 'light' | 'dark';
  centered?: boolean;
  className?: string;
}

export function CTASection({
  headline,
  subheadline,
  buttons,
  variant = 'light',
  centered = true,
  className = '',
}: CTASectionProps) {
  const bgClasses = {
    light: 'bg-warmgray-50',
    dark: 'bg-charcoal text-white',
  };

  const textClasses = {
    light: 'text-charcoal',
    dark: 'text-white',
  };

  const subheadlineClasses = {
    light: 'text-warmgray-600',
    dark: 'text-warmgray-300',
  };

  return (
    <section className={`section-py ${bgClasses[variant]} ${className}`}>
      <div className={`container-tight ${centered ? 'max-w-3xl text-center mx-auto' : ''}`}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textClasses[variant]}`}>
          {headline}
        </h2>

        {subheadline && (
          <p className={`text-xl mb-8 ${subheadlineClasses[variant]}`}>
            {subheadline}
          </p>
        )}

        {buttons && buttons.length > 0 && (
          <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
            {buttons.map((button, idx) => (
              <button
                key={idx}
                onClick={button.onClick}
                className={`btn-${button.variant} flex items-center gap-2 justify-center`}
              >
                <span>{button.text}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
