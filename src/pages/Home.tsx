import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingShapes from "@/components/FloatingShapes";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <FloatingShapes />
      <Hero />
    </div>
  );
};

export default Home;
