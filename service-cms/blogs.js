import { attributes, react as HomeContent } from "../content/pages/posts.md";
import dynamic from "next/dynamic";

// const BlogComponent = dynamic(() => import("../components/blogcomponent"), {
//   ssr: true,
// });

for (let i = 0; i < attributes.posts.length; i++) {
  const post_slug = attributes.posts[i];
  const blog = await import(`../blog/post/${post_slug}.md`);
  blog.attributes.slug = post_slug;
  const author = await import(`../collegues/${blog.attributes.author}.md`);
  // console.log(blog.attributes);
  blog.attributes.bodyComponent = blog.react;
  author.attributes.slug = blog.attributes.author;
  blog.attributes.author = author.attributes;
  attributes.posts[i] = blog.attributes;
}

export function getPost(slug) {
  const post = attributes.posts.find((p) => p.slug === slug);
  return post || null;
}

export function getRecommendedBlogs() {
  return attributes.posts.filter((p) => p.isRecommended);
}
console.log(attributes.posts);
export const { pageTitle, pageImage, posts } = attributes;

export default attributes;
