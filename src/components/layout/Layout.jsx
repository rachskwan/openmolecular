import { useState } from 'react';
import { Menu, X, Search, User, BookOpen } from 'lucide-react';
import { categories, categoryColors } from '../../data/categories';

export default function Layout({ children, currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-slate-900">OpenMolecular</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {categories.map((category) => {
                const Icon = category.icon;
                const colors = categoryColors[category.color];
                const isActive = currentPage === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => onNavigate('category', category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? `${colors.bg} ${colors.text}`
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{category.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-500 hover:text-slate-700"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="p-4 space-y-1">
              {categories.map((category) => {
                const Icon = category.icon;
                const colors = categoryColors[category.color];
                const isActive = currentPage === category.id;

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      onNavigate('category', category.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      isActive
                        ? `${colors.bg} ${colors.text}`
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs text-slate-500">{category.description}</div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-slate-900">OpenMolecular</span>
              </div>
              <p className="text-sm text-slate-600 max-w-sm">
                A living library for evidence-guided everyday health.
                We help you understand what science shows, what remains uncertain,
                and how others are applying this knowledge.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-slate-900 mb-3">Categories</h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => onNavigate('category', category.id)}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-slate-900 mb-3">About</h4>
              <ul className="space-y-2">
                <li>
                  <button className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Our Philosophy
                  </button>
                </li>
                <li>
                  <button className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Evidence Standards
                  </button>
                </li>
                <li>
                  <button className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Community Guidelines
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              OpenMolecular is for educational purposes only and does not provide medical advice.
              Always consult with qualified healthcare providers for medical decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
