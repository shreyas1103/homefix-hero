import { ArrowLeft, AlertTriangle } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { ElectricianIcon, PlumberIcon, CarpenterIcon, ACRepairIcon } from "../components/icons/ServiceIcons";

interface UrgentServiceSelectionScreenProps {
  onBack: () => void;
  onSelectService: (service: string) => void;
}

const UrgentServiceSelectionScreen = ({ onBack, onSelectService }: UrgentServiceSelectionScreenProps) => {
  const services = [
    {
      id: "electrician",
      title: "Electrician",
      subtitle: "Wiring, switches, repairs",
      icon: <ElectricianIcon className="w-7 h-7 text-accent" />,
      color: "bg-accent-light",
    },
    {
      id: "plumber",
      title: "Plumber",
      subtitle: "Leaks, taps, drainage",
      icon: <PlumberIcon className="w-7 h-7 text-primary" />,
      color: "bg-primary-light",
    },
    {
      id: "carpenter",
      title: "Carpenter",
      subtitle: "Furniture, doors, cabinets",
      icon: <CarpenterIcon className="w-7 h-7 text-warning" />,
      color: "bg-accent-light",
    },
    {
      id: "ac-repair",
      title: "AC Repair",
      subtitle: "Service, gas refill, install",
      icon: <ACRepairIcon className="w-7 h-7 text-primary" />,
      color: "bg-primary-light",
    },
  ];

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
          <h1 className="text-xl font-bold text-foreground">
            🚨 Urgent Service
          </h1>
          <p className="text-sm text-muted-foreground">Select service type</p>
        </div>
      </div>

      {/* VIP Queue Banner */}
      <div className="bg-gradient-to-r from-accent to-warning rounded-2xl p-4 mt-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="text-white">
            <h3 className="font-semibold">VIP Priority Queue</h3>
            <p className="text-sm opacity-90">Get served 3x faster with urgent service</p>
          </div>
        </div>
      </div>

      {/* Extra Charges Notice */}
      <div className="bg-accent-light rounded-xl p-3 mb-6 border border-accent/20">
        <p className="text-sm text-accent font-medium text-center">
          ⚡ +₹150 Urgency Surcharge applies for VIP queue priority
        </p>
      </div>

      {/* Services Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          What service do you need urgently?
        </h2>
        <div className="space-y-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              color={service.color}
              onClick={() => onSelectService(service.id)}
            />
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-card rounded-2xl p-4 border border-border">
        <h3 className="font-semibold text-foreground mb-3">VIP Queue Benefits</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-lg">⚡</span>
            <span>Worker assigned within 15 minutes</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-lg">🏃</span>
            <span>Priority over general queue</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-lg">📞</span>
            <span>Dedicated support line</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentServiceSelectionScreen;
