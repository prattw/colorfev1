import React from "react";
import Post from "../components/post"

const AllPosts = (props) => {
  return (
    <div>
      <h1>Thank you for your input!</h1>
    </div>
    )
};

// const AllPosts = (props) => {
//   return props.posts.map((post) => {
//     return <Post post={post} key={post.id}/>
//   });
// };

export default AllPosts;