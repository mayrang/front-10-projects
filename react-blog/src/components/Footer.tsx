import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <menu>
        <Link to="/profile">프로필</Link>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">글목록</Link>
      </menu>
    </footer>
  );
}
