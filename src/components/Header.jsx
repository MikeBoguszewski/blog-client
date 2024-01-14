import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to={"/"} className="logo">Blog</Link>
      <Link to={"/posts"}>Posts</Link>
    </header>
  )
}