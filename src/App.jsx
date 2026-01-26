import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

import { useReducer } from "react";

const mockData = [
  //임시데이타
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  return state;
}
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  //새로운 일기 추가
  //기존 일기 수정
  //기존 일기 삭제
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
        {/* *은 와일드카드다. 라우트스 태그 안에는 라우트만 들어갈 수 있다. 디브같은거 불가함*/}
      </Routes>
    </>
  );
}

export default App;
