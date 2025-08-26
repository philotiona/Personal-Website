import type { ReactNode } from "react";
import Projects from "../Projects/Projects";

export default function ProjectList(): ReactNode {
    return(
        <section className="h-screen w-full flex flex-wrap flex-col items-center relative">
            <h1 className="min-w-0 text-center font-bold leading-tight text-[clamp(1rem,6vw,5rem)] xl:text-8xl px-2">featured works</h1>
            <div className="flex flex-col flex-wrap items-center justify-center">
                <Projects name = "CloudyWord" content="Speed Reader with input text and PDF parser" linkWeb="https://www.cloudyword.com/" linkSrc="https://github.com/philotiona/Cloudwords-SpeedReader" image="doodles.jpg"/>
            </div>
            {/* <div className="absolute w-full h-screen opacity-10">
                <img src="snowflake.jpg" alt="" className="w-full h-full"/>
            </div> */}
        </section>
    )
}