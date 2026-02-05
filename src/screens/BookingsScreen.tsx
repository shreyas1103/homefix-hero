import { Clock, CheckCircle, AlertCircle, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Booking {
  id: string;
  service: string;
  workerName: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  amount: number;
  address: string;
}

const mockBookings: Booking[] = [
  {
    id: "1",
    service: "Electrician",
    workerName: "Ramesh Kumar",
    date: "Today",
    time: "2:30 PM",
    status: "upcoming",
    amount: 349,
    address: "Sector 18, Noida",
  },
  {
    id: "2",
    service: "Plumber",
    workerName: "Suresh Yadav",
    date: "Yesterday",
    time: "11:00 AM",
    status: "completed",
    amount: 299,
    address: "Sector 18, Noida",
  },
  {
    id: "3",
    service: "AC Repair",
    workerName: "Vikram Singh",
    date: "15 Jan 2025",
    time: "4:00 PM",
    status: "completed",
    amount: 599,
    address: "Sector 18, Noida",
  },
  {
    id: "4",
    service: "Carpenter",
    workerName: "Mohan Lal",
    date: "10 Jan 2025",
    time: "10:00 AM",
    status: "cancelled",
    amount: 449,
    address: "Sector 18, Noida",
  },
];

const BookingsScreen = () => {
  const getStatusIcon = (status: Booking["status"]) => {
    switch (status) {
      case "upcoming":
        return <Clock className="w-4 h-4 text-primary" />;
      case "completed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "cancelled":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
    }
  };

  const getStatusBadge = (status: Booking["status"]) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-primary-light text-primary border-0">Upcoming</Badge>;
      case "completed":
        return <Badge className="bg-success-light text-success border-0">Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
    }
  };

  const BookingCard = ({ booking }: { booking: Booking }) => (
    <Card className="mb-3 overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
              {getStatusIcon(booking.status)}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{booking.service}</h3>
              <p className="text-sm text-muted-foreground">{booking.workerName}</p>
            </div>
          </div>
          {getStatusBadge(booking.status)}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{booking.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{booking.time}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{booking.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">₹{booking.amount}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const upcomingBookings = mockBookings.filter((b) => b.status === "upcoming");
  const pastBookings = mockBookings.filter((b) => b.status !== "upcoming");

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="p-4">
        <h1 className="text-xl font-bold text-foreground mb-1">My Bookings</h1>
        <p className="text-sm text-muted-foreground mb-6">Track and manage your services</p>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full mb-4 bg-muted">
            <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
            <TabsTrigger value="past" className="flex-1">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">No upcoming bookings</h3>
                <p className="text-sm text-muted-foreground">Your scheduled services will appear here</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past">
            {pastBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BookingsScreen;
