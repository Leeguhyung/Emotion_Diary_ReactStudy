import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
const New = () => {
  return (
    <div className="New">
      <div>
        <Header
          title={"새 일기 쓰기"}
          leftChild={<Button text={"< 뒤로가기"} />}
        />
      </div>

      <Editor />
    </div>
  );
};

export default New;
