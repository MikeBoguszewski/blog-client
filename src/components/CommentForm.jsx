import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CommentForm() {
  const [postInfo, setPostInfo] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [content, setContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://blog-api-i1ok.onrender.com/api/posts/${id}`);
        const postData = await response.json();
        setPostInfo(postData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const createComment = async (event) => {
    event.preventDefault();
    try {
      console.log("ok");
      const response = await fetch("https://blog-api-i1ok.onrender.com/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, postId: postInfo?._id }), // Use optional chaining to handle null
      });

      if (!response.ok) {
        const responseBody = await response.json();
        console.error("Server Error:", responseBody);
      } else {
        console.log("Comment submitted successfully!");
        location.reload();
      }
    } catch (error) {
      console.error("Error submitting comment", error);
    }
  };

  return (
    <form onSubmit={createComment}>
      <textarea type="text" onFocus={handleFocus} onChange={handleChange} value={content} placeholder="Add a comment" />
      {isFocused && (
        <div>
          <button type="submit">Comment</button>
          <button type="button">Cancel</button>
        </div>
      )}
    </form>
  );
}
