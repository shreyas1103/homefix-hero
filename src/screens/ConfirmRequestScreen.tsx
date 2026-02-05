import { useState } from "react";
import { ArrowLeft, MapPin, Clock, Shield, FileText } from "lucide-react";
import PriceBreakdown from "../components/PriceBreakdown";
import PhotoUpload from "../components/PhotoUpload";

interface ConfirmRequestScreenProps {
  service: string;
  isUrgent?: boolean;
  onBack: () => void;
  onConfirm: () => void;
}

const ConfirmRequestScreen = ({ service, isUrgent, onBack, onConfirm }: ConfirmRequestScreenProps) => {
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);

  const serviceDetails = {
    electrician: { name: "Electrician", emoji: "⚡", task: "Switch/Socket Repair" },
    plumber: { name: "Plumber", emoji: "🔧", task: "Tap Repair" },
    carpenter: { name: "Carpenter", emoji: "🪚", task: "Door Repair" },
    "ac-repair": { name: "AC Repair", emoji: "❄️", task: "AC Service" },
  };

  const details = serviceDetails[service as keyof typeof serviceDetails] || serviceDetails.electrician;
  const urgencyCharge = 150;
  const baseTotal = 248;
  const total = isUrgent ? baseTotal + urgencyCharge : baseTotal;

  const priceItems = [
    { label: "Visit Charge", price: 99, note: "Includes inspection" },
    { label: details.task, price: 149, note: "Estimated labor" },
    { label: "Parts (if needed)", price: 0, note: "Pay as per actual" },
    ...(isUrgent ? [{ label: "Urgency Surcharge", price: urgencyCharge, note: "VIP priority queue", isUrgent: true }] : []),
  ];

  return (
    <div className="px-5 pb-32">
      {/* Header */}
      <div className="flex items-center gap-4 py-4">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-foreground">Confirm Request</h1>
            {isUrgent && <span className="vip-badge">VIP</span>}
          </div>
          <p className="text-sm text-muted-foreground">Review your booking</p>
        </div>
      </div>

      {/* Service Summary */}
      <div className="bg-card rounded-2xl p-4 mt-4 border border-border">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl ${isUrgent ? 'bg-accent-light' : 'bg-primary-light'} flex items-center justify-center`}>
            <span className="text-2xl">{details.emoji}</span>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{details.name}</h3>
            <p className="text-sm text-muted-foreground">{details.task}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-foreground">Koramangala, 5th Block, Bangalore</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className={`w-4 h-4 ${isUrgent ? 'text-accent' : 'text-primary'}`} />
            <span className="text-foreground">
              {isUrgent ? 'Today, Within 15-30 mins (VIP Priority)' : 'Today, Within 60 mins'}
            </span>
          </div>
        </div>
      </div>

      {/* Issue Description */}
      <div className="mt-6 bg-card rounded-2xl p-4 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Describe Your Issue</h3>
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Briefly describe the problem you're facing... (e.g., 'Switch sparking when turned on', 'Water leaking from kitchen tap')"
          className="issue-textarea min-h-[100px]"
          maxLength={500}
        />
        <p className="text-xs text-muted-foreground mt-2 text-right">
          {description.length}/500 characters
        </p>
      </div>

      {/* Photo Upload */}
      <div className="mt-6 bg-card rounded-2xl p-4 border border-border">
        <PhotoUpload photos={photos} onPhotosChange={setPhotos} maxPhotos={3} />
      </div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <PriceBreakdown items={priceItems} total={total} isUrgent={isUrgent} />
      </div>

      {/* Escrow Note */}
      <div className={`mt-6 ${isUrgent ? 'bg-accent-light border-accent/20' : 'bg-success-light border-success/20'} rounded-2xl p-4 border`}>
        <div className="flex items-start gap-3">
          <Shield className={`w-5 h-5 ${isUrgent ? 'text-accent' : 'text-success'} mt-0.5`} />
          <div>
            <p className="font-medium text-foreground">Secure Payment</p>
            <p className="text-sm text-muted-foreground mt-1">
              Payment held in escrow. Released only after you confirm work completion.
            </p>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="fixed bottom-20 left-0 right-0 px-5">
        <div className="max-w-[400px] mx-auto space-y-3">
          <button 
            onClick={onConfirm} 
            className={`action-button shadow-xl ${isUrgent ? 'bg-gradient-to-r from-accent to-warning' : ''}`}
          >
            Confirm Booking {isUrgent && '(VIP)'}
          </button>
          <button onClick={onBack} className="secondary-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRequestScreen;
