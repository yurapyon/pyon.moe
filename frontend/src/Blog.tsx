import type { Component } from 'solid-js';
import { SubNav } from "./components/SubNav";
import { BlogPost } from "./components/blog/BlogPost";
import { posts } from "./posts";

export const Blog: Component = () => {
  const getPosts = () => {
    // TODO sort by date
    return posts.toReversed();
  };

  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <div class="flex flex-col gap-8">
        <Index each={getPosts()}>
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
