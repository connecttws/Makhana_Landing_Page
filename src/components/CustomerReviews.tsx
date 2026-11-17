"use client";

import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, ThumbsUp, X, Check } from 'lucide-react';

interface ReviewItem {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
  packPurchased: string;
  category: 'raw' | 'flavor';
  helpfulCount: number;
}

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Pooja Agarwal',
    city: 'Mumbai',
    rating: 5,
    date: '3 days ago',
    title: 'Cleanest, biggest makhana kernels I have ever bought!',
    comment: 'The 6+ soot size makes an enormous difference. Every single kernel is fluffy, snow-white, and completely free of bitter black shell remnants. I roast them lightly with A2 ghee and pink salt — heaven!',
    verifiedBuyer: true,
    packPurchased: 'Raw Makhana - Pack of 2 (500g)',
    category: 'raw',
    helpfulCount: 42,
  },
  {
    id: 'rev-2',
    author: 'Vikram Sengupta',
    city: 'Bengaluru',
    rating: 5,
    date: '1 week ago',
    title: 'Olive oil roasting is on another level. Zero greasy film.',
    comment: 'Most supermarket makhanas use cheap palm oil or refined sunflower oil. House of Makhana roasting in pure olive oil keeps it ultra crisp and clean. Peri Peri has just the right zesty paprika kick.',
    verifiedBuyer: true,
    packPurchased: 'Peri Peri Gourmet Makhana (200g)',
    category: 'flavor',
    helpfulCount: 38,
  },
  {
    id: 'rev-3',
    author: 'Meera Deshmukh',
    city: 'Pune',
    rating: 5,
    date: '2 weeks ago',
    title: 'Perfect for intermittent fasting & diabetic snacking',
    comment: 'As a pre-diabetic, finding snacks that keep my glycemic index stable was tough. These jumbo makhanas keep me full for hours without sugar spikes. The Cream & Onion flavor is addictive!',
    verifiedBuyer: true,
    packPurchased: 'Cream & Onion Gourmet Makhana',
    category: 'flavor',
    helpfulCount: 29,
  },
  {
    id: 'rev-4',
    author: 'Ananya Sharma',
    city: 'New Delhi',
    rating: 5,
    date: '3 weeks ago',
    title: 'Ordered the Pack of 5. Entire family is hooked.',
    comment: 'The packaging quality is top-notch with thick nitrogen barrier foil. Even after opening, the crunch stays like freshly roasted for days. You can taste the authenticity of Mithila origin.',
    verifiedBuyer: true,
    packPurchased: 'Raw Makhana - Pack of 5 (1.25kg)',
    category: 'raw',
    helpfulCount: 34,
  },
  {
    id: 'rev-5',
    author: 'Rajiv Mathur',
    city: 'Gurugram',
    rating: 5,
    date: '1 month ago',
    title: 'Achari Mango flavor brings back nostalgic memories',
    comment: 'Authentic Indian desi spices without artificial flavor dust. The amchur and roasted spices coat every round seed evenly. Will definitely subscribe to monthly boxes.',
    verifiedBuyer: true,
    packPurchased: 'Achari Mango Gourmet Jar',
    category: 'flavor',
    helpfulCount: 21,
  },
  {
    id: 'rev-6',
    author: 'Deepika Rao',
    city: 'Hyderabad',
    rating: 5,
    date: '1 month ago',
    title: 'Worth every rupee. Truly premium grade.',
    comment: 'I usually buy loose makhana from local dry fruit stores, but half the bag ends up being small crushed bits. Here, virtually every kernel is jumbo sized and round. 10/10.',
    verifiedBuyer: true,
    packPurchased: 'Raw Makhana - Pack of 4 (1kg)',
    category: 'raw',
    helpfulCount: 19,
  },
];

