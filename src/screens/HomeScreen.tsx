import { MapPin, Bell, Search, AlertTriangle } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { ElectricianIcon, PlumberIcon, CarpenterIcon, ACRepairIcon } from "../components/icons/ServiceIcons";

interface HomeScreenProps {
  onSelectService: (service: string) => void;
  onUrgent: () => void;
}

const HomeScreen = ({ onSelectService, onUrgent }: HomeScreenProps) => {
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
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Your location</p>
            <p className="font-semibold text-foreground text-sm">Koramangala, Bangalore</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
          <Bell className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Greeting */}
      <div className="mt-4 mb-6">
        <h1 className="text-2xl font-bold text-foreground">
          Hello, Priya! 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          What service do you need today?
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for services..."
          className="w-full py-3.5 pl-12 pr-4 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      {/* Urgent Service Button */}
      <button
        onClick={onUrgent}
        className="urgent-button flex items-center justify-center gap-3 mb-8"
      >
        <AlertTriangle className="w-5 h-5" />
        <span>🚨 Urgent Service Needed</span>
      </button>

      {/* Services Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Our Services</h2>
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

      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-4 text-primary-foreground">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <span className="text-2xl">🛡️</span>
          </div>
          <div>
            <h3 className="font-semibold">100% Verified Workers</h3>
            <p className="text-sm opacity-90">Background checked & trained professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
