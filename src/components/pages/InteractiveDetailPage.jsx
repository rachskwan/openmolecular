import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Trophy, ChevronRight, CheckCircle, XCircle, RotateCcw, Gamepad2, Lightbulb, AlertTriangle, Shuffle, Heart, Zap, Brain, Moon, Flame, Activity, Plus, Check } from 'lucide-react';
import { interactives } from '../../data/interactives';

export default function InteractiveDetailPage({ interactiveId, onBack, onNavigate }) {
  const interactive = interactives.find(i => i.id === interactiveId);
  const [gameState, setGameState] = useState('intro'); // intro, playing, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Game-specific states
  const [matchCards, setMatchCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedRedFlags, setSelectedRedFlags] = useState([]);
  const [rankingOrder, setRankingOrder] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  // Tool-specific states
  const [selectedBiomarker, setSelectedBiomarker] = useState(null);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [currentPathway, setCurrentPathway] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [factorAnswers, setFactorAnswers] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [toolResult, setToolResult] = useState(null);

  // Reset game state when interactive changes
  useEffect(() => {
    handleRestart();
  }, [interactiveId]);

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
  const isGame = interactive.type === 'Game';
  const isTool = interactive.type === 'Interactive Tool';
  const questions = interactive.content?.questions || [];

  // Determine game type
  const getGameType = () => {
    if (interactive.content?.pairs) return 'match';
    if (interactive.content?.words) return 'scramble';
    if (interactive.content?.challenges && interactive.title.includes('Detective')) return 'detective';
    if (interactive.content?.matchups) return 'showdown';
    if (interactive.content?.challenges && interactive.title.includes('Rankings')) return 'rankings';
    return null;
  };

  // Determine tool type
  const getToolType = () => {
    if (interactive.content?.biomarkers) return 'biomarker';
    if (interactive.content?.goals) return 'supplement';
    if (interactive.content?.pathways) return 'pathway';
    if (interactive.content?.factors && interactive.title.includes('Inflammation')) return 'inflammation';
    if (interactive.content?.factors && interactive.title.includes('Heart')) return 'heart';
    if (interactive.content?.symptoms) return 'vitamin';
    if (interactive.content?.questions && interactive.title.includes('Sleep')) return 'sleep';
    if (interactive.content?.stages) return 'energy';
    if (interactive.content?.foods) return 'bloodsugar';
    return null;
  };

  const gameType = getGameType();
  const toolType = getToolType();

  const handleStartGame = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setToolResult(null);

    // Initialize game-specific state
    if (gameType === 'match' && interactive.content?.pairs) {
      const pairs = interactive.content.pairs;
      const cards = [];
      pairs.forEach((pair, idx) => {
        cards.push({ id: `mol-${idx}`, type: 'molecule', content: pair.molecule, pairId: idx });
        cards.push({ id: `func-${idx}`, type: 'function', content: pair.function, pairId: idx });
      });
      const shuffled = cards.sort(() => Math.random() - 0.5);
      setMatchCards(shuffled);
      setFlippedCards([]);
      setMatchedPairs([]);
      setTotalItems(pairs.length);
    }

    if (gameType === 'scramble' && interactive.content?.words) {
      setCurrentWordIndex(0);
      setScrambledWord(interactive.content.words[0].scrambled);
      setUserInput('');
      setShowHint(false);
      setTotalItems(interactive.content.words.length);
    }

    if (gameType === 'detective' && interactive.content?.challenges) {
      setCurrentChallenge(0);
      setSelectedRedFlags([]);
      setTotalItems(interactive.content.challenges.length);
    }

    if (gameType === 'showdown' && interactive.content?.matchups) {
      setCurrentChallenge(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTotalItems(interactive.content.matchups.length);
    }

    if (gameType === 'rankings' && interactive.content?.challenges) {
      setCurrentChallenge(0);
      const foods = [...interactive.content.challenges[0].foods];
      setRankingOrder(foods.sort(() => Math.random() - 0.5));
      setShowExplanation(false);
      setTotalItems(interactive.content.challenges.length);
    }

    // Initialize tool-specific state
    if (toolType === 'biomarker') {
      setSelectedBiomarker(null);
    }

    if (toolType === 'supplement') {
      setSelectedGoals([]);
    }

    if (toolType === 'pathway') {
      setCurrentPathway(0);
      setCurrentStep(0);
    }

    if (toolType === 'inflammation' || toolType === 'heart' || toolType === 'sleep') {
      setFactorAnswers([]);
      setCurrentQuestion(0);
    }

    if (toolType === 'vitamin') {
      setSelectedSymptoms([]);
    }

    if (toolType === 'energy') {
      setCurrentStage(0);
    }

    if (toolType === 'bloodsugar') {
      setSelectedFoods([]);
    }
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
    setMatchCards([]);
    setFlippedCards([]);
    setMatchedPairs([]);
    setScrambledWord('');
    setUserInput('');
    setCurrentWordIndex(0);
    setShowHint(false);
    setCurrentChallenge(0);
    setSelectedRedFlags([]);
    setRankingOrder([]);
    setSelectedBiomarker(null);
    setSelectedGoals([]);
    setCurrentPathway(0);
    setCurrentStep(0);
    setFactorAnswers([]);
    setSelectedSymptoms([]);
    setCurrentStage(0);
    setSelectedFoods([]);
    setToolResult(null);
  };

  // Match Game handlers
  const handleCardClick = (card) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.find(c => c.id === card.id)) return;
    if (matchedPairs.includes(card.pairId)) return;

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      if (newFlipped[0].pairId === newFlipped[1].pairId) {
        setMatchedPairs(prev => [...prev, card.pairId]);
        setScore(prev => prev + 1);
        setTimeout(() => setFlippedCards([]), 500);

        if (matchedPairs.length + 1 === totalItems) {
          setTimeout(() => setGameState('results'), 800);
        }
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  // Scramble Game handlers
  const handleScrambleSubmit = () => {
    const words = interactive.content.words;
    const currentWord = words[currentWordIndex];
    const isCorrect = userInput.toUpperCase() === currentWord.answer;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, { word: currentWord.answer, userAnswer: userInput.toUpperCase(), isCorrect }]);

    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
      setScrambledWord(words[currentWordIndex + 1].scrambled);
      setUserInput('');
      setShowHint(false);
    } else {
      setGameState('results');
    }
  };

  // Detective Game handlers
  const handleRedFlagToggle = (ingredient) => {
    setSelectedRedFlags(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleDetectiveSubmit = () => {
    const challenge = interactive.content.challenges[currentChallenge];
    const correctFlags = challenge.redFlags;
    const isCorrect = correctFlags.every(f => selectedRedFlags.includes(f)) &&
                      selectedRedFlags.every(f => correctFlags.includes(f));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, { correct: correctFlags, selected: selectedRedFlags, isCorrect }]);
    setShowExplanation(true);
  };

  const handleDetectiveNext = () => {
    if (currentChallenge < interactive.content.challenges.length - 1) {
      setCurrentChallenge(prev => prev + 1);
      setSelectedRedFlags([]);
      setShowExplanation(false);
    } else {
      setGameState('results');
    }
  };

  // Showdown Game handlers
  const handleShowdownSelect = (choice) => {
    if (showExplanation) return;
    setSelectedAnswer(choice);
  };

  const handleShowdownSubmit = () => {
    const matchup = interactive.content.matchups[currentChallenge];
    const isCorrect = selectedAnswer === matchup.winner;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, { correct: matchup.winner, selected: selectedAnswer, isCorrect }]);
    setShowExplanation(true);
  };

  const handleShowdownNext = () => {
    if (currentChallenge < interactive.content.matchups.length - 1) {
      setCurrentChallenge(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameState('results');
    }
  };

  // Rankings Game handlers
  const moveItem = (index, direction) => {
    const newOrder = [...rankingOrder];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newOrder.length) return;
    [newOrder[index], newOrder[newIndex]] = [newOrder[newIndex], newOrder[index]];
    setRankingOrder(newOrder);
  };

  const handleRankingsSubmit = () => {
    const challenge = interactive.content.challenges[currentChallenge];
    const isCorrect = JSON.stringify(rankingOrder) === JSON.stringify(challenge.correctOrder);

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, { correct: challenge.correctOrder, selected: rankingOrder, isCorrect }]);
    setShowExplanation(true);
  };

  const handleRankingsNext = () => {
    if (currentChallenge < interactive.content.challenges.length - 1) {
      const nextChallenge = currentChallenge + 1;
      setCurrentChallenge(nextChallenge);
      const foods = [...interactive.content.challenges[nextChallenge].foods];
      setRankingOrder(foods.sort(() => Math.random() - 0.5));
      setShowExplanation(false);
    } else {
      setGameState('results');
    }
  };

  // Tool handlers
  const handleGoalToggle = (goalId) => {
    setSelectedGoals(prev =>
      prev.includes(goalId) ? prev.filter(g => g !== goalId) : [...prev, goalId]
    );
  };

  const handleSupplementSubmit = () => {
    const recommendations = {};
    selectedGoals.forEach(goalId => {
      const goal = interactive.content.goals.find(g => g.id === goalId);
      goal.supplements.forEach(supp => {
        recommendations[supp] = (recommendations[supp] || 0) + 1;
      });
    });
    setToolResult({
      goals: selectedGoals.map(id => interactive.content.goals.find(g => g.id === id)?.label),
      supplements: Object.entries(recommendations).sort((a, b) => b[1] - a[1])
    });
    setGameState('results');
  };

  const handleFactorAnswer = (answerIndex) => {
    const factors = interactive.content.factors || interactive.content.questions;
    const newAnswers = [...factorAnswers, answerIndex];
    setFactorAnswers(newAnswers);

    if (currentQuestion < factors.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result
      let totalScore = 0;
      newAnswers.forEach((ans, idx) => {
        totalScore += factors[idx].scores[ans];
      });
      const maxScore = factors.length * 3;
      const percentage = (totalScore / maxScore) * 100;

      let riskLevel, message, color;
      if (percentage <= 25) {
        riskLevel = 'Low';
        message = interactive.content.results?.low || 'Your risk appears low. Keep up the healthy habits!';
        color = 'green';
      } else if (percentage <= 60) {
        riskLevel = 'Moderate';
        message = interactive.content.results?.moderate || 'You have some risk factors. Consider lifestyle modifications.';
        color = 'yellow';
      } else {
        riskLevel = 'High';
        message = interactive.content.results?.high || 'Multiple risk factors detected. Consider consulting a healthcare provider.';
        color = 'red';
      }

      setToolResult({ score: totalScore, maxScore, percentage, riskLevel, message, color, tips: interactive.content.tips });
      setGameState('results');
    }
  };

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const handleVitaminSubmit = () => {
    const vitaminCounts = {};
    selectedSymptoms.forEach(symptomName => {
      const symptom = interactive.content.symptoms.find(s => s.symptom === symptomName);
      symptom?.vitamins.forEach(v => {
        vitaminCounts[v] = (vitaminCounts[v] || 0) + 1;
      });
    });
    const sorted = Object.entries(vitaminCounts).sort((a, b) => b[1] - a[1]);
    setToolResult({
      symptoms: selectedSymptoms,
      deficiencies: sorted
    });
    setGameState('results');
  };

  const handleFoodToggle = (foodName) => {
    setSelectedFoods(prev =>
      prev.includes(foodName) ? prev.filter(f => f !== foodName) : [...prev, foodName]
    );
  };

  const handleBloodSugarSubmit = () => {
    const selected = selectedFoods.map(name =>
      interactive.content.foods.find(f => f.name === name)
    );
    setToolResult({
      foods: selected,
      tips: interactive.content.tips
    });
    setGameState('results');
  };

  const getScoreMessage = () => {
    const total = isQuiz ? questions.length : totalItems;
    const percentage = (score / total) * 100;
    if (percentage === 100) return { emoji: '🏆', message: 'Perfect score! You\'re an expert!' };
    if (percentage >= 80) return { emoji: '🌟', message: 'Excellent! You really know your stuff!' };
    if (percentage >= 60) return { emoji: '👍', message: 'Good job! Keep learning!' };
    if (percentage >= 40) return { emoji: '📚', message: 'Not bad! Room for improvement.' };
    return { emoji: '💪', message: 'Keep studying! You\'ll get there!' };
  };

  const getProgressText = () => {
    if (isQuiz) return `Question ${currentQuestion + 1} of ${questions.length}`;
    if (gameType === 'match') return `${matchedPairs.length} of ${totalItems} pairs matched`;
    if (gameType === 'scramble') return `Word ${currentWordIndex + 1} of ${totalItems}`;
    if (gameType === 'detective') return `Product ${currentChallenge + 1} of ${totalItems}`;
    if (gameType === 'showdown') return `Matchup ${currentChallenge + 1} of ${totalItems}`;
    if (gameType === 'rankings') return `Challenge ${currentChallenge + 1} of ${totalItems}`;
    if (toolType === 'pathway') return `Pathway ${currentPathway + 1}, Step ${currentStep + 1}`;
    if (toolType === 'energy') return `Stage ${currentStage + 1} of ${interactive.content.stages.length}`;
    if ((toolType === 'inflammation' || toolType === 'heart' || toolType === 'sleep') && interactive.content.factors) {
      return `Question ${currentQuestion + 1} of ${interactive.content.factors.length}`;
    }
    if (toolType === 'sleep' && interactive.content.questions) {
      return `Question ${currentQuestion + 1} of ${interactive.content.questions.length}`;
    }
    return '';
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
          {gameState === 'playing' && (
            <span className="text-sm text-slate-500">{getProgressText()}</span>
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
            <div className="h-2 bg-slate-100">
              <div
                className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            <div className="p-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3 mb-6">
                {questions[currentQuestion].options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === questions[currentQuestion].correct;
                  const showResult = showExplanation;

                  let bgColor = 'bg-white border-slate-200 hover:border-slate-300';
                  if (isSelected && !showResult) bgColor = 'bg-blue-50 border-blue-500';
                  if (showResult && isCorrect) bgColor = 'bg-green-50 border-green-500';
                  if (showResult && isSelected && !isCorrect) bgColor = 'bg-red-50 border-red-500';

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(idx)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${bgColor}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${
                          showResult && isCorrect ? 'text-green-700' :
                          showResult && isSelected && !isCorrect ? 'text-red-700' :
                          isSelected ? 'text-blue-700' : 'text-slate-700'
                        }`}>
                          {option}
                        </span>
                        {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                  <p className="text-slate-700">
                    <strong>Explanation:</strong> {questions[currentQuestion].explanation}
                  </p>
                </div>
              )}

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

        {/* Playing State - Match Game */}
        {gameState === 'playing' && gameType === 'match' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-2 bg-slate-100">
              <div
                className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${(matchedPairs.length / totalItems) * 100}%` }}
              />
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Match the molecules with their functions</h2>
                <p className="text-slate-600 mt-2">Score: {score} / {totalItems}</p>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {matchCards.map(card => {
                  const isFlipped = flippedCards.find(c => c.id === card.id);
                  const isMatched = matchedPairs.includes(card.pairId);

                  return (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(card)}
                      disabled={isMatched}
                      className={`aspect-square rounded-xl border-2 transition-all duration-300 flex items-center justify-center p-3 text-center ${
                        isMatched ? 'bg-green-100 border-green-300 cursor-default' :
                        isFlipped ? card.type === 'molecule' ? 'bg-blue-100 border-blue-400' : 'bg-purple-100 border-purple-400' :
                        'bg-slate-100 border-slate-300 hover:border-slate-400 cursor-pointer'
                      }`}
                    >
                      {(isFlipped || isMatched) ? (
                        <span className={`text-sm font-medium ${
                          isMatched ? 'text-green-700' : card.type === 'molecule' ? 'text-blue-700' : 'text-purple-700'
                        }`}>
                          {card.content}
                        </span>
                      ) : (
                        <span className="text-2xl">❓</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Playing State - Scramble Game */}
        {gameState === 'playing' && gameType === 'scramble' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-2 bg-slate-100">
              <div className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${((currentWordIndex + 1) / totalItems) * 100}%` }} />
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Unscramble this word:</h2>
                <div className="flex justify-center gap-2 mb-6">
                  {scrambledWord.split('').map((letter, idx) => (
                    <span key={idx} className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${interactive.color} text-white font-bold text-lg rounded-lg`}>
                      {letter}
                    </span>
                  ))}
                </div>
                {showHint && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 inline-block">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Lightbulb className="w-5 h-5" />
                      <span className="font-medium">Hint:</span>
                      <span>{interactive.content.words[currentWordIndex].hint}</span>
                    </div>
                  </div>
                )}
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value.toUpperCase())}
                  onKeyPress={(e) => e.key === 'Enter' && handleScrambleSubmit()}
                  placeholder="Type your answer..."
                  className="w-full max-w-md px-4 py-3 text-center text-lg font-medium border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none uppercase"
                />
              </div>
              <div className="flex justify-center gap-4">
                {!showHint && (
                  <button onClick={() => setShowHint(true)} className="px-6 py-3 bg-amber-100 text-amber-700 rounded-xl font-medium hover:bg-amber-200 transition-colors flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" /> Show Hint
                  </button>
                )}
                <button
                  onClick={handleScrambleSubmit}
                  disabled={!userInput.trim()}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                    !userInput.trim() ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : `bg-gradient-to-r ${interactive.color} text-white hover:shadow-lg`
                  }`}
                >
                  Submit Answer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Playing State - Detective Game */}
        {gameState === 'playing' && gameType === 'detective' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-2 bg-slate-100">
              <div className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${((currentChallenge + 1) / totalItems) * 100}%` }} />
            </div>
            <div className="p-8">
              {(() => {
                const challenge = interactive.content.challenges[currentChallenge];
                return (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold text-slate-900">{challenge.product}</h2>
                      <p className="text-slate-600 mt-2">Select the ingredients that are red flags:</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {challenge.ingredients.map((ingredient, idx) => {
                        const isSelected = selectedRedFlags.includes(ingredient);
                        const isRedFlag = challenge.redFlags.includes(ingredient);
                        let bgColor = 'bg-white border-slate-200 hover:border-slate-400';
                        if (showExplanation) {
                          bgColor = isRedFlag ? 'bg-red-50 border-red-400' : 'bg-green-50 border-green-300';
                        } else if (isSelected) {
                          bgColor = 'bg-red-100 border-red-400';
                        }
                        return (
                          <button
                            key={idx}
                            onClick={() => !showExplanation && handleRedFlagToggle(ingredient)}
                            disabled={showExplanation}
                            className={`p-4 rounded-xl border-2 transition-all text-left ${bgColor}`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-slate-700">{ingredient}</span>
                              {showExplanation && isRedFlag && <AlertTriangle className="w-5 h-5 text-red-500" />}
                              {showExplanation && !isRedFlag && <CheckCircle className="w-5 h-5 text-green-500" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {showExplanation && (
                      <div className="bg-slate-50 rounded-xl p-4 mb-6">
                        <p className="text-slate-700"><strong>Explanation:</strong> {challenge.explanation}</p>
                      </div>
                    )}
                    <div className="flex justify-end gap-4">
                      {!showExplanation ? (
                        <button onClick={handleDetectiveSubmit} className={`px-6 py-3 bg-gradient-to-r ${interactive.color} text-white rounded-xl font-medium hover:shadow-lg transition-shadow`}>
                          Check Answer
                        </button>
                      ) : (
                        <button onClick={handleDetectiveNext} className={`px-6 py-3 bg-gradient-to-r ${interactive.color} text-white rounded-xl font-medium hover:shadow-lg transition-shadow flex items-center gap-2`}>
                          {currentChallenge < totalItems - 1 ? 'Next Product' : 'See Results'} <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Playing State - Showdown Game */}
        {gameState === 'playing' && gameType === 'showdown' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-2 bg-slate-100">
              <div className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${((currentChallenge + 1) / totalItems) * 100}%` }} />
            </div>
            <div className="p-8">
              {(() => {
                const matchup = interactive.content.matchups[currentChallenge];
                return (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold text-slate-900">Which is healthier?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {['A', 'B'].map(choice => {
                        const product = choice === 'A' ? matchup.productA : matchup.productB;
                        const isSelected = selectedAnswer === choice;
                        const isWinner = matchup.winner === choice;
                        let borderColor = 'border-slate-200';
                        if (showExplanation) {
                          borderColor = isWinner ? 'border-green-400 bg-green-50' : 'border-red-200 bg-red-50';
                        } else if (isSelected) {
                          borderColor = 'border-blue-400 bg-blue-50';
                        }
                        return (
                          <button key={choice} onClick={() => handleShowdownSelect(choice)} disabled={showExplanation}
                            className={`p-6 rounded-xl border-2 transition-all text-left ${borderColor} ${!showExplanation && 'hover:border-slate-400'}`}>
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-semibold text-lg text-slate-900">{product.name}</h3>
                              {showExplanation && isWinner && <CheckCircle className="w-6 h-6 text-green-500" />}
                            </div>
                            <div className="space-y-2 text-sm">
                              {Object.entries(product).filter(([key]) => key !== 'name').map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                  <span className="font-medium text-slate-700">{value}</span>
                                </div>
                              ))}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {showExplanation && (
                      <div className="bg-slate-50 rounded-xl p-4 mb-6">
                        <p className="text-slate-700"><strong>Explanation:</strong> {matchup.explanation}</p>
                      </div>
                    )}
                    <div className="flex justify-end gap-4">
                      {!showExplanation ? (
                        <button onClick={handleShowdownSubmit} disabled={!selectedAnswer}
                          className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                            !selectedAnswer ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : `bg-gradient-to-r ${interactive.color} text-white hover:shadow-lg`
                          }`}>
                          Submit Choice
                        </button>
                      ) : (
                        <button onClick={handleShowdownNext} className={`px-6 py-3 bg-gradient-to-r ${interactive.color} text-white rounded-xl font-medium hover:shadow-lg transition-shadow flex items-center gap-2`}>
                          {currentChallenge < totalItems - 1 ? 'Next Matchup' : 'See Results'} <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Playing State - Rankings Game */}
        {gameState === 'playing' && gameType === 'rankings' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-2 bg-slate-100">
              <div className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${((currentChallenge + 1) / totalItems) * 100}%` }} />
            </div>
            <div className="p-8">
              {(() => {
                const challenge = interactive.content.challenges[currentChallenge];
                return (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold text-slate-900">Rank from highest to lowest</h2>
                      <p className="text-slate-600 mt-2">{challenge.metric}</p>
                    </div>
                    <div className="max-w-md mx-auto space-y-3 mb-6">
                      {rankingOrder.map((item, idx) => {
                        const correctPosition = showExplanation ? challenge.correctOrder.indexOf(item) : -1;
                        const isCorrectPosition = showExplanation && correctPosition === idx;
                        return (
                          <div key={item} className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                            showExplanation ? isCorrectPosition ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300' : 'bg-white border-slate-200'
                          }`}>
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              showExplanation ? isCorrectPosition ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700' : 'bg-slate-200 text-slate-600'
                            }`}>{idx + 1}</span>
                            <span className="flex-1 font-medium text-slate-700">{item}</span>
                            {!showExplanation && (
                              <div className="flex gap-1">
                                <button onClick={() => moveItem(idx, 'up')} disabled={idx === 0} className="p-1 rounded hover:bg-slate-100 disabled:opacity-30">▲</button>
                                <button onClick={() => moveItem(idx, 'down')} disabled={idx === rankingOrder.length - 1} className="p-1 rounded hover:bg-slate-100 disabled:opacity-30">▼</button>
                              </div>
                            )}
                            {showExplanation && !isCorrectPosition && <span className="text-xs text-red-600">Should be #{correctPosition + 1}</span>}
                          </div>
                        );
                      })}
                    </div>
                    {showExplanation && (
                      <div className="bg-slate-50 rounded-xl p-4 mb-6">
                        <p className="text-slate-700"><strong>Explanation:</strong> {challenge.explanation}</p>
                      </div>
                    )}
                    <div className="flex justify-center gap-4">
                      {!showExplanation && (
                        <button onClick={() => setRankingOrder([...rankingOrder].sort(() => Math.random() - 0.5))}
                          className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors flex items-center gap-2">
                          <Shuffle className="w-5 h-5" /> Shuffle
                        </button>
                      )}
                      {!showExplanation ? (
                        <button onClick={handleRankingsSubmit} className={`px-6 py-3 bg-gradient-to-r ${interactive.color} text-white rounded-xl font-medium hover:shadow-lg transition-shadow`}>
                          Check Order
                        </button>
                      ) : (
                        <button onClick={handleRankingsNext} className={`px-6 py-3 bg-gradient-to-r ${interactive.color} text-white rounded-xl font-medium hover:shadow-lg transition-shadow flex items-center gap-2`}>
                          {currentChallenge < totalItems - 1 ? 'Next Challenge' : 'See Results'} <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Playing State - Biomarker Explorer Tool */}
        {gameState === 'playing' && toolType === 'biomarker' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 text-center">Click a biomarker to explore its connections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {interactive.content.biomarkers.map((biomarker, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedBiomarker(selectedBiomarker === idx ? null : idx)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedBiomarker === idx ? 'border-purple-500 bg-purple-50' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <h3 className="font-semibold text-slate-900">{biomarker.name}</h3>
                  <span className="text-xs text-purple-600 font-medium">{biomarker.category}</span>
                  <p className="text-sm text-slate-600 mt-2">Optimal: {biomarker.optimal}</p>
                </button>
              ))}
            </div>
            {selectedBiomarker !== null && (
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {interactive.content.biomarkers[selectedBiomarker].name}
                </h3>
                <p className="text-slate-600 mb-4">{interactive.content.biomarkers[selectedBiomarker].description}</p>
                <h4 className="font-medium text-slate-700 mb-2">Connected to:</h4>
                <div className="flex flex-wrap gap-2">
                  {interactive.content.biomarkers[selectedBiomarker].connections.map((conn, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {conn}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-8 text-center">
              <button onClick={() => setGameState('results')} className={`px-6 py-3 bg-gradient-to-r ${interactive.color} text-white rounded-xl font-medium hover:shadow-lg transition-shadow`}>
                Finish Exploring
              </button>
            </div>
          </div>
        )}

        {/* Playing State - Supplement Stack Tool */}
        {gameState === 'playing' && toolType === 'supplement' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">Select your health goals</h2>
            <p className="text-slate-600 mb-6 text-center">Choose all that apply to get personalized recommendations</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {interactive.content.goals.map((goal) => {
                const isSelected = selectedGoals.includes(goal.id);
                const icons = { energy: Zap, brain: Brain, sleep: Moon, inflammation: Flame };
                const Icon = icons[goal.id] || Heart;
                return (
                  <button
                    key={goal.id}
                    onClick={() => handleGoalToggle(goal.id)}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      isSelected ? 'border-amber-500 bg-amber-50' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isSelected ? 'bg-amber-200' : 'bg-slate-100'}`}>
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-700' : 'text-slate-500'}`} />
                      </div>
                      <span className="font-semibold text-slate-900">{goal.label}</span>
                      {isSelected && <Check className="w-5 h-5 text-amber-600 ml-auto" />}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <button
                onClick={handleSupplementSubmit}
                disabled={selectedGoals.length === 0}
                className={`px-8 py-4 rounded-xl font-medium transition-colors ${
                  selectedGoals.length === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : `bg-gradient-to-r ${interactive.color} text-white hover:shadow-lg`
                }`}
              >
                Get Recommendations
              </button>
            </div>
          </div>
        )}

        {/* Playing State - Pathway Tracer Tool */}
        {gameState === 'playing' && toolType === 'pathway' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="flex gap-4 mb-6">
              {interactive.content.pathways.map((pathway, idx) => (
                <button
                  key={idx}
                  onClick={() => { setCurrentPathway(idx); setCurrentStep(0); }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPathway === idx ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {pathway.name}
                </button>
              ))}
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">{interactive.content.pathways[currentPathway].name}</h2>
              <div className="flex items-center gap-2 overflow-x-auto pb-4">
                {interactive.content.pathways[currentPathway].steps.map((step, idx) => (
                  <div key={idx} className="flex items-center">
                    <button
                      onClick={() => setCurrentStep(idx)}
                      className={`px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                        currentStep === idx ? 'bg-rose-500 text-white scale-105' :
                        idx < currentStep ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {step}
                    </button>
                    {idx < interactive.content.pathways[currentPathway].steps.length - 1 && (
                      <ChevronRight className="w-5 h-5 text-slate-400 mx-1" />
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-rose-50 rounded-xl p-6 mt-4">
                <h3 className="font-semibold text-rose-900">Step {currentStep + 1}: {interactive.content.pathways[currentPathway].steps[currentStep]}</h3>
                <p className="text-rose-700 mt-2">This is stage {currentStep + 1} of the {interactive.content.pathways[currentPathway].name.toLowerCase()} process.</p>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50"
              >
                Previous Step
              </button>
              {currentStep < interactive.content.pathways[currentPathway].steps.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className={`px-4 py-2 bg-gradient-to-r ${interactive.color} text-white rounded-lg hover:shadow-lg`}
                >
                  Next Step
                </button>
              ) : (
                <button onClick={() => setGameState('results')} className={`px-4 py-2 bg-gradient-to-r ${interactive.color} text-white rounded-lg hover:shadow-lg`}>
                  Finish
                </button>
              )}
            </div>
          </div>
        )}

        {/* Playing State - Calculator Tools (Inflammation, Heart, Sleep) */}
        {gameState === 'playing' && (toolType === 'inflammation' || toolType === 'heart' || toolType === 'sleep') && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-2 bg-slate-100">
              <div className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${((currentQuestion + 1) / (interactive.content.factors || interactive.content.questions).length) * 100}%` }} />
            </div>
            <div className="p-8">
              {(() => {
                const factors = interactive.content.factors || interactive.content.questions;
                const factor = factors[currentQuestion];
                return (
                  <>
                    <h2 className="text-xl font-semibold text-slate-900 mb-6">{factor.question}</h2>
                    <div className="space-y-3">
                      {factor.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleFactorAnswer(idx)}
                          className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-slate-400 transition-all"
                        >
                          <span className="font-medium text-slate-700">{option}</span>
                        </button>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Playing State - Vitamin Deficiency Checker */}
        {gameState === 'playing' && toolType === 'vitamin' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">Select any symptoms you experience</h2>
            <p className="text-slate-600 mb-6 text-center">Choose all that apply</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {interactive.content.symptoms.map((item, idx) => {
                const isSelected = selectedSymptoms.includes(item.symptom);
                return (
                  <button
                    key={idx}
                    onClick={() => handleSymptomToggle(item.symptom)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      isSelected ? 'border-orange-500 bg-orange-50' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">{item.symptom}</span>
                      {isSelected && <Check className="w-5 h-5 text-orange-600" />}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <button
                onClick={handleVitaminSubmit}
                disabled={selectedSymptoms.length === 0}
                className={`px-8 py-4 rounded-xl font-medium transition-colors ${
                  selectedSymptoms.length === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : `bg-gradient-to-r ${interactive.color} text-white hover:shadow-lg`
                }`}
              >
                Check Deficiencies
              </button>
            </div>
          </div>
        )}

        {/* Playing State - Cellular Energy Journey */}
        {gameState === 'playing' && toolType === 'energy' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-2 bg-slate-100">
              <div className={`h-full bg-gradient-to-r ${interactive.color} transition-all duration-300`}
                style={{ width: `${((currentStage + 1) / interactive.content.stages.length) * 100}%` }} />
            </div>
            <div className="p-8">
              {(() => {
                const stage = interactive.content.stages[currentStage];
                return (
                  <>
                    <div className="text-center mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Stage {currentStage + 1} of {interactive.content.stages.length}
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">{stage.name}</h2>
                      <p className="text-sm text-slate-500 mb-4">Location: {stage.location}</p>
                      <p className="text-slate-700 mb-4">{stage.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <span className="text-xs text-slate-500 font-medium">INPUT</span>
                          <p className="font-semibold text-blue-700 mt-1">{stage.input}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <span className="text-xs text-slate-500 font-medium">OUTPUT</span>
                          <p className="font-semibold text-green-700 mt-1">{stage.output}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setCurrentStage(Math.max(0, currentStage - 1))}
                        disabled={currentStage === 0}
                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 disabled:opacity-50"
                      >
                        Previous Stage
                      </button>
                      {currentStage < interactive.content.stages.length - 1 ? (
                        <button onClick={() => setCurrentStage(currentStage + 1)} className={`px-4 py-2 bg-gradient-to-r ${interactive.color} text-white rounded-lg hover:shadow-lg`}>
                          Next Stage
                        </button>
                      ) : (
                        <button onClick={() => setGameState('results')} className={`px-4 py-2 bg-gradient-to-r ${interactive.color} text-white rounded-lg hover:shadow-lg`}>
                          Complete Journey
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Playing State - Blood Sugar Simulator */}
        {gameState === 'playing' && toolType === 'bloodsugar' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-2 text-center">Select foods to see their blood sugar impact</h2>
            <p className="text-slate-600 mb-6 text-center">Choose up to 4 foods to compare</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {interactive.content.foods.map((food, idx) => {
                const isSelected = selectedFoods.includes(food.name);
                const giColor = food.gi >= 70 ? 'red' : food.gi >= 55 ? 'yellow' : 'green';
                return (
                  <button
                    key={idx}
                    onClick={() => handleFoodToggle(food.name)}
                    disabled={!isSelected && selectedFoods.length >= 4}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      isSelected ? 'border-pink-500 bg-pink-50' : 'border-slate-200 hover:border-slate-300 disabled:opacity-50'
                    }`}
                  >
                    <span className="font-medium text-slate-900 block">{food.name}</span>
                    <span className={`text-xs font-medium ${
                      giColor === 'red' ? 'text-red-600' : giColor === 'yellow' ? 'text-amber-600' : 'text-green-600'
                    }`}>
                      GI: {food.gi}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <button
                onClick={handleBloodSugarSubmit}
                disabled={selectedFoods.length === 0}
                className={`px-8 py-4 rounded-xl font-medium transition-colors ${
                  selectedFoods.length === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : `bg-gradient-to-r ${interactive.color} text-white hover:shadow-lg`
                }`}
              >
                See Blood Sugar Response
              </button>
            </div>
          </div>
        )}

        {/* Results State */}
        {gameState === 'results' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Quiz/Game Results */}
            {(isQuiz || isGame) && (
              <>
                <div className={`bg-gradient-to-br ${interactive.color} p-8 text-white text-center`}>
                  <span className="text-6xl mb-4 block">{getScoreMessage().emoji}</span>
                  <h2 className="text-3xl font-bold mb-2">{score} / {isQuiz ? questions.length : totalItems}</h2>
                  <p className="text-lg opacity-90">{getScoreMessage().message}</p>
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-slate-900 mb-4">Your Results</h3>
                  <div className="space-y-3 mb-8">
                    {answers.map((answer, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border ${answer.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-900">
                            {isQuiz && `Q${idx + 1}: ${questions[idx].question.substring(0, 40)}...`}
                            {gameType === 'scramble' && `Word ${idx + 1}: ${answer.word}`}
                            {gameType === 'detective' && `Product ${idx + 1}`}
                            {gameType === 'showdown' && `Matchup ${idx + 1}`}
                            {gameType === 'rankings' && `Challenge ${idx + 1}`}
                          </span>
                          {answer.isCorrect ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Tool Results */}
            {isTool && (
              <div className="p-8">
                <div className={`bg-gradient-to-br ${interactive.color} rounded-xl p-6 text-white text-center mb-6`}>
                  <span className="text-5xl mb-2 block">{interactive.icon}</span>
                  <h2 className="text-2xl font-bold">Your Results</h2>
                </div>

                {/* Supplement Stack Results */}
                {toolType === 'supplement' && toolResult && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Your Goals:</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {toolResult.goals.map((goal, idx) => (
                        <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">{goal}</span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-4">Recommended Supplements:</h3>
                    <div className="space-y-3">
                      {toolResult.supplements.map(([supp, count], idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                          <span className="font-medium text-slate-900">{supp}</span>
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                            Matches {count} goal{count > 1 ? 's' : ''}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Calculator Results (Inflammation, Heart, Sleep) */}
                {(toolType === 'inflammation' || toolType === 'heart' || toolType === 'sleep') && toolResult && (
                  <div className="text-center">
                    <div className={`inline-block px-6 py-3 rounded-full text-lg font-bold mb-4 ${
                      toolResult.color === 'green' ? 'bg-green-100 text-green-700' :
                      toolResult.color === 'yellow' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {toolResult.riskLevel} Risk
                    </div>
                    <p className="text-slate-700 mb-6">{toolResult.message}</p>
                    {toolResult.tips && (
                      <div className="text-left bg-slate-50 rounded-xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Tips for Improvement:</h4>
                        <ul className="space-y-2">
                          {Object.values(toolResult.tips).map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Vitamin Deficiency Results */}
                {toolType === 'vitamin' && toolResult && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Symptoms Selected:</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {toolResult.symptoms.map((symptom, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">{symptom}</span>
                      ))}
                    </div>
                    {toolResult.deficiencies.length > 0 ? (
                      <>
                        <h3 className="font-semibold text-slate-900 mb-4">Potential Deficiencies:</h3>
                        <div className="space-y-3">
                          {toolResult.deficiencies.map(([vitamin, count], idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                              <span className="font-medium text-slate-900">{vitamin}</span>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(count)].map((_, i) => (
                                    <div key={i} className="w-3 h-3 rounded-full bg-orange-400 -ml-1 first:ml-0" />
                                  ))}
                                </div>
                                <span className="text-sm text-slate-500">{count} symptom{count > 1 ? 's' : ''}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-slate-500 mt-4 text-center">
                          Note: This is for educational purposes only. Consult a healthcare provider for diagnosis.
                        </p>
                      </>
                    ) : (
                      <p className="text-slate-600 text-center">No specific deficiency patterns detected from selected symptoms.</p>
                    )}
                  </div>
                )}

                {/* Blood Sugar Results */}
                {toolType === 'bloodsugar' && toolResult && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">Blood Sugar Response Comparison:</h3>
                    <div className="space-y-4 mb-6">
                      {toolResult.foods.map((food, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-slate-900">{food.name}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              food.spike === 'high' ? 'bg-red-100 text-red-700' :
                              food.spike === 'moderate' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                            }`}>
                              GI: {food.gi}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{food.description}</p>
                          <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className={`h-full ${
                              food.spike === 'high' ? 'bg-red-400' : food.spike === 'moderate' ? 'bg-amber-400' : 'bg-green-400'
                            }`} style={{ width: `${food.gi}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    {toolResult.tips && (
                      <div className="bg-pink-50 rounded-xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Tips for Blood Sugar Control:</h4>
                        <ul className="space-y-2">
                          {toolResult.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                              <Lightbulb className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Biomarker Explorer Results */}
                {toolType === 'biomarker' && (
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-slate-700">You explored {interactive.content.biomarkers.length} biomarkers and their connections!</p>
                  </div>
                )}

                {/* Pathway Tracer Results */}
                {toolType === 'pathway' && (
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-slate-700">You completed the metabolic pathway journey!</p>
                  </div>
                )}

                {/* Cellular Energy Results */}
                {toolType === 'energy' && (
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-900 mb-4">Journey Complete!</h3>
                    <p className="text-slate-700 mb-4">You learned how cells produce energy through 4 stages of ATP synthesis.</p>
                    <div className="bg-blue-50 rounded-xl p-6 text-left">
                      <h4 className="font-medium text-slate-900 mb-2">Key Takeaway:</h4>
                      <p className="text-slate-600">From one glucose molecule, cells can produce approximately 36-38 ATP molecules through glycolysis, the citric acid cycle, and oxidative phosphorylation!</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="p-8 pt-0 flex justify-center gap-4">
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
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">{related.type}</span>
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
