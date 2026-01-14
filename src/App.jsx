import { useState } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import CategoryPage from './components/pages/CategoryPage';
import TopicPage from './components/pages/TopicPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleNavigate = (page, categoryId = null, topicSlug = null) => {
    if (page === 'home') {
      setCurrentPage('home');
      setSelectedCategory(null);
      setSelectedTopic(null);
    } else if (page === 'category' && categoryId) {
      setCurrentPage('category');
      setSelectedCategory(categoryId);
      setSelectedTopic(null);
    } else if (page === 'topic' && categoryId && topicSlug) {
      setCurrentPage('topic');
      setSelectedCategory(categoryId);
      setSelectedTopic(topicSlug);
    } else if (page === 'about') {
      setCurrentPage('about');
    }
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (currentPage === 'topic') {
      handleNavigate('category', selectedCategory);
    } else if (currentPage === 'category') {
      handleNavigate('home');
    } else {
      handleNavigate('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'category':
        return (
          <CategoryPage
            categoryId={selectedCategory}
            onNavigate={handleNavigate}
            onBack={handleBack}
          />
        );
      case 'topic':
        return (
          <TopicPage
            categoryId={selectedCategory}
            topicSlug={selectedTopic}
            onNavigate={handleNavigate}
            onBack={handleBack}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={selectedCategory || currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;
