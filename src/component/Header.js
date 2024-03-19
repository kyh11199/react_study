import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">테스트용 게시판</Link>
      </h1>
      <div className="menu">
        <Link to="#">글쓰기</Link>
      </div>
    </div>
  );
}
