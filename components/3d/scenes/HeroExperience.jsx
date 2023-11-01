import {
  Billboard,
  Environment,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
//   import { useControls } from "leva";
//   import { Banana } from "./Banana";
// import { Heart } from "./Heart";
import { HeroText } from "../models/HeroText";
//   import { WesternBluebird } from "./WesternBluebird";

export const HeroExperience = () => {
  // const { item } = useControls({
  //   item: {
  //     value: "heart",
  //     options: ["heart", "banana", "bird"],
  //   },
  // });
  // const xLogo = useTexture("/textures/x-logo.png");

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={2} speed={3}>
        <HeroText scale={0.5} />
        {/* <Banana scale={0.15} visible={item === "banana"} />
          <WesternBluebird
            scale={1.34}
            rotation-y={-Math.PI / 4}
            visible={item === "bird"}
          />
  
          <Billboard visible={item === "bird"}>
            <mesh>
              <planeGeometry args={[0.8, 0.8]} />
              <meshBasicMaterial map={xLogo} transparent />
            </mesh>
          </Billboard> */}
      </Float>
      {/* <Environment background={false} /> */}
      {/* <Environment preset="forest" background blur={0.4} /> */}
    </>
  );
};
