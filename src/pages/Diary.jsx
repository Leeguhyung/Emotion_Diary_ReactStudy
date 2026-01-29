import { useNavigate, useParams } from "react-router-dom"; //url의 파라미터 값을 가져오는 훅
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useContext } from "react";
import useDiary from "../hooks/useDiary";

import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중</div>;
  }
  console.log(curDiaryItem);

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));
  console.log(params);
  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
