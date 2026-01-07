import { useState } from 'react';
import { User, Bookmark, FileText, Beaker, BarChart3, Lightbulb, Settings, Award, Clock, ChevronRight, PlayCircle } from 'lucide-react';
import { trackDetails } from '../../data/modules';

const tabs = [
  { id: 'articles', label: 'Articles', icon: FileText },
  { id: 'molecules', label: 'Glossary', icon: Beaker },
  { id: 'modules', label: 'Modules', icon: Award },
  { id: 'comparisons', label: 'Comparisons', icon: BarChart3 },
  { id: 'advice', label: 'Saved Tips', icon: Lightbulb },
];

export default function ProfilePage({ savedItems, onNavigate, onGlossaryClick, learningProgress = {}, getTrackProgress }) {
  const [activeTab, setActiveTab] = useState('articles');

  const totalSaved = Object.values(savedItems).reduce((sum, arr) => sum + arr.length, 0);

  // Calculate learning stats
  const totalLessonsCompleted = Object.values(learningProgress).reduce(
    (sum, track) => sum + Object.values(track).filter(l => l.completed).length,
    0
  );

  const tracksCompleted = Object.keys(learningProgress).filter(trackId => {
    const track = trackDetails[trackId];
    const totalLessons = track?.lessons?.length || 0;
    const completed = Object.values(learningProgress[trackId]).filter(l => l.completed).length;
    return totalLessons > 0 && completed === totalLessons;
  }).length;

  // Estimate hours learned (roughly 30 min per lesson)
  const hoursLearned = Math.round(totalLessonsCompleted * 0.5 * 10) / 10;

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
                <span><strong>{hoursLearned}</strong> hours learned</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Award className="w-4 h-4 text-teal-600" />
                <span><strong>{tracksCompleted}</strong> tracks completed</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('settings-section');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(trackDetails).map(([trackId, track]) => {
            const numericId = parseInt(trackId);
            const totalLessons = track.lessons?.length || 0;
            const progress = getTrackProgress ? getTrackProgress(numericId, totalLessons) : 0;
            const completedLessons = learningProgress[numericId]
              ? Object.values(learningProgress[numericId]).filter(l => l.completed).length
              : 0;
            const hasStarted = progress > 0;
            const isComplete = progress === 100;

            return (
              <button
                key={trackId}
                onClick={() => onNavigate('track', numericId)}
                className={`text-left rounded-lg p-4 transition-all hover:scale-[1.02] ${
                  isComplete
                    ? 'bg-gradient-to-br from-teal-500/30 to-emerald-500/30 ring-1 ring-teal-400/50'
                    : hasStarted
                    ? 'bg-white/10 hover:bg-white/15'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium line-clamp-2 pr-2">{track.title}</h3>
                  {isComplete ? (
                    <Award className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  ) : hasStarted ? (
                    <PlayCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      isComplete ? 'bg-teal-400' : 'bg-teal-500'
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">
                    {isComplete
                      ? 'Completed!'
                      : hasStarted
                      ? `${completedLessons}/${totalLessons} lessons`
                      : 'Not started'}
                  </p>
                  <span className="text-sm font-medium text-teal-400">{progress}%</span>
                </div>
              </button>
            );
          })}
          <div className="flex items-center justify-center p-4 border-2 border-dashed border-white/20 rounded-lg">
            <button
              onClick={() => onNavigate('explore', 'tracks')}
              className="text-teal-400 font-medium hover:text-teal-300 transition-colors"
            >
              Browse All Tracks →
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        {Object.keys(learningProgress).length > 0 && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-bold text-teal-400">
                  {Object.values(learningProgress).reduce(
                    (sum, track) => sum + Object.values(track).filter(l => l.completed).length,
                    0
                  )}
                </p>
                <p className="text-sm text-slate-400">Lessons Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-400">
                  {Object.keys(learningProgress).filter(trackId => {
                    const track = trackDetails[trackId];
                    const totalLessons = track?.lessons?.length || 0;
                    const completed = Object.values(learningProgress[trackId]).filter(l => l.completed).length;
                    return totalLessons > 0 && completed === totalLessons;
                  }).length}
                </p>
                <p className="text-sm text-slate-400">Tracks Completed</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Settings Section */}
      <div id="settings-section" className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Settings
        </h2>
        <div className="space-y-6">
          {/* Notification Preferences */}
          <div className="pb-6 border-b border-slate-200">
            <h3 className="font-medium text-slate-900 mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Email notifications for new content</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Community reply notifications</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Learning progress reminders</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
            </div>
          </div>

          {/* Display Preferences */}
          <div className="pb-6 border-b border-slate-200">
            <h3 className="font-medium text-slate-900 mb-4">Display Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Show glossary terms inline</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Auto-play videos</span>
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
            </div>
          </div>

          {/* Data Management */}
          <div>
            <h3 className="font-medium text-slate-900 mb-4">Data Management</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset your learning progress? This cannot be undone.')) {
                    localStorage.removeItem('learningProgress');
                    window.location.reload();
                  }
                }}
                className="px-4 py-2 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                Reset Learning Progress
              </button>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to clear all saved items? This cannot be undone.')) {
                    localStorage.removeItem('savedItems');
                    window.location.reload();
                  }
                }}
                className="px-4 py-2 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                Clear Saved Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
