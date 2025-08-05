import SynapQHero from "@/components/SynapQHero";
import FeatureGrid from "@/components/FeatureGrid";
import SubscriptionForm from "@/components/SubscriptionForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SynapQHero />
      <FeatureGrid />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Index;
