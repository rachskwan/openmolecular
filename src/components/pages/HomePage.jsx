import { useState, Suspense, lazy } from 'react';
import { Search, Play, FileText, Zap, TrendingUp, Star, ChevronRight, Beaker, Apple, Award, Gamepad2, X, BookOpen, MessageCircle, FlaskConical, Heart, Utensils, Brain, ShoppingBag, BarChart3, Clock, Users, Video } from 'lucide-react';

// Lazy load the biohacker background for better performance
const BiohackerBackground = lazy(() => import('../hero/BiohackerBackground'));
import { articles, videos } from '../../data/articles';
import { glossaryData } from '../../data/glossary';
import { communityThreads } from '../../data/community';
import { interactives } from '../../data/interactives';
import { caseStudies } from '../../data/caseStudies';
import { productComparisons } from '../../data/comparisons';

// Broad category definitions for section display
const categories = [
  {
    id: 'science-tech',
    name: 'Science & Tech',
    description: 'Metabolomics, biomarkers, and analytical methods',
    icon: FlaskConical,
    color: 'purple',
    keywords: ['metabolomics', 'biomarker', 'lc-ms', 'gc-ms', 'nmr', 'analytical', 'testing', 'technology', 'platform', 'mass spectrometry', 'chromatography', 'spectroscopy', 'method']
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    description: 'Longevity, inflammation, and cardiovascular health',
    icon: Heart,
    color: 'rose',
    keywords: ['health', 'wellness', 'longevity', 'aging', 'inflammation', 'cardiovascular', 'heart', 'chronic', 'disease', 'prevention', 'therapeutic', 'clinical']
  },
  {
    id: 'food-nutrition',
    name: 'Food & Nutrition',
    description: 'Nutrients, diet, and food science',
    icon: Utensils,
    color: 'emerald',
    keywords: ['food', 'nutrition', 'diet', 'nutrient', 'vitamin', 'omega', 'fatty acid', 'fiber', 'protein', 'carbohydrate', 'mineral', 'supplement', 'antioxidant', 'gut', 'microbiome']
  },
  {
    id: 'brain-behavior',
    name: 'Brain & Behavior',
    description: 'Cognitive function, mental health, and neuroscience',
    icon: Brain,
    color: 'indigo',
    keywords: ['brain', 'cognitive', 'mental', 'memory', 'neurotransmitter', 'dopamine', 'serotonin', 'mood', 'sleep', 'stress', 'anxiety', 'neurological', 'psychology']
  },
  {
    id: 'consumer-products',
    name: 'Consumer Products',
    description: 'Supplements, cosmetics, and product testing',
    icon: ShoppingBag,
    color: 'amber',
    keywords: ['supplement', 'cosmetic', 'product', 'consumer', 'label', 'quality', 'purity', 'potency', 'authenticity', 'certification', 'testing', 'brand']
  }
];

const categoryColorClasses = {
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'bg-purple-100 text-purple-600', text: 'text-purple-600', hover: 'hover:bg-purple-100' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', icon: 'bg-rose-100 text-rose-600', text: 'text-rose-600', hover: 'hover:bg-rose-100' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'bg-emerald-100 text-emerald-600', text: 'text-emerald-600', hover: 'hover:bg-emerald-100' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'bg-indigo-100 text-indigo-600', text: 'text-indigo-600', hover: 'hover:bg-indigo-100' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'bg-amber-100 text-amber-600', text: 'text-amber-600', hover: 'hover:bg-amber-100' },
};

