import type { ReactNode } from "react";

export default function Header(): ReactNode {
    return(
        <header>
            <ul className="flex flex-row items-center justify-around p-4">
                <li>about</li>
                <li>Jack Snack</li>
                <li>projects</li>
            </ul>
        </header>
    )
}