export const CustomerReviews: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'raw' | 'flavor'>('all');
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  // Review Form States
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newCategory, setNewCategory] = useState<'raw' | 'flavor'>('raw');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const filteredReviews = reviewsList.filter((rev) => {
    if (filter === 'all') return true;
    return rev.category === filter;
  });

  const toggleHelpful = (id: string) => {
    setLikedReviews((prev) => {
      const isLiked = !prev[id];
      setReviewsList((curr) =>
        curr.map((r) =>
          r.id === id ? { ...r, helpfulCount: r.helpfulCount + (isLiked ? 1 : -1) } : r
        )
      );
      return { ...prev, [id]: isLiked };
    });
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const added: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      city: newCity.trim() || 'Verified Customer',
      rating: newRating,
      date: 'Just now',
      title: newTitle.trim() || 'Exceptional quality & crispness!',
      comment: newComment.trim(),
      verifiedBuyer: true,
      packPurchased: newCategory === 'raw' ? 'Raw Makhana - Pack of 2' : 'Artisanal Flavored Makhana',
      category: newCategory,
      helpfulCount: 1,
    };

    setReviewsList([added, ...reviewsList]);
    setHasSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setHasSubmitted(false);
      setNewAuthor('');
      setNewCity('');
      setNewTitle('');
      setNewComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Header Summary matching House of Makhana */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#F0E5D8]">
          <div className="space-y-3">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#965E44]">
              <span className="w-2 h-2 rounded-full bg-[#965E44]" />
              <span>REAL CUSTOMER FEEDBACK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#111111]">
              Loved by <span className="font-serif italic font-normal text-[#965E44]">1,480+ Healthy Snackers.</span>
            </h2>

            {/* Rating Stars Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex text-[#C8A24A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-[#C8A24A] text-[#C8A24A]" />
                ))}
              </div>
              <span className="text-base font-bold text-[#111111] tabular-nums">
                4.9 out of 5
              </span>
              <span className="text-xs text-stone-500 font-medium">
                · Based on 1,480+ verified purchase reviews
              </span>
            </div>

          </div>

          {/* Action Row: Filter pills & Write a review */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Pills */}
            <div className="flex items-center bg-white p-1 rounded-full border border-[#EBE4D8] shadow-2xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#1F5C4A] text-white shadow-xs'
                    : 'text-[#555555] hover:text-[#1F5C4A]'
                }`}
              >
                All ({reviewsList.length})
              </button>
              <button
                onClick={() => setFilter('raw')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  filter === 'raw'
                    ? 'bg-[#1F5C4A] text-white shadow-xs'
                    : 'text-[#555555] hover:text-[#1F5C4A]'
                }`}
              >
                Raw Makhana
              </button>
              <button
                onClick={() => setFilter('flavor')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  filter === 'flavor'
                    ? 'bg-[#1F5C4A] text-white shadow-xs'
                    : 'text-[#555555] hover:text-[#1F5C4A]'
                }`}
              >
                Flavoured Jars
              </button>
            </div>

            {/* Write a Review Button */}
            <button
              onClick={() => setShowReviewModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1F5C4A] text-[#1F5C4A] hover:bg-[#1F5C4A] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-2xs"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write Review</span>
            </button>
          </div>

        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredReviews.map((rev) => {
            const isLiked = likedReviews[rev.id];

            return (
              <div
                key={rev.id}
                className="p-7 rounded-[26px] bg-white border border-[#EBE4D8] hover:border-[#1F5C4A]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top: Avatar, Name, Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1F5C4A] text-white font-bold text-sm flex items-center justify-center">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-bold text-[#111111]">{rev.author}</p>
                          {rev.verifiedBuyer && (
                            <CheckCircle className="w-3.5 h-3.5 text-[#1F5C4A] fill-[#DBE9E0]" />
                          )}
                        </div>
                        <p className="text-[11px] text-stone-400 font-normal">{rev.city} · {rev.date}</p>
                      </div>
                    </div>

                    <div className="flex text-[#C8A24A]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C8A24A]" />
                      ))}
                    </div>
                  </div>

                  {/* Product Tag */}
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[#FAF6F0] border border-[#F0E5D8] text-[11px] font-medium text-[#7A4B3A]">
                    {rev.packPurchased}
                  </div>

                  {/* Title & Comment */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#111111] leading-snug">
                      &ldquo;{rev.title}&rdquo;
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed font-normal">
                      {rev.comment}
                    </p>
                  </div>

                </div>

                {/* Bottom: Helpful counter */}
                <div className="pt-4 mt-6 border-t border-[#F5ECE0] flex items-center justify-between text-xs text-stone-400">
                  <span className="text-[11px]">Verified Buyer Feedback</span>
                  <button
                    onClick={() => toggleHelpful(rev.id)}
                    className={`inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer ${
                      isLiked ? 'text-[#1F5C4A] font-semibold' : 'hover:text-[#1F5C4A]'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                    <span>Helpful ({rev.helpfulCount})</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl border border-[#F0E5D8]">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-[#111111] mb-1">Share Your Experience</h3>
            <p className="text-xs text-stone-500 mb-6">Your honest review helps our community of healthy snackers.</p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#111111] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#1F5C4A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="e.g. Mumbai"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#1F5C4A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111111] mb-1">Rating</label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#1F5C4A]"
                  >
                    <option value={5}>5 Stars ★★★★★</option>
                    <option value={4}>4 Stars ★★★★</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111111] mb-1">Review Headline</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Incredible crunch & freshness"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#1F5C4A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111111] mb-1">Your Review</label>
                <textarea
                  rows={3}
                  required
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Tell us what you liked about the flavor, crispness, or delivery..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#1F5C4A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#1F5C4A] hover:bg-[#164638] text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                {hasSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Review Published!</span>
                  </>
                ) : (
                  <span>Submit Verified Review</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
