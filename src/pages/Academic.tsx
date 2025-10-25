import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const Academic = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Academic Performance</h1>
              <p className="text-muted-foreground">Track your SGPA, CGPA, and grades</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 bg-gradient-card">
              <CardHeader>
                <CardTitle>Current SGPA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold text-primary">8.5</div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-card">
              <CardHeader>
                <CardTitle>Overall CGPA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold text-secondary">8.2</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
