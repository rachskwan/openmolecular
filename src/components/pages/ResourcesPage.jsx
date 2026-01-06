import { useState } from 'react';
import { BookOpen, Search, ChevronRight, Beaker, FileText, HelpCircle, ExternalLink } from 'lucide-react';
import { glossaryData, glossaryCategories } from '../../data/glossary';

export default function ResourcesPage({ onNavigate, onGlossaryClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Resources</h1>
        <p className="text-slate-600">Glossary, guides, and tools to support your learning</p>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-6 text-white">
          <BookOpen className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Glossary</h3>
          <p className="text-teal-100 mb-4">
            {glossaryTerms.length}+ scientific terms explained in plain language
          </p>
          <button className="flex items-center gap-2 text-sm font-medium hover:underline">
            Browse Below <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <Beaker className="w-10 h-10 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Testing Partners</h3>
          <p className="text-slate-600 mb-4">
            Find certified labs and testing services in your area
          </p>
          <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
            Find Partners <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <HelpCircle className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">FAQs</h3>
          <p className="text-slate-600 mb-4">
            Common questions about metabolomics and biomarkers
          </p>
          <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
            View FAQs <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Glossary Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Scientific Glossary</h2>
          <span className="text-sm text-slate-500">{filteredTerms.length} terms</span>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {glossaryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
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

        {/* Terms Grid */}
        <div className="space-y-8">
          {Object.keys(groupedTerms).sort().map(letter => (
            <div key={letter}>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {letter}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedTerms[letter].map(term => (
                  <button
                    key={term.term}
                    onClick={() => onGlossaryClick(term.term)}
                    className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 hover:bg-teal-50 transition-colors text-left group"
                  >
                    <span className="text-2xl">{term.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 group-hover:text-teal-700">
                        {term.term}
                      </h4>
                      <p className="text-xs text-slate-500 truncate">{term.fullName}</p>
                      <p className="text-sm text-slate-600 line-clamp-2 mt-1">
                        {term.definition}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No terms found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
