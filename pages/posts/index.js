import AllPosts from "@/components/home-page/posts/all-posts";
import React, { Fragment } from "react";
import { getAllPosts } from "@/lib/posts-utils";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All the thoughts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
