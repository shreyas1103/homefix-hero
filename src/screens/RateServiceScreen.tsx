import { useState } from "react";
import StarRating from "../components/StarRating";

interface RateServiceScreenProps {
  onSubmit: () => void;
}

const RateServiceScreen = ({ onSubmit }: RateServiceScreenProps) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const quickReviews = [
    "Professional work 👍",
    "Very punctual ⏰",
    "Clean and tidy 🧹",
    "Great communication 💬",
    "Fair pricing 💰",
  ];

  return (
    <div className="px-5 pb-28">
      {/* Header */}
      <div className="py-8 text-center">
        <h1 className="text-2xl font-bold text-foreground">Rate Your Experience</h1>
        <p className="text-muted-foreground mt-2">Your feedback helps improve our service</p>
      </div>

      {/* Worker Info */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
          alt="Rajesh"
          className="w-20 h-20 rounded-full object-cover border-4 border-primary-light"
        />
        <h3 className="font-semibold text-foreground mt-3">Rajesh Kumar</h3>
        <p className="text-sm text-muted-foreground">Electrician • Switch Repair</p>
      </div>

      {/* Star Rating */}
      <div className="bg-card rounded-2xl p-6 border border-border mb-6">
        <p className="text-center text-foreground font-medium mb-4">
          How was your experience?
        </p>
        <StarRating rating={rating} onRatingChange={setRating} />
        {rating > 0 && (
          <p className="text-center text-primary font-medium mt-3 animate-fade-in">
            {rating === 5 ? "Excellent! 🌟" : rating >= 4 ? "Great! 👍" : rating >= 3 ? "Good 😊" : "Could be better 🤔"}
          </p>
        )}
      </div>

      {/* Quick Reviews */}
      <div className="mb-6">
        <p className="text-sm font-medium text-foreground mb-3">Quick feedback</p>
        <div className="flex flex-wrap gap-2">
          {quickReviews.map((item) => (
            <button
              key={item}
              onClick={() => setReview(review.includes(item) ? review.replace(item, "").trim() : `${review} ${item}`.trim())}
              className={`px-3 py-2 rounded-full text-sm transition-all ${
                review.includes(item)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <div className="mb-6">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Add a personal note (optional)..."
          className="issue-textarea min-h-[100px]"
        />
      </div>

      {/* Submit */}
      <div className="fixed bottom-20 left-0 right-0 px-5">
        <div className="max-w-[400px] mx-auto">
          <button
            onClick={onSubmit}
            disabled={rating === 0}
            className="action-button shadow-xl disabled:opacity-50"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateServiceScreen;
