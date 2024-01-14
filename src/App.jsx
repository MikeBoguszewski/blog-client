import "./reset.css";
import "./App.css";
import Layout from "./components/Layout";
import IndexPage from "./components/IndexPage";
import PostsPage from "./components/PostsPage";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
