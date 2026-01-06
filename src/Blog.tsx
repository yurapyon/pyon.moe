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
];

export const Blog: Component = () => {
  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <div class="flex flex-col gap-8">
        <Index each={posts.reverse()}>
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
    </div>
  );
};
