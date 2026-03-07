import { useState, useMemo } from 'react';
import { apps, categories } from '../data/apps';
import { AppCard } from './AppCard';

// 获取所有开发者列表（去重并排序）
const authors = ['全部开发者', ...Array.from(new Set(apps.map(app => app.author))).sort()];

export function AppList() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedAuthor, setSelectedAuthor] = useState('全部开发者');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesCategory = selectedCategory === '全部' || app.category === selectedCategory;
      const matchesAuthor = selectedAuthor === '全部开发者' || app.author === selectedAuthor;
      const matchesSearch =
        searchQuery === '' ||
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesAuthor && matchesSearch;
    });
  }, [selectedCategory, selectedAuthor, searchQuery]);

  return (
    <section id="apps" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            应用<span className="gradient-text">列表</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            浏览社区贡献的 Panabit 兼容应用，支持多种架构
          </p>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="搜索应用..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl transition-all duration-200 focus:outline-none"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background:
                    selectedCategory === category
                      ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dim) 100%)'
                      : 'var(--color-surface)',
                  color: selectedCategory === category ? 'white' : 'var(--color-text-muted)',
                  border: `1px solid ${selectedCategory === category ? 'transparent' : 'var(--color-border)'}`,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Author filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-sm text-[var(--color-text-muted)] py-2 mr-2">开发者:</span>
          {authors.map((author) => (
            <button
              key={author}
              onClick={() => setSelectedAuthor(author)}
              className="px-3 py-1.5 rounded-lg text-sm transition-all duration-200"
              style={{
                background:
                  selectedAuthor === author
                    ? 'rgba(99, 102, 241, 0.2)'
                    : 'var(--color-surface)',
                color: selectedAuthor === author ? '#818cf8' : 'var(--color-text-muted)',
                border: `1px solid ${selectedAuthor === author ? 'rgba(99, 102, 241, 0.4)' : 'var(--color-border)'}`,
              }}
            >
              {author === '全部开发者' ? '全部' : `@${author}`}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-[var(--color-text-muted)] font-mono">
          找到 {filteredApps.length} 个应用
        </div>

        {/* App grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, index) => (
              <AppCard key={app.id} app={app} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">未找到应用</h3>
            <p className="text-[var(--color-text-muted)]">
              尝试调整搜索词或选择其他分类
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
