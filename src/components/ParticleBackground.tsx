import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "@/components/ThemeProvider";

const ParticleBackground = () => {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  // Theme-aware colors
  const isDark = theme === "dark";
  const particleColors = isDark 
    ? ["#9333ea", "#06b6d4", "#8b5cf6"] 
    : ["#3b82f6", "#8b5cf6", "#06b6d4"];
  const linkColor = isDark ? "#9333ea" : "#3b82f6";
  const linkOpacity = isDark ? 0.2 : 0.15;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          opacity: 0,
        },
        particles: {
          number: {
            value: isDark ? 100 : 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: particleColors,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: isDark ? 0.1 : 0.2, max: isDark ? 0.8 : 0.6 },
            animation: {
              enable: true,
              speed: 1,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: linkColor,
            opacity: linkOpacity,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticleBackground;