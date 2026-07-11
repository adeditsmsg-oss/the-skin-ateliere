"use client";

import React, { useState } from "react";
import { Star, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function GoogleReviewManager() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const googleReviewLink = "https://search.google.com/local/writereview?placeid=ChIJvfuNTQBbHToRvXx/AGoeZKc";
  const ownerWhatsApp = "919134161165";

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    if (rating >= 4) {
      // Redirect to Google review page
      window.open(googleReviewLink, "_blank");
      setIsSubmitted(true);
    } else {
      // Reset form on selecting low star to fill private feedback
      setIsSubmitted(false);
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappText = `*Feedback from website customer*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Rating:* ${selectedRating} Stars\n` +
      `*Issue:* ${issue}\n` +
      `*Suggestions:* ${suggestion}`;
    
    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${ownerWhatsApp}?text=${encodedText}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setSelectedRating(null);
    setName("");
    setPhone("");
    setIssue("");
    setSuggestion("");
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 px-6 md:px-8 bg-bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        <div className="max-w-xl mx-auto mb-10">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Review Us
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-2 text-text-dark">
            Share Your Experience
          </h2>
          <p className="font-poppins text-sm text-text-muted mt-3">
            Amader performance check korte help korun! Tell us how your experience was at The Skin Ateliere.
          </p>
        </div>

        <div className="bg-bg-blush border border-primary-light/40 p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
          
          {!selectedRating && !isSubmitted ? (
            <div className="flex flex-col items-center">
              <span className="font-poppins text-sm text-text-dark font-medium mb-6">
                Tap a star to rate us (আমাদের রেট করুন):
              </span>
              
              {/* Star selection */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${
                        (hoverRating !== null ? star <= hoverRating : selectedRating && star <= selectedRating)
                          ? "fill-gold-star text-gold-star"
                          : "text-primary/30 fill-transparent hover:text-primary/50"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-6"
            >
              <div className="bg-primary/20 text-primary p-4 rounded-full mb-6">
                <Star className="w-10 h-10 fill-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-text-dark mb-3">
                Thank You for Your Feedback!
              </h3>
              <p className="font-poppins text-sm text-text-muted max-w-md mb-8 leading-relaxed">
                {selectedRating && selectedRating >= 4
                  ? "We have redirected you to our Google page to publish your review. We sotti appreciate your support!"
                  : "We have opened WhatsApp to securely deliver your private feedback to our management. Apnar suggestions amader improve korte help korbe."}
              </p>
              <button
                onClick={resetForm}
                className="bg-primary hover:bg-primary-dark text-white font-poppins text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-xl transition-all cursor-pointer"
              >
                Rate Again
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left"
            >
              <div className="flex items-center gap-3 bg-primary-light/20 p-4 rounded-2xl mb-6">
                <span className="font-poppins text-xs font-bold text-primary">
                  Private Feedback Form
                </span>
                <span className="font-poppins text-[10px] text-text-muted uppercase tracking-wider">
                  Rating: {selectedRating} Stars
                </span>
              </div>
              
              <p className="font-poppins text-xs md:text-sm text-text-muted mb-6 leading-relaxed">
                We are sotti sorry that your experience wasn&apos;t 5-star. Please give us feedback to let us fix it privately:
              </p>

              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="feedback-name" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                      Your Name
                    </label>
                    <input
                      id="feedback-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                      className="bg-white border border-primary-light/40 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="feedback-phone" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                      Phone Number
                    </label>
                    <input
                      id="feedback-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                      className="bg-white border border-primary-light/40 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="feedback-issue" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                    What went wrong? (কী সমস্যা হয়েছে?)
                  </label>
                  <textarea
                    id="feedback-issue"
                    rows={2}
                    required
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    placeholder="Describe the issue..."
                    className="bg-white border border-primary-light/40 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="feedback-suggestion" className="font-poppins text-[10px] uppercase tracking-wider text-text-dark font-bold mb-1">
                    Suggestions to improve
                  </label>
                  <textarea
                    id="feedback-suggestion"
                    rows={2}
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="Enter suggestions..."
                    className="bg-white border border-primary-light/40 py-2.5 px-4 rounded-xl font-poppins text-sm text-text-dark focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-poppins text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-xl flex items-center justify-center gap-2 flex-grow sm:flex-initial shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="border border-primary-light/40 hover:bg-white text-text-dark font-poppins text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
