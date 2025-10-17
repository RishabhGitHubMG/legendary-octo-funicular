import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
          {badge}
        </div>
      )}

      <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
        {title}
      </h2>

      {subtitle && (
        <p className="text-xl text-warmgray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
