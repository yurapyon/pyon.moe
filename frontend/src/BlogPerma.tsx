import type { Component } from 'solid-js';
import { useParams } from "@solidjs/router";

import { SubNav } from "./components/SubNav";
import { BlogPost } from "./components/blog/BlogPost";
import { posts } from "./posts";

export const PostNotFound = () => {
  return (
    <div class="shadow-md bg-white px-1.5 py-1 font-mono text-center">
      post not found
    </div>
  );
}

export const BlogPerma: Component = () => {
  const params = useParams();

  const getPost = () => {
    return posts.find((post) => post.title === params.title);
  };

  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <Show when={!!getPost()} keyed fallback={PostNotFound}>
        <div class="flex flex-col gap-8">
          <BlogPost
            title={getPost().title}
            date={getPost().date}
            body={getPost().body}
          />
        </div>
      </Show>
    </div>
  );
};
