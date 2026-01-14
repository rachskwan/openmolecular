import { ArrowRight, Sparkles, Users, BookOpen, Shield } from 'lucide-react';
import { categories, categoryColors } from '../../data/categories';
import { topics } from '../../data/topics';

export default function HomePage({ onNavigate }) {
  // Get recent/popular topics across all categories
  const allTopics = Object.entries(topics).flatMap(([categoryId, categoryTopics]) =>
    categoryTopics.map(topic => ({ ...topic, categoryId }))
  );

  const popularTopics = allTopics
    .sort((a, b) => b.discussionCount - a.discussionCount)
    .slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Health knowledge you can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                actually trust
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              OpenMolecular bridges scientific evidence and real-world practice.
              We show you what research says, what remains uncertain, and how
              others are applying this knowledge in their lives.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('category', 'sleep-better')}
                className="px-5 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                Start Exploring
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
              >
                Our Philosophy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Evidence First</h3>
              <p className="text-sm text-slate-600">
                Every topic shows evidence strength, study types, and what we
                do not know. No hidden agendas or cherry-picked studies.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Lived Experience</h3>
              <p className="text-sm text-slate-600">
                Community contributions are structured and contextualized,
                never mixed with scientific evidence.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Always Evolving</h3>
              <p className="text-sm text-slate-600">
                Topics are living documents that update as new research emerges
                and community insights accumulate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Explore by Goal</h2>
          <p className="text-slate-600">
            Content organized around what you want to achieve, not medical diagnoses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const colors = categoryColors[category.color];
            const categoryTopics = topics[category.id] || [];
            const topicCount = categoryTopics.length;

            return (
              <button
                key={category.id}
                onClick={() => onNavigate('category', category.id)}
                className={`${colors.bg} ${colors.border} border rounded-xl p-6 text-left hover:shadow-md transition-all group`}
              >
                <div className={`w-12 h-12 ${colors.badge} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{category.name}</h3>
                <p className="text-sm text-slate-600 mb-3">{category.description}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{topicCount} topics</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Most Discussed */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Most Discussed</h2>
            <p className="text-slate-600">
              Topics with the most active community conversations right now
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularTopics.map((topic) => {
              const category = categories.find(c => c.id === topic.categoryId);
              const colors = categoryColors[category?.color || 'indigo'];

              return (
                <button
                  key={topic.id}
                  onClick={() => onNavigate('topic', topic.categoryId, topic.slug)}
                  className="bg-slate-50 rounded-xl p-5 text-left hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors.badge}`}>
                          {category?.name}
                        </span>
                        <span className="text-xs text-slate-500">{topic.lastActivity}</span>
                      </div>
                      <h3 className="font-medium text-slate-900 mb-1">{topic.title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{topic.summary}</p>
                    </div>
                    <div className="flex flex-col items-center text-slate-500">
                      <Users className="w-4 h-4 mb-1" />
                      <span className="text-xs font-medium">{topic.discussionCount}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join a community that values evidence and humility
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Share your experiences, learn from others, and help build a more
            nuanced understanding of what works in everyday health.
          </p>
          <button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors">
            Create Free Account
          </button>
        </div>
      </section>
    </div>
  );
}
