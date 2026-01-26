import { useParams } from "react-router-dom"; //url의 파라미터 값을 가져오는 훅

const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}번 일기입니다</div>;
};

export default Diary;
