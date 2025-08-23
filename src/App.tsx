import { type ReactNode } from "react";
import Hero from "./components/Hero/Hero";
import ProjectList from "./components/ProjectList/ProjectList";
import About from "./components/About/About";

export default function App(): ReactNode {
  return (
    <div className="flex relative h-screen w-full">
      <div className="absolute inset-0 h-screen w-full opacity-40 bg-[var(--color-ultramarine)]"> 
        <video src="cosmos2.mp4" autoPlay muted width="100%" loop className="object-cover w-screen h-screen"></video>
      </div>
      
      {/* <div className="absolute w-1/5 h-2/5 opacity-50">
        <img src="cloud.png" alt="cloud" />
      </div>
      <div className="absolute w-1/5 h-2/5 opacity-50 right-0">
        <img src="cloud.png" alt="cloud" />
      </div> */}

      <main className="absolute w-full bg-[var(--blue)]">
        <Hero />
        <ProjectList />
        <About />
      </main>
    </div>
  );
}
