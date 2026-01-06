import { useState } from 'react';
import { ArrowLeft, Send, Image, Link, AtSign, Hash, AlertCircle, CheckCircle } from 'lucide-react';
import { communityCategories } from '../../data/community';

const categories = communityCategories.filter(cat => cat !== 'All');

export default function NewDiscussionPage({ onBack, onNavigate, onSubmitThread }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Please enter a title for your discussion';
    } else if (title.length < 10) {
      newErrors.title = 'Title should be at least 10 characters';
    }
    if (!content.trim()) {
      newErrors.content = 'Please enter some content for your discussion';
    } else if (content.length < 30) {
      newErrors.content = 'Content should be at least 30 characters';
    }
    if (!category) {
      newErrors.category = 'Please select a category';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Submit the thread
    onSubmitThread({
      title,
      content,
      preview: content.slice(0, 150) + (content.length > 150 ? '...' : ''),
      category,
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Discussion Posted!</h2>
          <p className="text-slate-600 mb-6">
            Your discussion has been submitted successfully. It will appear in the community feed shortly.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => onNavigate('community')}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors"
            >
              View Community
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setTitle('');
                setContent('');
                setCategory('');
              }}
              className="w-full py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Start Another Discussion
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Community</span>
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Start a Discussion</h1>
          <p className="text-slate-600">
            Share your questions, experiences, or insights with the community
          </p>
        </div>

        {/* Guidelines Card */}
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-teal-900 mb-3">Community Guidelines</h3>
          <ul className="space-y-2 text-sm text-teal-800">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Be respectful and constructive in your discussions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Share personal experiences, but avoid giving medical advice</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Use descriptive titles that summarize your topic</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Cite sources when sharing research or statistics</span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Selection */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setCategory(cat);
                    setErrors(prev => ({ ...prev, category: null }));
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    category === cat
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {errors.category && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.category}
              </p>
            )}
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-slate-900 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setErrors(prev => ({ ...prev, title: null }));
              }}
              placeholder="What's your discussion about?"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                errors.title ? 'border-red-300 bg-red-50' : 'border-slate-200'
              }`}
              maxLength={200}
            />
            <div className="flex justify-between mt-2">
              {errors.title ? (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.title}
                </p>
              ) : (
                <p className="text-sm text-slate-500">Write a clear, descriptive title</p>
              )}
              <span className="text-sm text-slate-400">{title.length}/200</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-slate-900 mb-2">
              Content <span className="text-red-500">*</span>
            </label>
            <div className={`border rounded-xl overflow-hidden transition-all ${
              errors.content ? 'border-red-300' : 'border-slate-200 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent'
            }`}>
              <textarea
                id="content"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  setErrors(prev => ({ ...prev, content: null }));
                }}
                placeholder="Share your thoughts, questions, or experiences...

You can use **bold text** for emphasis.

Tips for great discussions:
- Provide context and background
- Ask specific questions
- Share what you've already tried or learned"
                rows={10}
                className={`w-full px-4 py-3 focus:outline-none resize-none ${
                  errors.content ? 'bg-red-50' : ''
                }`}
              />

              {/* Formatting toolbar */}
              <div className="bg-slate-50 border-t border-slate-200 px-4 py-2 flex items-center gap-2">
                <button
                  type="button"
                  className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
                  title="Add image"
                >
                  <Image className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
                  title="Add link"
                >
                  <Link className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
                  title="Mention user"
                >
                  <AtSign className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded transition-colors"
                  title="Add tag"
                >
                  <Hash className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              {errors.content ? (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.content}
                </p>
              ) : (
                <p className="text-sm text-slate-500">Markdown formatting supported</p>
              )}
              <span className="text-sm text-slate-400">{content.length} characters</span>
            </div>
          </div>

          {/* Preview Card */}
          {(title || content) && (
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Preview</h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                  You
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-slate-900">You</span>
                    <span className="text-sm text-slate-500">Just now</span>
                    {category && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">
                        {category}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {title || 'Your title will appear here...'}
                  </h4>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {content || 'Your content will appear here...'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 py-3 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Post Discussion
                </>
              )}
            </button>
          </div>
        </form>

        {/* Tips Section */}
        <div className="mt-12 bg-slate-100 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Tips for Great Discussions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-slate-900 mb-2">Be Specific</h4>
              <p className="text-sm text-slate-600">
                Instead of "Help with supplements", try "Comparing NMN vs NR for NAD+ support - which has better bioavailability?"
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-slate-900 mb-2">Share Context</h4>
              <p className="text-sm text-slate-600">
                Include relevant details like your goals, what you've tried, and any test results you're referencing.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-slate-900 mb-2">Ask Questions</h4>
              <p className="text-sm text-slate-600">
                End your post with specific questions to encourage helpful responses from the community.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-slate-900 mb-2">Cite Sources</h4>
              <p className="text-sm text-slate-600">
                When sharing research or data, include links to studies or mention where you found the information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
