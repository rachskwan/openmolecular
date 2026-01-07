import { ArrowLeft, Settings, Bell, Eye, Database, UserPlus, LogOut, AlertTriangle, ChevronRight } from 'lucide-react';

export default function SettingsPage({ onBack, onNavigate }) {
  const handleLogout = () => {
    if (confirm('Are you sure you want to log out? Your saved data will remain on this device.')) {
      localStorage.removeItem('userProfile');
      window.location.reload();
    }
  };

  const handleSwitchAccount = () => {
    if (confirm('Are you sure you want to switch accounts? You will be logged out and can sign in with a different account.')) {
      localStorage.removeItem('userProfile');
      localStorage.removeItem('learningProgress');
      localStorage.removeItem('savedItems');
      localStorage.removeItem('following');
      localStorage.removeItem('userLikes');
      localStorage.removeItem('userReplies');
      localStorage.removeItem('userThreads');
      localStorage.removeItem('contentDiscussions');
      window.location.reload();
    }
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This will permanently remove all your data and cannot be undone.')) {
      if (confirm('This is your last chance. All your progress, saved items, and posts will be permanently deleted. Continue?')) {
        localStorage.clear();
        window.location.reload();
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Profile</span>
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <Settings className="w-5 h-5 text-slate-600" />
            </div>
            Settings
          </h1>
          <p className="text-slate-600 mt-2">Manage your preferences and account settings</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Notification Preferences */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Bell className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="font-semibold text-slate-900">Notification Preferences</h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-slate-900">Email notifications for new content</span>
                  <p className="text-xs text-slate-500 mt-0.5">Get notified when new articles or tracks are published</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-slate-900">Community reply notifications</span>
                  <p className="text-xs text-slate-500 mt-0.5">Get notified when someone replies to your discussions</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-slate-900">Learning progress reminders</span>
                  <p className="text-xs text-slate-500 mt-0.5">Weekly reminders to continue your learning tracks</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
            </div>
          </div>

          {/* Display Preferences */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Eye className="w-4 h-4 text-purple-600" />
              </div>
              <h2 className="font-semibold text-slate-900">Display Preferences</h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-slate-900">Show glossary terms inline</span>
                  <p className="text-xs text-slate-500 mt-0.5">Highlight scientific terms that can be clicked for definitions</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-slate-900">Auto-play videos</span>
                  <p className="text-xs text-slate-500 mt-0.5">Automatically play videos when viewing content</p>
                </div>
                <input type="checkbox" className="w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              </label>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <Database className="w-4 h-4 text-amber-600" />
              </div>
              <h2 className="font-semibold text-slate-900">Data Management</h2>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset your learning progress? This cannot be undone.')) {
                    localStorage.removeItem('learningProgress');
                    window.location.reload();
                  }
                }}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-left"
              >
                <div>
                  <p className="font-medium text-slate-900">Reset Learning Progress</p>
                  <p className="text-sm text-slate-500">Clear all completed lessons and track progress</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to clear all saved items? This cannot be undone.')) {
                    localStorage.removeItem('savedItems');
                    window.location.reload();
                  }
                }}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-left"
              >
                <div>
                  <p className="font-medium text-slate-900">Clear Saved Items</p>
                  <p className="text-sm text-slate-500">Remove all bookmarked articles and glossary terms</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Account */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-semibold text-slate-900 mb-4">Account</h2>
            <div className="space-y-3">
              <button
                onClick={handleSwitchAccount}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <UserPlus className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Switch Account</p>
                  <p className="text-sm text-slate-500">Sign out and use a different account</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <LogOut className="w-5 h-5 text-slate-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Log Out</p>
                  <p className="text-sm text-slate-500">Sign out of your current session</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-red-900">Delete Account</h2>
                <p className="text-sm text-red-700 mt-1">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <button
                  onClick={handleDeleteAccount}
                  className="mt-4 px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
