export const posts: BlogPostProps[] = [
  {
    title: "first",
    date: new Date("December 16 2025"),
    body:`
thinking to do some type of weekly updates on projects  
wahoo  
` },
  {
    title: "2026",
    date: new Date("Jan 5 2026"),
    body:`
i need to spend more time making art this year  
i'm always 'waiting for everything to be in order' before i sit down and start working on my own projects  
<br />
but nothing is ever in order...  
<br />
the world is changing in some profound way  
and i feel like im just waiting forever  
<br />
this week i will try to start on a project to work on for this year  
i'll try to keep this blog updated as the project progresses  
<br />
i'll do my best  
` },
  {
    title: "hikerchan",
    date: new Date("Jan 11 2026"),
    body:`
i think im going to try a 2.5d ""metroidvania"" project 👍 by ""metroidvania"" i mostly mean a single boss fight :)
maybe a few rooms you can walk around. but not too much beyond "a main character" "an enemy" and "an environment".  
<br />

this is hikerchan.  
![hikerchan](/blog/2026-01/hikerchan/dither.png)
probably the main character for the game.  
<br />

one trick i like to use when texturing 3d models is to use 2 UV maps.  
one is a base layer, the second is for adding decals on top.  

as an example, here is hikerchan's hat, using 2 UVs.  
![hat detail](/blog/2026-01/hikerchan/hat-detail1.png)
and here it is with the decals turned off.  
![hat detail](/blog/2026-01/hikerchan/hat-detail2.png)
<br />

this is what the uvs for the hat's base layer look like.  
![base layer uvs](/blog/2026-01/hikerchan/hat-base-uvs.png)
this is what the uvs for the decals look like.  
![decal uvs](/blog/2026-01/hikerchan/hat-decal-uvs.png)
<br />

this can make modelling and texturing alot easier.  
for example, when you're making the texture for the hat, you can worry about the base layer separately from the decals on top.
youre alot freer to work when you don't have to 'line everything up' in your image editor to fit on the model, and can just do it in Blender directly.  
<br />

before i used this method, i would always try to use separate geometry to add decals. you take the underlying base layer, then make some geometry that follows the edges and faces very closely, and kindof sits "on top" of it... kindof like a bandaid. then you just put your decal on that... but this is a pain to model, a pain to rig and can also lead to z-fighting issues when rendering.  
<br />

i feel like this really leveled up my ability to add detail to models.  
i used this with the lemons model, notably the bandaids on the legs.  
![lemons v2](/works/lemons2/1.png)
<br />

this does mean you will often need custom shaders.  
here is the material i use in Blender.  
<a href="/blog/2026-01/hikerchan/blender-shader.png" target="_blank">![blender shader](/blog/2026-01/hikerchan/blender-shader.png)</a>
the top part is a basic unshaded material with alpha  
and then the bottom part is the decals  
<br />

the shader i use in Godot is here:  
\`\`\`
shader_type spatial;
render_mode unshaded, fog_disabled, cull_disabled;

uniform sampler2D tex: source_color;
uniform bool swap_uv_maps;

// A D
// C B
float dither(int x, int y, float density) {
    bool a = density > 0.875;
    bool b = density > 0.625;
    bool c = density > 0.375;
    bool d = density > 0.125;

    int xm = x % 2;
    int ym = y % 2;

    bool is_on = a && xm == 0 && ym == 0 ||
                 b && xm == 1 && ym == 1 ||
                 c && xm == 1 && ym == 0 ||
                 d && xm == 0 && ym == 1;

    if (is_on) {
        return 1.0;
    } else {
        return 0.0;
    }
}

void fragment() {
    vec2 uv_front = swap_uv_maps ? UV : UV2;
    vec2 uv_back = swap_uv_maps ? UV2 : UV;
    vec4 base_layer = texture(tex, uv_front);
    vec4 decal_layer = texture(tex, uv_back);
    vec4 mixed = mix(base_layer, decal_layer, decal_layer.a);

    ALBEDO = mixed.rgb;

    float a = clamp(base_layer.a + decal_layer.a, 0.0, 1.0);

    // Undithered alpha
    // ALPHA = a;

    // Dithered alpha
    ALPHA = dither(int(FRAGCOORD.x), int(FRAGCOORD.y), a);

    ALPHA_SCISSOR_THRESHOLD = 0.5;
}
\`\`\`
thankfully Godot supports having 2 UVs on a mesh, so all you have to do in the shader is just read from the texture with them, then composite the values together. takes a little work but isn't too hard.  
<br />

i got it working in Unity too. something along the lines of:  
\`\`\`
struct appdata
{
  float4 vertex : Position;
  float2 uv : TEXCOORD0;
  float2 uv2 : TEXCOORD1;
};
\`\`\`
idk man  
<br />

theres definetly a "setup cost" but it's worth it IMO  
<br />

anyway thanks for reading  
` },
  {
    title: "webforth",
    date: new Date("Jan 20 2026"),
    body:`
i spent the last few days getting my Forth implementation,
<a class="underline" href="https://github.com/yurapyon/mini" target="_blank">mini</a>, to run in the browser.
you can check it out <a class="underline" href="https://mini-nrlx.onrender.com" target="_blank">here</a>  
<br />
as of today, what youll want to do is:  
1. open the browser console  
2. click in the black box on the page (that's the "terminal")  
3. type a command
<br />
some commands to try: \`0 256 dump\` \`ashy\` \`words cr\`  
example output:  
![example output](/blog/2026-01/webforth/0-256-dump.png)
<br />
i'd been thinking for a while about getting mini to run on the web,
but didn't really want to reimplement the whole library in typescript, or learn how to write webassembly by hand lol.
so it was really cool and awesome that zig can just compile to it.
it didn't take too much work to add it to the build script (and it was about time for me to learn more about zig's build system anyway)  
<br />
when you map out the technologies used for that demo site, its like this:  
\`forth - zig - webassembly - js - solid.js\`  
seems complicated to get everything to talk to eachother, but it's not too bad if you just try and keep the code clean... but it really is some type of FFI wrapper hell  
<br />
really don't know where this project will go. being able to call js from forth opens up alot of possibilies.
one goal for now is seeing if i can build a framework for writing games in forth. ive already done alot of the
graphics work on desktop, so would just have to port that over. maybe something like love2d to start then something like pico8 down the line...  
<br />
i'm not even sure that writing games in forth would be all too accessible or even enjoyable lol but it could be neat...  
<br />
lets keep doing our best out there.  
thanks for reading  
` },
];

