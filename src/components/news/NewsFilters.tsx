'use client';

import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface NewsFiltersProps {
  selectedCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
  resultsCount: number;
}

const categories = [
  { value: 'all', label: 'All News', count: 150 },
  { value: 'company-news', label: 'Company News', count: 45 },
  { value: 'industry-insights', label: 'Industry Insights', count: 32 },
  { value: 'press-releases', label: 'Press Releases', count: 28 },
  { value: 'technology', label: 'Technology', count: 25 },
  { value: 'partnerships', label: 'Partnerships', count: 15 },
  { value: 'financial', label: 'Financial', count: 5 }
];

export function NewsFilters({
  selectedCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
  resultsCount
}: NewsFiltersProps) {
  return (
    <div className="mb-12">
      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Search articles, topics, or tags..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 py-3 text-lg"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-2">
          <FunnelIcon className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Filter by category:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              onClick={() => onCategoryChange(category.value)}
              className="h-10 px-4 text-sm"
            >
              {category.label}
              <span className="ml-2 px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-xs">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold">{resultsCount}</span> article{resultsCount !== 1 ? 's' : ''}
          {selectedCategory !== 'all' && (
            <span> in <span className="font-semibold">
              {categories.find(c => c.value === selectedCategory)?.label}
            </span></span>
          )}
          {searchQuery && (
            <span> matching &ldquo;<span className="font-semibold">{searchQuery}</span>&rdquo;</span>
          )}
        </p>
      </div>
    </div>
  );
}
