import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";

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

export const Works2d: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <div class="flex flex-col gap-2">
        <div class="bg-lmn-slate text-white px-1.5 py-1 shadow-md">
          2025
        </div>
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            ozone; WIP game, character design
          </div>
          <Img name="ozone" fileType="jpg" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="bg-lmn-slate text-white px-1.5 py-1 shadow-md">
          2023
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="yuku" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="koragi_angel" />
        </div>
        <div class="bg-lmn-white shadow-md">
          <Img name="nanodan" />
        </div>
        {/* TODO
        <div class="bg-lmn-white shadow-md">
          <div class="px-1.5 py-1">
            some chibis
          </div>
        </div>

        // TODO nanodan pngtuber
        */}
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

        {/*
            TODO lemons stream art
          */}
      </div>

      <div class="flex flex-col gap-2">
        <div class="bg-lmn-slate text-white px-1.5 py-1 shadow-md">
          2017
        </div>
        {/*
            angel93 art
          */}
      </div>
    </div>
  );
};
