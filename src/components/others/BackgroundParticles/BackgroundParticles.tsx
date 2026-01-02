import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";

type BackgroundParticlesProps = {
  isMobile: boolean;
};

export default function BackgroundParticles({
  isMobile,
}: BackgroundParticlesProps) {
  const [init, setInit] = useState(false);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const getColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--particle_color")
        .trim();

    setColor(getColor());

    const observer = new MutationObserver(() => setColor(getColor()));

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      particles: {
        color: { value: color },
        links: {
          color,
          distance: isMobile ? 100 : 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: { enable: true, speed: 2 },
        number: { value: isMobile ? 30 : 60 },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: isMobile ? 2 : 3 } },
      },
      background: { color: { value: "transparent" } },
    }),
    [color, isMobile]
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}
