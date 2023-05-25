"use client";

import { useCanvas } from "../hooks/useCanvas";

export default function Canvas() {
  const { canvasRef } = useCanvas();
  return (
    <div className="w-full h-[576px] absolute ">
      <canvas className="w-full h-full" ref={canvasRef}></canvas>
    </div>
  );
}
