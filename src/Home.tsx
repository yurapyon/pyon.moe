import type { Component } from 'solid-js';
import { Card } from "./components/Card";
import { Nav, type NavLink } from "./components/Nav";
import { A } from '@solidjs/router';

export const Home: Component = () => {
  return (
    <Card>
      <div class="flex flex-col">
        {
          /* TODO: change how this works for small screens, just split main div in half */
        }
        <div class="flex flex-row h-[150px]">
          <div
            class="grow-0 h-full aspect-square flex flex-row place-content-center"
          >
            <div class="text-[10rem] leading-[9rem] text-center font-bold">
              P
            </div>
          </div>

          <div class="grow-0 w-[2px] border-l-[2px] border-lmn-slate"></div>

          <div class="grow">
            <div class="px-1.5 py-1 hidden sm:inline-block">
              pyon.moe <br />
              updated 12/16/2025
            </div>
            {/*
                        <div class="h-[150px] text-center inline sm:hidden"
                            style={{ writingMode: 'sideways-lr' }}
                        >pyon.moe</div>
              */}
          </div>
          {
            /*
                    <div class="grow" />
                    */
          }

          <a
            class="p-[3px] grow-0 h-full aspect-square bg-white group"
            href="https://www.youtube.com/watch?v=A67ZkAd1wmI"
            target="_blank"
          >
            <div class="group-hover:invert p-[3px] bg-white">
              <img src="images/QRcode.png" />
            </div>
          </a>
          <div class="grow inline sm:hidden"></div>
        </div>

        <div class="h-[2px] border-t-[2px] border-lmn-slate"></div>

        <div class="p-2 text-center text-2xl sm:text-4xl font-semibold">
          PYONDOTMOE&trade; MAIL
        </div>

        <div class="h-[2px] border-t-[2px] border-lmn-slate"></div>

        <Nav />

        <div class="h-[2px] border-t-[2px] border-lmn-slate"></div>

        <img
          class="grayscale contrast-200 brightness-[0.80]"
          src="images/kmb_dance.gif"
        />

        <div class="h-[2px] border-t-[2px] border-lmn-slate"></div>
        {/*
        <LinkRow links={social_links} />
          */}
        <div class="h-8"/>

        <div class="h-[5px] border-t-[5px] border-lmn-slate"></div>
        <div class="p-2 flex flex-col items-center">
          <div class="text-center text-lg font-semibold">MOE TRACKING #</div>
          <a
            class="p-[3px] w-fit group"
            href="https://www.youtube.com/watch?v=XuefzdAPtQY"
            target="_blank"
          >
            <div class="group-hover:invert p-[3px] bg-white">
              <img class="h-[120px]" src="images/code2.gif" />
            </div>
          </a>
          <div class="text-center text-lg font-semibold">
            500 00100 0000 1437 6605 010
          </div>
        </div>
        <div class="h-[5px] border-t-[5px] border-lmn-slate"></div>
        <div class="h-8"></div>
      </div>
    </Card>
  );
};
