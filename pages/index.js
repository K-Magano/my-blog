import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-utils";
import Head from "next/head";

//!This is where the DUMMY_DATA WAS, replacing it with getStaticProps data

function Homepage(props) {
  return (
    <Fragment>
      <Head>
        <title>She Who Blogs</title>
        <meta name="description" content="A blog about what I am studying" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default Homepage;
