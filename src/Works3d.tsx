import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";
import { Year } from "./components/works/Year";

const Img: Component = (props) => {
  const url = () => {
    return `/works/${props.name}/${props.index || 1}.${props.fileType || "png"}`;
  };

  return (
    <a href={url()} target="_self"><img src={props.preview || url()} /></a>
  );
};

export const Works3d: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />

      <Year year={2023} >
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            bite lemons v2; VSeeFace model, character design
          </div>
          <Img name="lemons2" preview="/works/lemons2/1_prev.png" />
          <iframe
              class="w-full aspect-video"
              src="https://www.youtube-nocookie.com/embed/TM-Wyif_W_0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
          />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="shondo_alice" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="lilyhops" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="mii_bonk" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="alice_umaru" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            bite lemons v1; VRM/VSeeFace model, character design
          </div>
          <Img name="lemons" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="dejiko" index="1" />
          <Img name="dejiko" index="2" />
        </div>
      </Year>

      <Year year={2022} >
        <div class="bg-lmn-white shadow-md">
          <Img name="girutan" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="alice" index="1" />
          <Img name="alice" index="2" />
          <Img name="alice" index="3" />
        </div>
      </Year>

      <Year year={2017} >
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            u7 dratama; music video, character design, Unity
          </div>
          <iframe
              class="w-full aspect-video"
              src="https://www.youtube.com/embed/loHvrW5EKBk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
          />
        </div>
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            worst compilation: fourth wave; covers, inserts, cds
          </div>
          <Img name="worst" index="1" fileType="jpg" />
          <Img name="worst" index="2" fileType="jpg" />
        </div>
      </Year>
    </div>
  );
};
