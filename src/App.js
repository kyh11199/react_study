import "./App.css";
import Board from "./component/board/Board";
import Company from "./component/Company";
import Location from "./component/Loaction";
import Contactus from "./component/Contactus";
import Empty from "./component/Empty";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = { name: "Mike" };
  const info = [1000];
  const info2 = { asdf: "qweqwe" };

  const aaa = Object.assign({}, user, info, info2);

  aaa.name = "Tom";

  console.log(user);
  console.log(aaa);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/company" element={<Company />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/location" element={<Location />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/*" element={<Empty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
