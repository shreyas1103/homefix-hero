interface PriceItem {
  label: string;
  price: number;
  note?: string;
  isUrgent?: boolean;
}

interface PriceBreakdownProps {
  items: PriceItem[];
  total: number;
  isUrgent?: boolean;
}

const PriceBreakdown = ({ items, total, isUrgent }: PriceBreakdownProps) => {
  return (
    <div className="bg-card rounded-2xl p-4 border border-border">
      <h3 className="font-semibold text-foreground mb-4">Price Breakdown</h3>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <p className={`${item.isUrgent ? 'text-accent font-medium' : 'text-foreground'}`}>
                {item.label}
                {item.isUrgent && <span className="ml-2 text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">VIP</span>}
              </p>
              {item.note && (
                <p className="text-xs text-muted-foreground">{item.note}</p>
              )}
            </div>
            <span className={`font-medium ${item.isUrgent ? 'text-accent' : 'text-foreground'}`}>
              ₹{item.price}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-dashed border-border mt-4 pt-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-foreground">Total</span>
          <span className="text-xl font-bold text-primary">₹{total}</span>
        </div>
      </div>

      <div className={`mt-4 p-3 ${isUrgent ? 'bg-accent-light' : 'bg-primary-light'} rounded-xl`}>
        <p className={`text-xs ${isUrgent ? 'text-accent' : 'text-primary'} font-medium text-center`}>
          {isUrgent 
            ? '⚡ VIP Queue • Priority Service • Faster Response'
            : '🔒 Fixed pricing • No bargaining • No hidden charges'
          }
        </p>
      </div>
    </div>
  );
};

export default PriceBreakdown;
