const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <img 
              src="/lovable-uploads/eab0b4f5-96b9-42e1-a4fb-afa473414abb.png" 
              alt="SynapQ Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-foreground ml-3">SynapQ</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 SynapQ. Intelligent Pulse Logging, Redefined.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Next-generation utility technology for progressive enterprises.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;