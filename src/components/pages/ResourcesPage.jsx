import { useState } from 'react';
import { BookOpen, Search, ChevronRight, FileText, HelpCircle, Users, Target, Award, Heart, Microscope, Globe, Mail, CheckCircle, Sparkles } from 'lucide-react';
import { glossaryData, glossaryCategories } from '../../data/glossary';

export default function ResourcesPage({ onNavigate, onGlossaryClick }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const glossaryTerms = Object.values(glossaryData);
  const featuredTerms = glossaryTerms.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Resources</h1>
        <p className="text-slate-600">Glossary, guides, and tools to support your learning</p>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Glossary Card */}
        <button
          onClick={() => onNavigate('glossary')}
          className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-6 text-white text-left hover:shadow-lg transition-shadow"
        >
          <BookOpen className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Glossary</h3>
          <p className="text-teal-100 mb-4 text-sm">
            {glossaryTerms.length}+ scientific terms explained in plain language
          </p>
          <span className="flex items-center gap-2 text-sm font-medium">
            Browse All <ChevronRight className="w-4 h-4" />
          </span>
        </button>

        {/* About Card */}
        <button
          onClick={() => onNavigate('about')}
          className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl p-6 text-white text-left hover:shadow-lg transition-shadow"
        >
          <Globe className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-slate-300 mb-4 text-sm">
            Learn about our mission to democratize metabolomics education
          </p>
          <span className="flex items-center gap-2 text-sm font-medium">
            Learn More <ChevronRight className="w-4 h-4" />
          </span>
        </button>

        {/* FAQs Card */}
        <button
          onClick={() => document.getElementById('faqs-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-left hover:shadow-md transition-shadow"
        >
          <HelpCircle className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">FAQs</h3>
          <p className="text-slate-600 mb-4 text-sm">
            Common questions about metabolomics and biomarkers
          </p>
          <span className="flex items-center gap-2 text-sm font-medium text-teal-600">
            View FAQs <ChevronRight className="w-4 h-4" />
          </span>
        </button>

        {/* Newsletter Card */}
        <button
          onClick={() => document.getElementById('newsletter-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white text-left hover:shadow-lg transition-shadow"
        >
          <Mail className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
          <p className="text-purple-100 mb-4 text-sm">
            Get the latest research and health insights weekly
          </p>
          <span className="flex items-center gap-2 text-sm font-medium">
            Subscribe <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Glossary Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Scientific Glossary</h2>
              <p className="text-sm text-slate-500">{glossaryTerms.length}+ terms</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('glossary')}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center gap-2"
          >
            View Full Glossary <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Terms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTerms.map(term => (
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
                <p className="text-sm text-slate-600 line-clamp-2 mt-1">
                  {term.definition}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* About Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1">About OpenMolecular</h2>
              <p className="text-slate-300 text-sm">Democratizing metabolomics education for everyone</p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="px-4 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
            >
              Read More <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="font-medium text-slate-900 mb-1">Our Mission</h4>
              <p className="text-sm text-slate-600">Making metabolomics accessible to everyone</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-slate-900 mb-1">Evidence-Based</h4>
              <p className="text-sm text-slate-600">Content reviewed by scientists and experts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-medium text-slate-900 mb-1">Community</h4>
              <p className="text-sm text-slate-600">Join thousands learning together</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div id="faqs-section" className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          <details className="group bg-slate-50 rounded-xl">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
              <span className="font-medium text-slate-900">What is metabolomics?</span>
              <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-5 pb-5 text-slate-600">
              Metabolomics is the scientific study of metabolites—small molecules that are the end products of cellular processes.
              These include amino acids, lipids, sugars, and other compounds that provide a snapshot of your body's current
              biochemical state. By analyzing metabolites, we can gain insights into nutrition, disease risk, and overall health.
            </div>
          </details>

          <details className="group bg-slate-50 rounded-xl">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
              <span className="font-medium text-slate-900">How do biomarkers work?</span>
              <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-5 pb-5 text-slate-600">
              Biomarkers are measurable indicators of biological states or conditions. They can be proteins, metabolites,
              genes, or other molecules that indicate normal biological processes, disease states, or responses to treatments.
              Examples include cholesterol levels for heart health, blood glucose for diabetes, and inflammatory markers like CRP.
            </div>
          </details>

          <details className="group bg-slate-50 rounded-xl">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
              <span className="font-medium text-slate-900">What tests can I get done?</span>
              <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-5 pb-5 text-slate-600">
              Various metabolomic tests are available including fatty acid profiles (like Omega-3 Index), organic acid tests,
              amino acid panels, comprehensive metabolic panels, and specialized tests for gut health, inflammation, and
              nutritional status. Check our Certification page for certified testing providers and programs.
            </div>
          </details>

          <details className="group bg-slate-50 rounded-xl">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
              <span className="font-medium text-slate-900">How do I interpret my results?</span>
              <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-5 pb-5 text-slate-600">
              Our learning tracks and articles provide guidance on understanding test results. We break down what each
              biomarker means, optimal ranges, and actionable steps. However, we always recommend working with a
              qualified healthcare provider for personalized interpretation and treatment recommendations.
            </div>
          </details>

          <details className="group bg-slate-50 rounded-xl">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
              <span className="font-medium text-slate-900">Is the content on OpenMolecular evidence-based?</span>
              <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-5 pb-5 text-slate-600">
              Yes! All our educational content is developed and reviewed by scientists, healthcare professionals, and
              subject matter experts. We cite peer-reviewed research and regularly update our materials as new evidence
              emerges. Our goal is to make complex science accessible while maintaining scientific accuracy.
            </div>
          </details>

          <details className="group bg-slate-50 rounded-xl">
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
              <span className="font-medium text-slate-900">How can I get certified?</span>
              <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-5 pb-5 text-slate-600">
              OpenMolecular offers certification programs for both individuals and businesses. Complete our learning tracks
              to earn certificates, or visit our Certification page to learn about our B2B programs for product certification,
              quality assurance, and professional development.
            </div>
          </details>
        </div>
      </div>

      {/* Newsletter Section */}
      <div id="newsletter-section" className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-sm overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Stay in the Loop</h2>
            <p className="text-purple-100 mb-8 text-lg">
              Get weekly insights on metabolomics, health optimization tips, and the latest research—delivered straight to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-white/20 rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">You're Subscribed!</h3>
                <p className="text-purple-100">Thank you for joining our community. Check your inbox for a welcome email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-slate-900"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-purple-200">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Weekly research digest
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Expert health tips
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No spam, unsubscribe anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
