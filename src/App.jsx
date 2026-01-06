import { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSmartSearch, setShowSmartSearch] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
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
        return <CertificationPage {...commonProps} />;
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
    </div>
  );
}

export default App;
