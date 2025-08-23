import type { ReactNode } from "react";

export default function Header(): ReactNode {
  return (
    <header className="w-full h-fit px-4 sm:px-8 py-3">
      <ul className="flex items-center justify-between gap-4">
        <li className="text-[clamp(0.75rem,2.5vw,2.25rem)] xl:text-4xl">
          frontend
        </li>

        <li className="flex-1 min-w-0 text-center font-bold leading-tight text-[clamp(1rem,6vw,5rem)] xl:text-8xl px-2">
          <span className="block whitespace-normal break-words">
            olzhas kelgenbay
          </span>
        </li>

        <li className="text-[clamp(0.75rem,2.5vw,2.25rem)] xl:text-4xl">
          developer
        </li>
      </ul>
    </header>
  );
}
