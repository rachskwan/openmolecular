import { useState, useEffect } from 'react';
import { fetchGlossaryTerms, fetchGlossaryArray, fetchGlossaryTerm, fetchGlossaryByCategory } from '../services/glossaryService';

// Hook to fetch all glossary terms as object (keyed by term name)
export const useGlossary = () => {
  const [glossaryData, setGlossaryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGlossary = async () => {
      try {
        setLoading(true);
        const data = await fetchGlossaryTerms();
        setGlossaryData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadGlossary();
  }, []);

  return { glossaryData, loading, error, refetch: () => fetchGlossaryTerms().then(setGlossaryData) };
};

// Hook to fetch glossary as array (for lists/grids)
export const useGlossaryArray = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGlossary = async () => {
      try {
        setLoading(true);
        const data = await fetchGlossaryArray();
        setTerms(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadGlossary();
  }, []);

  return { terms, loading, error };
};

// Hook to fetch single glossary term
export const useGlossaryTerm = (termName) => {
  const [term, setTerm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!termName) return;

    const loadTerm = async () => {
      try {
        setLoading(true);
        const data = await fetchGlossaryTerm(termName);
        setTerm(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadTerm();
  }, [termName]);

  return { term, loading, error };
};

// Hook to fetch glossary by category
export const useGlossaryByCategory = (category) => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const loadTerms = async () => {
      try {
        setLoading(true);
        const data = await fetchGlossaryByCategory(category);
        setTerms(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadTerms();
  }, [category]);

  return { terms, loading, error };
};
