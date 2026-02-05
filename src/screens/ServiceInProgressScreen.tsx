import { useEffect, useState } from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

interface ServiceInProgressScreenProps {
  onComplete: () => void;
}

const ServiceInProgressScreen = ({ onComplete }: ServiceInProgressScreenProps) => {
  const [status, setStatus] = useState<"arriving" | "working" | "completed">("arriving");

  useEffect(() => {
    const timer1 = setTimeout(() => setStatus("working"), 3000);
    const timer2 = setTimeout(() => setStatus("completed"), 6000);
    const timer3 = setTimeout(() => onComplete(), 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const statusConfig = {
    arriving: {
      emoji: "🚴",
      title: "Worker Arriving",
      subtitle: "Rajesh is on the way",
      color: "bg-accent",
    },
    working: {
      emoji: "🔧",
      title: "Work in Progress",
      subtitle: "Your service is being done",
      color: "bg-primary",
    },
    completed: {
      emoji: "✅",
      title: "Work Completed!",
      subtitle: "Please verify the work",
      color: "bg-success",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="px-5 pb-28">
      {/* Status Header */}
      <div className="py-6 text-center">
        <div className={`w-20 h-20 mx-auto rounded-full ${config.color} flex items-center justify-center mb-4 animate-pulse-soft`}>
          <span className="text-4xl">{config.emoji}</span>
        </div>
        <h1 className="text-xl font-bold text-foreground">{config.title}</h1>
        <p className="text-sm text-muted-foreground mt-1">{config.subtitle}</p>
      </div>

      {/* Worker Card */}
      <div className="bg-card rounded-2xl p-4 border border-border">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Rajesh"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Rajesh Kumar</h3>
            <p className="text-sm text-muted-foreground">Electrician</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Live Status Updates */}
      <div className="mt-6 bg-card rounded-2xl p-4 border border-border">
        <h3 className="font-semibold text-foreground mb-4">Live Updates</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-success-light flex items-center justify-center shrink-0">
              <span className="text-sm">✓</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Worker Assigned</p>
              <p className="text-xs text-muted-foreground">2 mins ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full ${status === "arriving" ? "bg-accent-light" : "bg-success-light"} flex items-center justify-center shrink-0`}>
              <span className="text-sm">{status === "arriving" ? "🚴" : "✓"}</span>
            </div>
            <div>
              <p className="font-medium text-foreground">On the way</p>
              <p className="text-xs text-muted-foreground">
                {status === "arriving" ? "Arriving in 5 mins" : "Arrived"}
              </p>
            </div>
          </div>
          {(status === "working" || status === "completed") && (
            <div className="flex items-start gap-3 animate-fade-in">
              <div className={`w-8 h-8 rounded-full ${status === "working" ? "bg-primary-light" : "bg-success-light"} flex items-center justify-center shrink-0`}>
                <span className="text-sm">{status === "working" ? "🔧" : "✓"}</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Work Started</p>
                <p className="text-xs text-muted-foreground">
                  {status === "working" ? "In progress..." : "Completed"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Location Card */}
      <div className="mt-6 bg-card rounded-2xl p-4 border border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground">Service Location</p>
            <p className="text-sm text-muted-foreground">Koramangala, 5th Block</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInProgressScreen;
