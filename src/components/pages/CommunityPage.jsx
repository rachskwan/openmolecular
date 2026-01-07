import { useState } from 'react';
import { MessageCircle, ThumbsUp, TrendingUp, Star, ChevronRight, ChevronLeft, Search, X } from 'lucide-react';
import { communityThreads, communityCategories } from '../../data/community';

const THREADS_PER_PAGE = 5;

const trendingTopics = [
  { label: 'Omega-3 optimization', keywords: ['omega-3', 'omega 3', 'fish oil', 'epa', 'dha'] },
  { label: 'NAD+ supplements', keywords: ['nad+', 'nad', 'nmn', 'nicotinamide', 'longevity'] },
  { label: 'Gut microbiome testing', keywords: ['gut', 'microbiome', 'probiotic', 'digestive', 'bacteria'] },
  { label: 'Circadian health', keywords: ['circadian', 'sleep', 'melatonin', 'rhythm', 'morning'] },
  { label: 'Inflammation biomarkers', keywords: ['inflammation', 'crp', 'inflammatory', 'biomarker'] },
];

// Helper to parse date strings for sorting
const parseDate = (dateStr) => {
  if (dateStr === 'Just now') return new Date();
  // Handle formats like "Dec 5, 2024" or "2 days ago"
  if (dateStr.includes('ago')) {
    const num = parseInt(dateStr) || 1;
    const now = new Date();
    if (dateStr.includes('day')) return new Date(now - num * 24 * 60 * 60 * 1000);
    if (dateStr.includes('hour')) return new Date(now - num * 60 * 60 * 1000);
    if (dateStr.includes('week')) return new Date(now - num * 7 * 24 * 60 * 60 * 1000);
    return now;
  }
  return new Date(dateStr);
};

