import { ArrowLeft, Users, Clock, TrendingUp, Filter } from 'lucide-react';
import { useState } from 'react';
import { categories, categoryColors } from '../../data/categories';
import { topics, evidenceStrength } from '../../data/topics';

export default function CategoryPage({ categoryId, onNavigate, onBack }) {
  const [sortBy, setSortBy] = useState('popular');
  const [filterEvidence, setFilterEvidence] = useState('all');

  const category = categories.find(c => c.id === categoryId);
  const categoryTopics = topics[categoryId] || [];
  const colors = categoryColors[category?.color || 'indigo'];
  const Icon = category?.icon;

  if (!category) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Category not found</h1>
        <button onClick={onBack} className="text-indigo-600 hover:text-indigo-700">
          Go back
        </button>
      </div>
    );
  }

  // Sort and filter topics
  let filteredTopics = [...categoryTopics];

  if (filterEvidence !== 'all') {
    filteredTopics = filteredTopics.filter(t => t.evidenceStrength === filterEvidence);
  }

  if (sortBy === 'popular') {
    filteredTopics.sort((a, b) => b.discussionCount - a.discussionCount);
  } else if (sortBy === 'recent') {
    filteredTopics.sort((a, b) => a.lastActivity.localeCompare(b.lastActivity));
  } else if (sortBy === 'evidence') {
    const order = { strong: 0, mixed: 1, limited: 2 };
    filteredTopics.sort((a, b) => order[a.evidenceStrength] - order[b.evidenceStrength]);
  }

  return (
    <div>
      {/* Hero */}
      <section className={`${colors.bg} border-b ${colors.border}`}>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">All Categories</span>
          </button>

          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 ${colors.badge} rounded-xl flex items-center justify-center`}>
              {Icon && <Icon className="w-7 h-7" />}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{category.name}</h1>
              <p className="text-slate-600 max-w-2xl">{category.overview}</p>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-6">
            <p className="text-sm text-slate-500 mb-2">Affects:</p>
            <div className="flex flex-wrap gap-2">
              {category.outcomes.map((outcome, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/70 rounded-full text-sm text-slate-700"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">Evidence:</span>
              <div className="flex gap-1">
                {['all', 'strong', 'mixed', 'limited'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setFilterEvidence(filter)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filterEvidence === filter
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {filter === 'all' ? 'All' : evidenceStrength[filter]?.icon + ' ' + filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm text-slate-700 border-0 focus:ring-2 focus:ring-slate-300"
              >
                <option value="popular">Most Discussed</option>
                <option value="recent">Recent Activity</option>
                <option value="evidence">Evidence Strength</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Topics List */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-4 text-sm text-slate-500">
          {filteredTopics.length} topic{filteredTopics.length !== 1 ? 's' : ''}
        </div>

        <div className="space-y-4">
          {filteredTopics.map((topic) => {
            const evidence = evidenceStrength[topic.evidenceStrength];

            return (
              <button
                key={topic.id}
                onClick={() => onNavigate('topic', categoryId, topic.slug)}
                className="w-full bg-white rounded-xl p-6 text-left border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    {/* Evidence Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${evidence.color}`}>
                        {evidence.icon} {evidence.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {topic.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {topic.summary}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {topic.discussionCount} contributions
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {topic.lastActivity}
                      </span>
                    </div>
                  </div>

                  <div className={`hidden sm:block px-3 py-2 rounded-lg ${colors.light}`}>
                    <TrendingUp className={`w-5 h-5 ${colors.text}`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No topics match your filter.</p>
            <button
              onClick={() => setFilterEvidence('all')}
              className="mt-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
