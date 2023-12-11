import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <Link to="/profile">프로필</Link>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">글목록</Link>
      </header>
      <div className="post__list">post list</div>
      <footer>
        <menu>
          <li>menu 1</li>
          <li>menu 2</li>
          <li>menu 3</li>
        </menu>
      </footer>
    </>
  );
}
