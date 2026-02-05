import { Check, Star, Clock, MapPin } from "lucide-react";
import TrustBadge from "./TrustBadge";

interface WorkerCardProps {
  name: string;
  photo: string;
  trustScore: number;
  onTimePercent: number;
  distance: string;
  experience: string;
  jobs: number;
}

const WorkerCard = ({
  name,
  photo,
  trustScore,
  onTimePercent,
  distance,
  experience,
  jobs
}: WorkerCardProps) => {
  return (
    <div className="worker-card animate-scale-in">
      <div className="flex items-start gap-4">
        {/* Worker Photo */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-muted">
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Verified Badge */}
          <div className="absolute -bottom-1 -right-1 verified-tick">
            <Check className="w-3 h-3" />
          </div>
        </div>

        {/* Worker Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          </div>

          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {distance}
            </span>
            <span>•</span>
            <span>{experience} exp</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            <TrustBadge type="verified" text="Verified" />
            <TrustBadge type="on-time" text={`${onTimePercent}% on-time`} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="font-bold text-foreground">{trustScore}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">Trust Score</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-bold text-foreground">{jobs}+</span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">Jobs Done</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <span className="font-bold text-foreground">{experience}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">Experience</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
