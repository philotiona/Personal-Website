import type { ReactNode } from "react";
import Projects from "../Projects/Projects";

export default function ProjectList(): ReactNode {
    return(
        <section>
            <Projects name = "CloudyWord" content="Speed Reader with input text and PDF parser" linkWeb="https://www.cloudyword.com/" linkSrc="https://github.com/philotiona/Cloudwords-SpeedReader" image="MOCKED"/>
        </section>
    )
}