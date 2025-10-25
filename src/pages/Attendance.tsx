import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Attendance = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Attendance Tracker</h1>
              <p className="text-muted-foreground">Monitor your attendance and timetable</p>
            </div>
          </div>

          <Card className="border-2 bg-gradient-card">
            <CardHeader>
              <CardTitle>Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="text-6xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">You need 5 more classes to reach 75%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