export default function CommunityPage({ onNavigate, onUserClick, userThreads = [], toggleThreadLike, isThreadLiked }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTopic, setActiveTopic] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Combine user-created threads with static threads (user threads first)
  const allThreads = [...userThreads, ...communityThreads];

  // Sort threads by date (newest first)
  const sortedThreads = [...allThreads].sort((a, b) => {
    return parseDate(b.date) - parseDate(a.date);
  });

  // Filter by category
  let filteredThreads = activeCategory === 'All'
    ? sortedThreads
    : sortedThreads.filter(t => t.category === activeCategory);

  // Filter by trending topic
  if (activeTopic) {
    const topic = trendingTopics.find(t => t.label === activeTopic);
    if (topic) {
      filteredThreads = filteredThreads.filter(t =>
        topic.keywords.some(keyword =>
          t.title.toLowerCase().includes(keyword) ||
          t.preview.toLowerCase().includes(keyword) ||
          t.content?.toLowerCase().includes(keyword)
        )
      );
    }
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredThreads = filteredThreads.filter(t =>
      t.title.toLowerCase().includes(query) ||
      t.preview.toLowerCase().includes(query) ||
      t.author.toLowerCase().includes(query)
    );
  }

  // Pagination
  const totalPages = Math.ceil(filteredThreads.length / THREADS_PER_PAGE);
  const startIndex = (currentPage - 1) * THREADS_PER_PAGE;
  const paginatedThreads = filteredThreads.slice(startIndex, startIndex + THREADS_PER_PAGE);

  // Reset to page 1 when filters change
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleTopicClick = (topicLabel) => {
    if (activeTopic === topicLabel) {
      setActiveTopic(null); // Toggle off
    } else {
      setActiveTopic(topicLabel);
      setActiveCategory('All'); // Reset category when selecting topic
    }
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveTopic(null);
    setActiveCategory('All');
    setCurrentPage(1);
  };

  const featuredThreads = communityThreads.filter(t => t.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Community</h1>
        <p className="text-slate-600">Connect with fellow learners, ask questions, and share your journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Discussions */}
        <div id="discussions" className="lg:col-span-2">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>

          {/* Active Filter Indicator */}
          {(activeTopic || searchQuery) && (
            <div className="flex items-center gap-2 mb-4 p-3 bg-teal-50 border border-teal-200 rounded-lg">
              <span className="text-sm text-teal-800">
                {activeTopic && <span>Filtering by: <strong>{activeTopic}</strong></span>}
                {activeTopic && searchQuery && <span> + </span>}
                {searchQuery && <span>Search: <strong>"{searchQuery}"</strong></span>}
              </span>
              <button
                onClick={clearFilters}
                className="ml-auto text-sm text-teal-600 hover:text-teal-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {communityCategories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat && !activeTopic
                    ? 'bg-teal-100 text-teal-700'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Thread List */}
          <div className="space-y-4">
            {paginatedThreads.length > 0 ? (
              paginatedThreads.map(thread => (
                <div
                  key={thread.id}
                  className="w-full bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onUserClick?.(thread.author);
                      }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-medium text-sm flex-shrink-0 hover:ring-2 hover:ring-teal-300 hover:ring-offset-2 transition-all"
                    >
                      {thread.avatar}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onUserClick?.(thread.author);
                          }}
                          className="font-medium text-slate-900 hover:text-teal-600 transition-colors"
                        >
                          {thread.author}
                        </button>
                        <span className="text-sm text-slate-500">{thread.date}</span>
                        {thread.featured && (
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => onNavigate('thread', thread.id)}
                        className="block w-full text-left"
                      >
                        <h3 className="font-semibold text-slate-900 mb-2 hover:text-teal-600 transition-colors">{thread.title}</h3>
                        <p className="text-sm text-slate-600 line-clamp-2 mb-3">{thread.preview}</p>
                      </button>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="px-2 py-1 bg-slate-100 rounded text-xs">{thread.category}</span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" /> {thread.replies} replies
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleThreadLike?.(thread.id);
                          }}
                          className={`flex items-center gap-1 transition-colors ${
                            isThreadLiked?.(thread.id) ? 'text-teal-600' : 'hover:text-teal-600'
                          }`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${isThreadLiked?.(thread.id) ? 'fill-current' : ''}`} />
                          {thread.likes + (isThreadLiked?.(thread.id) ? 1 : 0)}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">No discussions found</p>
                {(activeTopic || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="mt-2 text-teal-600 hover:text-teal-700 text-sm font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-teal-600 text-white'
                      : 'border border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Results count */}
          {filteredThreads.length > 0 && (
            <p className="text-center text-sm text-slate-500 mt-4">
              Showing {startIndex + 1}-{Math.min(startIndex + THREADS_PER_PAGE, filteredThreads.length)} of {filteredThreads.length} discussions
            </p>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <h3 className="font-semibold text-slate-900">Trending Topics</h3>
            </div>
            <div className="space-y-2">
              {trendingTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTopicClick(topic.label)}
                  className={`flex items-center justify-between w-full p-2.5 rounded-lg transition-all ${
                    activeTopic === topic.label
                      ? 'bg-teal-100 text-teal-700 ring-1 ring-teal-300'
                      : 'hover:bg-slate-50 group'
                  }`}
                >
                  <span className={`text-sm ${activeTopic === topic.label ? 'font-medium' : 'text-slate-700 group-hover:text-teal-600'}`}>
                    {topic.label}
                  </span>
                  {activeTopic === topic.label ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Discussions */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-teal-600" />
              <h3 className="font-semibold text-slate-900">Featured This Week</h3>
            </div>
            <div className="space-y-3">
              {featuredThreads.slice(0, 3).map(thread => (
                <button
                  key={thread.id}
                  onClick={() => onNavigate('thread', thread.id)}
                  className="w-full p-3 bg-white rounded-lg text-left hover:shadow-sm transition-shadow"
                >
                  <h4 className="text-sm font-medium text-slate-900 line-clamp-2 mb-1">
                    {thread.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{thread.author}</span>
                    <span>•</span>
                    <span>{thread.replies} replies</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Start Discussion CTA */}
          <div className="bg-slate-900 rounded-xl p-5 text-white">
            <h3 className="font-semibold mb-2">Have a question?</h3>
            <p className="text-sm text-slate-300 mb-4">
              Start a new discussion and get help from the community
            </p>
            <button
              onClick={() => onNavigate('new-discussion')}
              className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-sm font-medium transition-colors"
            >
              Start a Discussion
            </button>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div id="faqs" className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What is metabolomics?', a: 'Metabolomics is the study of small molecules (metabolites) in cells, tissues, and organisms. It helps us understand how our body processes nutrients and responds to environmental factors.' },
            { q: 'How do biomarkers work?', a: 'Biomarkers are measurable indicators of biological states or conditions. They can help track health status, disease progression, or response to treatments.' },
            { q: 'What tests can I get done?', a: 'Various metabolomic tests are available including fatty acid profiles, organic acid tests, amino acid panels, and comprehensive metabolic panels. Check our Certification page for testing partners.' },
            { q: 'How do I interpret my results?', a: 'Our learning tracks and articles provide guidance on understanding test results. We recommend working with a healthcare provider for personalized interpretation.' },
          ].map((faq, idx) => (
            <details key={idx} className="group">
              <summary className="flex items-center justify-between p-4 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                <span className="font-medium text-slate-900">{faq.q}</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="p-4 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Guidelines Section */}
      <div id="guidelines" className="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Community Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Be Respectful</h3>
            <p className="text-sm text-slate-600">Treat all community members with respect. Disagreements should focus on ideas, not individuals.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Share Knowledge</h3>
            <p className="text-sm text-slate-600">Help others learn by sharing your experiences and insights. Cite sources when sharing research.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">No Medical Advice</h3>
            <p className="text-sm text-slate-600">Share information, not prescriptions. Always recommend consulting healthcare providers for personal health decisions.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Stay On Topic</h3>
            <p className="text-sm text-slate-600">Keep discussions relevant to metabolomics, health science, and wellness. Off-topic posts may be removed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
