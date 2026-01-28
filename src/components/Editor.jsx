import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";

const Editor = () => {
  return (
    <div>
      <div className="today">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </div>
      <div className="today_emotion">
        <h4>오늘의 감정</h4>
        <div>
          <EmotionItem emotionId={1} emotionName={"완전 좋음"} />
          <EmotionItem emotionId={2} emotionName={"좋음"} />
          <EmotionItem emotionId={3} emotionName={"그럭저럭"} />
          <EmotionItem emotionId={4} emotionName={"나쁨"} />
          <EmotionItem emotionId={5} emotionName={"끔찍함"} />
        </div>
      </div>
      <div className="today_diary">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땟나요?"></textarea>
      </div>
      <div className="footer_button">
        <Button text={"취소하기"} />
        <Button text={"작성 완료"} type={"POSITIVE"} />
      </div>
    </div>
  );
};

export default Editor;
