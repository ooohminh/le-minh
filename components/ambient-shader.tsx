"use client";

import { useEffect, useState } from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

const shaderUrl =
  "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23060608&bgColor2=%230a0a0c&brightness=0.9&cAzimuthAngle=215&cDistance=4.4&cPolarAngle=105&cameraZoom=1&color1=%23bfa170&color2=%232f3438&color3=%23edeae3&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=38&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=0.75&positionX=0.4&positionY=-0.15&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.18&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uDensity=1.2&uFrequency=5.5&uSpeed=0.16&uStrength=1.2&uTime=0&wireframe=false";

export default function AmbientShader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const smallViewport = window.innerWidth < 860;

    setEnabled(!motionQuery.matches && !coarseQuery.matches && !smallViewport);
  }, []);

  if (!enabled) return null;

  return (
    <div className="ambient-shader" aria-hidden="true">
      <ShaderGradientCanvas
        pixelDensity={0.75}
        fov={38}
        pointerEvents="none"
        lazyLoad={false}
        powerPreference="low-power"
      >
        <ShaderGradient control="query" urlString={shaderUrl} />
      </ShaderGradientCanvas>
    </div>
  );
}
