import { MapPin, Search, ChevronDown, AlertTriangle, Star, Clock, Users } from "lucide-react";
import { ElectricianIcon, PlumberIcon, CarpenterIcon, ACRepairIcon, CleaningIcon } from "../components/icons/ServiceIcons";

interface HomeScreenProps {
  onSelectService: (service: string) => void;
  onUrgent: () => void;
}

const HomeScreen = ({ onSelectService, onUrgent }: HomeScreenProps) => {
  const services = [
    {
      id: "electrician",
      title: "Electrician",
      icon: <ElectricianIcon className="w-8 h-8 text-primary" />,
    },
    {
      id: "plumber",
      title: "Plumber",
      icon: <PlumberIcon className="w-8 h-8 text-primary" />,
    },
    {
      id: "carpenter",
      title: "Carpenter",
      icon: <CarpenterIcon className="w-8 h-8 text-primary" />,
    },
    {
      id: "ac-repair",
      title: "AC Repair",
      icon: <ACRepairIcon className="w-8 h-8 text-primary" />,
    },
    {
      id: "cleaning",
      title: "Cleaning",
      icon: <CleaningIcon className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="px-5 pb-28 bg-background">
      {/* Location Header */}
      <div className="py-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <div className="flex items-center gap-1">
            <div>
              <p className="text-xs text-muted-foreground">Your Location</p>
              <p className="font-semibold text-foreground text-sm">HSR Layout, Bangalore</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Greeting */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-foreground">Hello, Rahul!</h1>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="What service do you need?"
          className="w-full py-3.5 pl-12 pr-4 rounded-2xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      {/* Services Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-foreground mb-4">What do you need help with?</h2>
        <div className="grid grid-cols-3 gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all active:scale-95"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center">
                {service.icon}
              </div>
              <span className="text-sm font-medium text-foreground">{service.title}</span>
            </button>
          ))}
          
          {/* Emergency Button */}
          <button
            onClick={onUrgent}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl border-2 border-accent bg-accent-light hover:shadow-md transition-all active:scale-95"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-accent-foreground" />
            </div>
            <span className="text-sm font-medium text-accent">Emergency</span>
          </button>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600')] bg-cover bg-center opacity-40" />
        <div className="relative p-5">
          <h3 className="text-lg font-bold text-white mb-1">First booking? Get ₹200 off</h3>
          <p className="text-sm text-white/80 mb-3">Use code FIRST200 at checkout</p>
          <button className="text-primary font-semibold text-sm flex items-center gap-1">
            Book Now →
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-3 bg-card rounded-2xl p-4 border border-border">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-xl font-bold text-primary">500+</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Verified Workers</p>
        </div>
        <div className="text-center border-x border-border">
          <div className="flex items-center justify-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-xl font-bold text-foreground">15 min</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Avg. Response</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <span className="text-xl font-bold text-foreground">4.8</span>
            <Star className="w-4 h-4 text-accent fill-accent" />
          </div>
          <p className="text-xs text-muted-foreground mt-1">User Rating</p>
        </div>
      </div>

      {/* Trust Badge Card */}
      <div className="mt-6 rounded-2xl bg-success/10 border border-success/20 p-4">
        <p className="text-center text-success font-medium">
          🛡️ All workers are verified & trustworthy
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
