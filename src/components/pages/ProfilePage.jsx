import { useState } from 'react';
import { User, Bookmark, FileText, Beaker, BarChart3, Lightbulb, Settings, Award, Clock } from 'lucide-react';

const tabs = [
  { id: 'articles', label: 'Articles', icon: FileText },
  { id: 'molecules', label: 'Glossary', icon: Beaker },
  { id: 'modules', label: 'Modules', icon: Award },
  { id: 'comparisons', label: 'Comparisons', icon: BarChart3 },
  { id: 'advice', label: 'Saved Tips', icon: Lightbulb },
];

export default function ProfilePage({ savedItems, onNavigate, onGlossaryClick }) {
  const [activeTab, setActiveTab] = useState('articles');

  const totalSaved = Object.values(savedItems).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Profile Header */}
      <div id="settings" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Welcome Back</h1>
            <p className="text-slate-600 mb-4">Track your learning progress and saved content</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Bookmark className="w-4 h-4 text-teal-600" />
                <span><strong>{totalSaved}</strong> items saved</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4 text-teal-600" />
                <span><strong>0</strong> hours learned</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Award className="w-4 h-4 text-teal-600" />
                <span><strong>0</strong> certificates</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('explore')}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </div>

      {/* Saved Content */}
      <div id="saved" className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="border-b border-slate-200">
          <div className="flex gap-1 p-2 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const count = savedItems[tab.id]?.length || 0;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-teal-100 text-teal-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {count > 0 && (
                    <span className={`px-1.5 py-0.5 rounded text-xs ${
                      activeTab === tab.id
                        ? 'bg-teal-200 text-teal-800'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6">
          {savedItems[activeTab]?.length === 0 ? (
            <div className="text-center py-12">
              <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">No saved items yet</h3>
              <p className="text-slate-600 mb-4">
                Start exploring and save content you want to revisit later
              </p>
              <button
                onClick={() => onNavigate('explore')}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
              >
                Browse Content
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedItems[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    if (activeTab === 'molecules') {
                      onGlossaryClick(item.term);
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                      {item.category || item.type}
                    </span>
                    <span className="text-xs text-slate-500">{item.savedAt}</span>
                  </div>
                  <h4 className="font-medium text-slate-900 line-clamp-2">
                    {item.title || item.term || item.text}
                  </h4>
                  {item.fullName && (
                    <p className="text-sm text-slate-500 mt-1">{item.fullName}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Learning Progress */}
      <div id="progress" className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
        <p className="text-slate-300 mb-6">
          Pick up where you left off or start a new learning track
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="font-medium mb-2">Multi-Omics Foundations</h3>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div className="bg-teal-400 h-2 rounded-full" style={{ width: '0%' }} />
            </div>
            <p className="text-sm text-slate-400">Not started</p>
          </div>
          <div className="flex items-center justify-center p-4 border-2 border-dashed border-white/20 rounded-lg">
            <button
              onClick={() => onNavigate('explore')}
              className="text-teal-400 font-medium hover:text-teal-300 transition-colors"
            >
              Browse All Tracks →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
