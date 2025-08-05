import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Shield, 
  Battery, 
  Network, 
  BarChart3, 
  Wifi, 
  Lock, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI-driven Analytics",
    description: "Real-time intelligent analytics for predictive insights and early anomaly detection."
  },
  {
    icon: Shield,
    title: "Stealth Design & Robust Construction",
    description: "Discreet, weather-resistant enclosure ensures minimal visibility and maximum durability."
  },
  {
    icon: Battery,
    title: "Ultra-Low Power Consumption",
    description: "Extended battery life reduces maintenance cycles and operational overhead."
  },
  {
    icon: Network,
    title: "Seamless Integration",
    description: "Easy deployment with existing SCADA systems and utility management platforms."
  },
  {
    icon: BarChart3,
    title: "High-Resolution Pulse Logging",
    description: "Precise, reliable data collection suitable for critical metering and billing accuracy."
  },
  {
    icon: Wifi,
    title: "Wireless Connectivity (NB-IoT & LoRaWAN)",
    description: "Flexible connectivity options ensuring reliable data transmission even in remote or challenging environments."
  },
  {
    icon: Lock,
    title: "End-to-End Security",
    description: "Advanced encryption and secure data transmission protect critical infrastructure data."
  },
  {
    icon: Smartphone,
    title: "User-friendly Setup & Management",
    description: "Mobile app integration for effortless installation, diagnostics, and management."
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Features Tailored for Utilities
          </h2>
          <div className="w-24 h-1 bg-synapq-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-synapq"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-synapq-gradient rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;