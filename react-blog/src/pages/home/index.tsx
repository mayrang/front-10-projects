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
      <div className="post__navigation">
        <div className="post__navigation--active">전체</div>
        <div>내가 쓴 글</div>
      </div>
      <div className="post__list">
        {[...new Array(10)].map((_, index) => (
          <div className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author">박건상</div>
                <div className="post__date">2023-12-11 월요일</div>
              </div>
              <div className="post__title">타이틀 {index}</div>
              <div className="post__content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
            </Link>
            <div className="post__utils">
              <div className="post__delete">삭제</div>
              <div className="post__edit">수정</div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <menu>
          <Link to="/profile">프로필</Link>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">글목록</Link>
        </menu>
      </footer>
    </>
  );
}
