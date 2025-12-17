import type { Component } from 'solid-js';
import Markdown from "markdown-to-jsx/solid";

interface BlogPostProps {
  title: string,
  date: Date,
  body: string,
}

export const BlogPost: Component<BlogPostProps> = (props) => {
  return (
    <div class="shadow-md bg-white font-sans text-sm sm:text-base">
      <div class="px-1.5 py-1 flex flex-row">
        <div>
          {props.title}
        </div>
        <div class="grow min-w-0" />
        <div class="">
          {[
            props.date.getFullYear().toString().substring(2),
            props.date.getMonth() + 1,
            props.date.getDate(),
          ].join(" ")}
        </div>
      </div>
      <div class="h-[2px] border-t-[2px] border-lmn-slate"></div>
      <div class="px-1.5 py-1">
        <Markdown children={props.body} />
      </div>
    </div>
  );
};
