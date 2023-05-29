"use client";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";
export default function MobileThreeCanvas() {
  return (
    <div className="xs:w-[282px] xs:h-[200px] md:w-[466px] md:h-[456px] 2xl:w-[588px] 2xl:h-[576px] absolute right-0 bottom-0  ">
      <Canvas
        camera={{ position: [0, 0, 8] }}
        dpr={[1, 2]}
        className="w-full h-full "
        resize={{ scroll: true }}
      >
        <Blob />
      </Canvas>
    </div>
  );
}
