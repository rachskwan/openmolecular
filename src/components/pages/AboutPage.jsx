import { ArrowLeft, Target, Microscope, Heart, Globe, BookOpen, Award, Users, Mail, Linkedin, Twitter } from 'lucide-react';

export default function AboutPage({ onBack }) {
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
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About OpenMolecular</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Democratizing metabolomics education for everyone
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Mission */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-teal-100 rounded-xl">
              <Target className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg mb-4">
            OpenMolecular is dedicated to making the complex world of metabolomics accessible to everyone.
            We believe that understanding your body's biochemistry shouldn't require a PhD.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our platform bridges the gap between cutting-edge scientific research and practical, actionable health insights
            that anyone can understand and apply to their wellness journey. Whether you're a curious individual wanting to
            understand your lab results, a healthcare professional seeking to integrate metabolomics into your practice,
            or a company looking to certify your products, OpenMolecular is here to help.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Microscope className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Educational Content</h3>
              <p className="text-slate-600">
                Comprehensive learning tracks, articles, and interactive tools that break down
                complex metabolomics concepts into digestible lessons. From beginner-friendly overviews
                to advanced deep-dives, we have content for every level.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Research Translation</h3>
              <p className="text-slate-600">
                We translate the latest peer-reviewed research into plain language, helping you
                stay informed about advances in biomarker science without needing to decode
                academic jargon.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Community Support</h3>
              <p className="text-slate-600">
                Connect with others on similar health journeys, share experiences, and learn
                from a supportive community of curious minds. Ask questions, share insights,
                and grow together.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Professional Resources</h3>
              <p className="text-slate-600">
                Certification programs for healthcare professionals looking to integrate
                metabolomics into their practice, and B2B certification for companies
                wanting to validate their products.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-rose-100 rounded-xl">
              <Heart className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">Accessibility</h3>
              <p className="text-slate-600">
                Science should be understandable by everyone, regardless of their background or education level.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">Accuracy</h3>
              <p className="text-slate-600">
                Evidence-based content you can trust. We cite our sources and update our materials as new research emerges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">Community</h3>
              <p className="text-slate-600">
                Learning together, growing together. We believe in the power of community to accelerate understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-100 rounded-xl">
              <Globe className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Team</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            OpenMolecular was founded by a diverse team of scientists, educators, and health
            advocates who share a passion for making metabolomics knowledge accessible. Our
            content is developed in collaboration with researchers and healthcare professionals
            to ensure accuracy and relevance.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium">Biochemists</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium">Medical Writers</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium">Nutritionists</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium">Data Scientists</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium">UX Designers</span>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium">Healthcare Providers</span>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/20 rounded-xl">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-teal-100 mb-6">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@openmolecular.org"
              className="px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold hover:bg-teal-50 transition-colors"
            >
              contact@openmolecular.org
            </a>
            <button className="px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center gap-2">
              <Twitter className="w-5 h-5" /> Twitter
            </button>
            <button className="px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
