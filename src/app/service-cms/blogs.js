import {
  attributes,
  react as HomeContent,
} from "../../../content/pages/posts.md";
import dynamic from "next/dynamic";

// const BlogComponent = dynamic(() => import("../components/blogcomponent"), {
//   ssr: true,
// });

attributes.posts.forEach(async (post, index) => {
  const blog = await import(`../../../blog/post/${post}.md`);
  blog.attributes.slug = post;
  attributes.posts[index] = blog.attributes;
});

for (let i = 0; i < attributes.posts.length; i++) {
  const post_slug = attributes.posts[i];
  const blog = await import(`../../../blog/post/${post_slug}.md`);
  blog.attributes.slug = post_slug;
  // console.log(blog.attributes);
  attributes.posts[i] = blog.attributes;
}

export function getPost(slug) {
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}

export const { pageTitle, pageImage, posts } = attributes;

export default attributes;
