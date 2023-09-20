import PostContent from "@/components/home-page/posts/post-details/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-utils";
import Head from "next/head";
import { Fragment } from "react";

/*
!THIS IS THE PAGE AFTER CLICKING ON A POST
!This is the most NB page in the app, it has the individual blog posts and the content
 */

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default PostDetailPage;
