import { useState } from 'react';
import { BookOpen, Search, ChevronRight, Beaker, FileText, HelpCircle, ExternalLink, Users, Target, Award, Heart, Microscope, Globe } from 'lucide-react';
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
          <button
            onClick={() => document.getElementById('glossary-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm font-medium hover:underline"
          >
            Browse Below <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div id="partners" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <Beaker className="w-10 h-10 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Testing Partners</h3>
          <p className="text-slate-600 mb-4">
            Find certified labs and testing services in your area
          </p>
          <button
            onClick={() => onNavigate('certification')}
            className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            Find Partners <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <HelpCircle className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">FAQs</h3>
          <p className="text-slate-600 mb-4">
            Common questions about metabolomics and biomarkers
          </p>
          <button
            onClick={() => onNavigate('community')}
            className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            View FAQs <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Glossary Section */}
      <div id="glossary-section" className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
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

      {/* About Section */}
      <div id="about-section" className="mt-12 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8">
          <h2 className="text-2xl font-bold mb-2">About OpenMolecular</h2>
          <p className="text-slate-300">Democratizing metabolomics education for everyone</p>
        </div>

        <div className="p-6">
          {/* Mission */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              OpenMolecular is dedicated to making the complex world of metabolomics accessible to everyone.
              We believe that understanding your body's biochemistry shouldn't require a PhD. Our platform
              bridges the gap between cutting-edge scientific research and practical, actionable health insights
              that anyone can understand and apply to their wellness journey.
            </p>
          </div>

          {/* What We Do */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Microscope className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">What We Do</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-2">Educational Content</h4>
                <p className="text-sm text-slate-600">
                  Comprehensive learning tracks, articles, and interactive tools that break down
                  complex metabolomics concepts into digestible lessons.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-2">Research Translation</h4>
                <p className="text-sm text-slate-600">
                  We translate the latest peer-reviewed research into plain language, helping you
                  stay informed about advances in biomarker science.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-2">Community Support</h4>
                <p className="text-sm text-slate-600">
                  Connect with others on similar health journeys, share experiences, and learn
                  from a supportive community of curious minds.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-2">Professional Resources</h4>
                <p className="text-sm text-slate-600">
                  Certification programs for healthcare professionals looking to integrate
                  metabolomics into their practice.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Our Values</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-1">Accessibility</h4>
                <p className="text-sm text-slate-600">Science should be understandable by everyone</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-1">Accuracy</h4>
                <p className="text-sm text-slate-600">Evidence-based content you can trust</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-1">Community</h4>
                <p className="text-sm text-slate-600">Learning together, growing together</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Our Team</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              OpenMolecular was founded by a diverse team of scientists, educators, and health
              advocates who share a passion for making metabolomics knowledge accessible. Our
              content is developed in collaboration with researchers and healthcare professionals
              to ensure accuracy and relevance.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Biochemists</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Medical Writers</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Nutritionists</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Data Scientists</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">UX Designers</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Healthcare Providers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
