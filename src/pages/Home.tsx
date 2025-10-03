import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingShapes from "@/components/FloatingShapes";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
        <FloatingShapes />
      </div>
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
