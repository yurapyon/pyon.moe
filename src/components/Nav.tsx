import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { getPages } from "../pages";
import { Page } from "../types/page";

interface NavProps {
}

export const Nav: Component<NavProps> = (props) => {
  const pages = getPages([Page.HOME])

  return (
    <div class="flex flex-row font-mono w-full">
      <Index each={pages}>
        {(item) => {
          return <A
            href={item().path}
            class="px-1.5 py-1 text-center text-lmn-slate flex-1 whitespace-nowrap"
            activeClass="font-bold bg-lmn-slate text-white pointer-events-none cursor-default"
            inactiveClass={[
              item().bgColor,
              item().fgColor ?? "hover:text-white",
              "hover:font-semibold bg-white",
            ].join(" ")}
          >
            {item().linkText}
          </A>
        }}
      </Index>
    </div>
  );
};

