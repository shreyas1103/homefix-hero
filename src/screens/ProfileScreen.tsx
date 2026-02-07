import {
  User, MapPin, Phone, Mail, ChevronRight, Shield, CreditCard,
  Bell, HelpCircle, LogOut, Star, Gift, Settings, Edit2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProfileScreen = () => {
  const user = {
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@email.com",
    address: "Sector 18, Noida, UP",
    memberSince: "Jan 2024",
    totalBookings: 12,
    trustScore: 4.8,
  };

  const menuItems = [
    {
      section: "Account",
      items: [
        { icon: MapPin, label: "Saved Addresses", badge: "2" },
        { icon: CreditCard, label: "Payment Methods", badge: "UPI" },
        { icon: Bell, label: "Notifications", toggle: true },
      ],
    },
    {
      section: "Rewards & Referrals",
      items: [
        { icon: Gift, label: "Refer & Earn", badge: "₹100" },
        { icon: Star, label: "Loyalty Points", badge: "250 pts" },
      ],
    },
    {
      section: "Support",
      items: [
        { icon: HelpCircle, label: "Help Center" },
        { icon: Shield, label: "Privacy Policy" },
        { icon: Settings, label: "App Settings" },
      ],
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-28 w-full">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 pb-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="w-20 h-20 border-4 border-background">
              <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=face" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">{user.name}</h1>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="bg-primary-light text-primary border-0">
                <Star className="w-3 h-3 mr-1" />
                {user.trustScore} Trust Score
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-background/80 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-foreground">{user.totalBookings}</p>
            <p className="text-xs text-muted-foreground">Bookings</p>
          </div>
          <div className="bg-background/80 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-foreground">250</p>
            <p className="text-xs text-muted-foreground">Points</p>
          </div>
          <div className="bg-background/80 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-foreground">₹100</p>
            <p className="text-xs text-muted-foreground">Rewards</p>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="p-4 space-y-6">
        {menuItems.map((section) => (
          <div key={section.section}>
            <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
              {section.section}
            </h2>
            <Card className="border-border/50">
              <CardContent className="p-0 divide-y divide-border">
                {section.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <Badge variant="secondary" className="bg-muted">
                            {item.badge}
                          </Badge>
                        )}
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Logout */}
        <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/10">
          <LogOut className="w-5 h-5 mr-2" />
          Log Out
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Member since {user.memberSince} • v1.0.0
        </p>
      </div>
    </div>
  );
};

export default ProfileScreen;
