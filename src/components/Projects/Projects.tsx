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
                    <Button text="Website" type = "button" />
                    <Button text="Source" type = "button"/>
                </div>
            </div>
        </section>
    )
}