// Topic definitions with keywords for filtering
const topics = [
  { name: 'Omega-3', keywords: ['omega-3', 'omega 3', 'fish oil', 'epa', 'dha', 'fatty acid'], color: 'blue' },
  { name: 'NAD+', keywords: ['nad+', 'nad', 'nmn', 'nicotinamide', 'longevity', 'aging'], color: 'purple' },
  { name: 'Inflammation', keywords: ['inflammation', 'inflammatory', 'crp', 'cytokine', 'anti-inflammatory'], color: 'red' },
  { name: 'Gut Health', keywords: ['gut', 'microbiome', 'probiotic', 'digestive', 'bacteria', 'intestinal'], color: 'green' },
  { name: 'Metabolomics', keywords: ['metabolomics', 'metabolite', 'metabolism', 'metabolic'], color: 'teal' },
  { name: 'Biomarkers', keywords: ['biomarker', 'marker', 'indicator', 'testing', 'measurement'], color: 'amber' },
  { name: 'Mitochondria', keywords: ['mitochondria', 'mitochondrial', 'atp', 'energy', 'cellular'], color: 'orange' },
  { name: 'Cardiovascular', keywords: ['cardiovascular', 'heart', 'cardiac', 'cholesterol', 'lipid', 'blood pressure'], color: 'rose' },
  { name: 'Brain Health', keywords: ['brain', 'cognitive', 'neurological', 'memory', 'mental', 'neurotransmitter'], color: 'indigo' },
  { name: 'Hormones', keywords: ['hormone', 'hormonal', 'cortisol', 'insulin', 'thyroid', 'testosterone', 'estrogen'], color: 'pink' },
  { name: 'Vitamins', keywords: ['vitamin', 'b12', 'vitamin d', 'folate', 'b6', 'nutrient'], color: 'cyan' },
  { name: 'Antioxidants', keywords: ['antioxidant', 'oxidative', 'free radical', 'glutathione', 'coq10'], color: 'emerald' },
];

const colorClasses = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', activeBg: 'bg-blue-500' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', activeBg: 'bg-purple-500' },
  red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200', activeBg: 'bg-red-500' },
  green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', activeBg: 'bg-green-500' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-700', border: 'border-teal-200', activeBg: 'bg-teal-500' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', activeBg: 'bg-amber-500' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', activeBg: 'bg-orange-500' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200', activeBg: 'bg-rose-500' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200', activeBg: 'bg-indigo-500' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200', activeBg: 'bg-pink-500' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-200', activeBg: 'bg-cyan-500' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', activeBg: 'bg-emerald-500' },
};

