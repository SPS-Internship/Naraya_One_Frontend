'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { NewsHero } from './NewsHero';
import { NewsFilters } from './NewsFilters';
import { NewsGrid } from './NewsGrid';
import { NewsPagination } from './NewsPagination';

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  category: 'company-news' | 'industry-insights' | 'press-releases' | 'technology' | 'partnerships' | 'financial';
  tags: string[];
  imageUrl: string;
  readTime: number;
  featured: boolean;
}

const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Naraya.One Announces Strategic Partnership with Leading FinTech Platform',
    summary: 'New collaboration aims to revolutionize digital payment solutions across Southeast Asia through innovative blockchain technology.',
    content: 'Detailed article content...',
    author: 'Sarah Johnson',
    publishedAt: '2025-11-18',
    category: 'partnerships',
    tags: ['fintech', 'blockchain', 'payments'],
    imageUrl: '/api/placeholder/400/250',
    readTime: 5,
    featured: true
  },
  {
    id: '2',
    title: 'Q3 2025 Financial Results: Record Growth Across Portfolio Companies',
    summary: 'Naraya.One reports 35% increase in consolidated revenue driven by strong performance in telecommunications and technology sectors.',
    content: 'Detailed article content...',
    author: 'Michael Chen',
    publishedAt: '2025-11-15',
    category: 'financial',
    tags: ['earnings', 'growth', 'performance'],
    imageUrl: '/api/placeholder/400/250',
    readTime: 8,
    featured: true
  },
  {
    id: '3',
    title: 'The Future of 5G: Insights from Naraya Technology',
    summary: 'Industry experts discuss the transformative potential of 5G networks and their impact on business operations.',
    content: 'Detailed article content...',
    author: 'Dr. Amanda Liu',
    publishedAt: '2025-11-12',
    category: 'technology',
    tags: ['5g', 'telecommunications', 'innovation'],
    imageUrl: '/api/placeholder/400/250',
    readTime: 6,
    featured: false
  },
  {
    id: '4',
    title: 'Sustainability Initiative: Carbon Neutral by 2030',
    summary: 'Naraya.One commits to ambitious environmental goals with comprehensive sustainability roadmap across all subsidiaries.',
    content: 'Detailed article content...',
    author: 'Green Team',
    publishedAt: '2025-11-10',
    category: 'company-news',
    tags: ['sustainability', 'environment', 'carbon-neutral'],
    imageUrl: '/api/placeholder/400/250',
    readTime: 4,
    featured: false
  },
  {
    id: '5',
    title: 'Industry Report: Southeast Asian Digital Transformation Trends',
    summary: 'Comprehensive analysis of digital adoption patterns and emerging technologies shaping the regional business landscape.',
    content: 'Detailed article content...',
    author: 'Research Team',
    publishedAt: '2025-11-08',
    category: 'industry-insights',
    tags: ['digital-transformation', 'market-research', 'trends'],
    imageUrl: '/api/placeholder/400/250',
    readTime: 12,
    featured: false
  },
  {
    id: '6',
    title: 'Naraya Services Launches AI-Powered Customer Support Platform',
    summary: 'Revolutionary customer service solution reduces response times by 75% while improving satisfaction scores.',
    content: 'Detailed article content...',
    author: 'Tech Team',
    publishedAt: '2025-11-05',
    category: 'press-releases',
    tags: ['ai', 'customer-service', 'innovation'],
    imageUrl: '/api/placeholder/400/250',
    readTime: 3,
    featured: false
  }
];

export function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const articlesPerPage = 6;

  // Filter articles based on category and search query
  const filteredArticles = mockArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Sort articles: featured first, then by date
  const sortedArticles = filteredArticles.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  // Paginate articles
  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);
  const paginatedArticles = sortedArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  // Reset to first page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <NewsHero />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <NewsFilters
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onCategoryChange={handleCategoryChange}
            onSearchChange={handleSearchChange}
            resultsCount={filteredArticles.length}
          />
        </motion.div>

        {/* News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <NewsGrid articles={paginatedArticles} />
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <NewsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
