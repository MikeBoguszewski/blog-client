import { useEffect, useState } from "react";
import Post from "./Post";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://blog-api-i1ok.onrender.com/api/posts");
        const postsData = await response.json();
        setPosts(postsData);
        console.log(postsData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log(loading);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) return (
    <div className="spinner-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
  return <div className="posts">{posts.length > 0 && posts.map((post) => <Post key={post._id} {...post} />)}</div>;
}
