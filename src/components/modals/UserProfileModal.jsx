import { X, MapPin, Calendar, Award, MessageSquare, Heart, Users, BookOpen, ChevronRight, UserPlus, UserCheck } from 'lucide-react';
import { getUserByUsername } from '../../data/users';

export default function UserProfileModal({ username, onClose, onNavigate, toggleFollow, isFollowing }) {
  const user = getUserByUsername(username);
  const following = isFollowing ? isFollowing(username) : false;

  const getBadgeColor = (badge) => {
    if (badge.includes('Verified') || badge.includes('Official')) return 'bg-blue-100 text-blue-700';
    if (badge.includes('Expert') || badge.includes('Top')) return 'bg-purple-100 text-purple-700';
    if (badge.includes('Contributor') || badge.includes('Helper')) return 'bg-teal-100 text-teal-700';
    if (badge.includes('Success') || badge.includes('Story')) return 'bg-green-100 text-green-700';
    if (badge.includes('Founding') || badge.includes('Member')) return 'bg-amber-100 text-amber-700';
    return 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 p-6 pb-16">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Stats row */}
          <div className="flex justify-center gap-8 text-white text-center">
            <div>
              <div className="text-2xl font-bold">{user.stats.posts}</div>
              <div className="text-xs text-teal-100">Posts</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{user.stats.followers}</div>
              <div className="text-xs text-teal-100">Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{user.stats.likes.toLocaleString()}</div>
              <div className="text-xs text-teal-100">Likes</div>
            </div>
          </div>
        </div>

        {/* Avatar - overlapping header */}
        <div className="relative -mt-12 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">
            {user.avatar}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 pt-4">
          {/* Name and username */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-slate-900">{user.fullName}</h2>
            <p className="text-slate-500">@{user.username}</p>
          </div>

          {/* Location and join date */}
          <div className="flex justify-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {user.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Joined {user.joinDate}
            </span>
          </div>

          {/* Badges */}
          {user.badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {user.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getBadgeColor(badge)}`}
                >
                  <Award className="w-3 h-3" />
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Bio */}
          <p className="text-slate-600 text-center mb-6 leading-relaxed">
            {user.bio}
          </p>

          {/* Interests */}
          {user.interests.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {user.certifications.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-600" />
                Certifications
              </h3>
              <div className="space-y-2">
                {user.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 bg-teal-50 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                      <Award className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-sm font-medium text-teal-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activity Stats */}
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Activity</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-2 bg-white rounded-lg">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-semibold text-slate-900">{user.stats.replies}</div>
                  <div className="text-xs text-slate-500">Replies</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-white rounded-lg">
                <Users className="w-5 h-5 text-purple-500" />
                <div>
                  <div className="font-semibold text-slate-900">{user.stats.followers}</div>
                  <div className="text-xs text-slate-500">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-slate-200 p-4 bg-slate-50">
          <div className="flex gap-3">
            <button
              onClick={() => toggleFollow && toggleFollow(username)}
              className={`flex-1 py-2.5 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 ${
                following
                  ? 'bg-teal-100 text-teal-700 border border-teal-300 hover:bg-teal-200'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}
            >
              {following ? (
                <>
                  <UserCheck className="w-4 h-4" />
                  Following
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  Follow
                </>
              )}
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('community');
              }}
              className="flex-1 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              View Posts
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
