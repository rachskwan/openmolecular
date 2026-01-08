import { supabase } from '../lib/supabase';
import { articles as staticArticles, videos as staticVideos } from '../data/articles';

// Transform Supabase row to match the app's expected format
const transformArticle = (row) => ({
  id: row.id,
  title: row.title,
  category: row.category,
  level: row.level,
  duration: row.duration,
  author: row.author,
  authorBio: row.author_bio,
  date: row.date ? new Date(row.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : null,
  saves: row.saves || 0,
  featured: row.featured || false,
  premium: row.premium || false,
  heroImage: row.hero_image,
  image: row.image,
  introduction: row.introduction,
  sections: row.sections || [],
  keyTakeaways: row.key_takeaways || [],
  relatedTerms: row.related_terms || [],
});

// Fetch all articles
export const fetchArticles = async () => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching articles:', error);
      return staticArticles; // Fallback to static data
    }

    if (!data || data.length === 0) {
      return staticArticles; // Fallback if no data
    }

    return data.map(transformArticle);
  } catch (err) {
    console.error('Error in fetchArticles:', err);
    return staticArticles;
  }
};

// Fetch featured articles
export const fetchFeaturedArticles = async () => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(5);

    if (error) {
      console.error('Error fetching featured articles:', error);
      return staticArticles.filter(a => a.featured);
    }

    if (!data || data.length === 0) {
      return staticArticles.filter(a => a.featured);
    }

    return data.map(transformArticle);
  } catch (err) {
    console.error('Error in fetchFeaturedArticles:', err);
    return staticArticles.filter(a => a.featured);
  }
};

// Fetch single article by ID
export const fetchArticleById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching article:', error);
      return staticArticles.find(a => a.id === parseInt(id));
    }

    return transformArticle(data);
  } catch (err) {
    console.error('Error in fetchArticleById:', err);
    return staticArticles.find(a => a.id === parseInt(id));
  }
};

// Fetch articles by category
export const fetchArticlesByCategory = async (category) => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching articles by category:', error);
      return staticArticles.filter(a => a.category === category);
    }

    if (!data || data.length === 0) {
      return staticArticles.filter(a => a.category === category);
    }

    return data.map(transformArticle);
  } catch (err) {
    console.error('Error in fetchArticlesByCategory:', err);
    return staticArticles.filter(a => a.category === category);
  }
};

// Increment save count
export const incrementArticleSaves = async (id) => {
  try {
    const { error } = await supabase.rpc('increment_article_saves', { article_id: id });
    if (error) console.error('Error incrementing saves:', error);
  } catch (err) {
    console.error('Error in incrementArticleSaves:', err);
  }
};

// Videos remain static for now
export const videos = staticVideos;
