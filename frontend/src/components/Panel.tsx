import type { Component } from 'solid-js';
import Markdown from "markdown-to-jsx/solid";

interface PanelProps {
  title: string;
  titleClass?: string;
  body: string;
}

export const Panel: Component<PanelProps> = (props) => {
  return (
    <div class="flex flex-col bg-blue-white shadow-md">
      <div class={[
          "font-semibold w-full px-1.5 py-1 font-serif",
          props.titleClass || "",
        ].join(" ")}>
        {props.title}
      </div>
      <div class="px-1.5 py-1 panel-md">
        <Markdown
          children={props.body}
          options={{
            // sanitizer: (v) => v,
            // tagfilter: false,
          }}
        />
      </div>
    </div>
  );
};
