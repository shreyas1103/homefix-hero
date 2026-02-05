import { ArrowLeft, Check, Info } from "lucide-react";

interface SelectServiceScreenProps {
  service: string;
  isUrgent?: boolean;
  onBack: () => void;
  onConfirm: () => void;
}

const SelectServiceScreen = ({ service, isUrgent, onBack, onConfirm }: SelectServiceScreenProps) => {
  const servicePricing = {
    electrician: {
      name: "Electrician",
      emoji: "⚡",
      baseCharge: 99,
      tasks: [
        { name: "Switch/Socket Repair", price: 149 },
        { name: "Fan Installation", price: 299 },
        { name: "Wiring Repair", price: 399 },
        { name: "MCB/Fuse Repair", price: 199 },
        { name: "Inverter Installation", price: 499 },
      ],
    },
    plumber: {
      name: "Plumber",
      emoji: "🔧",
      baseCharge: 99,
      tasks: [
        { name: "Tap Repair/Replace", price: 199 },
        { name: "Pipe Leakage Fix", price: 349 },
        { name: "Drain Cleaning", price: 299 },
        { name: "Flush Tank Repair", price: 249 },
        { name: "Water Tank Cleaning", price: 599 },
      ],
    },
    carpenter: {
      name: "Carpenter",
      emoji: "🪚",
      baseCharge: 149,
      tasks: [
        { name: "Door Repair", price: 299 },
        { name: "Lock Installation", price: 199 },
        { name: "Furniture Assembly", price: 349 },
        { name: "Hinge Replacement", price: 149 },
        { name: "Cabinet Repair", price: 399 },
      ],
    },
    "ac-repair": {
      name: "AC Repair",
      emoji: "❄️",
      baseCharge: 199,
      tasks: [
        { name: "AC Service", price: 499 },
        { name: "Gas Refill (R32)", price: 1499 },
        { name: "Compressor Check", price: 299 },
        { name: "Filter Cleaning", price: 199 },
        { name: "AC Installation", price: 999 },
      ],
    },
  };

  const pricing = servicePricing[service as keyof typeof servicePricing] || servicePricing.electrician;
  const urgencyCharge = 150;

  return (
    <div className="px-5 pb-28">
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
            <h1 className="text-xl font-bold text-foreground">
              {pricing.emoji} {pricing.name}
            </h1>
            {isUrgent && (
              <span className="vip-badge">VIP</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">Transparent pricing</p>
        </div>
      </div>

      {/* Urgent Notice */}
      {isUrgent && (
        <div className="bg-gradient-to-r from-accent to-warning rounded-2xl p-3 mt-2 mb-4">
          <p className="text-sm text-white font-medium text-center">
            ⚡ VIP Queue Active • Priority Service
          </p>
        </div>
      )}

      {/* Base Visit Charge */}
      <div className={`${isUrgent ? 'bg-accent-light border-accent/20' : 'bg-primary-light border-primary/20'} rounded-2xl p-4 mt-4 border`}>
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-sm ${isUrgent ? 'text-accent' : 'text-primary'} font-medium`}>Visit Charge</p>
            <p className="text-xs text-muted-foreground mt-0.5">Inspection & consultation</p>
          </div>
          <div className="text-right">
            <span className={`text-2xl font-bold ${isUrgent ? 'text-accent' : 'text-primary'}`}>₹{pricing.baseCharge}</span>
            <p className="text-xs text-muted-foreground">one-time</p>
          </div>
        </div>
        
        {isUrgent && (
          <div className="mt-3 pt-3 border-t border-accent/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-accent font-medium">Urgency Surcharge</p>
                <p className="text-xs text-muted-foreground mt-0.5">VIP priority queue access</p>
              </div>
              <span className="text-lg font-bold text-accent">+₹{urgencyCharge}</span>
            </div>
          </div>
        )}
      </div>

      {/* Common Tasks */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Common Services</h2>
        <div className="space-y-3">
          {pricing.tasks.map((task, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 border border-border flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-success-light flex items-center justify-center">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <span className="font-medium text-foreground">{task.name}</span>
              </div>
              <span className="font-bold text-primary">₹{task.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* No Bargaining Note */}
      <div className={`mt-6 ${isUrgent ? 'bg-accent-light border-accent/20' : 'bg-accent-light border-accent/20'} rounded-2xl p-4 border`}>
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-accent mt-0.5" />
          <div>
            <p className="font-medium text-foreground">No Bargaining Policy</p>
            <p className="text-sm text-muted-foreground mt-1">
              All prices are fixed and transparent. What you see is what you pay. No hidden charges!
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-5">
        <div className="max-w-[400px] mx-auto">
          <button onClick={onConfirm} className={`action-button shadow-xl ${isUrgent ? 'bg-gradient-to-r from-accent to-warning' : ''}`}>
            Book Now • Starting ₹{isUrgent ? pricing.baseCharge + urgencyCharge : pricing.baseCharge}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectServiceScreen;
