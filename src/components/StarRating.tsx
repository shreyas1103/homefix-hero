import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: "sm" | "lg";
}

const StarRating = ({ rating, onRatingChange, size = "lg" }: StarRatingProps) => {
  const starSize = size === "lg" ? "w-10 h-10" : "w-6 h-6";

  return (
    <div className="flex gap-2 justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRatingChange(star)}
          className="star-button focus:outline-none"
        >
          <Star
            className={`${starSize} transition-all duration-200 ${
              star <= rating
                ? "text-accent fill-accent scale-110"
                : "text-muted-foreground/30"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
