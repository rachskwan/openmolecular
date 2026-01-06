import { useState } from 'react';
import { ArrowLeft, Clock, BookOpen, Users, Star, Play, FileText, HelpCircle, Award, CheckCircle, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { trackDetails } from '../../data/modules';

export default function TrackDetailPage({ trackId, onBack, onNavigate }) {
  const [expandedLesson, setExpandedLesson] = useState(null);
  const track = trackDetails[trackId];

  if (!track) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Track not found</h1>
        <button
          onClick={onBack}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          Go back
        </button>
      </div>
    );
  }

  const totalLessons = track.lessons.length;
  const getContentIcon = (type) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'reading': return <FileText className="w-4 h-4" />;
      case 'quiz': return <HelpCircle className="w-4 h-4" />;
      case 'interactive': return <Star className="w-4 h-4" />;
      case 'case-study': return <BookOpen className="w-4 h-4" />;
      case 'certificate': return <Award className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getContentColor = (type) => {
    switch (type) {
      case 'video': return 'bg-blue-100 text-blue-600';
      case 'reading': return 'bg-emerald-100 text-emerald-600';
      case 'quiz': return 'bg-purple-100 text-purple-600';
      case 'interactive': return 'bg-amber-100 text-amber-600';
      case 'case-study': return 'bg-rose-100 text-rose-600';
      case 'certificate': return 'bg-teal-100 text-teal-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

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
      <div className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {track.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              track.level === 'Beginner' ? 'bg-green-400/30' :
              track.level === 'Intermediate' ? 'bg-amber-400/30' :
              'bg-red-400/30'
            }`}>
              {track.level}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {track.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-teal-100 mb-6 max-w-3xl">
            {track.longDescription}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 text-teal-100">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>{totalLessons} lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{track.hours} hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{track.enrolled.toLocaleString()} enrolled</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span>{track.rating} rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Curriculum */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Curriculum</h2>

            <div className="space-y-4">
              {track.lessons.map((lesson, idx) => (
                <div
                  key={lesson.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden"
                >
                  {/* Lesson Header */}
                  <button
                    onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
                    className="w-full p-4 flex items-start gap-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 mb-1">{lesson.title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-1">{lesson.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {lesson.duration}
                        </span>
                        <span>{lesson.content.length} activities</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedLesson === lesson.id ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedLesson === lesson.id && (
                    <div className="border-t border-slate-200 bg-slate-50 p-4">
                      {/* Learning Objectives */}
                      {lesson.learningObjectives && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-700 mb-2">Learning Objectives</h4>
                          <ul className="space-y-1">
                            {lesson.learningObjectives.map((objective, oIdx) => (
                              <li key={oIdx} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                {objective}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Activities */}
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Activities</h4>
                      <div className="space-y-2">
                        {lesson.content.map((item, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200"
                          >
                            <div className={`p-2 rounded-lg ${getContentColor(item.type)}`}>
                              {getContentIcon(item.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-slate-900 text-sm">{item.title}</p>
                              <p className="text-xs text-slate-500 capitalize">{item.type.replace('-', ' ')}</p>
                            </div>
                            <div className="text-sm text-slate-500">
                              {item.duration || (item.questions && `${item.questions} questions`)}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Start Lesson Button */}
                      <button
                        onClick={() => onNavigate('lesson', trackId, lesson.id)}
                        className="w-full mt-4 py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Start This Lesson
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Enroll Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 sticky top-20">
              <button
                onClick={() => onNavigate('lesson', trackId, track.lessons[0].id)}
                className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors mb-4"
              >
                Start Learning
              </button>
              <p className="text-center text-sm text-slate-500 mb-6">Free access to all lessons</p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Skills you'll gain</h4>
                <div className="flex flex-wrap gap-2">
                  {track.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              {track.prerequisites && (
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Prerequisites</h4>
                  <ul className="space-y-2">
                    {track.prerequisites.map((prereq, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <Lock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Instructor */}
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900 mb-3">Instructor</h4>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {track.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{track.instructor}</p>
                    <p className="text-sm text-slate-600">{track.instructorBio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
