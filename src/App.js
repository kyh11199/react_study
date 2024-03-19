import "./App.css";
import BoardList from "./component/BoardList";
import CateList from "./component/CateList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={<CateList />} />
          <Route path="/:cate/*" element={<BoardList />} />
          {/* <Route path="/:cate/:id" element={<BoardDetail />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
