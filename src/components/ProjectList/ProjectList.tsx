import type { ReactNode } from "react";
import Projects from "../Projects/Projects";

export default function ProjectList(): ReactNode {
    return(
        <section className="h-screen w-full flex flex-wrap flex-col items-center justify-center relative">
            <div className="flex flex-col flex-wrap items-center justify-center">
                <p className="text-4xl text-bold text-start">
                    featured works
                </p>
                <Projects name = "CloudyWord" content="Speed Reader with input text and PDF parser" linkWeb="https://www.cloudyword.com/" linkSrc="https://github.com/philotiona/Cloudwords-SpeedReader" image="MOCKED"/>
            </div>
            <div className="absolute w-full h-screen opacity-10">
                <img src="doodls.jpg" alt="" className="w-full h-full"/>
            </div>
        </section>
    )
}