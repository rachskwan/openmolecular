import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Play, FileText, HelpCircle, Star, BookOpen, Award, CheckCircle, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { trackDetails, lessonContent } from '../../data/modules';

export default function LessonViewPage({
  trackId,
  lessonId,
  onBack,
  onNavigate,
  markSectionComplete: saveSectionProgress,
  markLessonComplete: saveLessonComplete,
  getCompletedSections,
  isLessonComplete: checkLessonComplete
}) {
  const track = trackDetails[trackId];
  const lesson = track?.lessons?.find(l => l.id === lessonId);
  const content = lessonContent?.[trackId]?.[lessonId];

  // Initialize completed sections from persisted data
  const savedSections = getCompletedSections?.(trackId, lessonId) || [];
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState(savedSections);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Sync local state with saved progress when lesson changes
  useEffect(() => {
    const saved = getCompletedSections?.(trackId, lessonId) || [];
    setCompletedSections(saved);
    setCurrentSection(0);
    setQuizAnswers({});
    setShowQuizResults(false);
  }, [trackId, lessonId, getCompletedSections]);

  if (!track || !lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Lesson not found</h1>
        <button
          onClick={onBack}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          Go back
        </button>
      </div>
    );
  }

  const sections = content?.sections || [];
  const currentSectionData = sections[currentSection];
  const lessonIndex = track.lessons.findIndex(l => l.id === lessonId);
  const nextLesson = track.lessons[lessonIndex + 1];
  const prevLesson = track.lessons[lessonIndex - 1];

  const markSectionComplete = () => {
    if (!completedSections.includes(currentSection)) {
      const newCompleted = [...completedSections, currentSection];
      setCompletedSections(newCompleted);
      // Persist to parent/localStorage
      saveSectionProgress?.(trackId, lessonId, currentSection);

      // Check if all sections are now complete
      if (newCompleted.length === sections.length) {
        saveLessonComplete?.(trackId, lessonId);
      }
    }
  };

  const goToNextSection = () => {
    markSectionComplete();
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleLessonComplete = () => {
    markSectionComplete();
    saveLessonComplete?.(trackId, lessonId);
  };

  const goToPrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleQuizAnswer = (questionIdx, answerIdx) => {
    setQuizAnswers({ ...quizAnswers, [questionIdx]: answerIdx });
  };

  const calculateQuizScore = () => {
    if (!currentSectionData?.questions) return 0;
    let correct = 0;
    currentSectionData.questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) correct++;
    });
    return correct;
  };

  const getContentIcon = (type) => {
    switch (type) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'reading': return <FileText className="w-4 h-4" />;
      case 'quiz': return <HelpCircle className="w-4 h-4" />;
      case 'interactive': return <Star className="w-4 h-4" />;
      case 'case-study': return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const renderContent = () => {
    if (!currentSectionData) {
      return (
        <div className="text-center py-12">
          <p className="text-slate-600">Content is being developed. Check back soon!</p>
        </div>
      );
    }

    switch (currentSectionData.type) {
      case 'video':
        return (
          <div className="space-y-6">
            {/* Video Placeholder */}
            <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-600/20" />
              <div className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <p className="text-white font-medium">{currentSectionData.title}</p>
                <p className="text-white/60 text-sm mt-1">{currentSectionData.duration}</p>
              </div>
            </div>

            {/* Video Transcript / Summary */}
            {currentSectionData.content && (
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Summary</h3>
                <div className="prose prose-slate max-w-none">
                  {currentSectionData.content.map((paragraph, idx) => (
                    <p key={idx} className="text-slate-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Key Points */}
            {currentSectionData.keyPoints && (
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <h3 className="font-semibold text-teal-900 mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  {currentSectionData.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-teal-800">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 'reading':
        return (
          <div className="space-y-6">
            {/* Reading Content */}
            <article className="prose prose-slate max-w-none">
              {currentSectionData.content?.map((block, idx) => {
                if (typeof block === 'string') {
                  return <p key={idx} className="text-slate-700 mb-4 leading-relaxed">{block}</p>;
                }
                if (block.type === 'heading') {
                  return <h3 key={idx} className="text-xl font-semibold text-slate-900 mt-8 mb-4">{block.text}</h3>;
                }
                if (block.type === 'subheading') {
                  return <h4 key={idx} className="text-lg font-medium text-slate-800 mt-6 mb-3">{block.text}</h4>;
                }
                if (block.type === 'list') {
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 mb-4">
                      {block.items.map((item, i) => (
                        <li key={i} className="text-slate-700">{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === 'highlight') {
                  return (
                    <div key={idx} className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded-r-lg">
                      <p className="text-amber-900 font-medium">{block.text}</p>
                    </div>
                  );
                }
                if (block.type === 'definition') {
                  return (
                    <div key={idx} className="bg-slate-100 p-4 my-4 rounded-lg">
                      <p className="font-semibold text-slate-900">{block.term}</p>
                      <p className="text-slate-700 mt-1">{block.definition}</p>
                    </div>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <figure key={idx} className="my-6">
                      <div className="bg-slate-200 rounded-lg h-48 flex items-center justify-center">
                        <span className="text-slate-500">[Image: {block.alt}]</span>
                      </div>
                      {block.caption && (
                        <figcaption className="text-center text-sm text-slate-500 mt-2">{block.caption}</figcaption>
                      )}
                    </figure>
                  );
                }
                return null;
              })}
            </article>

            {/* Key Points */}
            {currentSectionData.keyPoints && (
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 mt-8">
                <h3 className="font-semibold text-teal-900 mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  {currentSectionData.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-teal-800">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 'quiz':
        return (
          <div className="space-y-6">
            {!showQuizResults ? (
              <>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 mb-6">
                  <h3 className="font-semibold text-purple-900 mb-2">Knowledge Check</h3>
                  <p className="text-purple-700">Test your understanding of the material covered in this lesson.</p>
                </div>

                <div className="space-y-6">
                  {currentSectionData.questions?.map((question, qIdx) => (
                    <div key={qIdx} className="bg-white border border-slate-200 rounded-xl p-6">
                      <h4 className="font-medium text-slate-900 mb-4">
                        {qIdx + 1}. {question.question}
                      </h4>
                      <div className="space-y-2">
                        {question.options.map((option, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleQuizAnswer(qIdx, oIdx)}
                            className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                              quizAnswers[qIdx] === oIdx
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <span className={quizAnswers[qIdx] === oIdx ? 'text-purple-700' : 'text-slate-700'}>
                              {option}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length < (currentSectionData.questions?.length || 0)}
                  className={`w-full py-3 rounded-xl font-medium transition-colors ${
                    Object.keys(quizAnswers).length < (currentSectionData.questions?.length || 0)
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Submit Answers
                </button>
              </>
            ) : (
              <>
                {/* Quiz Results */}
                <div className={`rounded-xl p-6 text-center ${
                  calculateQuizScore() >= (currentSectionData.questions?.length || 0) * 0.7
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-amber-50 border border-amber-200'
                }`}>
                  <div className="text-4xl mb-2">
                    {calculateQuizScore() >= (currentSectionData.questions?.length || 0) * 0.7 ? '🎉' : '📚'}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    You scored {calculateQuizScore()} out of {currentSectionData.questions?.length || 0}
                  </h3>
                  <p className="text-slate-600">
                    {calculateQuizScore() >= (currentSectionData.questions?.length || 0) * 0.7
                      ? 'Great job! You\'ve mastered this material.'
                      : 'Review the material and try again to improve your score.'}
                  </p>
                </div>

                {/* Answer Review */}
                <div className="space-y-4">
                  {currentSectionData.questions?.map((question, qIdx) => {
                    const isCorrect = quizAnswers[qIdx] === question.correct;
                    return (
                      <div key={qIdx} className={`p-4 rounded-xl border ${
                        isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                      }`}>
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <p className="font-medium text-slate-900">{question.question}</p>
                            <p className="text-sm mt-1">
                              <span className="text-slate-600">Your answer: </span>
                              <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                                {question.options[quizAnswers[qIdx]]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-sm mt-1">
                                <span className="text-slate-600">Correct answer: </span>
                                <span className="text-green-700">{question.options[question.correct]}</span>
                              </p>
                            )}
                            {question.explanation && (
                              <p className="text-sm text-slate-600 mt-2 bg-white/50 p-2 rounded">
                                {question.explanation}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setShowQuizResults(false);
                  }}
                  className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
                >
                  Try Again
                </button>
              </>
            )}
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-6">
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200 text-center">
              <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{currentSectionData.title}</h3>
              <p className="text-amber-700 mb-6">{currentSectionData.description || 'Interactive exercise to reinforce your learning.'}</p>

              {/* Interactive placeholder */}
              <div className="bg-white rounded-lg p-6 border border-amber-200">
                {currentSectionData.content?.map((item, idx) => (
                  <div key={idx} className="text-left mb-4 last:mb-0">
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {currentSectionData.keyPoints && (
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <h3 className="font-semibold text-teal-900 mb-4">What You Learned</h3>
                <ul className="space-y-2">
                  {currentSectionData.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-teal-800">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 'case-study':
        return (
          <div className="space-y-6">
            <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
              <BookOpen className="w-8 h-8 text-rose-500 mb-3" />
              <h3 className="text-lg font-semibold text-rose-900 mb-2">Case Study</h3>
              <p className="text-rose-700">{currentSectionData.description || 'Apply what you\'ve learned to a real-world scenario.'}</p>
            </div>

            <article className="prose prose-slate max-w-none">
              {currentSectionData.content?.map((block, idx) => {
                if (typeof block === 'string') {
                  return <p key={idx} className="text-slate-700 mb-4 leading-relaxed">{block}</p>;
                }
                if (block.type === 'heading') {
                  return <h3 key={idx} className="text-xl font-semibold text-slate-900 mt-8 mb-4">{block.text}</h3>;
                }
                if (block.type === 'scenario') {
                  return (
                    <div key={idx} className="bg-slate-100 p-4 my-4 rounded-lg border-l-4 border-slate-400">
                      <p className="font-medium text-slate-800 mb-2">Scenario:</p>
                      <p className="text-slate-700">{block.text}</p>
                    </div>
                  );
                }
                if (block.type === 'question') {
                  return (
                    <div key={idx} className="bg-purple-50 p-4 my-4 rounded-lg">
                      <p className="font-medium text-purple-800">Consider: {block.text}</p>
                    </div>
                  );
                }
                return null;
              })}
            </article>

            {currentSectionData.keyPoints && (
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 mt-8">
                <h3 className="font-semibold text-teal-900 mb-4">Key Insights</h3>
                <ul className="space-y-2">
                  {currentSectionData.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-teal-800">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p className="text-slate-600">This content type is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium hidden sm:inline">Back to {track.title}</span>
            <span className="font-medium sm:hidden">Back</span>
          </button>
          <div className="text-sm text-slate-500">
            Lesson {lessonIndex + 1} of {track.lessons.length}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Lesson Navigation */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-20">
              <h3 className="font-semibold text-slate-900 mb-4">{lesson.title}</h3>

              {/* Section Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-500 mb-1">
                  <span>Progress</span>
                  <span>{completedSections.length}/{sections.length}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 transition-all duration-300"
                    style={{ width: `${(completedSections.length / Math.max(sections.length, 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Section List */}
              <div className="space-y-2">
                {sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSection(idx)}
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${
                      currentSection === idx
                        ? 'bg-teal-50 border border-teal-200'
                        : completedSections.includes(idx)
                        ? 'bg-green-50 hover:bg-green-100'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      completedSections.includes(idx)
                        ? 'bg-green-500 text-white'
                        : currentSection === idx
                        ? 'bg-teal-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {completedSections.includes(idx) ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        getContentIcon(section.type)
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        currentSection === idx ? 'text-teal-700' : 'text-slate-700'
                      }`}>
                        {section.title}
                      </p>
                      <p className="text-xs text-slate-500 capitalize">{section.type}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Lesson Navigation */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex gap-2">
                  {prevLesson && (
                    <button
                      onClick={() => onNavigate('lesson', trackId, prevLesson.id)}
                      className="flex-1 py-2 px-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Prev
                    </button>
                  )}
                  {nextLesson && (
                    <button
                      onClick={() => onNavigate('lesson', trackId, nextLesson.id)}
                      className="flex-1 py-2 px-3 text-sm bg-teal-600 text-white hover:bg-teal-700 rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Section Header */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${
                  currentSectionData?.type === 'video' ? 'bg-blue-100 text-blue-600' :
                  currentSectionData?.type === 'reading' ? 'bg-emerald-100 text-emerald-600' :
                  currentSectionData?.type === 'quiz' ? 'bg-purple-100 text-purple-600' :
                  currentSectionData?.type === 'interactive' ? 'bg-amber-100 text-amber-600' :
                  currentSectionData?.type === 'case-study' ? 'bg-rose-100 text-rose-600' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  {getContentIcon(currentSectionData?.type)}
                </div>
                <span className="text-sm text-slate-500 capitalize">
                  {currentSectionData?.type?.replace('-', ' ') || 'Content'}
                </span>
                {currentSectionData?.duration && (
                  <span className="text-sm text-slate-400 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentSectionData.duration}
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-bold text-slate-900">
                {currentSectionData?.title || lesson.title}
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
              {renderContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={goToPrevSection}
                disabled={currentSection === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>

              {currentSection < sections.length - 1 ? (
                <button
                  onClick={goToNextSection}
                  className="flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleLessonComplete();
                    if (nextLesson) {
                      onNavigate('lesson', trackId, nextLesson.id);
                    } else {
                      onBack();
                    }
                  }}
                  className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {nextLesson ? 'Next Lesson' : 'Complete Course'}
                  <Award className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
