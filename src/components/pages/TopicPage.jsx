import { useState } from 'react';
import { ArrowLeft, BookOpen, Users, AlertCircle, Beaker, ChevronDown, ChevronUp, ThumbsUp, ExternalLink } from 'lucide-react';
import { categories, categoryColors } from '../../data/categories';
import { topics, evidenceStrength, sampleContributions } from '../../data/topics';

export default function TopicPage({ categoryId, topicSlug, onNavigate, onBack }) {
  const [showContributionForm, setShowContributionForm] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const category = categories.find(c => c.id === categoryId);
  const categoryTopics = topics[categoryId] || [];
  const topic = categoryTopics.find(t => t.slug === topicSlug);
  const colors = categoryColors[category?.color || 'indigo'];
  const evidence = topic ? evidenceStrength[topic.evidenceStrength] : null;

  // Get contributions for this topic
  const contributions = sampleContributions.filter(c => c.topicId === topic?.id);

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Topic not found</h1>
        <button onClick={onBack} className="text-indigo-600 hover:text-indigo-700">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{category?.name}</span>
          </button>

          {/* Evidence Badge */}
          <div className="mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${evidence?.color}`}>
              {evidence?.icon} {evidence?.label}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {topic.title}
          </h1>

          {/* Population context */}
          <p className="text-sm text-slate-500">
            <span className="font-medium">Applies to:</span> {topic.population}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 1. Evidence Snapshot */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-slate-600" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Evidence Snapshot</h2>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <p className="text-slate-700 leading-relaxed">{topic.summary}</p>
          </div>
        </section>

        {/* 2. What the Research Shows */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Beaker className="w-4 h-4 text-green-600" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">What the Research Shows</h2>
          </div>
          <div className="space-y-3">
            {topic.research.map((study, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 border border-slate-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-green-700">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-700">{study.finding}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">
                        {study.type}
                      </span>
                      <span className="text-xs text-slate-400">{study.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. What We Do Not Know (Required Section) */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">What We Do Not Know</h2>
          </div>
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <ul className="space-y-3">
              {topic.unknowns.map((unknown, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">?</span>
                  <span className="text-slate-700">{unknown}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Experimentation Guardrails */}
        {topic.experimentation && (
          <section className="mb-10">
            <button
              onClick={() => setExpandedSection(expandedSection === 'experimentation' ? null : 'experimentation')}
              className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Beaker className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-slate-900">Experimentation Guardrails</h2>
                  <p className="text-sm text-slate-500">
                    {topic.experimentation.safe ? 'Generally safe to experiment' : 'Exercise caution'}
                    {topic.experimentation.reversible ? ' • Reversible' : ''}
                  </p>
                </div>
              </div>
              {expandedSection === 'experimentation' ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {expandedSection === 'experimentation' && (
              <div className="mt-2 bg-blue-50 rounded-xl p-6 border border-blue-200">
                <ul className="space-y-3">
                  {topic.experimentation.considerations.map((consideration, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-blue-700">{idx + 1}</span>
                      </span>
                      <span className="text-slate-700">{consideration}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-xs text-blue-700">
                    This is not medical advice. Consult a healthcare provider before making significant changes.
                  </p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Divider */}
        <div className="border-t border-slate-200 my-10" />

        {/* 5. How People Apply This (Community Section) */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-violet-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">How People Apply This</h2>
                <p className="text-sm text-slate-500">{contributions.length} contributions</p>
              </div>
            </div>
            <button
              onClick={() => setShowContributionForm(!showContributionForm)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                showContributionForm
                  ? 'bg-slate-200 text-slate-700'
                  : `${colors.button} text-white`
              }`}
            >
              {showContributionForm ? 'Cancel' : 'Share Your Experience'}
            </button>
          </div>

          {/* Contribution Form */}
          {showContributionForm && (
            <div className="mb-8 bg-violet-50 rounded-xl p-6 border border-violet-200">
              <h3 className="font-medium text-slate-900 mb-4">Share Your Experience</h3>
              <p className="text-sm text-slate-600 mb-6">
                Help others by sharing how you have applied this. Please be specific and honest about what you observed.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    How are you incorporating this?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                    placeholder="Describe your specific approach..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    What did you notice? Over what time period?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                    placeholder="Describe your observations and the duration..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    What else changed at the same time?
                  </label>
                  <textarea
                    rows={2}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                    placeholder="Be honest about other variables that may have contributed..."
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Contributions are moderated for tone and clarity. No causal claims please.</span>
                </div>

                <button className={`w-full py-3 ${colors.button} text-white rounded-lg font-medium`}>
                  Submit Contribution
                </button>
              </div>
            </div>
          )}

          {/* Existing Contributions */}
          {contributions.length > 0 ? (
            <div className="space-y-4">
              {contributions.map((contribution) => (
                <div
                  key={contribution.id}
                  className="bg-white rounded-xl p-5 border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-slate-600">
                          {contribution.username.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-slate-900">{contribution.username}</span>
                        <span className="text-xs text-slate-400 ml-2">{contribution.duration}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-xs">{contribution.helpful}</span>
                    </button>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-slate-500">Approach:</span>
                      <p className="text-slate-700 mt-1">{contribution.approach}</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-500">Observation:</span>
                      <p className="text-slate-700 mt-1">{contribution.observation}</p>
                    </div>
                    {contribution.otherChanges && contribution.otherChanges !== 'None' && (
                      <div>
                        <span className="font-medium text-slate-500">Other changes:</span>
                        <p className="text-slate-700 mt-1">{contribution.otherChanges}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
              <Users className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No contributions yet. Be the first to share your experience.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
