import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function Post({content, published, title, updatedAt, _id}) {
  if (!published) return ""

  return (
    <Link to={`/posts/${_id}`} className="post">
      <h2>{title}</h2>
      <p>{published}</p>
      <time>{format(new Date(updatedAt), "yyyy-MM-dd")}</time>
      <p>{content}</p>
    </Link>
  );
}