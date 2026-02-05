import { useEffect, useState } from "react";
import { Check, Shield, ArrowRight } from "lucide-react";

interface PaymentSuccessScreenProps {
  onContinue: () => void;
}

const PaymentSuccessScreen = ({ onContinue }: PaymentSuccessScreenProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-5 pb-28 min-h-[70vh] flex flex-col">
      {/* Success Animation */}
      <div className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-success flex items-center justify-center animate-bounce-in">
            <Check className="w-14 h-14 text-success-foreground" strokeWidth={3} />
          </div>
          {/* Confetti dots */}
          <div className="absolute -top-4 -left-4 w-4 h-4 rounded-full bg-accent animate-ping" />
          <div className="absolute -top-2 -right-6 w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: "0.2s" }} />
          <div className="absolute -bottom-2 -left-6 w-3 h-3 rounded-full bg-warning animate-ping" style={{ animationDelay: "0.4s" }} />
        </div>

        {showContent && (
          <div className="animate-fade-in text-center mt-8">
            <h1 className="text-2xl font-bold text-foreground">Payment Released!</h1>
            <p className="text-muted-foreground mt-2">Transaction completed successfully</p>
          </div>
        )}
      </div>

      {/* Payment Details */}
      {showContent && (
        <div className="animate-slide-up space-y-4">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Amount Paid</span>
              <span className="text-2xl font-bold text-primary">₹248</span>
            </div>
            <div className="mt-3 pt-3 border-t border-border flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Payment Method</span>
              <span className="text-foreground">UPI - PhonePe</span>
            </div>
          </div>

          <div className="bg-success-light rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-success" />
              <p className="text-sm text-foreground">
                Payment securely processed via escrow
              </p>
            </div>
          </div>

          <button onClick={onContinue} className="action-button shadow-xl flex items-center justify-center gap-2">
            Rate Your Experience
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccessScreen;
