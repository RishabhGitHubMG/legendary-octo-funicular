import React, { useState, useMemo } from 'react';
import { ArrowRight, Calendar, Clock, Search, X } from 'lucide-react';

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Strategy', 'Ethics', 'Tech Deep Dive', 'Case Study', 'Future Trends'];

  const articles = [
    {
      id: 1,
      category: 'Strategy',
      title: 'The 5 Questions You Must Ask Before Investing in AI',
      excerpt: 'A practical framework to evaluate your readiness and ensure your first AI project is a success, not a money pit.',
      content: 'Learn the essential questions every business should answer before starting an AI initiative...',
      date: 'March 15, 2024',
      readTime: '8 min',
      featured: true,
      image: '✨'
    },
    {
      id: 2,
      category: 'Strategy',
      title: 'AI Readiness: A Step-by-Step Guide',
      excerpt: 'Assess your organization\'s readiness for AI implementation with this comprehensive self-evaluation guide.',
      content: 'This guide walks you through 5 key areas to evaluate your AI readiness...',
      date: 'March 10, 2024',
      readTime: '6 min',
      featured: false,
      image: '📋'
    },
    {
      id: 3,
      category: 'Ethics',
      title: 'Fairness in Machine Learning',
      excerpt: 'Explore the key principles of ethical AI development and how to build fairness into your models.',
      content: 'Fairness in machine learning is not a luxury—it\'s a necessity. Here\'s why and how...',
      date: 'March 8, 2024',
      readTime: '7 min',
      featured: false,
      image: '⚖️'
    },
    {
      id: 4,
      category: 'Tech Deep Dive',
      title: 'Large Language Models Explained',
      excerpt: 'Demystify LLMs with this accessible explanation of how they work and what they can actually do.',
      content: 'Large Language Models are transforming AI, but how do they really work? Let\'s find out...',
      date: 'March 5, 2024',
      readTime: '10 min',
      featured: false,
      image: '🧠'
    },
    {
      id: 5,
      category: 'Strategy',
      title: 'ROI Measurement for AI Projects',
      excerpt: 'Learn how to define and track meaningful metrics for your AI initiatives from day one.',
      content: 'Measuring ROI for AI projects is different from traditional software. Here\'s what you need to know...',
      date: 'March 1, 2024',
      readTime: '8 min',
      featured: false,
      image: '📊'
    },
    {
      id: 6,
      category: 'Case Study',
      title: 'From Chaos to Clarity: One Company\'s AI Journey',
      excerpt: 'How a mid-market company transformed customer operations with ethical, human-centered AI.',
      content: 'This case study shows how a real company overcame challenges to successfully implement AI...',
      date: 'February 25, 2024',
      readTime: '9 min',
      featured: false,
      image: '🚀'
    },
    {
      id: 7,
      category: 'Future Trends',
      title: '2024 AI Trends Worth Watching',
      excerpt: 'Our predictions for the key AI developments that will shape business in the coming year.',
      content: 'What\'s next in AI? Here are the trends we\'re most excited about in 2024...',
      date: 'February 20, 2024',
      readTime: '7 min',
      featured: false,
      image: '🌟'
    },
    {
      id: 8,
      category: 'Strategy',
      title: 'Building Your AI Team: Skills You Need',
      excerpt: 'A guide to understanding the key roles and skills needed to successfully implement AI.',
      content: 'Building an effective AI team requires the right mix of skills and perspectives...',
      date: 'February 15, 2024',
      readTime: '11 min',
      featured: false,
      image: '👥'
    },
    {
      id: 9,
      category: 'Ethics',
      title: 'Bias Detection & Mitigation Strategies',
      excerpt: 'Practical approaches to identifying and eliminating bias in your AI models.',
      content: 'Bias in AI is a real problem, but it\'s solvable with the right approach...',
      date: 'February 10, 2024',
      readTime: '9 min',
      featured: false,
      image: '🔍'
    },
  ];

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    let result = articles;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(article => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const articlesPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const featuredArticle = articles.find(a => a.featured);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-py bg-gradient-to-br from-white via-warmgray-50 to-white">
        <div className="container-tight max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Insights on AI, Business, and<br />
            <span className="text-gradient">The Human Future</span>
          </h1>

          <p className="text-xl text-warmgray-600 mb-12">
            Practical guides, thoughtful perspectives, and breaking down the latest in AI—without the hype.
          </p>

          {/* Search Bar */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warmgray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg border-2 border-warmgray-200 focus:border-coral focus:outline-none transition-colors text-charcoal placeholder-warmgray-500"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-warmgray-500 hover:text-charcoal transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category === 'All' ? null : category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  (category === 'All' && !selectedCategory) ||
                  selectedCategory === category
                    ? 'bg-coral text-white'
                    : 'bg-warmgray-100 text-charcoal hover:bg-warmgray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && !searchQuery && !selectedCategory && (
        <section className="section-py bg-white">
          <div className="container-tight">
            <div className="bg-gradient-to-br from-warmgray-50 to-white rounded-2xl overflow-hidden border border-warmgray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full bg-gradient-to-br from-coral/20 to-teal/20 flex items-center justify-center text-6xl">
                  {featuredArticle.image}
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                    Featured Article
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-lg text-warmgray-600 mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-warmgray-200">
                    <div className="flex items-center gap-2 text-sm text-warmgray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-warmgray-600">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime} read</span>
                    </div>
                  </div>

                  <button className="btn-primary w-fit">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-py bg-warmgray-50">
        <div className="container-tight">
          {/* Results info */}
          <div className="mb-8">
            <p className="text-sm text-warmgray-600">
              Showing {paginatedArticles.length > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + articlesPerPage, filteredArticles.length)} of {filteredArticles.length} articles
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-xl border border-warmgray-200 hover:shadow-lg hover:border-coral transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer"
                  >
                    {/* Image */}
                    <div className="h-40 bg-gradient-to-br from-coral/10 to-teal/10 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">
                      {article.image}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block bg-coral/10 text-coral text-xs font-bold px-3 py-1.5 rounded-full">
                          {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-charcoal mb-3 flex-1 group-hover:text-coral transition-colors">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-warmgray-600 text-sm mb-4 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-warmgray-200">
                        <div className="text-xs text-warmgray-600 space-y-1">
                          <div>{article.date}</div>
                          <div>{article.readTime} read</div>
                        </div>
                        <button className="btn-text text-sm group-hover:gap-2">
                          <span>Read →</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mb-8">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-warmgray-200 text-charcoal hover:border-coral hover:text-coral disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-coral text-white'
                            : 'bg-white border border-warmgray-200 text-charcoal hover:border-coral'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-warmgray-200 text-charcoal hover:border-coral hover:text-coral disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-warmgray-600 mb-4">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setCurrentPage(1);
                }}
                className="btn-secondary"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-py bg-charcoal text-white">
        <div className="container-tight max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-warmgray-300 mb-8">
            Get our monthly newsletter with insights, trends, and practical AI guidance delivered to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-charcoal-light border border-charcoal-light text-white placeholder-warmgray-500 focus:border-coral focus:outline-none transition-colors"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>

          <p className="text-sm text-warmgray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
