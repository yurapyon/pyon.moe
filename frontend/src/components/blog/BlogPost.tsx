import { A } from '@solidjs/router';
import type { Component } from 'solid-js';
import Markdown from "markdown-to-jsx/solid";

interface BlogPostProps {
  title: string,
  date: Date,
  body: string,
}

export const BlogPost: Component<BlogPostProps> = (props) => {
  const dateString = () => {
    const month = (props.date.getMonth() + 1).toString().padStart(2, '0');
    const date = props.date.getDate().toString().padStart(2, '0');

    return [
      props.date.getFullYear().toString().substring(2),
      month,
      date,
    ].join(" ");
  };

  const permalink = () => {
    return `/post/${props.title}`;
  };

  return (
    <div class="shadow-md bg-white font-sans text-sm sm:text-base">
      <div class="px-1.5 py-1 flex flex-row gap-1">
        <div>
          {dateString()} - {props.title}
        </div>
        <div class="grow min-w-0" />
        <A href={permalink()} class="underline">
          link
        </A>
      </div>
      <div class="h-[2px] border-t-[2px] border-lmn-slate"></div>
      <div class="px-1.5 pt-1 pb-2 blog-md">
        <Markdown children={props.body} />
      </div>
    </div>
  );
};
