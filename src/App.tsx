import { type ReactNode } from "react";
import Hero from "./components/Hero/Hero";

export default function App(): ReactNode {
  return(
    <div className=" flex relative">
      <div className="h-full w-full opacity-50">
        <img src="sky.jpg" alt="Sky"/>
      </div>
      <div className="absolute w-1/5 h-2/5 opacity-50">
        <img src="cloud.png" alt="" />
      </div>
      <div className="absolute w-1/5 h-2/5 opacity-50 right-0">
        <img src="cloud2.png" alt="" />
      </div>
      <main className="bg-[var(--blue)] absolute w-full">
        <Hero/>
        
      </main>
    </div>
  ) 
} 