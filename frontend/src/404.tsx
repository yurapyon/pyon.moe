import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";

export const Error404: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <div class="shadow-md bg-white px-1.5 py-1 font-mono text-center">
        page not found
      </div>
    </div>
  );
};
