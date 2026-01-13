import { useState, useEffect } from 'react';
import { Search, Play, FileText, Zap, TrendingUp, Star, ChevronRight, Beaker, Apple, Award, Gamepad2, X, BookOpen, MessageCircle, FlaskConical, Heart, Utensils, Brain, ShoppingBag, BarChart3, Clock, Users, Video, Quote } from 'lucide-react';
import { useArticles } from '../../hooks/useArticles';
import { videos } from '../../data/articles';

// Carousel topics - curiosity-sparking biohacker themes
const carouselTopics = [
  { text: 'Why is my HRV crashing?', color: 'text-rose-400' },
  { text: 'NAD+ at 40 vs 25', color: 'text-purple-400' },
  { text: 'Ozempic metabolomics', color: 'text-cyan-400' },
  { text: 'APOE4 & Alzheimer\'s risk', color: 'text-amber-400' },
  { text: 'Rapamycin cycling protocols', color: 'text-emerald-400' },
  { text: 'Why cold plunge works', color: 'text-sky-400' },
  { text: 'Seed oils: real data', color: 'text-orange-400' },
  { text: 'MTHFR & methylation', color: 'text-violet-400' },
  { text: 'Continuous glucose insights', color: 'text-teal-400' },
  { text: 'Thyroid & fatigue link', color: 'text-pink-400' },
  { text: 'Metformin vs berberine', color: 'text-lime-400' },
  { text: 'Gut-brain axis markers', color: 'text-indigo-400' },
  { text: 'PCOS reversal biomarkers', color: 'text-fuchsia-400' },
  { text: 'Peptides: BPC-157 data', color: 'text-blue-400' },
  { text: 'Creatine for longevity', color: 'text-green-400' },
  { text: 'Omega-3 index optimization', color: 'text-cyan-400' },
];

