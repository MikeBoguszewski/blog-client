import { format } from "date-fns";

export default function Comment({content, updatedAt}) {
  return (
    <div className="comment">
      <time>{format(new Date(updatedAt), "yyyy-MM-dd hh:mm a")}</time>
      <p>{content}</p>
    </div>
  );
}