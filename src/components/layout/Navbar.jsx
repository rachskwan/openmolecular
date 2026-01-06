import { Home, Compass, Users, Award, BookOpen, User, Search, Bell, Menu, X, ChevronDown, Sparkles, TrendingUp, GraduationCap, FileText, FlaskConical, GitCompare, Gamepad2, MessageSquare, HelpCircle, Shield, Building2, CheckCircle, Trophy, Globe, Beaker, Heart, Bookmark, BarChart3, Settings } from 'lucide-react';
import { useState } from 'react';

const pages = [
  {
    id: 'home',
    label: 'Discover',
    icon: Home,
    subtabs: [
      { id: 'featured', label: 'Featured Content', icon: Sparkles, section: 'hero' },
      { id: 'highlights', label: 'Highlights', icon: TrendingUp, section: 'highlights' },
      { id: 'spotlights', label: 'Spotlights', icon: GraduationCap, section: 'spotlights' },
    ]
  },
  {
    id: 'explore',
    label: 'Explore',
    icon: Compass,
    subtabs: [
      { id: 'tracks', label: 'Learning Tracks', icon: GraduationCap, tab: 'Tracks' },
      { id: 'articles', label: 'Articles', icon: FileText, tab: 'Articles' },
      { id: 'casestudies', label: 'Case Studies', icon: FlaskConical, tab: 'Case Studies' },
      { id: 'comparisons', label: 'Comparisons', icon: GitCompare, tab: 'Comparisons' },
      { id: 'interactives', label: 'Interactives', icon: Gamepad2, tab: 'Interactives' },
    ]
  },
  {
    id: 'community',
    label: 'Community',
    icon: Users,
    subtabs: [
      { id: 'discussions', label: 'Discussions', icon: MessageSquare, section: 'discussions' },
      { id: 'faqs', label: 'FAQs', icon: HelpCircle, section: 'faqs' },
      { id: 'guidelines', label: 'Guidelines', icon: Shield, section: 'guidelines' },
    ]
  },
  {
    id: 'certification',
    label: 'Certification',
    icon: Award,
    subtabs: [
      { id: 'programs', label: 'Our Programs', icon: Building2, section: 'programs' },
      { id: 'process', label: 'How It Works', icon: CheckCircle, section: 'process' },
      { id: 'success', label: 'Success Stories', icon: Trophy, section: 'success' },
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: BookOpen,
    subtabs: [
      { id: 'glossary', label: 'Glossary', icon: FileText, section: 'glossary-section' },
      { id: 'partners', label: 'Testing Partners', icon: Beaker, section: 'partners' },
      { id: 'about', label: 'About Us', icon: Globe, section: 'about-section' },
    ]
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    subtabs: [
      { id: 'saved', label: 'Saved Items', icon: Bookmark, section: 'saved' },
      { id: 'progress', label: 'My Progress', icon: BarChart3, section: 'progress' },
      { id: 'settings', label: 'Settings', icon: Settings, section: 'settings' },
    ]
  },
];

export default function Navbar({ currentPage, setCurrentPage, onSearchClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPage, setHoveredPage] = useState(null);

  const handleSubtabClick = (pageId, subtab) => {
    setHoveredPage(null);
    // If subtab has a tab property (for ExplorePage), navigate with tab param
    if (subtab.tab) {
      setCurrentPage(pageId, subtab.tab);
    } else {
      setCurrentPage(pageId);
      // Small delay to allow page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(subtab.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <span className="font-semibold text-slate-900 text-lg">OpenMolecular</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {pages.map(page => (
              <div
                key={page.id}
                className="relative"
                onMouseEnter={() => setHoveredPage(page.id)}
                onMouseLeave={() => setHoveredPage(null)}
              >
                <button
                  onClick={() => setCurrentPage(page.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                    currentPage === page.id
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {page.label}
                  {page.subtabs && page.subtabs.length > 0 && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${hoveredPage === page.id ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {page.subtabs && page.subtabs.length > 0 && hoveredPage === page.id && (
                  <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 py-2 overflow-hidden">
                      {page.subtabs.map((subtab) => {
                        const SubIcon = subtab.icon;
                        return (
                          <button
                            key={subtab.id}
                            onClick={() => handleSubtabClick(page.id, subtab)}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors text-left"
                          >
                            <SubIcon className="w-4 h-4 flex-shrink-0" />
                            <span>{subtab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={onSearchClick}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-teal-500 rounded-full" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {pages.map(page => {
                const Icon = page.icon;
                return (
                  <div key={page.id}>
                    <button
                      onClick={() => {
                        setCurrentPage(page.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        currentPage === page.id
                          ? 'bg-teal-50 text-teal-700'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {page.label}
                    </button>
                    {/* Mobile Subtabs */}
                    {page.subtabs && page.subtabs.length > 0 && (
                      <div className="ml-8 mt-1 mb-2 space-y-1">
                        {page.subtabs.map(subtab => {
                          const SubIcon = subtab.icon;
                          return (
                            <button
                              key={subtab.id}
                              onClick={() => {
                                handleSubtabClick(page.id, subtab);
                                setMobileMenuOpen(false);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors text-left"
                            >
                              <SubIcon className="w-3.5 h-3.5 flex-shrink-0" />
                              {subtab.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