// User quotes/comments
const userQuotes = [
  { quote: "Finally understood why my inflammation markers were high", user: "biohacker_mike", time: "2h ago" },
  { quote: "The NAD+ protocol changed my energy levels completely", user: "sarah_optimized", time: "4h ago" },
  { quote: "Wish I knew about MTHFR variants years ago", user: "data_driven_dan", time: "6h ago" },
  { quote: "CGM data + this platform = game changer", user: "glucose_guru", time: "8h ago" },
  { quote: "Real user data > influencer opinions", user: "skeptical_steve", time: "12h ago" },
  { quote: "My doctor was impressed with my biomarker knowledge", user: "informed_patient", time: "1d ago" },
  { quote: "Tracked my Omega-3 index from 4% to 10%", user: "fatty_acid_fan", time: "1d ago" },
  { quote: "The peptide comparisons saved me months of research", user: "peptide_pioneer", time: "2d ago" },
];
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
  // Core Science & Biomarkers
  { name: 'Omega-3', keywords: ['omega-3', 'omega 3', 'fish oil', 'epa', 'dha', 'fatty acid'], color: 'blue' },
  { name: 'NAD+', keywords: ['nad+', 'nad', 'nmn', 'nicotinamide', 'longevity', 'aging'], color: 'purple' },
  { name: 'Metabolomics', keywords: ['metabolomics', 'metabolite', 'metabolism', 'metabolic'], color: 'teal' },
  { name: 'Biomarkers', keywords: ['biomarker', 'marker', 'indicator', 'testing', 'measurement'], color: 'amber' },
  { name: 'Mitochondria', keywords: ['mitochondria', 'mitochondrial', 'atp', 'energy', 'cellular'], color: 'orange' },
  { name: 'Gut Health', keywords: ['gut', 'microbiome', 'probiotic', 'digestive', 'bacteria', 'intestinal', 'leaky gut'], color: 'green' },
  { name: 'Hormones', keywords: ['hormone', 'hormonal', 'cortisol', 'insulin', 'thyroid', 'testosterone', 'estrogen', 'dhea'], color: 'pink' },
  { name: 'Antioxidants', keywords: ['antioxidant', 'oxidative', 'free radical', 'glutathione', 'coq10', 'oxidative stress'], color: 'emerald' },

  // Health Conditions & Diseases
  { name: 'Diabetes', keywords: ['diabetes', 'diabetic', 'blood sugar', 'glucose', 'hba1c', 'insulin resistance', 'type 2', 'prediabetes'], color: 'red' },
  { name: 'Autoimmune', keywords: ['autoimmune', 'lupus', 'rheumatoid', 'hashimoto', 'crohn', 'celiac', 'multiple sclerosis', 'ms'], color: 'violet' },
  { name: 'PCOS', keywords: ['pcos', 'polycystic', 'ovarian', 'androgen', 'fertility', 'menstrual'], color: 'fuchsia' },
  { name: 'Fatty Liver', keywords: ['fatty liver', 'nafld', 'nash', 'liver', 'hepatic', 'alt', 'ast', 'liver enzymes'], color: 'lime' },
  { name: 'Inflammation', keywords: ['inflammation', 'inflammatory', 'crp', 'cytokine', 'anti-inflammatory', 'chronic inflammation'], color: 'rose' },
  { name: 'Cardiovascular', keywords: ['cardiovascular', 'heart', 'cardiac', 'cholesterol', 'lipid', 'blood pressure', 'atherosclerosis', 'ldl', 'hdl'], color: 'red' },
  { name: 'Neurodegeneration', keywords: ['alzheimer', 'dementia', 'parkinson', 'neurodegeneration', 'cognitive decline', 'brain fog', 'memory loss'], color: 'slate' },
  { name: 'Mental Health', keywords: ['depression', 'anxiety', 'mood', 'stress', 'mental health', 'serotonin', 'dopamine', 'gaba'], color: 'indigo' },

  // Biohacker Products & Tools
  { name: 'CGM', keywords: ['cgm', 'continuous glucose', 'glucose monitor', 'dexcom', 'libre', 'levels', 'glucose tracking'], color: 'cyan' },
  { name: 'Red Light', keywords: ['red light', 'photobiomodulation', 'infrared', 'light therapy', 'joovv', 'led therapy', 'near infrared'], color: 'orange' },
  { name: 'Cold Exposure', keywords: ['cold plunge', 'cold exposure', 'cryotherapy', 'ice bath', 'cold therapy', 'cold shock', 'wim hof'], color: 'sky' },
  { name: 'Peptides', keywords: ['peptide', 'bpc-157', 'tb-500', 'thymosin', 'epithalon', 'semaglutide', 'tirzepatide', 'growth hormone'], color: 'violet' },
  { name: 'Nootropics', keywords: ['nootropic', 'smart drug', 'racetam', 'modafinil', 'lion\'s mane', 'alpha-gpc', 'cognitive enhancer'], color: 'purple' },
  { name: 'Wearables', keywords: ['wearable', 'oura', 'whoop', 'garmin', 'apple watch', 'hrv', 'sleep tracking', 'fitness tracker'], color: 'blue' },
  { name: 'Rapamycin', keywords: ['rapamycin', 'mtor', 'sirolimus', 'autophagy', 'longevity drug', 'anti-aging'], color: 'emerald' },
  { name: 'Methylene Blue', keywords: ['methylene blue', 'mitochondrial enhancer', 'cognitive', 'electron carrier', 'photosensitizer'], color: 'blue' },
  { name: 'Breathwork', keywords: ['breathwork', 'breathing', 'wim hof', 'pranayama', 'co2 tolerance', 'oxygen', 'hypoxia'], color: 'cyan' },
  { name: 'Sauna', keywords: ['sauna', 'heat therapy', 'heat shock', 'infrared sauna', 'finnish sauna', 'hyperthermia', 'heat exposure'], color: 'amber' },
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
  violet: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200', activeBg: 'bg-violet-500' },
  fuchsia: { bg: 'bg-fuchsia-100', text: 'text-fuchsia-700', border: 'border-fuchsia-200', activeBg: 'bg-fuchsia-500' },
  lime: { bg: 'bg-lime-100', text: 'text-lime-700', border: 'border-lime-200', activeBg: 'bg-lime-500' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200', activeBg: 'bg-slate-500' },
  sky: { bg: 'bg-sky-100', text: 'text-sky-700', border: 'border-sky-200', activeBg: 'bg-sky-500' },
};

