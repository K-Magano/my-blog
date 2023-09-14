import fs from fs
import path from 'path'
import matter from 'gray-matter'


const postsDirectory = path.join(process.cwd(), 'postsData' )

function getPostData(fileName){

    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
 const {data, content } = matter(fileContent)

 const postSlug =  fileName.replace(/\/$/, '') //removes the file extensions

 const postsData = {
    slug: postSlug,
    ...data,
    content: content,
 }
 return getPostData;
}

export function getAllPosts(){
const postFiles = fs.readdirSync(postsDirectory)

const allPosts =  postFiles.map(postFile => {
    return getPostData(postFile)
})

const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

return sortedPosts;
}

export function getFeaturedPosts(){
    const allPosts =  getAllPosts() 

    const FeaturedPosts = allPosts.filter(post => post.isFeatured)
    return FeaturedPosts
}