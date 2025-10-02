import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseFollower from "@/components/MouseFollower";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <ScrollProgressBar />
      <MouseFollower />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
