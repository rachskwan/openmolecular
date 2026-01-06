import { Search, Play, FileText, Zap, TrendingUp, Star, ChevronRight, Beaker, Apple, Award } from 'lucide-react';
import { articles } from '../../data/articles';
import { glossaryData } from '../../data/glossary';

export default function HomePage({ onNavigate, onGlossaryClick, onQuizClick, onSearchClick }) {
  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);
  const moleculeOfDay = glossaryData['NAD+'];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="molecular" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" />
                <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                <line x1="5" y1="5" x2="10" y2="10" stroke="currentColor" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#molecular)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              Learn how molecular science{' '}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                connects to your health
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8">
              Explore the fascinating world of metabolomics, biomarkers, and molecular pathways.
              Understand what your body is really telling you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onSearchClick}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-medium transition-colors"
              >
                <Search className="w-5 h-5" />
                Try Smart Search
              </button>
              <button
                onClick={onQuizClick}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
              >
                <Play className="w-5 h-5" />
                Take the Quiz
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Daily Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Research of the Day */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-purple-600 mb-3">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">Research of the Day</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">
              New study links omega-3 levels to cognitive function in aging
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Researchers found that higher Omega-3 Index correlates with better memory performance in adults over 60.
            </p>
            <button
              onClick={() => onNavigate('article', 1)}
              className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1"
            >
              Read Summary <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Molecule of the Day */}
          <div
            className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-200 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onGlossaryClick(moleculeOfDay.term)}
          >
            <div className="flex items-center gap-2 text-teal-600 mb-3">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Molecule of the Day</span>
            </div>
            <div className="text-3xl mb-2">{moleculeOfDay.icon}</div>
            <h3 className="font-semibold text-slate-900 mb-1">{moleculeOfDay.term}</h3>
            <p className="text-sm text-slate-600 mb-2">{moleculeOfDay.fullName}</p>
            <p className="text-sm text-slate-500 line-clamp-2">{moleculeOfDay.definition}</p>
          </div>

          {/* Trending Now */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-orange-600 mb-3">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Trending Now</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">
              "How I improved my Omega-3 Index in 6 months"
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Community member shares their journey with 234 replies and counting.
            </p>
            <button
              onClick={() => onNavigate('community')}
              className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1"
            >
              Join Discussion <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Spotlight Content</h2>
          <button
            onClick={() => onNavigate('explore')}
            className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map(article => (
            <button
              key={article.id}
              onClick={() => onNavigate('article', article.id)}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
            >
              <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <FileText className="w-12 h-12 text-slate-400" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.duration}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{article.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" /> {article.saves}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-teal-600 text-sm font-medium">
                  Read article <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Certification Programs */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">B2B Certification Programs</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Validate your products and platforms with our industry-recognized certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors">
              <Beaker className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Omics Platform Validation</h3>
              <p className="text-slate-400 text-sm mb-4">
                Validate your LC-MS, GC-MS, or NMR platform against industry standards
              </p>
              <button
                onClick={() => onNavigate('certification')}
                className="text-teal-400 text-sm font-medium hover:text-teal-300"
              >
                Learn More →
              </button>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors">
              <Apple className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Food Authenticity</h3>
              <p className="text-slate-400 text-sm mb-4">
                Verify ingredient sourcing and detect adulteration in food products
              </p>
              <button
                onClick={() => onNavigate('certification')}
                className="text-teal-400 text-sm font-medium hover:text-teal-300"
              >
                Learn More →
              </button>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors">
              <Award className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cosmetics & Supplements QA</h3>
              <p className="text-slate-400 text-sm mb-4">
                Ensure potency, purity, and label accuracy for consumer products
              </p>
              <button
                onClick={() => onNavigate('certification')}
                className="text-teal-400 text-sm font-medium hover:text-teal-300"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore by Topic</h2>
        <div className="flex flex-wrap gap-3">
          {['Omega-3', 'NAD+', 'Inflammation', 'Gut-Brain Axis', 'Metabolomics', 'Biomarkers', 'Mitochondria', 'Epigenetics'].map(topic => (
            <button
              key={topic}
              onClick={() => onGlossaryClick(topic)}
              className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-teal-500 hover:text-teal-600 transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
