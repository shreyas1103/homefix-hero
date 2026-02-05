import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  color: string;
  onClick: () => void;
}

const ServiceCard = ({ icon, title, subtitle, color, onClick }: ServiceCardProps) => {
  return (
    <button
      onClick={onClick}
      className="service-card w-full flex items-center gap-4 text-left group"
    >
      <div className={`icon-container ${color}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  );
};

export default ServiceCard;
