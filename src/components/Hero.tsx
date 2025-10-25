import { Button } from "@/components/ui/button";
import { ArrowRight, Bell, FileText } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  const scrollToNotices = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">AI-Powered Campus Management</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Manage Campus Life.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Track Academics.
              </span>{" "}
              Stay Connected.
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Your AI-powered campus assistant — simple, fast, and organized. Everything you need for efficient campus life in one intelligent portal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all group"
              >
                <FileText className="w-5 h-5 mr-2" />
                Submit Complaint
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToNotices}
                className="border-2 hover:bg-primary/5"
              >
                <Bell className="w-5 h-5 mr-2" />
                View Notices & Events
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">5000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-medium hover:shadow-glow transition-all">
              <img 
                src={heroImage} 
                alt="Smart Campus Illustration" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-medium border border-border animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">New Notice</div>
                  <div className="text-xs text-muted-foreground">Mid-term exam schedule</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
