import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const Clubs = () => {
  const clubs = [
    { name: "Tech Club", members: 150, category: "Technology" },
    { name: "Cultural Society", members: 200, category: "Arts" },
    { name: "Sports Committee", members: 180, category: "Sports" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Clubs & Projects</h1>
              <p className="text-muted-foreground">Collaborate and manage your club activities</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <Card key={index} className="border-2 hover:shadow-medium transition-all bg-gradient-card">
                <CardHeader>
                  <CardTitle>{club.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{club.category}</p>
                    <p className="text-lg font-semibold">{club.members} members</p>
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

export default Clubs;
