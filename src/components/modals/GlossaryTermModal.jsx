import { X, Bookmark, ChevronRight, ExternalLink, Loader2 } from 'lucide-react';
import { useGlossaryTerm } from '../../hooks/useGlossary';

export default function GlossaryTermModal({ term, onClose, onTermClick, onNavigate, toggleSaveItem, isItemSaved }) {
  const { term: termData, loading } = useGlossaryTerm(term);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl text-center">
          <Loader2 className="w-8 h-8 text-teal-500 animate-spin mx-auto" />
          <p className="text-slate-600 mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  if (!termData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
          <p className="text-slate-600">Term not found</p>
          <button onClick={onClose} className="mt-4 text-teal-600">Close</button>
        </div>
      </div>
    );
  }

  const isSaved = isItemSaved(termData.term, 'molecules', true);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 text-white p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-4xl mb-3">{termData.icon}</div>
            <h2 className="text-2xl font-bold mb-1">{termData.term}</h2>
            <p className="text-teal-100">{termData.fullName}</p>
            <span className="inline-block mt-3 px-3 py-1 bg-white/20 rounded-full text-sm">
              {termData.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[50vh] overflow-y-auto">
            {/* Definition */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-900 mb-2">Definition</h3>
              <p className="text-slate-600 leading-relaxed">{termData.definition}</p>
            </div>

            {/* Key Points */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-900 mb-2">Key Points</h3>
              <ul className="space-y-2">
                {termData.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Food Sources */}
            {termData.foods && (
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 mb-2">Food Sources</h3>
                <div className="flex flex-wrap gap-2">
                  {termData.foods.map((food, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                    >
                      {food}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Terms */}
            {termData.relatedTerms && termData.relatedTerms.length > 0 && (
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Related Terms</h3>
                <div className="flex flex-wrap gap-2">
                  {termData.relatedTerms.map((relatedTerm, idx) => {
                    const exists = glossaryData[relatedTerm];
                    return (
                      <button
                        key={idx}
                        onClick={() => exists && onTermClick(relatedTerm)}
                        disabled={!exists}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          exists
                            ? 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {relatedTerm}
                        {exists && <ChevronRight className="w-3 h-3 inline ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="border-t border-slate-200 p-4 flex items-center justify-between">
            <button
              onClick={() => toggleSaveItem(termData, 'molecules', true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isSaved
                  ? 'bg-teal-100 text-teal-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              {isSaved ? 'Saved' : 'Save to Library'}
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('explore');
              }}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
