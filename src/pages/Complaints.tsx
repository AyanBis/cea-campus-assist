import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus } from "lucide-react";

const Complaints = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Complaints & Suggestions</h1>
                <p className="text-muted-foreground">Submit feedback and track status</p>
              </div>
            </div>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all">
              <Plus className="w-5 h-5 mr-2" />
              Submit New
            </Button>
          </div>

          <Card className="border-2 bg-gradient-card">
            <CardHeader>
              <CardTitle>AI-Powered Complaint Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Submit complaints anonymously or with your identity. Our AI automatically categorizes and prioritizes submissions for faster resolution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
