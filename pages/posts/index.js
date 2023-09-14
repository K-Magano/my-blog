import AllPosts from "@/components/home-page/posts/all-posts";
import React from "react";

const DUMMY_POSTS = [
  {
    slug: "slug-in-main-index",
    title: "This is Next!",
    image: "getting-started-nextjs",
    excerpt:
      "Learning Next has been interesting, getting static props, hoisting and realizing there is nothing restful about APIs",
    date: "2023/09/14",
  },
  {
    slug: "slug-with-main-index",
    title: "This is Next!",
    image: "next1.jpeg",
    excerpt:
      "Learning Next has been interesting, getting static props, hoisting and realizing there is nothing restful about APIs",
    date: "2023/09/14",
  },
  {
    slug: "slug-and-main-index",
    title: "This is Next!",
    image: "next2.jpeg",
    excerpt:
      "Learning Next has been interesting, getting static props, hoisting and realizing there is nothing restful about APIs",
    date: "2023/09/14",
  },
  {
    slug: "slug-for-main-index",
    title: "This is Next!",
    image: "next3.png",
    excerpt:
      "Learning Next has been interesting, getting static props, hoisting and realizing there is nothing restful about APIs",
    date: "2023/09/14",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
