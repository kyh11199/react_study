import { useParams } from "react-router-dom";

export default function BoardDetail() {
  console.log("BoardView");

  return <>{useParams().id}번 글 내용표시</>;
}
