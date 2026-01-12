import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";
import { Panel } from "./components/Panel";

const overviewBody = `
Self-taught generalist programmer //
<a href="https://github.com/yurapyon" target="_blank">github</a> //
<a href="/resume-11-25.pdf" target="_blank">resume</a>  
TLDR:  
- game development, prebuilt and custom engines
- fullstack web development w/ React and Typescript
- low-level, microcontrollers
- scripting, functional programming, algorithms
`;

const monterraBody = `
# <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/kqeu6rabJl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
2D graphics editor with Pixi.js, fullstack React/Typescript app  
(please see resume for more information)  
<a href="https://www.monterra.ai" target="_blank">Company site</a>  
`;

const mailgunBody = `
WIP
`;

const miniBody = `
# ![life](/works/mini/1.png)
16bit Forth implementation and virtual PC  
Zig and Forth  
<a href="https://github.com/yurapyon/mini" target="_blank">github</a>
`;

const u7Body = `
# <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/loHvrW5EKBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
Music video  
3D scenes made with Blender, Unity  
2D graphics: custom graphics engine in Chicken Scheme, C, and OpenGL  
`;

const gssimBody = `
# <a href="https://hypercyute.itch.io/girlscoutsim" target="_blank">![Girl Scout Camping SIMULATOR](/works/gscs/1.png)</a>
Made for LocusJam (2015)  
Blender, Unity  
<a href="https://hypercyute.itch.io/girlscoutsim" target="_blank">itch.io</a>  
`;

export const Code: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <Panel
        title="overview"
        titleClass="bg-lmn-blue"
        body={overviewBody}
      />
      <Panel
        title="Monterra"
        titleClass="bg-lmn-green"
        body={monterraBody}
      />
      {/*
      <Panel
        title="mailgun [WIP]"
        titleClass="bg-lmn-green"
        body={mailgunBody}
      />
      */}
      <Panel
        title="mini and pyon vPC"
        titleClass="bg-lmn-green"
        body={miniBody}
      />
      <Panel
        title="u7 dratama"
        titleClass="bg-lmn-green"
        body={u7Body}
      />
      <Panel
        title="Girl Scout Camping SIMULATOR"
        titleClass="bg-lmn-green"
        body={gssimBody}
      />
    </div>
  );
};
