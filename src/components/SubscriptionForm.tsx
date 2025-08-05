import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    contactNumber: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Subscription Successful!",
        description: "Thank you for your interest in SynapQ. We'll be in touch soon with detailed product updates.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        organization: "",
        email: "",
        contactNumber: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscription-form" className="py-24 bg-gradient-to-t from-background to-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Discover How SynapQ Can Transform Your Utility Operations
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay informed. Request more information or join our priority list for detailed product updates and exclusive early access.
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-synapq">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold text-foreground">
                Subscribe for Product Updates & Request for Information (RFI)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-foreground font-medium">
                    Organization *
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    placeholder="Enter your organization name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber" className="text-foreground font-medium">
                    Contact Number *
                  </Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    required
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    placeholder="Enter your contact number"
                  />
                </div>

                <Button
                  type="submit"
                  variant="synapq"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg py-4 mt-8"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;