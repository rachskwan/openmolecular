import { useState } from 'react';
import { Search, X, TrendingUp, Clock, ChevronRight, FileText, BookOpen, MessageCircle, Beaker, GraduationCap } from 'lucide-react';
import { glossaryData } from '../../data/glossary';
import { useArticles } from '../../hooks/useArticles';
import { tracks } from '../../data/modules';
import { communityThreads } from '../../data/community';

export default function SmartSearchModal({ onClose, onNavigate, onGlossaryClick, initialQuery = '' }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);
  const { articles } = useArticles();

  const trendingSearches = [
    'Omega-3 Index',
    'NAD+ supplements',
    'Inflammation biomarkers',
    'Gut health',
    'Metabolomics basics'
  ];

  const recentSearches = [
    'CRP levels',
    'Mitochondria function'
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setIsSearching(true);
      // Simulate search delay
      setTimeout(() => setIsSearching(false), 500);
    }
  };

  // Filter results based on search query
  const query = searchQuery.toLowerCase().trim();

  const glossaryResults = Object.values(glossaryData)
    .filter(term =>
      query &&
      (term.term.toLowerCase().includes(query) ||
       term.fullName.toLowerCase().includes(query) ||
       term.definition.toLowerCase().includes(query) ||
       term.category.toLowerCase().includes(query))
    )
    .slice(0, 4);

  const articleResults = articles
    .filter(article =>
      query &&
      (article.title.toLowerCase().includes(query) ||
       article.introduction?.toLowerCase().includes(query) ||
       article.category.toLowerCase().includes(query) ||
       article.author.toLowerCase().includes(query))
    )
    .slice(0, 3);

  const trackResults = tracks
    .filter(track =>
      query &&
      (track.title.toLowerCase().includes(query) ||
       track.description.toLowerCase().includes(query) ||
       track.skills?.some(s => s.toLowerCase().includes(query)))
    )
    .slice(0, 2);

  const threadResults = communityThreads
    .filter(thread =>
      query &&
      (thread.title.toLowerCase().includes(query) ||
       thread.preview.toLowerCase().includes(query) ||
       thread.category.toLowerCase().includes(query))
    )
    .slice(0, 2);

  const hasResults = glossaryResults.length > 0 || articleResults.length > 0 || trackResults.length > 0 || threadResults.length > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-20">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Header */}
          <div className="p-4 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, glossary, discussions..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-12 py-3 text-lg border-0 focus:outline-none focus:ring-0"
                autoFocus
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[60vh] overflow-y-auto">
            {searchQuery === '' ? (
              <div className="p-4 space-y-6">
                {/* Trending Searches */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-3">
                    <TrendingUp className="w-4 h-4" />
                    Trending Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map((term, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSearch(term)}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-3">
                      <Clock className="w-4 h-4" />
                      Recent Searches
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((term, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSearch(term)}
                          className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-slate-100 transition-colors text-left"
                        >
                          <Search className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-700">{term}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Links */}
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-3">Quick Links</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => { onNavigate('explore'); onClose(); }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <FileText className="w-5 h-5 text-teal-600" />
                      <span className="text-sm text-slate-700">Browse Articles</span>
                    </button>
                    <button
                      onClick={() => { onNavigate('explore'); onClose(); }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-slate-700">Learning Tracks</span>
                    </button>
                    <button
                      onClick={() => { onNavigate('community'); onClose(); }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-slate-700">Discussions</span>
                    </button>
                    <button
                      onClick={() => { onNavigate('resources'); onClose(); }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <Beaker className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm text-slate-700">Glossary</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : isSearching ? (
              <div className="p-8 text-center">
                <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-slate-500">Searching...</p>
              </div>
            ) : hasResults ? (
              <div className="p-4 space-y-6">
                {/* Glossary Results */}
                {glossaryResults.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-500">Glossary</span>
                      <button
                        onClick={() => { onNavigate('resources'); onClose(); }}
                        className="text-xs text-teal-600 hover:text-teal-700"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-2">
                      {glossaryResults.map(term => (
                        <button
                          key={term.term}
                          onClick={() => { onGlossaryClick(term.term); onClose(); }}
                          className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 hover:bg-teal-50 transition-colors text-left"
                        >
                          <span className="text-xl">{term.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900">{term.term}</h4>
                            <p className="text-xs text-slate-500 truncate">{term.fullName}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article Results */}
                {articleResults.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-500">Articles</span>
                      <button
                        onClick={() => { onNavigate('explore', 'articles'); onClose(); }}
                        className="text-xs text-teal-600 hover:text-teal-700"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-2">
                      {articleResults.map(article => (
                        <button
                          key={article.id}
                          onClick={() => { onNavigate('article', article.id); onClose(); }}
                          className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 hover:bg-teal-50 transition-colors text-left"
                        >
                          <FileText className="w-5 h-5 text-slate-400" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900 line-clamp-1">{article.title}</h4>
                            <p className="text-xs text-slate-500">{article.author} • {article.duration}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learning Track Results */}
                {trackResults.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-500">Learning Tracks</span>
                      <button
                        onClick={() => { onNavigate('explore', 'tracks'); onClose(); }}
                        className="text-xs text-teal-600 hover:text-teal-700"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-2">
                      {trackResults.map(track => (
                        <button
                          key={track.id}
                          onClick={() => { onNavigate('track', track.id); onClose(); }}
                          className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 hover:bg-teal-50 transition-colors text-left"
                        >
                          <GraduationCap className="w-5 h-5 text-purple-500" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900 line-clamp-1">{track.title}</h4>
                            <p className="text-xs text-slate-500">{track.modules} modules • {track.level}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Community Thread Results */}
                {threadResults.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-500">Discussions</span>
                      <button
                        onClick={() => { onNavigate('community'); onClose(); }}
                        className="text-xs text-teal-600 hover:text-teal-700"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-2">
                      {threadResults.map(thread => (
                        <button
                          key={thread.id}
                          onClick={() => { onNavigate('thread', thread.id); onClose(); }}
                          className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 hover:bg-teal-50 transition-colors text-left"
                        >
                          <MessageCircle className="w-5 h-5 text-blue-500" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900 line-clamp-1">{thread.title}</h4>
                            <p className="text-xs text-slate-500">{thread.author} • {thread.replies} replies</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">No results found for "{searchQuery}"</p>
                <p className="text-sm text-slate-400 mt-1">Try a different search term</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200">↵</kbd> to search</span>
              <span>Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200">esc</kbd> to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
