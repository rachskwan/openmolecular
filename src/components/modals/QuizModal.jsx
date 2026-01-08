import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle, BookOpen, Beaker, Brain, Apple, User, Sparkles } from 'lucide-react';

const quizQuestions = [
  {
    id: 1,
    question: "How familiar are you with metabolomics and biomarkers?",
    options: [
      { id: 'a', text: "I'm new to these concepts", level: 'beginner' },
      { id: 'b', text: "I know the basics but want to learn more", level: 'intermediate' },
      { id: 'c', text: "I have a solid understanding", level: 'advanced' },
      { id: 'd', text: "I work with these professionally", level: 'expert' },
    ],
  },
  {
    id: 2,
    question: "What aspect of molecular science interests you most?",
    options: [
      { id: 'a', text: "Understanding my health test results", interest: 'health' },
      { id: 'b', text: "Nutrition and food science", interest: 'nutrition' },
      { id: 'c', text: "Brain health and cognitive function", interest: 'brain' },
      { id: 'd', text: "Scientific research and methods", interest: 'science' },
    ],
  },
  {
    id: 3,
    question: "Have you heard of the Omega-3 Index?",
    options: [
      { id: 'a', text: "No, what is it?", knowledge: 'none' },
      { id: 'b', text: "I've heard of it but don't know details", knowledge: 'basic' },
      { id: 'c', text: "Yes, I know what it measures", knowledge: 'intermediate' },
      { id: 'd', text: "Yes, I've had mine tested", knowledge: 'advanced' },
    ],
  },
  {
    id: 4,
    question: "What's your primary goal for using OpenMolecular?",
    options: [
      { id: 'a', text: "Learn about health at the molecular level", goal: 'learn' },
      { id: 'b', text: "Make better decisions about supplements", goal: 'supplements' },
      { id: 'c', text: "Understand scientific research better", goal: 'research' },
      { id: 'd', text: "Professional development in my field", goal: 'professional' },
    ],
  },
  {
    id: 5,
    question: "How do you prefer to learn new concepts?",
    options: [
      { id: 'a', text: "Short articles and quick reads", style: 'articles' },
      { id: 'b', text: "Structured courses and tracks", style: 'tracks' },
      { id: 'c', text: "Real-world case studies", style: 'cases' },
      { id: 'd', text: "Product comparisons and guides", style: 'comparisons' },
    ],
  },
];

const getRecommendations = (answers) => {
  const recommendations = [];

  // Based on knowledge level
  const levelAnswer = answers[0];
  if (levelAnswer === 'a' || levelAnswer === 'b') {
    recommendations.push({
      type: 'track',
      title: 'Metabolomics 101',
      description: 'Start with the fundamentals of metabolomics',
      icon: BookOpen,
      color: 'teal',
    });
  } else {
    recommendations.push({
      type: 'track',
      title: 'Advanced Biomarker Analysis',
      description: 'Deep dive into biomarker interpretation',
      icon: Beaker,
      color: 'purple',
    });
  }

  // Based on interest
  const interestAnswer = answers[1];
  if (interestAnswer === 'a') {
    recommendations.push({
      type: 'article',
      title: 'Understanding Your Health Biomarkers',
      description: 'Learn to interpret your test results',
      icon: CheckCircle,
      color: 'emerald',
    });
  } else if (interestAnswer === 'b') {
    recommendations.push({
      type: 'article',
      title: 'Nutrition & Molecular Health',
      description: 'How food affects your biomarkers',
      icon: Apple,
      color: 'orange',
    });
  } else if (interestAnswer === 'c') {
    recommendations.push({
      type: 'article',
      title: 'Brain Health & Cognition',
      description: 'Molecular factors in brain function',
      icon: Brain,
      color: 'blue',
    });
  } else {
    recommendations.push({
      type: 'article',
      title: 'LC-MS vs GC-MS Methods',
      description: 'Compare analytical platforms',
      icon: Beaker,
      color: 'cyan',
    });
  }

  // Based on learning style
  const styleAnswer = answers[4];
  if (styleAnswer === 'c') {
    recommendations.push({
      type: 'casestudy',
      title: 'Real-World Case Studies',
      description: 'See how organizations apply these concepts',
      icon: BookOpen,
      color: 'indigo',
    });
  } else if (styleAnswer === 'd') {
    recommendations.push({
      type: 'comparison',
      title: 'Product Comparisons',
      description: 'Compare testing platforms and methods',
      icon: Beaker,
      color: 'blue',
    });
  }

  return recommendations;
};

