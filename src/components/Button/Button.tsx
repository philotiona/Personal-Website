import type { ReactNode } from "react";
interface PropTypes {
    text?: string,
    icon?: string,
    type: "reset" | "button" | "submit" | undefined
}

export default function Button({text, icon, type}: PropTypes): ReactNode {
    return(
        <button type={type}>
            {icon}{text}
        </button>
    )
}