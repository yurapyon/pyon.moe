import type { Component } from 'solid-js';
import { Nav } from "./Nav";
import { Card } from "./Card";
import { Button } from "./Button";

interface SubNavProps {
}

export const SubNav: Component<SubNavProps> = (props) => {
  return (
    <Card>
      <div class="flex flex-col font-mono">
        <div class="flex flex-row">
          <Button
            text="pyon.moe"
            href="/"
            class="flex-1 hover:bg-lmn-slate hover:text-white hover:font-semibold"
          />
          <div class="flex-1 px-1.5 py-1" />
          <div class="flex-1 px-1.5 py-1" />
          <div class="flex-1 px-1.5 py-1" />
        </div>
        <div class="h-[2px] border-t-[2px] border-lmn-slate" />
        <Nav />
      </div>
    </Card>
  );
};

