import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";
import { PageNotFound } from "./components/PageNotFound";

export const Error404: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <PageNotFound />
    </div>
  );
};
