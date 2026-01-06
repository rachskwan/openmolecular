import { useState } from 'react';
import { MessageCircle, ThumbsUp, TrendingUp, Star, ChevronRight } from 'lucide-react';
import { communityThreads, communityCategories } from '../../data/community';

export default function CommunityPage({ onNavigate, onUserClick }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredThreads = activeCategory === 'All'
    ? communityThreads
    : communityThreads.filter(t => t.category === activeCategory);

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
          {/* Category Filter */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {communityCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
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
            {filteredThreads.map(thread => (
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
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" /> {thread.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <h3 className="font-semibold text-slate-900">Trending Topics</h3>
            </div>
            <div className="space-y-3">
              {['Omega-3 optimization', 'NAD+ supplements', 'Gut microbiome testing', 'Circadian health', 'Inflammation biomarkers'].map((topic, idx) => (
                <button
                  key={idx}
                  className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-sm text-slate-700 group-hover:text-teal-600">{topic}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
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
