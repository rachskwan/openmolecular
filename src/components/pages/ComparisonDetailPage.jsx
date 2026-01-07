import { ArrowLeft, Clock, User, Calendar, Star, CheckCircle, ChevronRight, MessageCircle, Send, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { productComparisons } from '../../data/comparisons';

export default function ComparisonDetailPage({ comparisonId, onBack, onNavigate, onGlossaryClick, getContentComments, addContentComment, getContentThreadId }) {
  const comparison = productComparisons.find(c => c.id === comparisonId);
  const [newComment, setNewComment] = useState('');

  if (!comparison) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Comparison not found</h1>
        <button
          onClick={onBack}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Explore</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {comparison.category}
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              Comparison
            </span>
            {comparison.featured && (
              <span className="px-3 py-1 bg-amber-400/30 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {comparison.title}
          </h1>

          {/* Products being compared */}
          <div className="flex flex-wrap gap-2 mb-6">
            {comparison.products.map((product, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium">
                {product}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{comparison.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{comparison.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{comparison.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>{comparison.saves} saves</span>
            </div>
          </div>
        </div>
      </div>

      {/* Verdict Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-blue-600 mb-1">Our Verdict</div>
              <div className="text-lg font-semibold text-slate-900">{comparison.verdict}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            {comparison.introduction}
          </p>
        </section>

        {/* Comparison Table */}
        {comparison.comparisonTable && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-900 border-b border-slate-200">Feature</th>
                    {comparison.products.map((product, idx) => (
                      <th key={idx} className="text-left p-4 font-semibold text-slate-900 border-b border-slate-200">
                        {product}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.comparisonTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-medium text-slate-900 border-b border-slate-200">
                        {row.feature}
                      </td>
                      <td className="p-4 text-slate-700 border-b border-slate-200">
                        {row.option1}
                      </td>
                      {row.option2 && (
                        <td className="p-4 text-slate-700 border-b border-slate-200">
                          {row.option2}
                        </td>
                      )}
                      {row.option3 && (
                        <td className="p-4 text-slate-700 border-b border-slate-200">
                          {row.option3}
                        </td>
                      )}
                      {row.option4 && (
                        <td className="p-4 text-slate-700 border-b border-slate-200">
                          {row.option4}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Detailed Analysis */}
        {comparison.detailedAnalysis && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Detailed Analysis</h2>
            <div className="space-y-8">
              {comparison.detailedAnalysis.map((analysis, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{analysis.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{analysis.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Recommendation */}
        {comparison.recommendation && (
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Our Recommendation</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {comparison.recommendation}
              </p>
            </div>
          </section>
        )}

        {/* Related Terms */}
        {comparison.relatedTerms && comparison.relatedTerms.length > 0 && (
          <section className="mb-12 border-t border-slate-200 pt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Glossary Terms</h3>
            <div className="flex flex-wrap gap-2">
              {comparison.relatedTerms.map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => onGlossaryClick && onGlossaryClick(term)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
                >
                  {term}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Comments Section */}
        <section className="mb-12 border-t border-slate-200 pt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-900">Discussion</h3>
              {getContentComments?.('comparison', comparison.id).length > 0 && (
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {getContentComments('comparison', comparison.id).length}
                </span>
              )}
            </div>
            {getContentThreadId?.('comparison', comparison.id) && (
              <button
                onClick={() => onNavigate('thread', getContentThreadId('comparison', comparison.id))}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View full discussion <ExternalLink className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Comment Input */}
          <div className="mb-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                You
              </div>
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts on this comparison..."
                  className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => {
                      if (newComment.trim()) {
                        addContentComment?.('comparison', comparison.id, comparison.title, newComment);
                        setNewComment('');
                      }
                    }}
                    disabled={!newComment.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          {getContentComments?.('comparison', comparison.id).length > 0 ? (
            <div className="space-y-4">
              {getContentComments('comparison', comparison.id).slice(0, 5).map((comment, idx) => (
                <div key={comment.id || idx} className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                    {comment.avatar || comment.author?.slice(0, 2) || 'U'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-slate-900">{comment.author || 'Anonymous'}</span>
                      <span className="text-sm text-slate-500">{comment.date || 'Just now'}</span>
                    </div>
                    <p className="text-slate-700 text-sm">{comment.content}</p>
                  </div>
                </div>
              ))}
              {getContentComments('comparison', comparison.id).length > 5 && (
                <button
                  onClick={() => onNavigate('thread', getContentThreadId('comparison', comparison.id))}
                  className="w-full py-3 text-center text-blue-600 hover:text-blue-700 font-medium text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  View all {getContentComments('comparison', comparison.id).length} comments in Community
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-8 bg-slate-50 rounded-lg">
              <MessageCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-500 text-sm">No comments yet. Be the first to share your thoughts!</p>
            </div>
          )}
        </section>
      </div>

      {/* Related Comparisons */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Related Comparisons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productComparisons
              .filter(c => c.id !== comparison.id && c.category === comparison.category)
              .slice(0, 2)
              .map(relatedComparison => (
                <button
                  key={relatedComparison.id}
                  onClick={() => onNavigate('comparison', relatedComparison.id)}
                  className="bg-white rounded-xl p-5 text-left shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      Comparison
                    </span>
                    <span className="text-slate-500 text-sm">{relatedComparison.duration}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 line-clamp-2">{relatedComparison.title}</h4>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {relatedComparison.products.slice(0, 3).map((product, idx) => (
                      <span key={idx} className="text-xs text-slate-500">{product}{idx < Math.min(relatedComparison.products.length, 3) - 1 ? ' vs' : ''}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                    Read comparison <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
