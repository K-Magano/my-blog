import React from "react";
import classes from "@/components/home-page/posts/post-item.module.css";
import Link from "next/link";
import Image from "next/image";

//!POSTS ON THE LANDING PAGE and Posts page/

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={250}
            layout="responsive"
          />
        </div>
        <div classesName={classes.content}>
          <h3>{title}</h3>
          <time className={classes.time}>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
