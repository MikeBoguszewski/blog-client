import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { format } from "date-fns";
import he from "he"

export default function PostDetail() {
  const [postInfo, setPostInfo] = useState(null);
  const [comments, setComments] = useState([]);
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
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://blog-api-i1ok.onrender.com/api/comments/${id}`);
        const commentsData = await response.json();
        setComments(commentsData);
        console.log(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPost();
    fetchComments();
  }, [id]);

  if (!postInfo) return "";
  const decodedContent = he.decode(postInfo.content)
  return (
    <div className="post-detail">
      <div className="info">
        <h1>{postInfo.title}</h1>
        <p>{postInfo.published}</p>
        <time>{format(new Date(postInfo.updatedAt), "yyyy-MM-dd")}</time>
        <p className="content">{decodedContent}</p>
      </div>
      <div className="comments-container">
        <h2>{comments.length} Comments</h2>
        <CommentForm post={postInfo} />
        <div className="comments">{comments.length > 0 && comments.map((comment) => <Comment key={comment._id} {...comment} />)}</div>
      </div>
    </div>
  );
}
