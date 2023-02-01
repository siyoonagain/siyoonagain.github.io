import React, { useRef, useState, useEffect, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({ author: "", content: "", emotion: 1 });

  const { onCreate } = useContext(DiaryDispatchContext);

  //   author,content,emotion 상태변화 기능
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //   저장기능버튼
  const handleSubmit = () => {
    // 작성자가 공백이라면 focus()기능 주기
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    // 일기 내용이 공백이라면 focus()기능 주기
    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }
    //위 2개의 조건을 만족했다면 저장성공하기
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          placeholder="작성자"
          ref={authorInput}
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          placeholder="일기"
          ref={contentInput}
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleSubmit} onCreate={onCreate}>
        일기 저장
      </button>
    </div>
  );
};

export default React.memo(DiaryEditor);
