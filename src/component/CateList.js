import dummy from "../db/data.json";
import { Link } from "react-router-dom";

export default function CateList() {
  return (
    <>
      <div>
        {dummy.category.map((cate) => (
          <Link to={cate.code} key={cate.id}>
            {cate.name}
          </Link>
        ))}
      </div>
    </>
  );
}
