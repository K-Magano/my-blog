import fs from "fs";
import path from "path";

//to split up metadata and content. matter is a function
import matter from "gray-matter";

//Process. cwd point sat the overall project folder
const postsDirectory = path.join(process.cwd(), "postsData"); //postsData is my file name

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory); //file path with extensions
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //removes the file extensions and replacing with nothing
  const filePath = path.join(postsDirectory, `${postSlug}.md`); //full path to an ID file
  const fileContent = fs.readFileSync(filePath, "utf-8"); //reading the content of a file 'utf-8' to support all Unicode characters
  const { data, content /*object destructuring */ } = matter(fileContent); //matter will return and object with 2 properties; 1 Data :which contains the metaData as an object 2: Content property that contains the actual content, the MD content

  const postData = {
    // will contain all the metadata, content and the slug without the file extention
    slug: postSlug,
    ...data, //the data from the MD file
    content, // from MD
  };
  return postData;
}

export function getAllPosts() {
  // look at the posts folder with th MD Files and look through each and get the meta data
  const postFiles = getPostsFiles(); //ready content in a blocking way, synchronously to parse all data

  const allPosts /*An array with post data*/ = postFiles.map((postFile) => {
    return getPostData(postFile); // mapping filenames into array of objects with the actual post data
  });

  //sort to have latest posts first and returns an array
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

//for getting the featured posts
export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
