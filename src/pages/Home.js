import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Welcome from "../components/HomeComponenets/Welcome";
import Features from "../components/HomeComponenets/Features";
import GetStarted from "../components/HomeComponenets/GetStarted";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
// import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
// import "react-scroll-parallax/dist/styles.css";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [entered, setEntered] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  // const parallax = useRef<IParallax>()

  // console.log("progress: ", progress);
  // console.log("entered: ", entered);
  // console.log("exited: ", exited);

  const handleLogout = async () => {
    try {
      await logout();
      console.log("logout successful");
      navigate("/signin");
    } catch (e) {
      console.error(e);
    }
  };

  // prettier-ignore
  const parallax = useParallax <HTMLDivElement >({
      rotate: [0, 360],
    });

  return (
    <>
      {/* <p>Home page </p>
      <button onClick={handleLogout}>logout</button> */}
      {/* <Parallax pages={1.45}>
        <ParallaxLayer offset={0.9999} speed={0.5} factor={2}>
          <Welcome />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999}>
          <Features />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9999}>
          <GetStarted />
        </ParallaxLayer>
      </Parallax> */}
      <Parallax
        onProgressChange={(progress) => setProgress(progress)}
        onEnter={() => setEntered(true)}
        onExit={() => setEntered(false)}
      >
        <Parallax speed={-10}>
          <Welcome />
        </Parallax>
        <Parallax speed={20}>
          <Features />
        </Parallax>
      </Parallax>
      <GetStarted progress={progress} />
    </>
  );
}
