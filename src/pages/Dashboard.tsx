import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calendar, Bell, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Attendance", value: "85%", icon: Calendar, color: "text-primary" },
    { title: "CGPA", value: "8.5", icon: BarChart3, color: "text-secondary" },
    { title: "Active Clubs", value: "3", icon: Users, color: "text-accent" },
    { title: "Unread Notices", value: "5", icon: Bell, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, Student! 👋</h1>
            <p className="text-muted-foreground">Here's what's happening with your campus life today.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.title} className="border-2 hover:shadow-medium transition-all bg-gradient-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
