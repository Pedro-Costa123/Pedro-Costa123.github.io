import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

type BackgroundParticlesProps = {
  isMobile: boolean;
};

export default function BackgroundParticles({ isMobile }: BackgroundParticlesProps) {
  const [color, setColor] = useState("#ffffff");

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  useEffect(() => {
    const getColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--particle_color")
        .trim();

    setColor(getColor());

    // Optional: if you want it to react to theme changes, you could use a MutationObserver:
    const observer = new MutationObserver(() => {
      setColor(getColor());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          color: {
            value: color,
          },
          links: {
            color: color,
            distance: isMobile ? 100 : 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: isMobile ? 30 : 60,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: isMobile ? 2 : 3 },
          },
        },
        background: {
          color: {
            value: "transparent",
          },
        },
      }}
    />
  );
}
