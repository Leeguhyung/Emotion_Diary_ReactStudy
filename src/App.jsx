import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

//1."/" 모든 일기를 조회하는 HOME페이지
//2. "/new" 새로운 일기를 작성하는 NEW페이지
//3. "diary" 일기를 상세히 조회하는 Diary 페이지

function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={123}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
        type={"DEFAULT"}
      />
      <Button
        text={123}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
        type={"POSITIVE"}
      />
      <Button
        text={123}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
        type={"NEGATIVE"}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
        {/* *은 와일드카드다. 라우트스 태그 안에는 라우트만 들어갈 수 있다. 디브같은거 불가함*/}
      </Routes>
    </>
  );
}

export default App;
