import { type ReactNode } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProjectList from "./components/ProjectList/ProjectList";

export default function App(): ReactNode {
  return(
    <div className=" flex relative">
      <div className="h-full w-full opacity-50">
        <img src="sky.jpg" alt="Sky"/>
      </div>
      <main className="bg-[var(--blue)] absolute w-full">
        <Header/>
        <Hero/>
        <ProjectList/>
      </main>
    </div>
  ) 
} 