import { useState, useEffect } from 'react';
import { fetchArticles, fetchFeaturedArticles, fetchArticleById } from '../services/articlesService';

// Hook to fetch all articles
export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return { articles, loading, error, refetch: () => fetchArticles().then(setArticles) };
};

// Hook to fetch featured articles
export const useFeaturedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchFeaturedArticles();
        setArticles(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return { articles, loading, error };
};

// Hook to fetch single article
export const useArticle = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const loadArticle = async () => {
      try {
        setLoading(true);
        const data = await fetchArticleById(id);
        setArticle(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  return { article, loading, error };
};
