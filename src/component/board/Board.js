import CateList from "../CateList";
import BoardList from "./BoardList";
import { Route, Routes } from "react-router-dom";

const Board = () => {
  console.log("Board Component");
  return (
    <>
      <CateList />
      <Routes>
        <Route path="/:cate/*" element={<BoardList asdf="asd" />} />
      </Routes>
    </>
  );
};

export default Board;
