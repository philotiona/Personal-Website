import { type ReactNode } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProjectList from "./components/ProjectList/ProjectList";

export default function App(): ReactNode {
  return(
    <main>
      <Header/>
      <Hero/>
      <ProjectList/>
    </main>
  ) 
} 