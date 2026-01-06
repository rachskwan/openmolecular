import { ArrowLeft, MessageCircle, ThumbsUp, Clock, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { communityThreads } from '../../data/community';

export default function ThreadDetailPage({ threadId, onBack, onNavigate }) {
  const thread = communityThreads.find(t => t.id === threadId);

  if (!thread) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Thread not found</h1>
        <button
          onClick={onBack}
          className="text-teal-600 hover:text-teal-700 font-medium"
        >
          Go back
        </button>
      </div>
    );
  }

  // Simple markdown-like rendering for bold text
  const renderContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Handle bold text with **
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const rendered = parts.map((part, partIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      // Handle list items
      if (line.startsWith('- ')) {
        return (
          <li key={idx} className="ml-4 list-disc">
            {rendered.slice(1).join('').replace(/^- /, '')}
          </li>
        );
      }

      // Handle numbered lists
      if (/^\d+\.\s/.test(line)) {
        return (
          <li key={idx} className="ml-4 list-decimal">
            {rendered}
          </li>
        );
      }

      // Empty lines become breaks
      if (line.trim() === '') {
        return <br key={idx} />;
      }

      return <p key={idx} className="mb-2">{rendered}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Community</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Thread */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
          {/* Thread Header */}
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                {thread.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-slate-900">{thread.author}</span>
                  <span className="text-sm text-slate-500">{thread.date}</span>
                  {thread.featured && (
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                  {thread.category}
                </span>
              </div>
            </div>
          </div>

          {/* Thread Title & Content */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">{thread.title}</h1>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              {renderContent(thread.content)}
            </div>
          </div>

          {/* Thread Actions */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span className="text-sm font-medium">{thread.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{thread.replies} replies</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors">
                <Bookmark className="w-5 h-5" />
                <span className="text-sm">Save</span>
              </button>
              <button className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Replies Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            {thread.threadReplies?.length || 0} Replies
          </h2>

          <div className="space-y-4">
            {thread.threadReplies?.map((reply) => (
              <div
                key={reply.id}
                className={`bg-white rounded-xl p-5 shadow-sm border ${
                  reply.isAuthor ? 'border-teal-200 bg-teal-50/30' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0 ${
                    reply.isAuthor
                      ? 'bg-gradient-to-br from-teal-500 to-emerald-600'
                      : 'bg-gradient-to-br from-slate-400 to-slate-500'
                  }`}>
                    {reply.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-slate-900">{reply.author}</span>
                      {reply.isAuthor && (
                        <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs font-medium">
                          OP
                        </span>
                      )}
                      <span className="text-sm text-slate-500">{reply.date}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{reply.content}</p>
                    <div className="mt-3 flex items-center gap-4">
                      <button className="flex items-center gap-1 text-slate-500 hover:text-teal-600 transition-colors text-sm">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{reply.likes}</span>
                      </button>
                      <button className="text-slate-500 hover:text-teal-600 transition-colors text-sm">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reply Input */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <h3 className="font-medium text-slate-900 mb-3">Add a Reply</h3>
          <textarea
            placeholder="Share your thoughts..."
            className="w-full p-4 border border-slate-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            rows={4}
          />
          <div className="mt-3 flex justify-end">
            <button className="px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors">
              Post Reply
            </button>
          </div>
        </div>

        {/* Related Threads */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Discussions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityThreads
              .filter(t => t.id !== thread.id && t.category === thread.category)
              .slice(0, 2)
              .map(relatedThread => (
                <button
                  key={relatedThread.id}
                  onClick={() => onNavigate('thread', relatedThread.id)}
                  className="bg-white rounded-xl p-4 text-left shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                      {relatedThread.category}
                    </span>
                    <span className="text-xs text-slate-500">{relatedThread.date}</span>
                  </div>
                  <h4 className="font-medium text-slate-900 mb-2 line-clamp-2">
                    {relatedThread.title}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{relatedThread.author}</span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" /> {relatedThread.replies}
                    </span>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
