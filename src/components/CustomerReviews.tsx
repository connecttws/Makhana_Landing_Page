"use client";

import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, Sparkles } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/product-data';
import { CustomerReview } from '../types';

export const CustomerReviews: React.FC = () => {
  const [filterRating, setFilterRating] = useState<'all' | '5' | '4'>('all');
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const filteredReviews = reviewsList.filter((rev) => {
    if (filterRating === 'all') return true;
    return rev.rating.toString() === filterRating;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const added: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      city: newCity.trim() || 'Verified Customer',
      rating: newRating,
      date: 'Just now',
      title: newTitle.trim() || 'Crispy & delicious!',
      comment: newComment.trim(),
      verifiedBuyer: true,
      packPurchased: 'Twin Snack Duo (500g)',
      flavor: 'Himalayan Pink Salt & Olive Oil',
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
    <section id="reviews" className="py-16 lg:py-24 bg-[#FFF8F1] border-b border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#DBE9E0] text-[#1F5C4A] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#1F5C4A]" />
              <span>Real Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A] mt-1">
              Loved by 1,480+ Healthy Snackers
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex text-[#FF7A00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                ))}
              </div>
              <span className="text-lg font-black text-[#1A1A1A] tabular-nums">
                4.9 out of 5
              </span>
              <span className="text-sm text-[#666666] font-medium">· 98% recommend to friends</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Filter Segmented Control */}
            <div className="flex items-center bg-white p-1 rounded-full border border-[#F0E5D8] shadow-xs">
              <button
                onClick={() => setFilterRating('all')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  filterRating === 'all'
                    ? 'bg-[#1F5C4A] text-white'
                    : 'text-[#555555] hover:text-[#1F5C4A]'
                }`}
              >
                All ({reviewsList.length})
              </button>
              <button
                onClick={() => setFilterRating('5')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  filterRating === '5'
                    ? 'bg-[#1F5C4A] text-white'
                    : 'text-[#555555] hover:text-[#1F5C4A]'
                }`}
              >
                5 Stars
              </button>
              <button
                onClick={() => setFilterRating('4')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  filterRating === '4'
                    ? 'bg-[#1F5C4A] text-white'
                    : 'text-[#555555] hover:text-[#1F5C4A]'
                }`}
              >
                4 Stars
              </button>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="px-5 py-2 text-xs font-extrabold text-[#1F5C4A] bg-white border-2 border-[#1F5C4A] rounded-full hover:bg-[#F0F7F4] flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors uppercase tracking-wider"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#FF7A00]" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="hom-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#FF7A00]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? 'fill-[#FF7A00] text-[#FF7A00]'
                            : 'fill-stone-200 text-stone-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#888888] font-medium">{rev.date}</span>
                </div>

                <h4 className="text-base font-extrabold text-[#1A1A1A]">
                  &ldquo;{rev.title}&rdquo;
                </h4>

                <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed font-medium">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#F5ECE0] flex items-center justify-between text-xs text-[#666666]">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#1A1A1A]">{rev.author}</span>
                  <span>·</span>
                  <span>{rev.city}</span>
                  {rev.verifiedBuyer && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#1F5C4A] ml-1">
                      <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" /> Verified Buyer
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-[#FF7A00] font-bold hidden sm:inline">
                  {rev.packPurchased}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white max-w-md w-full rounded-[24px] p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-[#1A1A1A]">
                Share Your Experience
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-stone-400 hover:text-stone-600 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {hasSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle className="w-12 h-12 text-[#1F5C4A] mx-auto" />
                <p className="text-base font-black text-[#1A1A1A]">Thank you for your feedback!</p>
                <p className="text-xs text-[#666666] font-medium">Your verified review has been published.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-[#222222] mb-1">Your Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setNewRating(num)}
                        className={`p-2 rounded-xl border cursor-pointer ${
                          num <= newRating
                            ? 'bg-[#FFE8D6] border-[#FFB872] text-[#FF7A00]'
                            : 'bg-stone-50 border-stone-200 text-stone-400'
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#222222] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shalini Roy"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 outline-none focus:border-[#1F5C4A] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#222222] mb-1">City</label>
                    <input
                      type="text"
                      placeholder="e.g. Bengaluru"
                      value={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 outline-none focus:border-[#1F5C4A] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#222222] mb-1">Review Headline</label>
                  <input
                    type="text"
                    placeholder="e.g. Crunchiest makhana I've ever had!"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 outline-none focus:border-[#1F5C4A] font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#222222] mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell other snackers about the taste, crunch, and packaging..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 outline-none focus:border-[#1F5C4A] font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1F5C4A] hover:bg-[#164638] text-white font-extrabold uppercase tracking-wider rounded-full shadow-md cursor-pointer transition-colors"
                >
                  Post Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
