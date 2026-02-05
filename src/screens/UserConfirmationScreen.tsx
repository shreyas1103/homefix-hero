import { ThumbsUp, ThumbsDown, Shield, AlertCircle } from "lucide-react";

interface UserConfirmationScreenProps {
  onConfirmYes: () => void;
  onConfirmNo: () => void;
}

const UserConfirmationScreen = ({ onConfirmYes, onConfirmNo }: UserConfirmationScreenProps) => {
  return (
    <div className="px-5 pb-28">
      {/* Header */}
      <div className="py-8 text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-primary-light flex items-center justify-center mb-4">
          <span className="text-5xl">🤔</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground">Work Verification</h1>
        <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
          Is the work completed to your satisfaction?
        </p>
      </div>

      {/* Info Card */}
      <div className="bg-card rounded-2xl p-4 border border-border mb-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Rajesh"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-foreground">Rajesh Kumar</h3>
            <p className="text-sm text-muted-foreground">Electrician • Switch Repair</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <button
          onClick={onConfirmYes}
          className="w-full py-5 rounded-2xl bg-success text-success-foreground font-semibold text-lg flex items-center justify-center gap-3 shadow-lg shadow-success/25 active:scale-[0.98] transition-all"
        >
          <ThumbsUp className="w-6 h-6" />
          Yes, Work is Done ✓
        </button>

        <button
          onClick={onConfirmNo}
          className="w-full py-5 rounded-2xl bg-card border-2 border-destructive text-destructive font-semibold text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
        >
          <ThumbsDown className="w-6 h-6" />
          No, There's an Issue
        </button>
      </div>

      {/* Trust Note */}
      <div className="mt-8 bg-primary-light rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Your Confirmation Matters</p>
            <p className="text-sm text-muted-foreground mt-1">
              Payment is released to the worker only after your approval. This protects you and ensures quality.
            </p>
          </div>
        </div>
      </div>

      {/* Dispute Note */}
      <div className="mt-4 bg-accent-light rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-accent mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Having Issues?</p>
            <p className="text-sm text-muted-foreground mt-1">
              If you're not satisfied, you can raise a dispute and our support team will help resolve it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserConfirmationScreen;
