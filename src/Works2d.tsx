import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";
import { Year } from "./components/works/Year";

const Img: Component = (props) => {
  const url = () => {
    return `/works/${props.name}/${props.index || 1}.${props.fileType || "png"}`;
  };

  const preview_url = () => {
    return `/works/${props.name}/${props.index || 1}_prev.${props.fileType || "png"}`;
  };

  return (
    <a href={url()} target="_self"><img src={preview_url()} /></a>
  );
};

const Img2: Component = (props) => {
  const url = () => {
    return `/works/${props.name}.${props.fileType || "png"}`;
  };

  const preview_url = () => {
    return `/works/${props.name}_prev.${props.fileType || "png"}`;
  };

  return (
    <a href={url()} target="_self" class={props.class || ""}><img src={preview_url()} /></a>
  );
};

const Img3: Component = (props) => {
  const url = () => {
    return `/works/${props.name}.${props.fileType || "png"}`;
  };

  return (
    <a href={url()} target="_self" class={props.class || ""}><img src={url()} /></a>
  );
};

export const Works2d: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />

      <Year year={2025} >
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            ozone; WIP game, character design
          </div>
          <Img name="ozone" fileType="jpg" />
        </div>
      </Year>

      <Year year={2023} >
        <div class="bg-lmn-white shadow-md">
          <Img name="yuku" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="koragi_angel" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="nanodan" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            some chibis
          </div>
          <div class="flex flex-row bg-white">
            <Img2 class="basis-[29%]" name="chibis/koragi_nerd" />
            <Img2 class="basis-[34%]" name="chibis/lemons" />
            <Img2 class="basis-[37%]" name="chibis/girutan" />
          </div>
        </div>

        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            nanodan pngtuber
          </div>
          <div class="flex flex-row">
            <Img3 name="nanodan_pngtuber/1full" fileType="gif" />
            <Img3 name="nanodan_pngtuber/2full" fileType="gif" />
          </div>
        </div>

        <div class="bg-lmn-white shadow-md">
          <Img name="ilya" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="nekoragi" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="roboco" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="koragi" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="moetron" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="lily_giru_pic" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="komugi" />
        </div>

        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            bite lemons stream loading and ending screens
          </div>
          <Img3 name="lemon_stream/1" fileType="gif" />
          <Img3 name="lemon_stream/2" />
        </div>
      </Year>

      <Year year={2017} >
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            <a
              class="underline"
              href="https://cockrockdisco.bandcamp.com/album/angel-93"
              target="_blank"
            >
              angel93
            </a> album art; front and back cover

          </div>
          <Img3 name="angel93/front" />
          <Img3 name="angel93/back" />
        </div>
      </Year>
    </div>
  );
};
