import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";
import { Panel } from "./components/Panel";

const overviewBody = `
Self-taught generalist programmer //
<a href="https://github.com/yurapyon" target="_blank">github</a> //
<a href="/resume-11-25.pdf" target="_blank">resume</a>  
TLDR:  
- game development (Unity/Godot/Love2d, OpenGL, custom engines)
- web development (Typescript, React, Next.js)
- low-level, microcontrollers (C, Zig)
- scripting (Forth, Scheme, Lua)
- functional programming, algorithms
`;

const monterraBody = `
# <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/kqeu6rabJl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
<a href="https://www.monterra.ai" target="_blank">Monterra</a>  
2D graphics editor, fullstack React/Typescript app  
(please see resume for more information)  
`;

const mailgunBody = `
WIP
`;

const miniBody = `
# ![life](/works/mini/1.png)
16bit Forth implementation and virtual PC  
<a href="https://github.com/yurapyon/mini" target="_blank">github</a>
`;

const u7Body = `
# <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/loHvrW5EKBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
Music video  
3D scenes made with Unity and Blender  
2D visual effects make with Chicken Scheme, C, and OpenGL  
`;

const gssimBody = `
# <a href="https://hypercyute.itch.io/girlscoutsim" target="_blank">![Girl Scout Camping SIMULATOR](/works/gscs/1.png)</a>
<a href="https://hypercyute.itch.io/girlscoutsim" target="_blank">itch.io</a>  
Made for LocusJam (2015)
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
