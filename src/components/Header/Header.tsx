import type { ReactNode } from "react";

export default function Header(): ReactNode {
  return (
    <header className="w-full h-fit px-4 sm:px-8 py-3">
      <ul className="flex flex-col sm:flex-row items-center sm:items-baseline justify-around gap-2 sm:gap-6">
        <li className="text-xl sm:text-base md:text-lg lg:text-4xl">frontend</li>

        <li className="w-full sm:w-auto text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-bold leading-tight text-center whitespace-normal break-words">
          olzhas kelgenbay
        </li>

        <li className="text-xl sm:text-base md:text-lg lg:text-4xl">
          developer
        </li>
      </ul>
    </header>
  );
}
