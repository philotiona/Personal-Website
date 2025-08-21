import type { ReactNode } from "react";

export default function Header(): ReactNode {
    return(
        <header className="w-full h-fit">
            <ul className="flex flex-row items-center justify-around p-1">
                {/*
                <a href=""><li className="text-4xl">frontend</li></a>
                <a href=""><li className="text-8xl">olzhas kelgnebay</li></a>
                <a href=""><li className="text-4xl">developer</li></a>*/}
                <p className="text-4xl">frontend</p>
                <p className="text-8xl">olzhas kelgenbay</p>
                <p className="text-4xl">developer</p>
            </ul>
        </header>
    )
}