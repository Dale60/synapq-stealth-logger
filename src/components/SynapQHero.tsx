import { Button } from "@/components/ui/button";

const SynapQHero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('subscription-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Product Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/eab0b4f5-96b9-42e1-a4fb-afa473414abb.png" 
                alt="SynapQ Logo" 
                className="w-80 h-80 object-contain animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6 leading-tight">
            SynapQ
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mb-8">
            Intelligent Pulse Logging, Redefined
          </h2>
          
          {/* Tagline */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              Cutting-edge Intelligence. Invisible Presence.
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SynapQ delivers next-generation pulse logging technology designed explicitly for today's progressive utilities. 
              Featuring subtle, stealth-inspired design, SynapQ captures precise data while blending seamlessly into any environment.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="synapq" 
              size="lg" 
              onClick={scrollToForm}
              className="text-lg px-8 py-4"
            >
              Request Information
            </Button>
            <Button 
              variant="synapqOutline" 
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-8 py-4"
            >
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynapQHero;