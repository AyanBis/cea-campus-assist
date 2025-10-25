import { Card, CardContent } from "@/components/ui/card";
import { 
  Bell, 
  Calendar, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Map, 
  BookOpen, 
  Award,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Bell,
    title: "Notices & Events",
    description: "Stay updated with campus announcements, events, and important dates",
    path: "/notices",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Calendar,
    title: "Attendance Tracker",
    description: "Monitor your attendance with visual charts and smart alerts",
    path: "/attendance",
    gradient: "from-secondary to-accent",
  },
  {
    icon: BarChart3,
    title: "Academic Performance",
    description: "Track SGPA, CGPA, and get AI-powered improvement suggestions",
    path: "/academic",
    gradient: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "Clubs & Projects",
    description: "Collaborate with clubs, manage projects, and track tasks",
    path: "/clubs",
    gradient: "from-primary to-accent",
  },
  {
    icon: MessageSquare,
    title: "Complaints & Suggestions",
    description: "Submit feedback anonymously with AI-powered categorization",
    path: "/complaints",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Map,
    title: "Interactive Campus Map",
    description: "Navigate campus with searchable locations and directions",
    path: "/map",
    gradient: "from-accent to-secondary",
  },
  {
    icon: BookOpen,
    title: "Study Materials",
    description: "Access PYQs, notes, and resources shared by the community",
    path: "/community",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Award,
    title: "Faculty Reviews",
    description: "Rate and review faculty to help improve teaching quality",
    path: "/reviews",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Brain,
    title: "AI Assistant",
    description: "Get smart suggestions, notifications, and personalized insights",
    path: "/dashboard",
    gradient: "from-accent to-primary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              One Portal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your campus experience with AI-powered tools designed for students, faculty, and administrators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link 
              key={index} 
              to={feature.path}
              className="group"
            >
              <Card className="h-full border-2 hover:shadow-medium transition-all hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
