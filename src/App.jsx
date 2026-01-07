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
import NewDiscussionPage from './components/pages/NewDiscussionPage';
import SmartSearchModal from './components/modals/SmartSearchModal';
import GlossaryTermModal from './components/modals/GlossaryTermModal';
import QuizModal from './components/modals/QuizModal';
import ConsultationModal from './components/modals/ConsultationModal';
import UserProfileModal from './components/modals/UserProfileModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSmartSearch, setShowSmartSearch] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [consultationModal, setConsultationModal] = useState({ show: false, type: 'consultation' });
  const [viewingUserProfile, setViewingUserProfile] = useState(null);
  const [viewingGlossaryTerm, setViewingGlossaryTerm] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(null);
  const [selectedComparisonId, setSelectedComparisonId] = useState(null);
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [selectedInteractiveId, setSelectedInteractiveId] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [exploreTab, setExploreTab] = useState(null);
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

  // User-created discussion threads - persisted to localStorage
  const [userThreads, setUserThreads] = useState(() => {
    const saved = localStorage.getItem('userThreads');
    return saved ? JSON.parse(saved) : [];
  });

  // User likes - persisted to localStorage
  const [userLikes, setUserLikes] = useState(() => {
    const saved = localStorage.getItem('userLikes');
    return saved ? JSON.parse(saved) : { threads: [], replies: [] };
  });

  // User replies - persisted to localStorage
  const [userReplies, setUserReplies] = useState(() => {
    const saved = localStorage.getItem('userReplies');
    return saved ? JSON.parse(saved) : {}; // { threadId: [replies] }
  });

  // Following users - persisted to localStorage
  const [following, setFollowing] = useState(() => {
    const saved = localStorage.getItem('following');
    return saved ? JSON.parse(saved) : []; // Array of usernames
  });

  // User profile - persisted to localStorage
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : {
      name: '',
      bio: '',
    };
  });

  // Toast notification state
  const [toast, setToast] = useState(null);

  // Persist learning progress to localStorage
  useEffect(() => {
    localStorage.setItem('learningProgress', JSON.stringify(learningProgress));
  }, [learningProgress]);

  // Persist user threads to localStorage
  useEffect(() => {
    localStorage.setItem('userThreads', JSON.stringify(userThreads));
  }, [userThreads]);

  // Persist user likes to localStorage
  useEffect(() => {
    localStorage.setItem('userLikes', JSON.stringify(userLikes));
  }, [userLikes]);

  // Persist user replies to localStorage
  useEffect(() => {
    localStorage.setItem('userReplies', JSON.stringify(userReplies));
  }, [userReplies]);

  // Persist following to localStorage
  useEffect(() => {
    localStorage.setItem('following', JSON.stringify(following));
  }, [following]);

  // Persist user profile to localStorage
  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }, [userProfile]);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Add a new discussion thread
  const addNewThread = (thread) => {
    const newThread = {
      ...thread,
      id: Date.now(), // Unique ID based on timestamp
      date: 'Just now',
      replies: 0,
      likes: 0,
      avatar: 'You',
      author: 'You',
      featured: false,
      threadReplies: [],
    };
    setUserThreads(prev => [newThread, ...prev]);
    return newThread.id;
  };

  // Toggle like on a thread
  const toggleThreadLike = (threadId) => {
    setUserLikes(prev => {
      const isLiked = prev.threads.includes(threadId);
      return {
        ...prev,
        threads: isLiked
          ? prev.threads.filter(id => id !== threadId)
          : [...prev.threads, threadId]
      };
    });
  };

  // Toggle like on a reply
  const toggleReplyLike = (replyId) => {
    setUserLikes(prev => {
      const isLiked = prev.replies.includes(replyId);
      return {
        ...prev,
        replies: isLiked
          ? prev.replies.filter(id => id !== replyId)
          : [...prev.replies, replyId]
      };
    });
  };

  // Check if thread is liked
  const isThreadLiked = (threadId) => userLikes.threads.includes(threadId);

  // Check if reply is liked
  const isReplyLiked = (replyId) => userLikes.replies.includes(replyId);

  // Add a reply to a thread
  const addReply = (threadId, content) => {
    const newReply = {
      id: Date.now(),
      author: 'You',
      avatar: 'You',
      content,
      date: 'Just now',
      likes: 0,
      isAuthor: false,
    };
    setUserReplies(prev => ({
      ...prev,
      [threadId]: [...(prev[threadId] || []), newReply]
    }));
  };

  // Get replies for a thread (user-created ones)
  const getRepliesForThread = (threadId) => userReplies[threadId] || [];

  // Toggle follow a user
  const toggleFollow = (username) => {
    setFollowing(prev => {
      const isCurrentlyFollowing = prev.includes(username);
      if (isCurrentlyFollowing) {
        return prev.filter(u => u !== username);
      } else {
        return [...prev, username];
      }
    });
  };

  // Check if following a user
  const isFollowing = (username) => following.includes(username);

  // Share functionality
  const handleShare = async (title, url) => {
    const shareData = {
      title: title || 'OpenMolecular',
      url: url || window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setToast('Link copied to clipboard!');
      }
    } catch (err) {
      // User cancelled or error - try clipboard fallback
      try {
        await navigator.clipboard.writeText(shareData.url);
        setToast('Link copied to clipboard!');
      } catch {
        setToast('Unable to share');
      }
    }
  };

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
    // Handle explore with tab parameter
    if (page === 'explore' && itemId && !secondaryId) {
      // itemId is the tab name for explore
      setExploreTab(itemId);
      setSelectedArticleId(null);
      setSelectedTrackId(null);
      setSelectedLessonId(null);
      setSelectedCaseStudyId(null);
      setSelectedComparisonId(null);
      setSelectedThreadId(null);
      setSelectedInteractiveId(null);
      setCurrentPage('explore');
      window.scrollTo(0, 0);
      return;
    }
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
      onUserClick: setViewingUserProfile,
      toggleSaveItem,
      isItemSaved,
    };

    switch (currentPage) {
      case 'home':
        return <HomePage {...commonProps} />;
      case 'explore':
        return <ExplorePage {...commonProps} initialTab={exploreTab} />;
      case 'community':
        return (
          <CommunityPage
            {...commonProps}
            userThreads={userThreads}
            toggleThreadLike={toggleThreadLike}
            isThreadLiked={isThreadLiked}
            following={following}
          />
        );
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
        return (
          <ProfilePage
            {...commonProps}
            savedItems={savedItems}
            learningProgress={learningProgress}
            getTrackProgress={getTrackProgress}
            following={following}
            userProfile={userProfile}
            updateUserProfile={setUserProfile}
          />
        );
      case 'article':
        return (
          <ArticleDetailPage
            articleId={selectedArticleId}
            onBack={() => handleNavigate('explore')}
            onNavigate={handleNavigate}
            toggleSaveItem={toggleSaveItem}
            isItemSaved={isItemSaved}
            onGlossaryClick={setViewingGlossaryTerm}
            onUserClick={setViewingUserProfile}
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
            onUserClick={setViewingUserProfile}
            userThreads={userThreads}
            toggleThreadLike={toggleThreadLike}
            toggleReplyLike={toggleReplyLike}
            isThreadLiked={isThreadLiked}
            isReplyLiked={isReplyLiked}
            addReply={addReply}
            getRepliesForThread={getRepliesForThread}
            onShare={handleShare}
          />
        );
      case 'new-discussion':
        return (
          <NewDiscussionPage
            onBack={() => handleNavigate('community')}
            onNavigate={handleNavigate}
            onSubmitThread={addNewThread}
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

      {viewingUserProfile && (
        <UserProfileModal
          username={viewingUserProfile}
          onClose={() => setViewingUserProfile(null)}
          onNavigate={handleNavigate}
          toggleFollow={toggleFollow}
          isFollowing={isFollowing}
        />
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3 bg-slate-900 text-white rounded-lg shadow-lg animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
