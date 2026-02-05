import { MessageCircle, Phone, Mail, HelpCircle, FileText, ChevronRight, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SupportTicket {
  id: string;
  subject: string;
  date: string;
  status: "open" | "resolved";
}

const mockTickets: SupportTicket[] = [
  {
    id: "TKT-001",
    subject: "Worker didn't arrive on time",
    date: "2 days ago",
    status: "resolved",
  },
  {
    id: "TKT-002",
    subject: "Refund request for cancelled service",
    date: "5 days ago",
    status: "open",
  },
];

const SupportScreen = () => {
  const quickActions = [
    {
      icon: Phone,
      title: "Call Support",
      subtitle: "Talk to our team",
      action: "1800-XXX-XXXX",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Chat with us now",
      action: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Get response in 24hrs",
      action: "support@homefix.com",
    },
  ];

  const faqItems = [
    "How do I cancel a booking?",
    "What is the refund policy?",
    "How are workers verified?",
    "Payment failed, what to do?",
    "How to rate a service?",
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="p-4">
        <h1 className="text-xl font-bold text-foreground mb-1">Help & Support</h1>
        <p className="text-sm text-muted-foreground mb-6">We're here to help you 24/7</p>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.title} className="border-border/50">
                <CardContent className="p-3 text-center">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-primary-light flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{action.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{action.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Tickets */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Recent Tickets</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {mockTickets.map((ticket) => (
              <Card key={ticket.id} className="border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-muted-foreground">{ticket.id}</span>
                        <Badge
                          className={
                            ticket.status === "open"
                              ? "bg-accent-light text-accent border-0"
                              : "bg-success-light text-success border-0"
                          }
                        >
                          {ticket.status === "open" ? (
                            <Clock className="w-3 h-3 mr-1" />
                          ) : (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          )}
                          {ticket.status}
                        </Badge>
                      </div>
                      <h3 className="font-medium text-foreground">{ticket.subject}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{ticket.date}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="font-semibold text-foreground mb-3">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{faq}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportScreen;
