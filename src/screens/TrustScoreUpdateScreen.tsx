import { useEffect, useState } from "react";
import { TrendingUp, Shield, Star, Award } from "lucide-react";

interface TrustScoreUpdateScreenProps {
  onFinish: () => void;
}

const TrustScoreUpdateScreen = ({ onFinish }: TrustScoreUpdateScreenProps) => {
  const [animatedScore, setAnimatedScore] = useState(92);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(94);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-5 pb-28 min-h-[70vh]">
      {/* Header */}
      <div className="py-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-4 animate-bounce-in">
          <TrendingUp className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Trust Score Updated!</h1>
        <p className="text-muted-foreground mt-2">
          Your feedback helps build local trust
        </p>
      </div>

      {/* Worker Trust Score Card */}
      <div className="bg-card rounded-2xl p-6 border border-border mb-6">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Rajesh"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-foreground">Rajesh Kumar</h3>
            <p className="text-sm text-muted-foreground">Koramangala Area</p>
          </div>
        </div>

        {/* Score Display */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              {/* Background circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * animatedScore) / 100}
                  className="text-primary transition-all duration-1000 ease-out"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-foreground">{animatedScore}</span>
                <span className="text-sm text-muted-foreground">Trust Score</span>
              </div>
            </div>
          </div>

          {/* Score increase indicator */}
          <div className="absolute top-2 right-2 bg-success-light px-3 py-1 rounded-full flex items-center gap-1 animate-bounce-in">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">+2</span>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-card rounded-xl p-3 border border-border text-center">
          <Award className="w-6 h-6 text-accent mx-auto mb-1" />
          <p className="text-lg font-bold text-foreground">231</p>
          <p className="text-xs text-muted-foreground">Total Jobs</p>
        </div>
        <div className="bg-card rounded-xl p-3 border border-border text-center">
          <Star className="w-6 h-6 text-accent mx-auto mb-1" />
          <p className="text-lg font-bold text-foreground">4.8</p>
          <p className="text-xs text-muted-foreground">Avg Rating</p>
        </div>
        <div className="bg-card rounded-xl p-3 border border-border text-center">
          <Shield className="w-6 h-6 text-primary mx-auto mb-1" />
          <p className="text-lg font-bold text-foreground">96%</p>
          <p className="text-xs text-muted-foreground">On-time</p>
        </div>
      </div>

      {/* Thank You Note */}
      <div className="bg-primary-light rounded-2xl p-4 mb-6">
        <p className="text-center text-foreground">
          Thank you for helping build trust in your local community! 🙏
        </p>
      </div>

      {/* Finish Button */}
      <div className="fixed bottom-20 left-0 right-0 px-5">
        <div className="max-w-[400px] mx-auto">
          <button onClick={onFinish} className="action-button shadow-xl">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustScoreUpdateScreen;
