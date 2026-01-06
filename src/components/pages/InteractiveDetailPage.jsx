import { useState } from 'react';
import { ArrowLeft, Clock, Users, Trophy, ChevronRight, CheckCircle, XCircle, RotateCcw, Gamepad2 } from 'lucide-react';
import { interactives } from '../../data/interactives';

export default function InteractiveDetailPage({ interactiveId, onBack, onNavigate }) {
  const interactive = interactives.find(i => i.id === interactiveId);
  const [gameState, setGameState] = useState('intro'); // intro, playing, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (!interactive) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Interactive not found</h1>
        <button
          onClick={onBack}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          Go back
        </button>
      </div>
    );
  }

  const isQuiz = interactive.type === 'Quiz' && interactive.content?.questions;
  const questions = interactive.content?.questions || [];

  const handleStartGame = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
  };

  const handleSelectAnswer = (answerIndex) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, { selected: selectedAnswer, correct: questions[currentQuestion].correct, isCorrect }]);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameState('results');
    }
  };

  const handleRestart = () => {
    setGameState('intro');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return { emoji: '🏆', message: 'Perfect score! You\'re an expert!' };
    if (percentage >= 80) return { emoji: '🌟', message: 'Excellent! You really know your stuff!' };
    if (percentage >= 60) return { emoji: '👍', message: 'Good job! Keep learning!' };
    if (percentage >= 40) return { emoji: '📚', message: 'Not bad! Room for improvement.' };
    return { emoji: '💪', message: 'Keep studying! You\'ll get there!' };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Explore</span>
          </button>
          {gameState === 'playing' && isQuiz && (
            <span className="text-sm text-slate-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Intro State */}
        {gameState === 'intro' && (
          <>
            {/* Hero */}
            <div className={`bg-gradient-to-br ${interactive.color} rounded-2xl p-8 text-white mb-8`}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {interactive.type}
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {interactive.level}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold mb-4">{interactive.title}</h1>
                  <p className="text-lg opacity-90 mb-6">{interactive.description}</p>
                  <div className="flex items-center gap-6 text-sm opacity-80">
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      {interactive.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      {interactive.plays.toLocaleString()} plays
                    </span>
                    {interactive.questions && (
                      <span className="flex items-center gap-2">
                        <Gamepad2 className="w-5 h-5" />
                        {interactive.questions} questions
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-7xl">{interactive.icon}</span>
              </div>
            </div>

            {/* Start Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                {interactive.content?.intro || 'Ready to start?'}
              </h2>
              {isQuiz && (
                <p className="text-slate-600 mb-6">
                  Answer {questions.length} questions to test your knowledge. Good luck!
                </p>
              )}
              <button
                onClick={handleStartGame}
                className={`px-8 py-4 bg-gradient-to-r ${interactive.color} text-white font-semibold rounded-xl hover:shadow-lg transition-shadow`}
              >
                Start {interactive.type}
              </button>
            </div>
          </>
        )}

        {/* Playing State - Quiz */}
        {gameState === 'playing' && isQuiz && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Progress Bar */}
            <div className="h-2 bg-slate-100">
              <div
                className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            <div className="p-8">
              {/* Question */}
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {questions[currentQuestion].options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === questions[currentQuestion].correct;
                  const showResult = showExplanation;

                  let bgColor = 'bg-white border-slate-200 hover:border-slate-300';
                  if (isSelected && !showResult) {
                    bgColor = 'bg-blue-50 border-blue-500';
                  }
                  if (showResult && isCorrect) {
                    bgColor = 'bg-green-50 border-green-500';
                  }
                  if (showResult && isSelected && !isCorrect) {
                    bgColor = 'bg-red-50 border-red-500';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(idx)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${bgColor} ${
                        showExplanation ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${
                          showResult && isCorrect ? 'text-green-700' :
                          showResult && isSelected && !isCorrect ? 'text-red-700' :
                          isSelected ? 'text-blue-700' : 'text-slate-700'
                        }`}>
                          {option}
                        </span>
                        {showResult && isCorrect && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                  <p className="text-slate-700">
                    <strong>Explanation:</strong> {questions[currentQuestion].explanation}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-end gap-4">
                {!showExplanation ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                      selectedAnswer === null
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : `bg-gradient-to-r ${interactive.color} text-white hover:shadow-lg`
                    }`}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className={`px-6 py-3 bg-gradient-to-r ${interactive.color} text-white rounded-xl font-medium hover:shadow-lg transition-shadow flex items-center gap-2`}
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Playing State - Non-Quiz (placeholder) */}
        {gameState === 'playing' && !isQuiz && (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
            <span className="text-6xl mb-4 block">{interactive.icon}</span>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              {interactive.title}
            </h2>
            <p className="text-slate-600 mb-6">
              This interactive tool is coming soon! Check back later for the full experience.
            </p>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
            >
              Go Back
            </button>
          </div>
        )}

        {/* Results State */}
        {gameState === 'results' && isQuiz && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Score Header */}
            <div className={`bg-gradient-to-br ${interactive.color} p-8 text-white text-center`}>
              <span className="text-6xl mb-4 block">{getScoreMessage().emoji}</span>
              <h2 className="text-3xl font-bold mb-2">
                {score} / {questions.length}
              </h2>
              <p className="text-lg opacity-90">{getScoreMessage().message}</p>
            </div>

            {/* Results Breakdown */}
            <div className="p-8">
              <h3 className="font-semibold text-slate-900 mb-4">Your Answers</h3>
              <div className="space-y-3 mb-8">
                {answers.map((answer, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      answer.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-900">
                        Q{idx + 1}: {questions[idx].question.substring(0, 50)}...
                      </span>
                      {answer.isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Try Again
                </button>
                <button
                  onClick={() => onNavigate('explore')}
                  className={`px-6 py-3 bg-gradient-to-r ${interactive.color} text-white rounded-xl font-medium hover:shadow-lg transition-shadow`}
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Related Interactives */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">More Interactives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interactives
              .filter(i => i.id !== interactive.id)
              .slice(0, 2)
              .map(related => (
                <button
                  key={related.id}
                  onClick={() => onNavigate('interactive', related.id)}
                  className="bg-white rounded-xl p-4 text-left shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${related.color} flex items-center justify-center`}>
                      <span className="text-2xl">{related.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {related.type}
                        </span>
                        <span className="text-xs text-slate-500">{related.duration}</span>
                      </div>
                      <h4 className="font-medium text-slate-900">{related.title}</h4>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
