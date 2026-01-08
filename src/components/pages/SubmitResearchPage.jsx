import { useState } from 'react';
import { ArrowLeft, FlaskConical, FileText, GraduationCap, Users, Send, CheckCircle, Lightbulb, BookOpen, Mail } from 'lucide-react';

export default function SubmitResearchPage({ onBack }) {
  const [formType, setFormType] = useState(null); // 'research' or 'module'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    title: '',
    description: '',
    link: '',
    expertise: '',
    motivation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Resources</span>
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h1>
          <p className="text-lg text-slate-600 mb-8">
            Your submission has been received. Our team will review your request and get back to you within 5-7 business days.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Return to Resources
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
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
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FlaskConical className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Collaborate With Us</h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Are you a researcher looking to share your work? Or an expert who wants to help others learn?
            We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Selection Cards */}
        {!formType && (
          <>
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">How would you like to contribute?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Submit Research Card */}
              <button
                onClick={() => setFormType('research')}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all text-left group"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                  <FileText className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Submit Research for an Article</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Have research you'd like featured on OpenMolecular? Submit your published work or findings
                  to be highlighted in an article that makes your research accessible to a broader audience.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    Peer-reviewed or preprint research
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    Novel findings in metabolomics, biomarkers, or health
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    We'll work with you to write an accessible summary
                  </li>
                </ul>
              </button>

              {/* Create Learning Module Card */}
              <button
                onClick={() => setFormType('module')}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all text-left group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <GraduationCap className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Help Create a Learning Module</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Are you an expert who wants to help educate others? Collaborate with us to create
                  learning tracks, interactive content, or educational materials.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    Subject matter experts welcome
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    Educators, researchers, and practitioners
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    We provide editorial and design support
                  </li>
                </ul>
              </button>
            </div>

            {/* Why Contribute Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Why Contribute to OpenMolecular?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-slate-900 mb-1">Reach a Wider Audience</h4>
                  <p className="text-sm text-slate-600">
                    Make your research accessible to curious learners, health enthusiasts, and professionals.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-medium text-slate-900 mb-1">Democratize Knowledge</h4>
                  <p className="text-sm text-slate-600">
                    Help bridge the gap between complex science and everyday understanding.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FlaskConical className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-slate-900 mb-1">Join Our Community</h4>
                  <p className="text-sm text-slate-600">
                    Connect with other researchers and educators passionate about metabolomics.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Research Submission Form */}
        {formType === 'research' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-teal-50 border-b border-teal-100 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-900">Submit Research for an Article</h2>
                    <p className="text-sm text-slate-600">Tell us about your research</p>
                  </div>
                </div>
                <button
                  onClick={() => setFormType(null)}
                  className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  Change selection
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="jane@university.edu"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Institution / Organization</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="University of Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Research Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Title of your research paper or study"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Brief Description *</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Describe your research findings and why they would be valuable for our audience..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Link to Publication (if available)</label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="https://doi.org/..."
                />
              </div>
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Research
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Module Creation Form */}
        {formType === 'module' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-purple-50 border-b border-purple-100 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-900">Help Create a Learning Module</h2>
                    <p className="text-sm text-slate-600">Tell us about your expertise</p>
                  </div>
                </div>
                <button
                  onClick={() => setFormType(null)}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  Change selection
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="jane@university.edu"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Institution / Organization</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="University of Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Area of Expertise *</label>
                <input
                  type="text"
                  name="expertise"
                  required
                  value={formData.expertise}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Metabolomics, Nutritional Biochemistry, Gut Microbiome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">What would you like to teach? *</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Describe the topic or concepts you'd like to help create educational content about..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Why do you want to contribute? *</label>
                <textarea
                  name="motivation"
                  required
                  rows={3}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your motivation to help others learn..."
                />
              </div>
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Contact Alternative */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm">
            Have questions before submitting?{' '}
            <a href="mailto:collaborate@openmolecular.org" className="text-teal-600 hover:text-teal-700 font-medium">
              Email us at collaborate@openmolecular.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
