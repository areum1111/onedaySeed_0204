import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import BasicLayout from "../../layouts/BasicLayout"
import axios from 'axios';
import css from './host.css'

function LessonForm() {
  const [lessonName, setLessonName] = useState("");
  const [lessonCategory, setLessonCategory] = useState("");
  const [price, setPrice] = useState("");
  const [lessonLimited, setLessonLimited] = useState("");
  const [lessonSchedule, setLessonSchedule] = useState();
  const [lessonStatus, setLessonStatus] = useState("");

  const handleInputChange = (e, setValue) => {
    // input의 현재 값에 접근
    const inputValue = e.target.value;

    // 상태 업데이트
    setValue(inputValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 방지

    const dataToSend = {
      lessonName,
      lessonCategory,
      price,
      lessonLimited,
      lessonSchedule,
      lessonStatus,
    };

    axios.post('/host/lesson/new', dataToSend
    )
      .then(response => {
        console.log('서버로부터의 응답:', response.data.lessonName);
      })
      .catch(error => {
        console.error('에러 발생:', error);
      });
  }


  return (
    <div>
      <BasicLayout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

          <form onSubmit={handleSubmit} >
            <h1>클래스 등록/수정 페이지입니다</h1><br></br>
            <div>
              <label>
                <h4>클래스 이름</h4>
                <input className='styled-input2' onChange={(e) => handleInputChange(e, setLessonName)} placeholder='제목을 입력해 주세요.' required />
              </label>
              <hr />
            </div>

            <div>
              <label>
                <h4>카테고리</h4>
                <select className='' onChange={(e) => handleInputChange(e, setLessonCategory)} defaultValue="" required>
                  <option value="" disabled>선택</option>
                  <option value='cook'>요리</option>
                  <option value='art'>미술</option>
                  <option value='music'>음악</option>
                  <option value='sport'>운동</option>
                  <option value='baking'>베이킹</option>
                </select><br />
              <hr />
              </label>
            </div>

            <div>
              <label>
                <h4>클래스 가격</h4>
                <input className='styled-input2' type='number' onChange={(e) => handleInputChange(e, setPrice)} placeholder='숫자만 입력해 주세요.' required /><br />
              </label>
              <hr />
            </div>

            <div>
              <label>
                <h4>제한 인원</h4>
                <input className='styled-input2' type='number' onChange={(e) => handleInputChange(e, setLessonLimited)} placeholder='숫자만 입력해 주세요.' required /><br />
              </label>
              <hr />
            </div>

            <div>
              <label>
                <h4>클래스 시작일</h4>
                <input className='styled-date' type='date' onChange={(e) => handleInputChange(e, setLessonSchedule)} required /><br />
              </label>
              <hr />
            </div>

            <div>
              <label>
                <h4>판매 상태</h4>
                <select onChange={(e) => handleInputChange(e, setLessonStatus)} defaultValue="" required>
                  <option value="" disabled>선택</option>
                  <option value='SELL'>판매중</option>
                  <option value='SOLD_OUT'>품절</option>
                </select><br />
                <hr />
              </label>
            </div>
            <Button type='submit'>저장</Button>
            <Button type='submit'>수정</Button>
             <button className='btn w-btn-red' type='submit'>삭제</button>
          </form>
        </div>
      </BasicLayout>
    </div>

  )

}

export default LessonForm;