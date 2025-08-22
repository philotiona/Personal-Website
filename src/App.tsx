import { type ReactNode } from "react";
import Hero from "./components/Hero/Hero";
import ProjectList from "./components/ProjectList/ProjectList";
import About from "./components/About/About";

export default function App(): ReactNode {
  return(
    <div className=" flex relative">
      <div className="h-screen w-full opacity-50">
        <img src="sky.jpg" alt="Sky" className="w-full h-screen "/>
      </div>
      <div className="absolute w-1/5 h-2/5 opacity-50">
        <img src="clou.png" alt="" />
      </div>
      <div className="absolute w-1/5 h-2/5 opacity-50 right-0">
        <img src="clou.png" alt="" />
      </div>
      <main className="bg-[var(--blue)] absolute w-full">        
        <Hero/>
        <ProjectList/>
        <About/>
      </main>
    </div>
  ) 
} 