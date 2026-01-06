import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ExplorePage from './components/pages/ExplorePage';
import CommunityPage from './components/pages/CommunityPage';
import CertificationPage from './components/pages/CertificationPage';
import ResourcesPage from './components/pages/ResourcesPage';
import ProfilePage from './components/pages/ProfilePage';
import ArticleDetailPage from './components/pages/ArticleDetailPage';
import TrackDetailPage from './components/pages/TrackDetailPage';
import CaseStudyDetailPage from './components/pages/CaseStudyDetailPage';
import ComparisonDetailPage from './components/pages/ComparisonDetailPage';
import ThreadDetailPage from './components/pages/ThreadDetailPage';
import InteractiveDetailPage from './components/pages/InteractiveDetailPage';
import LessonViewPage from './components/pages/LessonViewPage';
import SmartSearchModal from './components/modals/SmartSearchModal';
import GlossaryTermModal from './components/modals/GlossaryTermModal';
import QuizModal from './components/modals/QuizModal';
import ConsultationModal from './components/modals/ConsultationModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSmartSearch, setShowSmartSearch] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [consultationModal, setConsultationModal] = useState({ show: false, type: 'consultation' });
  const [viewingGlossaryTerm, setViewingGlossaryTerm] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(null);
  const [selectedComparisonId, setSelectedComparisonId] = useState(null);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedInteractiveId, setSelectedInteractiveId] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [savedItems, setSavedItems] = useState({
    articles: [],
    molecules: [],
    modules: [],
    comparisons: [],
    caseStudies: [],
    advice: [],
  });

  // Learning progress state - persisted to localStorage
  const [learningProgress, setLearningProgress] = useState(() => {
    const saved = localStorage.getItem('learningProgress');
    return saved ? JSON.parse(saved) : {
      // Structure: { trackId: { lessonId: { completed: boolean, sectionsCompleted: [0, 1, 2], completedAt: date } } }
    };
  });

  // Persist learning progress to localStorage
  useEffect(() => {
    localStorage.setItem('learningProgress', JSON.stringify(learningProgress));
  }, [learningProgress]);

  // Mark a section as completed
  const markSectionComplete = (trackId, lessonId, sectionIndex) => {
    setLearningProgress(prev => {
      const trackProgress = prev[trackId] || {};
      const lessonProgress = trackProgress[lessonId] || { completed: false, sectionsCompleted: [] };
      const sectionsCompleted = lessonProgress.sectionsCompleted.includes(sectionIndex)
        ? lessonProgress.sectionsCompleted
        : [...lessonProgress.sectionsCompleted, sectionIndex];

      return {
        ...prev,
        [trackId]: {
          ...trackProgress,
          [lessonId]: {
            ...lessonProgress,
            sectionsCompleted
          }
        }
      };
    });
  };

  // Mark a lesson as completed
  const markLessonComplete = (trackId, lessonId) => {
    setLearningProgress(prev => {
      const trackProgress = prev[trackId] || {};
      const lessonProgress = trackProgress[lessonId] || { sectionsCompleted: [] };

      return {
        ...prev,
        [trackId]: {
          ...trackProgress,
          [lessonId]: {
            ...lessonProgress,
            completed: true,
            completedAt: new Date().toISOString()
          }
        }
      };
    });
  };

  // Check if a lesson is completed
  const isLessonComplete = (trackId, lessonId) => {
    return learningProgress[trackId]?.[lessonId]?.completed || false;
  };

  // Get completed sections for a lesson
  const getCompletedSections = (trackId, lessonId) => {
    return learningProgress[trackId]?.[lessonId]?.sectionsCompleted || [];
  };

  // Calculate track progress percentage
  const getTrackProgress = (trackId, totalLessons) => {
    const trackProgress = learningProgress[trackId] || {};
    const completedLessons = Object.values(trackProgress).filter(l => l.completed).length;
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  };

  // Save/Unsave handlers
  const toggleSaveItem = (item, itemType, isTermBased = false) => {
    const id = isTermBased ? item.term : item.id;
    const isCurrentlySaved = savedItems[itemType]?.some(
      saved => (isTermBased ? saved.term === id : saved.id === id)
    );

    if (isCurrentlySaved) {
      setSavedItems(prev => ({
        ...prev,
        [itemType]: prev[itemType].filter(
          saved => (isTermBased ? saved.term !== id : saved.id !== id)
        )
      }));
    } else {
      setSavedItems(prev => ({
        ...prev,
        [itemType]: [...prev[itemType], { ...item, savedAt: new Date().toISOString().split('T')[0] }]
      }));
    }
  };

  const isItemSaved = (itemId, itemType, isTermBased = false) => {
    return savedItems[itemType]?.some(
      item => (isTermBased ? item.term === itemId : item.id === itemId)
    ) || false;
  };

  // Enhanced navigation handler
  const handleNavigate = (page, itemId = null, secondaryId = null) => {
    if (page === 'lesson' && itemId && secondaryId) {
      // Lesson navigation: itemId = trackId, secondaryId = lessonId
      setSelectedTrackId(itemId);
      setSelectedLessonId(secondaryId);
      setSelectedArticleId(null);
      setSelectedCaseStudyId(null);
      setSelectedComparisonId(null);
      setSelectedThreadId(null);
      setSelectedInteractiveId(null);
      setCurrentPage('lesson');
    } else if (page === 'article' && itemId) {
      setSelectedArticleId(itemId);
      setSelectedTrackId(null);
      setSelectedLessonId(null);
      setSelectedCaseStudyId(null);
      setSelectedComparisonId(null);
      setSelectedThreadId(null);
      setSelectedInteractiveId(null);
      setCurrentPage('article');
    } else if (page === 'track' && itemId) {
      setSelectedTrackId(itemId);
      setSelectedArticleId(null);
      setSelectedLessonId(null);
      setSelectedCaseStudyId(null);
      setSelectedComparisonId(null);
      setSelectedThreadId(null);
      setSelectedInteractiveId(null);
      setCurrentPage('track');
    } else if (page === 'casestudy' && itemId) {
      setSelectedCaseStudyId(itemId);
      setSelectedArticleId(null);
      setSelectedTrackId(null);
      setSelectedLessonId(null);
      setSelectedComparisonId(null);
      setSelectedThreadId(null);
      setSelectedInteractiveId(null);
      setCurrentPage('casestudy');
    } else if (page === 'comparison' && itemId) {
      setSelectedComparisonId(itemId);
      setSelectedArticleId(null);
      setSelectedTrackId(null);
      setSelectedLessonId(null);
      setSelectedCaseStudyId(null);
      setSelectedThreadId(null);
      setSelectedInteractiveId(null);
      setCurrentPage('comparison');
    } else if (page === 'thread' && itemId) {
      setSelectedThreadId(itemId);
      setSelectedArticleId(null);
      setSelectedTrackId(null);
      setSelectedLessonId(null);
      setSelectedCaseStudyId(null);
      setSelectedComparisonId(null);
      setSelectedInteractiveId(null);
      setCurrentPage('thread');
    } else if (page === 'interactive' && itemId) {
      setSelectedInteractiveId(itemId);
      setSelectedArticleId(null);
      setSelectedTrackId(null);
      setSelectedLessonId(null);
      setSelectedCaseStudyId(null);
      setSelectedComparisonId(null);
      setSelectedThreadId(null);
      setCurrentPage('interactive');
    } else {
      setSelectedArticleId(null);
      setSelectedTrackId(null);
      setSelectedLessonId(null);
      setSelectedCaseStudyId(null);
      setSelectedComparisonId(null);
      setSelectedThreadId(null);
      setSelectedInteractiveId(null);
      setCurrentPage(page);
    }
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    const commonProps = {
      onNavigate: handleNavigate,
      onGlossaryClick: setViewingGlossaryTerm,
      onQuizClick: () => setShowQuiz(true),
      onSearchClick: () => setShowSmartSearch(true),
      toggleSaveItem,
      isItemSaved,
    };

    switch (currentPage) {
      case 'home':
        return <HomePage {...commonProps} />;
      case 'explore':
        return <ExplorePage {...commonProps} />;
      case 'community':
        return <CommunityPage {...commonProps} />;
      case 'certification':
        return (
          <CertificationPage
            {...commonProps}
            onRequestConsultation={() => setConsultationModal({ show: true, type: 'consultation' })}
            onScheduleCall={() => setConsultationModal({ show: true, type: 'schedule' })}
          />
        );
      case 'resources':
        return <ResourcesPage {...commonProps} />;
      case 'profile':
        return <ProfilePage {...commonProps} savedItems={savedItems} />;
      case 'article':
        return (
          <ArticleDetailPage
            articleId={selectedArticleId}
            onBack={() => handleNavigate('explore')}
            onNavigate={handleNavigate}
            toggleSaveItem={toggleSaveItem}
            isItemSaved={isItemSaved}
            onGlossaryClick={setViewingGlossaryTerm}
          />
        );
      case 'track':
        return (
          <TrackDetailPage
            trackId={selectedTrackId}
            onBack={() => handleNavigate('explore')}
            onNavigate={handleNavigate}
            isLessonComplete={isLessonComplete}
            getTrackProgress={getTrackProgress}
          />
        );
      case 'casestudy':
        return (
          <CaseStudyDetailPage
            caseStudyId={selectedCaseStudyId}
            onBack={() => handleNavigate('explore')}
            onNavigate={handleNavigate}
          />
        );
      case 'comparison':
        return (
          <ComparisonDetailPage
            comparisonId={selectedComparisonId}
            onBack={() => handleNavigate('explore')}
            onNavigate={handleNavigate}
            onGlossaryClick={setViewingGlossaryTerm}
          />
        );
      case 'thread':
        return (
          <ThreadDetailPage
            threadId={selectedThreadId}
            onBack={() => handleNavigate('community')}
            onNavigate={handleNavigate}
          />
        );
      case 'interactive':
        return (
          <InteractiveDetailPage
            interactiveId={selectedInteractiveId}
            onBack={() => handleNavigate('explore')}
            onNavigate={handleNavigate}
          />
        );
      case 'lesson':
        return (
          <LessonViewPage
            trackId={selectedTrackId}
            lessonId={selectedLessonId}
            onBack={() => handleNavigate('track', selectedTrackId)}
            onNavigate={handleNavigate}
            markSectionComplete={markSectionComplete}
            markLessonComplete={markLessonComplete}
            getCompletedSections={getCompletedSections}
            isLessonComplete={isLessonComplete}
          />
        );
      default:
        return <HomePage {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleNavigate}
        onSearchClick={() => setShowSmartSearch(true)}
      />

      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      {showSmartSearch && (
        <SmartSearchModal
          onClose={() => setShowSmartSearch(false)}
          onNavigate={handleNavigate}
          onGlossaryClick={setViewingGlossaryTerm}
        />
      )}

      {viewingGlossaryTerm && (
        <GlossaryTermModal
          term={viewingGlossaryTerm}
          onClose={() => setViewingGlossaryTerm(null)}
          onTermClick={setViewingGlossaryTerm}
          onNavigate={handleNavigate}
          toggleSaveItem={toggleSaveItem}
          isItemSaved={isItemSaved}
        />
      )}

      {showQuiz && (
        <QuizModal
          onClose={() => setShowQuiz(false)}
          onNavigate={handleNavigate}
        />
      )}

      {consultationModal.show && (
        <ConsultationModal
          onClose={() => setConsultationModal({ show: false, type: 'consultation' })}
          modalType={consultationModal.type}
        />
      )}
    </div>
  );
}

export default App;