export default function QuizModal({ onClose, onNavigate, isLoggedIn, onSignup }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionId) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionId }));
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleStartLearning = (type) => {
    onClose();
    if (type === 'track') {
      onNavigate('explore');
    } else if (type === 'article') {
      onNavigate('explore');
    } else if (type === 'casestudy') {
      onNavigate('explore');
    } else if (type === 'comparison') {
      onNavigate('explore');
    } else {
      onNavigate('explore');
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const currentQ = quizQuestions[currentQuestion];
  const recommendations = showResults ? getRecommendations(Object.values(answers)) : [];

  const colorMap = {
    teal: 'from-teal-500 to-emerald-600',
    purple: 'from-purple-500 to-indigo-600',
    emerald: 'from-emerald-500 to-green-600',
    orange: 'from-orange-500 to-amber-600',
    blue: 'from-blue-500 to-cyan-600',
    cyan: 'from-cyan-500 to-teal-600',
    indigo: 'from-indigo-500 to-purple-600',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 text-white p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!showResults ? (
              <>
                <h2 className="text-xl font-bold mb-2">Personalize Your Learning</h2>
                <p className="text-teal-100 text-sm">
                  Answer a few questions to get customized recommendations
                </p>
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-teal-100 mb-1">
                    <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-8 h-8" />
                  <h2 className="text-xl font-bold">Your Personalized Path</h2>
                </div>
                <p className="text-teal-100 text-sm">
                  Based on your answers, here's where we recommend you start
                </p>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {!showResults ? (
              <>
                {/* Question */}
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  {currentQ.question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {currentQ.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        answers[currentQuestion] === option.id
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            answers[currentQuestion] === option.id
                              ? 'border-teal-500 bg-teal-500'
                              : 'border-slate-300'
                          }`}
                        >
                          {answers[currentQuestion] === option.id && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className={`font-medium ${
                          answers[currentQuestion] === option.id
                            ? 'text-teal-700'
                            : 'text-slate-700'
                        }`}>
                          {option.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Results */}
                <div className="space-y-4">
                  <p className="text-slate-600 mb-4">
                    We've curated these recommendations just for you:
                  </p>
                  {recommendations.map((rec, idx) => {
                    const Icon = rec.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleStartLearning(rec.type)}
                        className="w-full text-left p-4 rounded-xl border border-slate-200 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorMap[rec.color]} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                              {rec.title}
                            </h4>
                            <p className="text-sm text-slate-600">{rec.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors mt-1" />
                        </div>
                      </button>
                    );
                  })}

                  {/* Signup prompt for non-logged in users */}
                  {!isLoggedIn && (
                    <div className="mt-6 p-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1">Save your personalized path</h4>
                          <p className="text-sm text-slate-600 mb-3">
                            Create a free account to track your progress and get personalized recommendations.
                          </p>
                          <button
                            onClick={() => {
                              onClose();
                              onSignup?.();
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-sm font-medium rounded-lg hover:from-teal-600 hover:to-emerald-700 transition-all"
                          >
                            <User className="w-4 h-4" />
                            Create Free Account
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 p-4 flex items-center justify-between">
            {!showResults ? (
              <>
                <button
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentQuestion === 0
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === undefined}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                    answers[currentQuestion] === undefined
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-teal-500 text-white hover:bg-teal-600'
                  }`}
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Retake Quiz
                </button>
                <button
                  onClick={() => handleStartLearning('explore')}
                  className="flex items-center gap-2 px-6 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors"
                >
                  Start Exploring
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
