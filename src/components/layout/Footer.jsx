export default function Footer({ onNavigate }) {
  const footerLinks = {
    explore: [
      { label: 'Articles', action: () => onNavigate('explore') },
      { label: 'Learning Tracks', action: () => onNavigate('explore') },
      { label: 'Interactives', action: () => onNavigate('explore') },
      { label: 'Product Comparisons', action: () => onNavigate('explore') },
    ],
    community: [
      { label: 'Discussions', action: () => onNavigate('community') },
      { label: 'Q&A', action: () => onNavigate('community') },
      { label: 'Success Stories', action: () => onNavigate('community') },
      { label: 'Expert AMAs', action: () => onNavigate('community') },
    ],
    resources: [
      { label: 'Glossary', action: () => onNavigate('resources') },
      { label: 'Research Library', action: () => onNavigate('explore') },
      { label: 'Testing Partners', action: () => {} },
      { label: 'FAQs', action: () => {} },
    ],
    company: [
      { label: 'About Us', action: () => {} },
      { label: 'Our Mission', action: () => {} },
      { label: 'Scientific Advisory', action: () => {} },
      { label: 'Contact', action: () => {} },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="font-semibold text-lg">OpenMolecular</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Making molecular science accessible to everyone.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.action}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.action}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.action}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.action}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Stay up to date</h4>
              <p className="text-slate-400 text-sm">
                Get the latest research summaries and health tips in your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 w-64"
              />
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 OpenMolecular. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Terms of Service
            </button>
            <button className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
