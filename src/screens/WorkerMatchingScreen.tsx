import { useEffect, useState } from "react";
import { Loader2, MapPin } from "lucide-react";
import WorkerCard from "../components/WorkerCard";

interface WorkerMatchingScreenProps {
  isUrgent?: boolean;
  onWorkerFound: () => void;
}

const WorkerMatchingScreen = ({ isUrgent, onWorkerFound }: WorkerMatchingScreenProps) => {
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    // VIP queue is faster
    const timer = setTimeout(() => {
      setSearching(false);
    }, isUrgent ? 1500 : 2500);
    return () => clearTimeout(timer);
  }, [isUrgent]);

  return (
    <div className="px-5 pb-28">
      {/* Header */}
      <div className="py-6 text-center">
        <h1 className="text-xl font-bold text-foreground">
          {searching ? "Finding Nearby Worker..." : "Worker Found! 🎉"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {searching 
            ? (isUrgent ? "VIP Priority matching in progress" : "Matching you with verified professionals")
            : "A verified worker is ready to help"
          }
        </p>
        {isUrgent && searching && (
          <span className="vip-badge mt-2 inline-flex">⚡ VIP Queue Active</span>
        )}
      </div>

      {searching ? (
        <div className="flex flex-col items-center justify-center py-16">
          {/* Animated Search */}
          <div className="relative w-40 h-40">
            <div className={`absolute inset-0 rounded-full border-4 ${isUrgent ? 'border-accent/20' : 'border-primary/20'} animate-ping`} />
            <div className={`absolute inset-4 rounded-full border-4 ${isUrgent ? 'border-accent/30' : 'border-primary/30'} animate-ping`} style={{ animationDelay: "0.5s" }} />
            <div className={`absolute inset-8 rounded-full border-4 ${isUrgent ? 'border-accent/40' : 'border-primary/40'} animate-ping`} style={{ animationDelay: "1s" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-16 h-16 rounded-full ${isUrgent ? 'bg-gradient-to-r from-accent to-warning' : 'bg-primary'} flex items-center justify-center`}>
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mt-8 text-center max-w-xs">
            {isUrgent 
              ? "Priority scanning for nearest available worker..."
              : "Scanning for nearest available worker..."
            }
          </p>

          {/* Fake progress */}
          <div className="w-full max-w-xs mt-6">
            <div className={`h-2 rounded-full ${isUrgent ? 'bg-accent/20' : 'bg-primary/20'}`}>
              <div className={`h-2 rounded-full ${isUrgent ? 'bg-accent' : 'bg-primary'} animate-pulse`} style={{ width: "60%" }} />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              {isUrgent ? '3 VIP workers nearby' : '5 workers nearby'}
            </p>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <WorkerCard
            name="Rajesh Kumar"
            photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            trustScore={4.8}
            onTimePercent={96}
            distance="1.2 km"
            experience="5 yrs"
            jobs={230}
          />

          {/* ETA Card */}
          <div className={`mt-4 ${isUrgent ? 'bg-accent-light border-accent/20' : 'bg-primary-light border-primary/20'} rounded-2xl p-4 border`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${isUrgent ? 'text-accent' : 'text-primary'} font-medium`}>Estimated Arrival</p>
                <p className="text-2xl font-bold text-foreground">{isUrgent ? '10-15 mins' : '25-30 mins'}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${isUrgent ? 'bg-accent/20' : 'bg-primary/20'} flex items-center justify-center`}>
                <span className="text-2xl">🚴</span>
              </div>
            </div>
          </div>

          {/* Accept Button */}
          <div className="fixed bottom-20 left-0 right-0 px-5">
            <div className="max-w-[400px] mx-auto">
              <button onClick={onWorkerFound} className={`action-button shadow-xl ${isUrgent ? 'bg-gradient-to-r from-accent to-warning' : ''}`}>
                Accept Worker
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerMatchingScreen;
