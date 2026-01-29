import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import {getStringedDate} from "../util/get-stringed-date";



const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, []);

  const onChangeInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };
  return (
    <div>
      <div className="today">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </div>
      <div className="today_emotion">
        <h4>오늘의 감정</h4>
        <div>
          {emotionList.map((item) => {
            return (
              <EmotionItem
                onClick={() =>
                  onChangeInput({
                    target: {
                      name: "emotionId",
                      value: item.emotionId,
                    },
                  })
                }
                key={item.emotionId}
                {...item}
                isSelected={item.emotionId === input.emotionId}
              />
            );
          })}
        </div>
      </div>
      <div className="today_diary">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땟나요?"
        ></textarea>
      </div>
      <div className="footer_button">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성 완료"}
          type={"POSITIVE"}
        />
      </div>
    </div>
  );
};

export default Editor;
