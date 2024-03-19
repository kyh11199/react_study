import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">테스트용 홈페이지</Link>
      </h1>
      <div className="menu">
        <Link to="/company">회사소개</Link>
        <Link to="/board">게시판</Link>
        <Link to="/location">오시는길</Link>
        <Link to="/contactus">문의하기</Link>
      </div>
    </div>
  );
}
