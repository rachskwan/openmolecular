import { supabase } from '../lib/supabase';
import { glossaryData as staticGlossary } from '../data/glossary';

// Transform Supabase row to match the app's expected format
const transformTerm = (row) => ({
  term: row.term,
  fullName: row.full_name,
  category: row.category,
  subcategory: row.subcategory,
  definition: row.definition,
  keyPoints: row.key_points || [],
  relatedTerms: row.related_terms || [],
  foods: row.foods || [],
  icon: row.icon || '🔬',
});

// Convert array to object keyed by term (matching static data format)
const arrayToObject = (terms) => {
  return terms.reduce((acc, term) => {
    acc[term.term] = term;
    return acc;
  }, {});
};

// Fetch all glossary terms
export const fetchGlossaryTerms = async () => {
  try {
    const { data, error } = await supabase
      .from('glossary')
      .select('*')
      .order('term', { ascending: true });

    if (error) {
      console.error('Error fetching glossary:', error);
      return staticGlossary;
    }

    if (!data || data.length === 0) {
      return staticGlossary;
    }

    const transformed = data.map(transformTerm);
    return arrayToObject(transformed);
  } catch (err) {
    console.error('Error in fetchGlossaryTerms:', err);
    return staticGlossary;
  }
};

// Fetch glossary terms as array (for lists)
export const fetchGlossaryArray = async () => {
  try {
    const { data, error } = await supabase
      .from('glossary')
      .select('*')
      .order('term', { ascending: true });

    if (error) {
      console.error('Error fetching glossary:', error);
      return Object.values(staticGlossary);
    }

    if (!data || data.length === 0) {
      return Object.values(staticGlossary);
    }

    return data.map(transformTerm);
  } catch (err) {
    console.error('Error in fetchGlossaryArray:', err);
    return Object.values(staticGlossary);
  }
};

// Fetch single term by name
export const fetchGlossaryTerm = async (termName) => {
  try {
    const { data, error } = await supabase
      .from('glossary')
      .select('*')
      .eq('term', termName)
      .single();

    if (error) {
      console.error('Error fetching term:', error);
      return staticGlossary[termName];
    }

    return transformTerm(data);
  } catch (err) {
    console.error('Error in fetchGlossaryTerm:', err);
    return staticGlossary[termName];
  }
};

// Fetch terms by category
export const fetchGlossaryByCategory = async (category) => {
  try {
    const { data, error } = await supabase
      .from('glossary')
      .select('*')
      .eq('category', category)
      .order('term', { ascending: true });

    if (error) {
      console.error('Error fetching glossary by category:', error);
      return Object.values(staticGlossary).filter(t => t.category === category);
    }

    if (!data || data.length === 0) {
      return Object.values(staticGlossary).filter(t => t.category === category);
    }

    return data.map(transformTerm);
  } catch (err) {
    console.error('Error in fetchGlossaryByCategory:', err);
    return Object.values(staticGlossary).filter(t => t.category === category);
  }
};

// Search glossary terms
export const searchGlossary = async (query) => {
  try {
    const { data, error } = await supabase
      .from('glossary')
      .select('*')
      .or(`term.ilike.%${query}%,full_name.ilike.%${query}%,definition.ilike.%${query}%`)
      .order('term', { ascending: true });

    if (error) {
      console.error('Error searching glossary:', error);
      const staticTerms = Object.values(staticGlossary);
      return staticTerms.filter(t =>
        t.term.toLowerCase().includes(query.toLowerCase()) ||
        t.fullName?.toLowerCase().includes(query.toLowerCase()) ||
        t.definition?.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (!data || data.length === 0) {
      const staticTerms = Object.values(staticGlossary);
      return staticTerms.filter(t =>
        t.term.toLowerCase().includes(query.toLowerCase()) ||
        t.fullName?.toLowerCase().includes(query.toLowerCase()) ||
        t.definition?.toLowerCase().includes(query.toLowerCase())
      );
    }

    return data.map(transformTerm);
  } catch (err) {
    console.error('Error in searchGlossary:', err);
    return Object.values(staticGlossary);
  }
};
