import { Component } from "solid-js";
import { SubNav } from "./components/SubNav";
import { Panel } from "./components/Panel";

const topBody = `
**Making 3d art easier**  
A new app for making low-poly 3d art, drawing from 2d art tools to make modelling more fun than it is technical (hopefully!)
`;

const goalsBody = `
- Easy to learn and quick to use
- Easy to manage materials, textures, etc
- Preview glsl shaders and scripts live
- Integrate nicely with gamedev projects
<br />
As much as I like Blender, the user experience can really suck lol  
So I'm trying to make something easier for people to pick up but still usable for somewhat 'serious' low-poly projects
(In the future I'd like to branch out from just low-poly but thats too much work for now lol)
`;

const FAQBody = `
*Who is the team?*  
Its just parcel_ch for now  
<br/>
*Will there be a cute epic mascot?*  
Yes, I'm working on it  
<br/>
*How much will it cost?*  
Not sure yet, but it will be affordable.  
There will also be a Patreon with events and perks and all that  
<br/>
*When will it be released?*  
Hopefully an alpha will be available for Patreon members soon
`;

const AIDisclosure = `
This is a **no AI zone**  
<br />
<span class="underline"> Generative AI tools are not used in developing the app </span>  
- Not for writing code
- Not for planning/internal operations
- Not for research  
  
<br />
<span class="underline">Generative AI tools will not be integrated into the app out of the box</span>  
I'm planning on adding a plugin system in the future, so you can do whatever you want,
but third-party AI plugins will not be endorsed by Pyon3D
`;

export const Loppy: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <Panel title="Pyon3d" titleClass="bg-lmn-pink" body={topBody} />
      <Panel title="Goals" titleClass="bg-lmn-blue" body={goalsBody} />
      <Panel title="Qs" titleClass="bg-lmn-green" body={FAQBody} />
      <Panel
        title="AI Disclosure"
        titleClass="bg-lmn-red"
        body={AIDisclosure}
      />
    </div>
  );
};
