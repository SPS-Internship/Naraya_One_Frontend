'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ClockIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/ui/card';
import { NewsArticle } from './NewsSection';

interface NewsCardProps {
  article: NewsArticle;
}

const getCategoryColor = (category: string) => {
  const colors = {
    'company-news': 'bg-blue-100 text-blue-800',
    'industry-insights': 'bg-purple-100 text-purple-800',
    'press-releases': 'bg-green-100 text-green-800',
    'technology': 'bg-orange-100 text-orange-800',
    'partnerships': 'bg-pink-100 text-pink-800',
    'financial': 'bg-yellow-100 text-yellow-800'
  };
  return colors[category as keyof typeof colors] || 'bg-muted text-foreground';
};

const getCategoryLabel = (category: string) => {
  const labels = {
    'company-news': 'Company News',
    'industry-insights': 'Industry Insights',
    'press-releases': 'Press Release',
    'technology': 'Technology',
    'partnerships': 'Partnerships',
    'financial': 'Financial'
  };
  return labels[category as keyof typeof labels] || category;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link href={`/news/${article.id}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="h-full flex flex-col"
        >
          {/* Article Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Featured Badge */}
            {article.featured && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                  Featured
                </span>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-3 right-3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                {getCategoryLabel(article.category)}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>

            {/* Summary */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
              {article.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                >
                  <TagIcon className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                  +{article.tags.length - 3} more
                </span>
              )}
            </div>

            {/* Article Meta */}
            <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
              <div className="text-xs">
                {formatDate(article.publishedAt)}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </Card>
  );
}
