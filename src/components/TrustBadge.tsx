import { Check, Shield } from "lucide-react";

interface TrustBadgeProps {
  type: "verified" | "trusted" | "on-time";
  text: string;
}

const TrustBadge = ({ type, text }: TrustBadgeProps) => {
  const configs = {
    verified: {
      icon: Check,
      bg: "bg-success-light",
      text: "text-success",
    },
    trusted: {
      icon: Shield,
      bg: "bg-primary-light",
      text: "text-primary",
    },
    "on-time": {
      icon: Check,
      bg: "bg-accent-light",
      text: "text-accent",
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <Icon className="w-3 h-3" />
      {text}
    </span>
  );
};

export default TrustBadge;
