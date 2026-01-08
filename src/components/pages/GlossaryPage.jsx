import { useState } from 'react';
import { ArrowLeft, BookOpen, Search, ChevronDown } from 'lucide-react';
import { glossaryData, glossaryCategories } from '../../data/glossary';

export default function GlossaryPage({ onBack, onGlossaryClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const glossaryTerms = Object.values(glossaryData);

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(term);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Resources</span>
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Scientific Glossary</h1>
          </div>
          <p className="text-teal-100 text-lg max-w-2xl">
            {glossaryTerms.length}+ scientific terms explained in plain language.
            Click any term to learn more about its role in metabolomics and health.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search terms, definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {glossaryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-teal-100 text-teal-700'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing {filteredTerms.length} of {glossaryTerms.length} terms
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded text-xs font-medium ${
                  viewMode === 'grid' ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded text-xs font-medium ${
                  viewMode === 'list' ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-600'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Terms */}
        {filteredTerms.length > 0 ? (
          <div className="space-y-8">
            {Object.keys(groupedTerms).sort().map(letter => (
              <div key={letter}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-slate-200"></div>
                  <span className="text-sm text-slate-500">{groupedTerms[letter].length} terms</span>
                </div>

                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupedTerms[letter].map(term => (
                      <button
                        key={term.term}
                        onClick={() => onGlossaryClick(term.term)}
                        className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all text-left group"
                      >
                        <span className="text-3xl">{term.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                            {term.term}
                          </h3>
                          {term.fullName !== term.term && (
                            <p className="text-xs text-slate-500 mb-1">{term.fullName}</p>
                          )}
                          <p className="text-sm text-slate-600 line-clamp-2">
                            {term.definition}
                          </p>
                          <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">
                            {term.category}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                    {groupedTerms[letter].map(term => (
                      <button
                        key={term.term}
                        onClick={() => onGlossaryClick(term.term)}
                        className="w-full flex items-center gap-4 p-4 hover:bg-teal-50 transition-colors text-left group"
                      >
                        <span className="text-2xl">{term.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                              {term.term}
                            </h3>
                            {term.fullName !== term.term && (
                              <span className="text-sm text-slate-500">({term.fullName})</span>
                            )}
                          </div>
                          <p className="text-sm text-slate-600 line-clamp-1">
                            {term.definition}
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs whitespace-nowrap">
                          {term.category}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No terms found</h3>
            <p className="text-slate-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="text-teal-600 font-medium hover:text-teal-700"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Alphabet quick nav */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-slate-200 px-4 py-2 flex gap-1 overflow-x-auto max-w-[90vw]">
          {Object.keys(groupedTerms).sort().map(letter => (
            <button
              key={letter}
              onClick={() => {
                document.querySelector(`[data-letter="${letter}"]`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-8 h-8 rounded-full text-sm font-medium text-slate-600 hover:bg-teal-100 hover:text-teal-700 transition-colors"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
