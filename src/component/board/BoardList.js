import dummy from "../../db/data.json";
import BoardDetail from "./BoardDetail";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Empty from "../Empty";

export default function BoardList() {
  console.log(useParams());
  const { cate } = useParams();

  const boardList = dummy.board_list.filter((list) => {
    return list.cate === cate;
  });

  const boardTitle = dummy.category.filter((cateArr) => {
    return cateArr.code === cate;
  });

  return boardTitle.length > 0 ? (
    <>
      <h3>{boardTitle[0].name}</h3>
      <Routes>
        <Route path="/:id" element={<BoardDetail />} />
      </Routes>
      <table>
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>글쓴이</td>
          <td>조회수</td>
        </tr>
        {boardList.map((list) => (
          <tr key={list.id}>
            <td>번호</td>
            <td>
              <Link to={`${list.id}`}>{list.subject}</Link>
            </td>
            <td>{list.register}</td>
            <td>{list.count}</td>
          </tr>
        ))}
      </table>
    </>
  ) : (
    <Empty />
  );
}
