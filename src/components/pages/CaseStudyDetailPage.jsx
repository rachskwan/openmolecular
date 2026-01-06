import { ArrowLeft, Clock, Building2, Award, Calendar, User, Quote, CheckCircle, ChevronRight } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';

export default function CaseStudyDetailPage({ caseStudyId, onBack, onNavigate }) {
  const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);

  if (!caseStudy) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Case study not found</h1>
        <button
          onClick={onBack}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Explore</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {caseStudy.certification}
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {caseStudy.industry}
            </span>
            {caseStudy.featured && (
              <span className="px-3 py-1 bg-amber-400/30 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {caseStudy.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-purple-100">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>{caseStudy.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{caseStudy.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{caseStudy.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{caseStudy.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Banner */}
      <div className="bg-purple-50 border-b border-purple-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.outcomes?.map((outcome, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-700">{outcome.metric}</div>
                <div className="text-sm font-medium text-purple-900">{outcome.label}</div>
                <div className="text-xs text-purple-600">{outcome.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Challenge Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {caseStudy.challenge}
          </p>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {caseStudy.solution}
          </p>
        </section>

        {/* Approach Section */}
        {caseStudy.approach && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.approach.map((step, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Results Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Results</h2>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudy.outcomes?.map((outcome, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-1">{outcome.metric}</div>
                  <div className="text-sm font-medium text-slate-900 mb-1">{outcome.label}</div>
                  <div className="text-xs text-slate-600">{outcome.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="mb-12">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <Quote className="w-10 h-10 text-purple-300 mb-4" />
              <blockquote className="text-xl text-slate-700 italic mb-6 leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                  {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{caseStudy.testimonial.author}</div>
                  <div className="text-sm text-slate-600">{caseStudy.testimonial.title}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Project Details */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Timeline */}
            {caseStudy.timeline && (
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Project Timeline</h3>
                <p className="text-slate-700">{caseStudy.timeline}</p>
              </div>
            )}

            {/* Technologies */}
            {caseStudy.technologies && (
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to achieve similar results?</h3>
          <p className="text-purple-100 mb-6">Learn how our certification programs can transform your quality assurance.</p>
          <button
            onClick={() => onNavigate('certification')}
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
          >
            Explore Certification Programs
          </button>
        </section>
      </div>

      {/* Related Case Studies */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudies
              .filter(cs => cs.id !== caseStudy.id && cs.certification === caseStudy.certification)
              .slice(0, 2)
              .map(relatedStudy => (
                <button
                  key={relatedStudy.id}
                  onClick={() => onNavigate('casestudy', relatedStudy.id)}
                  className="bg-white rounded-xl p-5 text-left shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                      {relatedStudy.certification}
                    </span>
                    <span className="text-slate-500 text-sm">{relatedStudy.duration}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 line-clamp-2">{relatedStudy.title}</h4>
                  <p className="text-sm text-slate-600 mb-2">{relatedStudy.client} • {relatedStudy.industry}</p>
                  <div className="flex items-center gap-1 text-purple-600 text-sm font-medium">
                    Read case study <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
