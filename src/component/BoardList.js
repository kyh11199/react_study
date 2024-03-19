import dummy from "../db/data.json";
import BoardDetail from "./BoardDetail";
import { Link, Route, Routes, useParams } from "react-router-dom";

export default function BoardList() {
  const { cate } = useParams();

  const boardList = dummy.board_list.filter((list) => {
    return list.cate === cate;
  });
  const boardTitle = dummy.category.filter((cateArr) => {
    return cateArr.code === cate;
  });

  return (
    <>
      <h3>{boardTitle[0].name}</h3>
      <Routes>
        <Route path="/:id" element={<BoardDetail />} />
      </Routes>
      <div>
        {boardList.map((list) => (
          <div key={list.id}>
            <Link to={`${list.id}`}>
              {list.subject} | {list.register}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
