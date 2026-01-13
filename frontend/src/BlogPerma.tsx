import type { Component } from 'solid-js';
import { useParams } from "@solidjs/router";

import { SubNav } from "./components/SubNav";
import { BlogPost } from "./components/blog/BlogPost";
import { posts } from "./posts";

export const BlogPerma: Component = () => {
  const params = useParams();

  const getPost = () => {
    return posts.find((post) => post.title === params.title);
  };

  return (
    <div class="flex flex-col gap-4">
      <SubNav />
      <div class="flex flex-col gap-8">
        <BlogPost
          title={getPost().title}
          date={getPost().date}
          body={getPost().body}
        />
      </div>
    </div>
  );
};
