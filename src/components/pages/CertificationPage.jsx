import { Beaker, Apple, Award, CheckCircle, ArrowRight, FileText, Users, Clock, ChevronRight, HelpCircle } from 'lucide-react';
import { certificationPrograms, certificationSteps } from '../../data/certifications';
import { caseStudies } from '../../data/caseStudies';

const iconMap = {
  Beaker: Beaker,
  Apple: Apple,
  Award: Award,
};

export default function CertificationPage({ onNavigate, onRequestConsultation, onScheduleCall }) {
  const featuredCaseStudies = caseStudies.filter(c => c.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Multiomics Services
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Comprehensive analytical services for metabolomics, proteomics, and beyond
              powered by cutting-edge technology
            </p>
            <button
              onClick={onRequestConsultation}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-medium transition-colors"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationPrograms.map(program => {
            const Icon = iconMap[program.icon] || Beaker;
            return (
              <div key={program.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  program.id === 1 ? 'bg-teal-100' :
                  program.id === 2 ? 'bg-emerald-100' :
                  'bg-amber-100'
                }`}>
                  <Icon className={`w-7 h-7 ${
                    program.id === 1 ? 'text-teal-600' :
                    program.id === 2 ? 'text-emerald-600' :
                    'text-amber-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {certificationSteps.map((step, idx) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
                {idx < certificationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="success" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Success Stories</h2>
          <button
            onClick={() => onNavigate('explore')}
            className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCaseStudies.map(study => (
            <button
              key={study.id}
              onClick={() => onNavigate('casestudy', study.id)}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-left"
            >
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                {study.certification}
              </span>
              <h3 className="font-semibold text-slate-900 mt-3 mb-2 line-clamp-2">{study.title}</h3>
              <p className="text-sm text-slate-600 mb-4">
                <span className="font-medium">{study.client}</span> • {study.industry}
              </p>
              <div className="space-y-2">
                {study.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <HelpCircle className="w-10 h-10 text-teal-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2">Everything you need to know about our certification programs</p>
          </div>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-medium text-slate-900">How long does the certification process take?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                The timeline varies by program. Product Purity Certification typically takes 4-6 weeks,
                Food Quality Assurance takes 6-8 weeks, and Excellence Awards require 8-12 weeks.
                Timelines depend on sample complexity and testing requirements.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-medium text-slate-900">What types of products can be certified?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                We certify a wide range of products including dietary supplements, functional foods,
                beverages, nutraceuticals, and wellness products. Our metabolomics-based analysis
                can assess purity, potency, and bioavailability across most consumable product categories.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-medium text-slate-900">How much does certification cost?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                Pricing is customized based on product type, testing requirements, and certification
                level. We offer flexible pricing models including per-product testing and annual
                certification packages. Contact our team for a personalized quote.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-medium text-slate-900">How long is the certification valid?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                Certifications are valid for 12 months from the date of issue. Annual recertification
                is required to maintain your certification status. We offer streamlined renewal
                processes for existing certified partners.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-medium text-slate-900">Can I use the certification badge in marketing?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                Yes! Certified products receive official OpenMolecular certification badges and
                marketing materials. You can use these on product packaging, websites, and
                promotional materials. We also provide co-marketing opportunities and inclusion
                in our certified product directory.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="font-medium text-slate-900">What happens if my product fails certification?</span>
                <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                If your product doesn't meet certification standards, we provide a detailed report
                outlining the areas that need improvement. You can work with our team to address
                these issues and resubmit for testing at a reduced fee within 90 days.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Certified?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your certification needs and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onScheduleCall}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-medium transition-colors"
            >
              Schedule a Call
            </button>
            <button
              onClick={() => onNavigate('resources')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
