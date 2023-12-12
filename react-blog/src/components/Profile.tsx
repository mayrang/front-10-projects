import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">test@email.com</div>
          <div className="profile__name">박유저</div>
        </div>
      </div>
      <Link to="/logout" className="profile__logout">
        로그아웃
      </Link>
    </div>
  );
}
