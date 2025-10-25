import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Community & Resources</h1>
              <p className="text-muted-foreground">Share and access study materials</p>
            </div>
          </div>

          <Card className="border-2 bg-gradient-card">
            <CardHeader>
              <CardTitle>Study Material Library</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access previous year questions, notes, and resources shared by students and faculty. Collaborate through discussion forums.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
