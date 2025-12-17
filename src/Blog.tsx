import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";
import { BlogPost } from "./components/blog/BlogPost";

const posts: BlogPostProps[] = [
  {
    title: "first",
    date: new Date("December 16 2025"),
    body:`
thinking to do some type of weekly updates on projects  
wahoo  
` },
];

export const Blog: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <Index each={posts}>
        {(item) => {
          return (
            <BlogPost
              title={item().title}
              date={item().date}
              body={item().body}
            />
          );
        }}
      </Index>
    </div>
  );
};
