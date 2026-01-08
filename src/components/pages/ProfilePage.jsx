import { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import { User, Bookmark, FileText, Beaker, BarChart3, Lightbulb, Award, Clock, ChevronRight, PlayCircle, Download, Share2, CheckCircle, Users, Pencil, X, Save, Camera, Trash2, Zap, Flame, Target, Star, Heart } from 'lucide-react';
import { trackDetails } from '../../data/modules';
import { getUserByUsername } from '../../data/users';

// Function to generate certificate PDF
const generateCertificatePDF = (track, userName) => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const certificateId = `OM-${track.id}-${track.completedAt.getFullYear()}-${String(track.completedAt.getMonth() + 1).padStart(2, '0')}`;

  // Background
  doc.setFillColor(255, 251, 235); // amber-50
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Border
  doc.setDrawColor(251, 191, 36); // amber-400
  doc.setLineWidth(3);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

  // Inner border
  doc.setDrawColor(217, 119, 6); // amber-600
  doc.setLineWidth(1);
  doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

  // Corner decorations
  doc.setFillColor(251, 191, 36);
  doc.circle(20, 20, 5, 'F');
  doc.circle(pageWidth - 20, 20, 5, 'F');
  doc.circle(20, pageHeight - 20, 5, 'F');
  doc.circle(pageWidth - 20, pageHeight - 20, 5, 'F');

  // Header - OpenMolecular
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(20, 184, 166); // teal-500
  doc.text('OPENMOLECULAR', pageWidth / 2, 35, { align: 'center' });

  // Certificate of Completion
  doc.setFontSize(32);
  doc.setTextColor(30, 41, 59); // slate-800
  doc.text('Certificate of Completion', pageWidth / 2, 55, { align: 'center' });

  // Decorative line
  doc.setDrawColor(20, 184, 166);
  doc.setLineWidth(0.5);
  doc.line(pageWidth / 2 - 60, 62, pageWidth / 2 + 60, 62);

  // This certifies that
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text('This certifies that', pageWidth / 2, 80, { align: 'center' });

  // Recipient name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(30, 41, 59);
  doc.text(userName || 'Learner', pageWidth / 2, 95, { align: 'center' });

  // Has successfully completed
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(100, 116, 139);
  doc.text('has successfully completed the learning track', pageWidth / 2, 112, { align: 'center' });

  // Track title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(217, 119, 6); // amber-600
  doc.text(track.title, pageWidth / 2, 128, { align: 'center' });

  // Lessons completed
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139);
  doc.text(`Comprising ${track.lessonsCount} comprehensive lessons`, pageWidth / 2, 140, { align: 'center' });

  // Date
  const formattedDate = track.completedAt.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  doc.setFontSize(12);
  doc.text(`Completed on ${formattedDate}`, pageWidth / 2, 155, { align: 'center' });

  // Signature line
  doc.setDrawColor(148, 163, 184); // slate-400
  doc.setLineWidth(0.3);
  doc.line(pageWidth / 2 - 40, 175, pageWidth / 2 + 40, 175);
  doc.setFontSize(10);
  doc.setTextColor(148, 163, 184);
  doc.text('OpenMolecular Education Team', pageWidth / 2, 182, { align: 'center' });

  // Certificate ID
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184);
  doc.text(`Certificate ID: ${certificateId}`, pageWidth / 2, pageHeight - 20, { align: 'center' });

  // Verification text
  doc.setFontSize(8);
  doc.text('Verify at openmolecular.com/verify', pageWidth / 2, pageHeight - 15, { align: 'center' });

  // Save the PDF
  doc.save(`OpenMolecular-Certificate-${track.title.replace(/\s+/g, '-')}.pdf`);
};

const tabs = [
  { id: 'articles', label: 'Articles', icon: FileText },
  { id: 'molecules', label: 'Glossary', icon: Beaker },
  { id: 'modules', label: 'Modules', icon: Award },
  { id: 'comparisons', label: 'Comparisons', icon: BarChart3 },
  { id: 'advice', label: 'Saved Tips', icon: Lightbulb },
];

