import { Component } from "solid-js";
import { SubNav } from "./components/SubNav";
import { Panel } from "./components/Panel";

const topBody = `
a 3d editor for the masses
`;

const FAQBody = `
*Gen AI?*  
not a chance  
<br />
*When will it be released?*  
idk man  
`;

export const Loppy: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <Panel title="Loppy" titleClass="bg-lmn-pink" body={topBody} />
      <Panel title="FAQ" titleClass="bg-lmn-green" body={FAQBody} />
    </div>
  );
};
