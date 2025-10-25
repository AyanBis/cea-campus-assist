import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar } from "lucide-react";

const Notices = () => {
  const notices = [
    { title: "Mid-term Examination Schedule", date: "2025-10-20", category: "Academic", priority: "high" },
    { title: "Club Registration Open", date: "2025-10-22", category: "Club", priority: "normal" },
    { title: "Guest Lecture on AI", date: "2025-10-25", category: "General", priority: "normal" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Notices & Events</h1>
              <p className="text-muted-foreground">Stay updated with campus announcements</p>
            </div>
          </div>

          <div className="space-y-4">
            {notices.map((notice, index) => (
              <Card key={index} className="border-2 hover:shadow-medium transition-all bg-gradient-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{notice.title}</CardTitle>
                    <Badge variant={notice.priority === "high" ? "destructive" : "secondary"}>
                      {notice.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{notice.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
