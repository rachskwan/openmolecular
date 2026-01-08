import { useState, useEffect } from 'react';
import { Clock, BookOpen, Star, Lock, ChevronRight, ChevronLeft, FileText, Beaker, BarChart3, Gamepad2, Users } from 'lucide-react';
import { tracks } from '../../data/modules';
import { useArticles } from '../../hooks/useArticles';
import { caseStudies } from '../../data/caseStudies';
import { productComparisons } from '../../data/comparisons';
import { interactives } from '../../data/interactives';

const tabs = ['Tracks', 'Articles', 'Case Studies', 'Comparisons', 'Interactives'];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'science', label: 'Science & Technology' },
  { id: 'health', label: 'Health & Wellness' },
  { id: 'nutrition', label: 'Food & Nutrition' },
  { id: 'brain', label: 'Brain & Behavior' },
  { id: 'consumer', label: 'Consumer Products' },
];

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const ITEMS_PER_PAGE = 6;

export default function ExplorePage({ onNavigate, toggleSaveItem, isItemSaved, initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'Tracks');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch articles from Supabase
  const { articles, loading: articlesLoading } = useArticles();

  // Sync tab when initialTab prop changes
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Reset to page 1 when tab, category, or level changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, activeCategory, activeLevel]);

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

  const paginateContent = (items) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items.slice(startIndex, endIndex);
  };

  const getTotalPages = (items) => Math.ceil(items.length / ITEMS_PER_PAGE);

  const Pagination = ({ totalItems }) => {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        <div className="flex items-center gap-1">
          {startPage > 1 && (
            <>
              <button
                onClick={() => setCurrentPage(1)}
                className="w-10 h-10 rounded-lg text-sm font-medium bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              >
                1
              </button>
              {startPage > 2 && <span className="px-2 text-slate-400">...</span>}
            </>
          )}

          {pageNumbers.map(num => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                currentPage === num
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {num}
            </button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span className="px-2 text-slate-400">...</span>}
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="w-10 h-10 rounded-lg text-sm font-medium bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === totalPages
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
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
      {activeTab === 'Tracks' && (() => {
        const filteredTracks = filterContent(tracks);
        const paginatedTracks = paginateContent(filteredTracks);
        return (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">
                Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredTracks.length)} of {filteredTracks.length} tracks
              </p>
            </div>
            <div id="tracks" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedTracks.map(track => (
                <button
                  key={track.id}
                  onClick={() => onNavigate('track', track.id)}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left overflow-hidden group"
                >
                  {/* Track Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <span className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium ${
                      track.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      track.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {track.level}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-semibold text-white text-lg drop-shadow-md">{track.title}</h3>
                    </div>
                  </div>
                  {/* Track Content */}
                  <div className="p-5">
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
                  </div>
                </button>
              ))}
            </div>
            <Pagination totalItems={filteredTracks.length} />
          </>
        );
      })()}

      {activeTab === 'Articles' && (() => {
        const filteredArticles = filterContent(articles);
        const paginatedArticles = paginateContent(filteredArticles);
        return (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">
                Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredArticles.length)} of {filteredArticles.length} articles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.map(article => (
                <button
                  key={article.id}
                  onClick={() => onNavigate('article', article.id)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
                >
                  <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-10 h-10 text-slate-400" />
                      </div>
                    )}
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
            <Pagination totalItems={filteredArticles.length} />
          </>
        );
      })()}

      {activeTab === 'Case Studies' && (() => {
        const filteredStudies = filterContent(caseStudies);
        const paginatedStudies = paginateContent(filteredStudies);
        return (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">
                Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredStudies.length)} of {filteredStudies.length} case studies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedStudies.map(study => (
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
            <Pagination totalItems={filteredStudies.length} />
          </>
        );
      })()}

      {activeTab === 'Comparisons' && (() => {
        const filteredComparisons = filterContent(productComparisons);
        const paginatedComparisons = paginateContent(filteredComparisons);
        return (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">
                Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredComparisons.length)} of {filteredComparisons.length} comparisons
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedComparisons.map(comparison => (
                <button
                  key={comparison.id}
                  onClick={() => onNavigate('comparison', comparison.id)}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
                >
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
                      <div className="mt-3 flex items-center gap-1 text-blue-600 text-sm font-medium">
                        Read comparison <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <Pagination totalItems={filteredComparisons.length} />
          </>
        );
      })()}

      {activeTab === 'Interactives' && (() => {
        const filteredInteractives = filterContent(interactives);
        const paginatedInteractives = paginateContent(filteredInteractives);
        return (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-500">
                Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredInteractives.length)} of {filteredInteractives.length} interactives
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedInteractives.map(interactive => (
                <button
                  key={interactive.id}
                  onClick={() => onNavigate('interactive', interactive.id)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
                >
                  <div className={`h-32 bg-gradient-to-br ${interactive.color} flex items-center justify-center`}>
                    <span className="text-5xl">{interactive.icon}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {interactive.type}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        interactive.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        interactive.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {interactive.level}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{interactive.title}</h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{interactive.description}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {interactive.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {interactive.plays.toLocaleString()} plays
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-blue-600 text-sm font-medium">
                      <Gamepad2 className="w-4 h-4" /> Play now <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <Pagination totalItems={filteredInteractives.length} />
          </>
        );
      })()}
    </div>
  );
}
