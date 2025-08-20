import type { ReactNode } from "react";

export default function Header(): ReactNode {
    return(
        <header className="w-full h-fit">
            <ul className="flex flex-row items-center justify-around p-1">
                <a href=""><li>about</li></a>
                <a href=""><li>projects</li></a>
                <a href=""><li></li>contact</a>
            </ul>
        </header>
    )
}