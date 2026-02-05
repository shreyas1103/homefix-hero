import { Camera } from "lucide-react";

interface ServiceCompletedScreenProps {
  onProceed: () => void;
}

const ServiceCompletedScreen = ({ onProceed }: ServiceCompletedScreenProps) => {
  return (
    <div className="px-5 pb-28">
      {/* Header */}
      <div className="py-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-success flex items-center justify-center mb-4 animate-bounce-in">
          <span className="text-4xl">📸</span>
        </div>
        <h1 className="text-xl font-bold text-foreground">Work Completed!</h1>
        <p className="text-sm text-muted-foreground mt-1">Worker has uploaded job photos</p>
      </div>

      {/* Before & After Photos */}
      <div className="bg-card rounded-2xl p-4 border border-border">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          Before & After
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2 text-center">Before</p>
            <div className="aspect-square rounded-xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
                alt="Before"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2 text-center">After</p>
            <div className="aspect-square rounded-xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=300&fit=crop"
                alt="After"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Work Summary */}
      <div className="mt-6 bg-card rounded-2xl p-4 border border-border">
        <h3 className="font-semibold text-foreground mb-3">Work Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service</span>
            <span className="text-foreground">Switch Repair</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Duration</span>
            <span className="text-foreground">45 mins</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Worker</span>
            <span className="text-foreground">Rajesh Kumar</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-5">
        <div className="max-w-[400px] mx-auto">
          <button onClick={onProceed} className="action-button shadow-xl">
            Review & Release Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCompletedScreen;