export default function HomePage({ onNavigate, onGlossaryClick, onQuizClick, onSearchClick }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);
  const moleculeOfDay = glossaryData['NAD+'];

  // Get content for a category
  const getCategoryContent = (category) => {
    const matchesKeywords = (text) => {
      if (!text) return false;
      const lowerText = text.toLowerCase();
      return category.keywords.some(keyword => lowerText.includes(keyword));
    };

    const categoryArticles = articles.filter(a =>
      matchesKeywords(a.title) || matchesKeywords(a.category) || matchesKeywords(a.description)
    ).slice(0, 4);

    const categoryGlossary = Object.values(glossaryData).filter(term =>
      matchesKeywords(term.term) || matchesKeywords(term.fullName) || matchesKeywords(term.definition) || matchesKeywords(term.category)
    ).slice(0, 4);

    const categoryDiscussions = communityThreads.filter(t =>
      matchesKeywords(t.title) || matchesKeywords(t.preview) || matchesKeywords(t.content)
    ).slice(0, 2);

    return { articles: categoryArticles, glossaryTerms: categoryGlossary, discussions: categoryDiscussions };
  };

  // Get filtered content based on selected topic
  const getFilteredContent = (topicName) => {
    const topic = topics.find(t => t.name === topicName);
    if (!topic) return { articles: [], glossaryTerms: [], discussions: [] };

    const matchesKeywords = (text) => {
      if (!text) return false;
      const lowerText = text.toLowerCase();
      return topic.keywords.some(keyword => lowerText.includes(keyword));
    };

    const filteredArticles = articles.filter(a =>
      matchesKeywords(a.title) || matchesKeywords(a.category) || matchesKeywords(a.description)
    ).slice(0, 4);

    const filteredGlossary = Object.values(glossaryData).filter(term =>
      matchesKeywords(term.term) || matchesKeywords(term.fullName) || matchesKeywords(term.definition) || matchesKeywords(term.category)
    ).slice(0, 6);

    const filteredDiscussions = communityThreads.filter(t =>
      matchesKeywords(t.title) || matchesKeywords(t.preview) || matchesKeywords(t.content)
    ).slice(0, 3);

    return { articles: filteredArticles, glossaryTerms: filteredGlossary, discussions: filteredDiscussions };
  };

  const handleTopicClick = (topicName) => {
    if (selectedTopic === topicName) {
      setSelectedTopic(null);
    } else {
      setSelectedTopic(topicName);
    }
  };

  const filteredContent = selectedTopic ? getFilteredContent(selectedTopic) : null;
  const selectedTopicData = selectedTopic ? topics.find(t => t.name === selectedTopic) : null;

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden min-h-[500px]">
        {/* Biohacker Data Background */}
        <Suspense fallback={
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
        }>
          <BiohackerBackground />
        </Suspense>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 z-10">
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
      <section id="highlights" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Daily Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              onClick={() => onNavigate('thread', 1)}
              className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1"
            >
              Join Discussion <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Daily Challenge */}
          <button
            onClick={() => onNavigate('interactive', 1)}
            className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow text-left"
          >
            <div className="flex items-center gap-2 text-blue-100 mb-3">
              <Gamepad2 className="w-5 h-5" />
              <span className="text-sm font-medium">Daily Challenge</span>
            </div>
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="font-semibold mb-2">
              Omega-3 Quiz Challenge
            </h3>
            <p className="text-sm text-blue-100 mb-4">
              Test your knowledge and earn points! 2,847 players today.
            </p>
            <span className="text-sm font-medium flex items-center gap-1">
              Play Now <ChevronRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>

      {/* Latest & Trending Feed */}
      <section id="spotlights" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Latest & Trending</h2>
            <p className="text-slate-500 text-sm mt-1">Fresh content from across the platform</p>
          </div>
          <button
            onClick={() => onNavigate('explore')}
            className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1"
          >
            Explore All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Content Type Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <span className="px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">All</span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium flex items-center gap-1">
            <FileText className="w-3 h-3" /> Articles
          </span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium flex items-center gap-1">
            <Gamepad2 className="w-3 h-3" /> Interactives
          </span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium flex items-center gap-1">
            <Video className="w-3 h-3" /> Videos
          </span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium flex items-center gap-1">
            <BarChart3 className="w-3 h-3" /> Comparisons
          </span>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[140px] gap-4">
          {/* Featured Article - Large (3x2) */}
          {featuredArticles.slice(0, 1).map(article => (
            <button
              key={`article-${article.id}`}
              onClick={() => onNavigate('article', article.id)}
              className="col-span-2 row-span-2 md:col-span-2 lg:col-span-3 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all text-left group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileText className="w-16 h-16 text-slate-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-teal-500 text-white rounded text-xs font-medium">Featured</span>
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs">{article.category}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 drop-shadow-lg">{article.title}</h3>
                <p className="text-sm text-white/80 line-clamp-2 mb-2">{article.introduction}</p>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.duration}</span>
                </div>
              </div>
            </button>
          ))}

          {/* Interactive Quiz - Tall (1x2) */}
          {interactives.filter(i => i.featured || i.type === 'Quiz').slice(0, 1).map(interactive => (
            <button
              key={`interactive-${interactive.id}`}
              onClick={() => onNavigate('interactive', interactive.id)}
              className="col-span-1 row-span-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left p-4 flex flex-col justify-between group"
            >
              <div>
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium">
                  {interactive.type}
                </span>
              </div>
              <div className="text-center py-4">
                <span className="text-6xl group-hover:scale-110 transition-transform inline-block">{interactive.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">{interactive.title}</h3>
                <div className="flex items-center gap-1 text-xs text-white/80">
                  <Users className="w-3 h-3" /> {interactive.plays?.toLocaleString() || '0'} plays
                </div>
              </div>
            </button>
          ))}

          {/* Case Study - Tall (2x2) */}
          {caseStudies.filter(cs => cs.featured).slice(0, 1).map(study => (
            <button
              key={`casestudy-${study.id}`}
              onClick={() => onNavigate('casestudy', study.id)}
              className="col-span-2 row-span-2 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left p-5 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs font-medium">
                  Case Study
                </span>
                <Beaker className="w-6 h-6 text-white/60" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">{study.title}</h3>
                <p className="text-sm text-white/70 line-clamp-2 mb-3">{study.summary}</p>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="px-2 py-1 bg-white/10 rounded">{study.client}</span>
                  <span className="px-2 py-1 bg-white/10 rounded">{study.industry}</span>
                </div>
              </div>
            </button>
          ))}

          {/* Video Card - Wide (2x1) */}
          {videos && videos.slice(0, 1).map(video => (
            <button
              key={`video-${video.id}`}
              onClick={() => onNavigate('video', video.id)}
              className="col-span-2 row-span-1 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left p-4 flex items-center gap-4 group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="px-2 py-0.5 bg-white/20 text-white rounded text-xs font-medium">Video • {video.duration}</span>
                <h3 className="font-semibold text-white mt-1 line-clamp-1">{video.title}</h3>
                <div className="text-xs text-white/70 mt-1">{video.instructor}</div>
              </div>
            </button>
          ))}

          {/* Comparison - Square (2x1) */}
          {productComparisons.slice(0, 1).map(comparison => (
            <button
              key={`comparison-${comparison.id}`}
              onClick={() => onNavigate('comparison', comparison.id)}
              className="col-span-2 row-span-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left p-4 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="px-2 py-0.5 bg-white/20 text-white rounded text-xs font-medium">Comparison</span>
                <h3 className="font-semibold text-white mt-1 text-sm line-clamp-1">{comparison.title}</h3>
                <div className="flex gap-2 mt-1">
                  {comparison.products.slice(0, 2).map((product, idx) => (
                    <span key={idx} className="text-xs text-white/70">{product}{idx === 0 && ' vs'}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}

          {/* Article 2 - Medium (2x1) */}
          {featuredArticles.slice(1, 2).map(article => (
            <button
              key={`article-${article.id}`}
              onClick={() => onNavigate('article', article.id)}
              className="col-span-2 row-span-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all text-left flex group"
            >
              <div className="w-1/3 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex-shrink-0">
                {article.image ? (
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-slate-400" />
                  </div>
                )}
              </div>
              <div className="p-4 flex-1">
                <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs font-medium">Article</span>
                <h3 className="font-semibold text-slate-900 mt-1 text-sm line-clamp-2">{article.title}</h3>
                <div className="text-xs text-slate-500 mt-1">{article.duration}</div>
              </div>
            </button>
          ))}

          {/* Interactive Tool - Square (2x1) */}
          {interactives.filter(i => i.type === 'Interactive Tool').slice(0, 1).map(interactive => (
            <button
              key={`interactive-tool-${interactive.id}`}
              onClick={() => onNavigate('interactive', interactive.id)}
              className="col-span-2 row-span-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left p-4 flex items-center gap-4 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">{interactive.icon}</div>
              <div className="flex-1 min-w-0">
                <span className="px-2 py-0.5 bg-white/20 text-white rounded text-xs font-medium">Tool</span>
                <h3 className="font-semibold text-white mt-1 text-sm line-clamp-1">{interactive.title}</h3>
                <div className="flex items-center gap-1 text-xs text-white/70 mt-1">
                  <Clock className="w-3 h-3" /> {interactive.duration}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('explore')}
            className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium text-sm"
          >
            Load More Content
          </button>
        </div>
      </section>

      {/* Multiomics Services */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Multiomics Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Comprehensive analytical services for metabolomics, proteomics, and beyond
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

      {/* Browse by Category & Discover by Topic - Side by Side */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Browse by Category */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse by Category</h2>
              <p className="text-slate-600 mb-6">Explore content organized by major themes</p>

              <div className="space-y-4">
                {categories.map(category => {
                  const Icon = category.icon;
                  const colors = categoryColorClasses[category.color];
                  const isExpanded = expandedCategory === category.id;
                  const content = isExpanded ? getCategoryContent(category) : null;

                  return (
                    <div key={category.id} className={`rounded-xl border ${colors.border} overflow-hidden transition-all`}>
                      {/* Category Header */}
                      <button
                        onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                        className={`w-full ${colors.bg} p-4 flex items-center gap-3 ${colors.hover} transition-colors`}
                      >
                        <div className={`w-10 h-10 rounded-lg ${colors.icon} flex items-center justify-center`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="font-semibold text-slate-900">{category.name}</h3>
                          <p className="text-xs text-slate-600">{category.description}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      {/* Expanded Content */}
                      {isExpanded && content && (
                        <div className="bg-white p-4 border-t border-slate-100">
                          <div className="space-y-4">
                            {/* Articles */}
                            {content.articles.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <FileText className="w-3 h-3 text-slate-500" />
                                  <span className="text-xs font-medium text-slate-700">Articles</span>
                                </div>
                                <div className="space-y-2">
                                  {content.articles.slice(0, 3).map(article => (
                                    <button
                                      key={article.id}
                                      onClick={() => onNavigate('article', article.id)}
                                      className="w-full p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-left"
                                    >
                                      <h5 className="font-medium text-slate-900 text-sm line-clamp-1">{article.title}</h5>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Key Terms */}
                            {content.glossaryTerms.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <BookOpen className="w-3 h-3 text-slate-500" />
                                  <span className="text-xs font-medium text-slate-700">Key Terms</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {content.glossaryTerms.slice(0, 4).map(term => (
                                    <button
                                      key={term.term}
                                      onClick={() => onGlossaryClick(term.term)}
                                      className="px-2 py-1 bg-slate-50 rounded hover:bg-slate-100 transition-colors text-xs font-medium text-slate-700 flex items-center gap-1"
                                    >
                                      <span>{term.icon}</span> {term.term}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Explore More Link */}
                            <button
                              onClick={() => onNavigate('explore')}
                              className={`text-xs font-medium ${colors.text} hover:underline`}
                            >
                              Explore more →
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Discover by Topic */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Discover by Topic</h2>
              <p className="text-slate-600 mb-6">Click a topic to find related content</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {topics.map(topic => {
                  const colors = colorClasses[topic.color];
                  const isSelected = selectedTopic === topic.name;
                  return (
                    <button
                      key={topic.name}
                      onClick={() => handleTopicClick(topic.name)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                        isSelected
                          ? `${colors.activeBg} text-white shadow-md`
                          : `bg-white border ${colors.border} ${colors.text} hover:${colors.bg}`
                      }`}
                    >
                      {topic.name}
                      {isSelected && <X className="w-3 h-3" />}
                    </button>
                  );
                })}
              </div>

              {/* Filtered Content Display */}
              {selectedTopic && filteredContent ? (
                <div className={`rounded-xl border-2 ${colorClasses[selectedTopicData?.color || 'teal'].border} p-4 bg-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-900">
                      <span className={colorClasses[selectedTopicData?.color || 'teal'].text}>{selectedTopic}</span> content
                    </h3>
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="text-xs text-slate-500 hover:text-slate-700"
                    >
                      Clear
                    </button>
                  </div>

                  {/* Articles */}
                  {filteredContent.articles.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-slate-600" />
                        <span className="text-xs font-medium text-slate-700">Articles ({filteredContent.articles.length})</span>
                      </div>
                      <div className="space-y-2">
                        {filteredContent.articles.slice(0, 3).map(article => (
                          <button
                            key={article.id}
                            onClick={() => onNavigate('article', article.id)}
                            className="w-full p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-left"
                          >
                            <h5 className="font-medium text-slate-900 text-sm line-clamp-1">{article.title}</h5>
                            <p className="text-xs text-slate-500">{article.duration}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Glossary Terms */}
                  {filteredContent.glossaryTerms.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-slate-600" />
                        <span className="text-xs font-medium text-slate-700">Terms ({filteredContent.glossaryTerms.length})</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {filteredContent.glossaryTerms.slice(0, 6).map(term => (
                          <button
                            key={term.term}
                            onClick={() => onGlossaryClick(term.term)}
                            className="px-2 py-1 bg-slate-50 rounded hover:bg-slate-100 transition-colors text-xs flex items-center gap-1"
                          >
                            <span>{term.icon}</span>
                            <span className="font-medium text-slate-900">{term.term}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Discussions */}
                  {filteredContent.discussions.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="w-4 h-4 text-slate-600" />
                        <span className="text-xs font-medium text-slate-700">Discussions ({filteredContent.discussions.length})</span>
                      </div>
                      <div className="space-y-2">
                        {filteredContent.discussions.slice(0, 2).map(thread => (
                          <button
                            key={thread.id}
                            onClick={() => onNavigate('thread', thread.id)}
                            className="w-full p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-left"
                          >
                            <h5 className="font-medium text-slate-900 text-sm line-clamp-1">{thread.title}</h5>
                            <p className="text-xs text-slate-500">{thread.replies} replies</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* No results */}
                  {filteredContent.articles.length === 0 && filteredContent.glossaryTerms.length === 0 && filteredContent.discussions.length === 0 && (
                    <div className="text-center py-4">
                      <p className="text-sm text-slate-500">No content found for this topic yet.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Search className="w-6 h-6 text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-600">Select a topic above to discover related articles, terms, and discussions</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
