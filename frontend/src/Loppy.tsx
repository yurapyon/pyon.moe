import { Component } from "solid-js";
import { SubNav } from "./components/SubNav";
import { Panel } from "./components/Panel";

const topBody = `
a 3d editor for the masses  
<a href="https://codeberg.org/yurapyon/loppy" target="_blank">codeberg</a>
`;

const goalsBody = `
- easy to learn and quick to use
- integrate better with gamedev project management
- preview glsl shaders and scripts live
- easy to manage materials, textures, etc
`;

const FAQBody = `
*GenAI plugins?*  
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
      <Panel title="goals" titleClass="bg-lmn-blue" body={goalsBody} />
      <Panel title="FAQ" titleClass="bg-lmn-green" body={FAQBody} />
    </div>
  );
};
