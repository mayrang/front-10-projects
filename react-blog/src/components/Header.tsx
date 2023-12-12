import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">React Blog</div>
      <div>
        <Link to="/profile">프로필</Link>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">글목록</Link>
      </div>
    </header>
  );
}
