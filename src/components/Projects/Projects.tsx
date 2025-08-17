import type { ReactNode } from "react";
import Button from "../Button/Button";
interface ProjectProps{
    content: string,
    name: string,
    image: string,
    linkWeb: string,
    linkSrc: string
}

export default function Projects({content, name, image, linkWeb, linkSrc}: ProjectProps): ReactNode {
    return(
        <section>
            <div>
                <p>{name}</p>
                <img src={image} alt="" />
                <p>{content}</p>
                <div>
                    <a href={linkWeb} target="_blank">
                        <Button text="Website" type = "button"/>
                    </a>
                    <a href={linkSrc}>
                        <Button text="Source" type = "button"/>
                    </a>
                </div>
            </div>
        </section>
    )
}