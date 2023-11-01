"use client";

import { HeroExperience } from "@/components/3d/scenes/HeroExperience";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Team from "@/components/Team";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="w-full h-screen">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={4}>
            <HeroExperience />
          </ScrollControls>
        </Canvas>
      </div> */}
      <Hero />
      <AboutUs />
      <Steps />
      <Team />
      <ContactUs />
    </>
  );
}
