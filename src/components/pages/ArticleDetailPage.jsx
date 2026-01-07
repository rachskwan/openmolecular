import { ArrowLeft, Clock, User, Calendar, Bookmark, BookmarkCheck, Lock, Share2, ChevronRight, MessageCircle, Send, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { articles } from '../../data/articles';

export default function ArticleDetailPage({ articleId, onBack, onNavigate, toggleSaveItem, isItemSaved, onGlossaryClick, onUserClick, getContentComments, addContentComment, getContentThreadId }) {
  const article = articles.find(a => a.id === articleId);
  const [newComment, setNewComment] = useState('');

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Article not found</h1>
        <button
          onClick={onBack}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          Go back
        </button>
      </div>
    );
  }

  const isSaved = isItemSaved(article.id, 'articles');

  // Function to render markdown-like content
  const renderContent = (content) => {
    // Split by double newlines for paragraphs
    const paragraphs = content.split('\n\n');

    return paragraphs.map((paragraph, idx) => {
      // Check for bullet points
      if (paragraph.includes('\n- ')) {
        const lines = paragraph.split('\n');
        const intro = lines[0];
        const bullets = lines.slice(1).filter(l => l.startsWith('- '));

        return (
          <div key={idx} className="mb-4">
            {intro && <p className="text-slate-700 leading-relaxed mb-2">{intro}</p>}
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              {bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="leading-relaxed">{bullet.replace('- ', '')}</li>
              ))}
            </ul>
          </div>
        );
      }

      // Check for numbered lists
      if (/^\d+\./.test(paragraph)) {
        const items = paragraph.split('\n').filter(l => /^\d+\./.test(l));
        return (
          <ol key={idx} className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
            {items.map((item, iIdx) => (
              <li key={iIdx} className="leading-relaxed">{item.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        );
      }

      // Render bold text marked with **
      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={idx} className="text-slate-700 leading-relaxed mb-4">
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleSaveItem(article, 'articles')}
              className={`p-2 rounded-lg transition-colors ${
                isSaved ? 'bg-teal-100 text-teal-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
            <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Category & Level badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              article.level === 'Beginner' ? 'bg-green-100 text-green-700' :
              article.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-700'
            }`}>
              {article.level}
            </span>
            {article.premium && (
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium flex items-center gap-1">
                <Lock className="w-3 h-3" /> Premium
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <button
              onClick={() => onUserClick?.(article.author)}
              className="flex items-center gap-2 hover:text-teal-600 transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="font-medium">{article.author}</span>
            </button>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-10">
          <p className="text-xl text-slate-700 leading-relaxed">
            {article.introduction}
          </p>
        </div>

        {/* Sections */}
        {article.sections?.map((section, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {section.title}
            </h2>
            <div className="prose prose-slate max-w-none">
              {renderContent(section.content)}
            </div>
          </section>
        ))}

        {/* Key Takeaways */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-10">
            <h3 className="text-lg font-bold text-teal-900 mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {idx + 1}
                  </span>
                  <span className="text-teal-800">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Terms */}
        {article.relatedTerms && article.relatedTerms.length > 0 && (
          <div className="border-t border-slate-200 pt-8 mb-10">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Glossary Terms</h3>
            <div className="flex flex-wrap gap-2">
              {article.relatedTerms.map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => onGlossaryClick && onGlossaryClick(term)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {article.authorBio && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <button
                onClick={() => onUserClick?.(article.author)}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0 hover:ring-2 hover:ring-teal-300 hover:ring-offset-2 transition-all"
              >
                {article.author.split(' ').map(n => n[0]).join('')}
              </button>
              <div>
                <button
                  onClick={() => onUserClick?.(article.author)}
                  className="font-semibold text-slate-900 mb-1 hover:text-teal-600 transition-colors text-left"
                >
                  {article.author}
                </button>
                <p className="text-slate-600 text-sm">{article.authorBio}</p>
              </div>
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-semibold text-slate-900">Discussion</h3>
              {getContentComments?.('article', article.id).length > 0 && (
                <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                  {getContentComments('article', article.id).length}
                </span>
              )}
            </div>
            {getContentThreadId?.('article', article.id) && (
              <button
                onClick={() => onNavigate('thread', getContentThreadId('article', article.id))}
                className="flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                View full discussion <ExternalLink className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Comment Input */}
          <div className="mb-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                You
              </div>
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts on this article..."
                  className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => {
                      if (newComment.trim()) {
                        addContentComment?.('article', article.id, article.title, newComment);
                        setNewComment('');
                      }
                    }}
                    disabled={!newComment.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          {getContentComments?.('article', article.id).length > 0 ? (
            <div className="space-y-4">
              {getContentComments('article', article.id).slice(0, 5).map((comment, idx) => (
                <div key={comment.id || idx} className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                    {comment.avatar || comment.author?.slice(0, 2) || 'U'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-slate-900">{comment.author || 'Anonymous'}</span>
                      <span className="text-sm text-slate-500">{comment.date || 'Just now'}</span>
                    </div>
                    <p className="text-slate-700 text-sm">{comment.content}</p>
                  </div>
                </div>
              ))}
              {getContentComments('article', article.id).length > 5 && (
                <button
                  onClick={() => onNavigate('thread', getContentThreadId('article', article.id))}
                  className="w-full py-3 text-center text-teal-600 hover:text-teal-700 font-medium text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  View all {getContentComments('article', article.id).length} comments in Community
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-8 bg-slate-50 rounded-lg">
              <MessageCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-500 text-sm">No comments yet. Be the first to share your thoughts!</p>
            </div>
          )}
        </div>
      </article>

      {/* Related Articles */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Continue Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map(relatedArticle => (
                <button
                  key={relatedArticle.id}
                  onClick={() => onNavigate('article', relatedArticle.id)}
                  className="bg-white rounded-xl p-5 text-left shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      relatedArticle.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      relatedArticle.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {relatedArticle.level}
                    </span>
                    <span className="text-slate-500 text-sm">{relatedArticle.duration}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2 line-clamp-2">{relatedArticle.title}</h4>
                  <div className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                    Read article <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