export default function ProfilePage({ savedItems, onNavigate, onGlossaryClick, learningProgress = {}, getTrackProgress, following = [], onUserClick, userProfile = {}, updateUserProfile }) {
  const [activeTab, setActiveTab] = useState('articles');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(userProfile.name || '');
  const [editBio, setEditBio] = useState(userProfile.bio || '');
  const [editPicture, setEditPicture] = useState(userProfile.picture || '');
  const fileInputRef = useRef(null);

  const handleSaveProfile = () => {
    updateUserProfile({
      name: editName.trim(),
      bio: editBio.trim(),
      picture: editPicture,
    });
    setIsEditingProfile(false);
  };

  const handleCancelEdit = () => {
    setEditName(userProfile.name || '');
    setEditBio(userProfile.bio || '');
    setEditPicture(userProfile.picture || '');
    setIsEditingProfile(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 500KB to avoid localStorage limits)
      if (file.size > 500 * 1024) {
        alert('Image too large. Please choose an image under 500KB.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setEditPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePicture = () => {
    setEditPicture('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getInitials = (name) => {
    if (!name) return null;
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

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

  // Get completed tracks with details
  const completedTracks = Object.keys(learningProgress)
    .filter(trackId => {
      const track = trackDetails[trackId];
      const totalLessons = track?.lessons?.length || 0;
      const completed = Object.values(learningProgress[trackId]).filter(l => l.completed).length;
      return totalLessons > 0 && completed === totalLessons;
    })
    .map(trackId => {
      const track = trackDetails[trackId];
      // Find the latest completion date
      const completionDates = Object.values(learningProgress[trackId])
        .filter(l => l.completedAt)
        .map(l => new Date(l.completedAt));
      const latestDate = completionDates.length > 0
        ? new Date(Math.max(...completionDates))
        : new Date();
      return {
        id: trackId,
        title: track.title,
        completedAt: latestDate,
        lessonsCount: track.lessons?.length || 0,
      };
    })
    .sort((a, b) => b.completedAt - a.completedAt);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Profile Header */}
      <div id="settings" className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar */}
          {isEditingProfile ? (
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                {editPicture ? (
                  <img src={editPicture} alt="Profile" className="w-full h-full object-cover" />
                ) : getInitials(editName) || (
                  <User className="w-12 h-12" />
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="absolute -bottom-1 -right-1 flex gap-1">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors shadow-lg"
                  title="Upload photo"
                >
                  <Camera className="w-4 h-4" />
                </button>
                {editPicture && (
                  <button
                    onClick={handleRemovePicture}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    title="Remove photo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-2 text-center">Max 500KB</p>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
              {userProfile.picture ? (
                <img src={userProfile.picture} alt="Profile" className="w-full h-full object-cover" />
              ) : getInitials(userProfile.name) || (
                <User className="w-10 h-10" />
              )}
            </div>
          )}
          <div className="flex-1">
            {isEditingProfile ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    maxLength={50}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
                  <textarea
                    value={editBio}
                    onChange={(e) => setEditBio(e.target.value)}
                    placeholder="Tell us about yourself..."
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    maxLength={200}
                  />
                  <p className="text-xs text-slate-500 mt-1">{editBio.length}/200 characters</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveProfile}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl font-bold text-slate-900">
                    {userProfile.name || 'Welcome Back'}
                  </h1>
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-slate-100 rounded-lg transition-colors"
                    title="Edit profile"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-slate-600 mb-4">
                  {userProfile.bio || 'Track your learning progress and saved content'}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Bookmark className="w-4 h-4 text-teal-600" />
                    <span><strong>{totalSaved}</strong> saved</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span><strong>{hoursLearned}</strong> hrs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span><strong>{tracksCompleted}</strong> tracks</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <button
                    onClick={() => onNavigate('community')}
                    className="flex items-center gap-3 text-sm hover:text-teal-600 transition-colors"
                  >
                    <span className="text-slate-600"><strong>{following.length}</strong> following</span>
                    <span className="text-slate-600"><strong>12</strong> followers</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Badges */}
        {!isEditingProfile && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm font-medium text-slate-700 mb-3">Badges</p>
            <div className="flex flex-wrap gap-2">
              {totalLessonsCompleted >= 1 && (
                <div className="group relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full cursor-default">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium text-amber-700">First Steps</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    Completed first lesson
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                  </div>
                </div>
              )}
              {tracksCompleted >= 1 && (
                <div className="group relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full cursor-default">
                    <Target className="w-4 h-4 text-teal-500" />
                    <span className="text-sm font-medium text-teal-700">Track Master</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    Finished a learning track
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                  </div>
                </div>
              )}
              {totalSaved >= 5 && (
                <div className="group relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-full cursor-default">
                    <Star className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium text-purple-700">Curator</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    Saved 5+ items
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                  </div>
                </div>
              )}
              {following.length >= 3 && (
                <div className="group relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-full cursor-default">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span className="text-sm font-medium text-pink-700">Social</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    Following 3+ members
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                  </div>
                </div>
              )}
              {hoursLearned >= 5 && (
                <div className="group relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full cursor-default">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-orange-700">Dedicated</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    5+ hours of learning
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                  </div>
                </div>
              )}
              {totalLessonsCompleted === 0 && totalSaved === 0 && following.length === 0 && (
                <p className="text-sm text-slate-400 italic">Complete lessons and engage with content to earn badges!</p>
              )}
            </div>
          </div>
        )}
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

      {/* Earned Certificates Section */}
      <div id="certificates" className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Earned Certificates
          </h2>
          {completedTracks.length > 0 && (
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              {completedTracks.length} Certificate{completedTracks.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        {completedTracks.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-xl">
            <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No certificates yet</h3>
            <p className="text-slate-600 mb-4 max-w-md mx-auto">
              Complete a learning track to earn your first certificate. Each certificate validates your expertise in that topic.
            </p>
            <button
              onClick={() => onNavigate('explore', 'tracks')}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
            >
              Start a Learning Track
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {completedTracks.map(track => (
              <div
                key={track.id}
                className="relative overflow-hidden rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50"
              >
                {/* Certificate Design */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-200/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-200/30 to-transparent" />

                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    {/* Certificate Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium text-green-700">Verified</span>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1 line-clamp-2">{track.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">
                        Completed {track.lessonsCount} lessons on{' '}
                        {track.completedAt.toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => generateCertificatePDF(track, userProfile.name)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Download PDF
                        </button>
                        <button
                          onClick={() => {
                            const text = `I just earned my "${track.title}" certificate on OpenMolecular!`;
                            if (navigator.share) {
                              navigator.share({ title: 'My Certificate', text });
                            } else {
                              navigator.clipboard.writeText(text);
                              alert('Certificate info copied to clipboard!');
                            }
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Certificate ID */}
                  <div className="mt-4 pt-4 border-t border-amber-200/50">
                    <p className="text-xs text-slate-500">
                      Certificate ID: OM-{track.id}-{track.completedAt.getFullYear()}-{String(track.completedAt.getMonth() + 1).padStart(2, '0')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