export default function HomePage({ onNavigate, onGlossaryClick, onQuizClick, onSearchClick }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Fetch articles from Supabase
  const { articles, loading: articlesLoading } = useArticles();

  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);
  const moleculeOfDay = glossaryData['NAD+'] || {
    term: 'NAD+',
    fullName: 'Nicotinamide Adenine Dinucleotide',
    icon: '⚡',
    definition: 'A coenzyme essential for cellular energy production.'
  };

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

  // Carousel state
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % userQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section - Condensed */}
      <section id="hero" className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Learn how molecular science{' '}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                connects to your health
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-6">
              Explore metabolomics, biomarkers, and molecular pathways.
              Understand what your body is really telling you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button
                onClick={onSearchClick}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 rounded-lg font-medium transition-colors text-sm"
              >
                <Search className="w-4 h-4" />
                Try Smart Search
              </button>
              <button
                onClick={onQuizClick}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors text-sm"
              >
                <Play className="w-4 h-4" />
                Take the Quiz
              </button>
            </div>

            {/* User Quote Carousel */}
            <div className="relative h-16 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                {userQuotes.map((item, idx) => (
                  <div
                    key={idx}
                    className={`absolute transition-all duration-500 ease-in-out ${
                      idx === currentQuoteIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Quote className="w-3 h-3" />
                        <span className="text-xs italic text-slate-300">"{item.quote}"</span>
                        <Quote className="w-3 h-3 rotate-180" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="text-teal-400">@{item.user}</span>
                        <span>•</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Now - Static Topic Buttons */}
      <section className="bg-slate-50 py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-bold text-slate-900">Hot Now</h2>
            </div>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Static topic buttons */}
          <div className="flex flex-wrap gap-2">
            {carouselTopics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => onSearchClick(topic.text)}
                className={`px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all ${topic.color.replace('text-', 'hover:text-')}`}
              >
                {topic.text}
              </button>
            ))}
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
              className="col-span-1 row-span-2 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 border border-amber-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-300 transition-all text-left p-4 flex flex-col justify-between group"
            >
              <div>
                <span className="px-2 py-1 bg-amber-500/20 text-amber-700 rounded text-xs font-medium">
                  {interactive.type}
                </span>
              </div>
              <div className="text-center py-4">
                <span className="text-6xl group-hover:scale-110 transition-transform inline-block">{interactive.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-amber-900 text-sm mb-1">{interactive.title}</h3>
                <div className="flex items-center gap-1 text-xs text-amber-700">
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
              className="col-span-2 row-span-2 bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 border border-purple-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-purple-300 transition-all text-left p-5 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-700 rounded text-xs font-medium">
                  Case Study
                </span>
                <Beaker className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-purple-900 text-lg mb-2">{study.title}</h3>
                <p className="text-sm text-purple-700 line-clamp-2 mb-3">{study.summary}</p>
                <div className="flex items-center gap-2 text-xs text-purple-600">
                  <span className="px-2 py-1 bg-purple-500/10 rounded">{study.client}</span>
                  <span className="px-2 py-1 bg-purple-500/10 rounded">{study.industry}</span>
                </div>
              </div>
            </button>
          ))}

          {/* Video Card - Wide (2x1) */}
          {videos && videos.slice(0, 1).map(video => (
            <button
              key={`video-${video.id}`}
              onClick={() => onNavigate('video', video.id)}
              className="col-span-2 row-span-1 bg-gradient-to-r from-rose-100 via-pink-100 to-rose-100 border border-rose-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-rose-300 transition-all text-left p-4 flex items-center gap-4 group"
            >
              <div className="w-16 h-16 bg-rose-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/30 transition-colors">
                <Play className="w-8 h-8 text-rose-600" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="px-2 py-0.5 bg-rose-500/20 text-rose-700 rounded text-xs font-medium">Video • {video.duration}</span>
                <h3 className="font-semibold text-rose-900 mt-1 line-clamp-1">{video.title}</h3>
                <div className="text-xs text-rose-600 mt-1">{video.instructor}</div>
              </div>
            </button>
          ))}

          {/* Comparison - Square (2x1) */}
          {productComparisons.slice(0, 1).map(comparison => (
            <button
              key={`comparison-${comparison.id}`}
              onClick={() => onNavigate('comparison', comparison.id)}
              className="col-span-2 row-span-1 bg-gradient-to-r from-sky-100 via-cyan-100 to-sky-100 border border-sky-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-sky-300 transition-all text-left p-4 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-sky-600" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="px-2 py-0.5 bg-sky-500/20 text-sky-700 rounded text-xs font-medium">Comparison</span>
                <h3 className="font-semibold text-sky-900 mt-1 text-sm line-clamp-1">{comparison.title}</h3>
                <div className="flex gap-2 mt-1">
                  {comparison.products.slice(0, 2).map((product, idx) => (
                    <span key={idx} className="text-xs text-sky-600">{product}{idx === 0 && ' vs'}</span>
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
              className="col-span-2 row-span-1 bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 border border-emerald-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all text-left p-4 flex items-center gap-4 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">{interactive.icon}</div>
              <div className="flex-1 min-w-0">
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-700 rounded text-xs font-medium">Tool</span>
                <h3 className="font-semibold text-emerald-900 mt-1 text-sm line-clamp-1">{interactive.title}</h3>
                <div className="flex items-center gap-1 text-xs text-emerald-600 mt-1">
                  <Clock className="w-3 h-3" /> {interactive.duration}
                </div>
              </div>
            </button>
          ))}
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
