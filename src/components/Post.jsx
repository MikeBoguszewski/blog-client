import { Link } from "react-router-dom";
import { format } from "date-fns";
import he from "he"

export default function Post({content, published, title, updatedAt, _id}) {
  if (!published) return ""
  const decodedContent = he.decode(content)
  return (
    <Link to={`/posts/${_id}`} className="post">
      <h2>{title}</h2>
      <p>{published}</p>
      <time>{format(new Date(updatedAt), "yyyy-MM-dd")}</time>
      <p>{decodedContent}</p>
    </Link>
  );
}