import { useState } from 'react';
import { Clock, BookOpen, Star, Lock, ChevronRight, FileText, Beaker, BarChart3 } from 'lucide-react';
import { tracks } from '../../data/modules';
import { articles } from '../../data/articles';
import { caseStudies } from '../../data/caseStudies';
import { productComparisons } from '../../data/comparisons';

const tabs = ['Tracks', 'Articles', 'Case Studies', 'Comparisons'];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'science', label: 'Science & Technology' },
  { id: 'health', label: 'Health & Wellness' },
  { id: 'nutrition', label: 'Food & Nutrition' },
  { id: 'brain', label: 'Brain & Behavior' },
  { id: 'consumer', label: 'Consumer Products' },
];

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function ExplorePage({ onNavigate, toggleSaveItem, isItemSaved }) {
  const [activeTab, setActiveTab] = useState('Tracks');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('All');

  const filterContent = (items, categoryField = 'category') => {
    let filtered = items;
    if (activeCategory !== 'all') {
      const categoryMap = {
        science: 'Science & Technology',
        health: 'Health & Wellness',
        nutrition: 'Food & Nutrition',
        brain: 'Brain & Behavior',
        consumer: 'Consumer Products',
      };
      const targetCategory = categoryMap[activeCategory] || activeCategory;
      filtered = filtered.filter(item =>
        item[categoryField] === activeCategory || item[categoryField] === targetCategory
      );
    }
    if (activeLevel !== 'All') {
      filtered = filtered.filter(item => item.level === activeLevel);
    }
    return filtered;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Explore</h1>
        <p className="text-slate-600">Discover learning tracks, articles, case studies, and product comparisons</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'bg-teal-100 text-teal-700'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                activeLevel === level
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      {activeTab === 'Tracks' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterContent(tracks).map(track => (
            <button
              key={track.id}
              onClick={() => onNavigate('track', track.id)}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  track.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                  track.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {track.level}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{track.title}</h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{track.description}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> {track.modules} modules
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {track.hours} hours
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {track.skills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                View track <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      )}

      {activeTab === 'Articles' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterContent(articles).map(article => (
            <button
              key={article.id}
              onClick={() => onNavigate('article', article.id)}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
            >
              <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                <FileText className="w-10 h-10 text-slate-400" />
                {article.premium && (
                  <div className="absolute top-2 right-2 p-1.5 bg-amber-100 rounded-full">
                    <Lock className="w-4 h-4 text-amber-600" />
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    article.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    article.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {article.level}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{article.title}</h3>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{article.duration}</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" /> {article.saves}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-teal-600 text-sm font-medium">
                  Read article <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {activeTab === 'Case Studies' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filterContent(caseStudies).map(study => (
            <button
              key={study.id}
              onClick={() => onNavigate('casestudy', study.id)}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Beaker className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                      {study.certification}
                    </span>
                    {study.featured && (
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-medium">{study.client}</span> • {study.industry}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.results.map((result, idx) => (
                      <span key={idx} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                        ✓ {result}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{study.duration}</span>
                    <span className="text-purple-600 font-medium flex items-center gap-1">
                      Read Case Study <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {activeTab === 'Comparisons' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filterContent(productComparisons).map(comparison => (
            <div key={comparison.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      {comparison.category}
                    </span>
                    {comparison.featured && (
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{comparison.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {comparison.products.map((product, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                        {product}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-medium">Verdict:</span> {comparison.verdict}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{comparison.duration}</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" /> {comparison.saves}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
