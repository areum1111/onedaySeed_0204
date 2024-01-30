import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BasicLayout from "../../layouts/BasicLayout"
import axios from 'axios';

function LessonDetail() {

  const [lessonDetail, setLessonDetail] = useState({
    lessonId : 0,
    lessonName : " lessonName",
    lessonSchedule : " 미정",
    price :  0,
  });

  const detailLesson = async () => {
    try{
      // const lessonId = 0;
      const response = await axios.get(`/host/lesson/detail/${lessonDetail.lessonId}`);
      setLessonDetail(response.data);
    }catch(error){
      console.log("에러"+error)
    }
  }

  useEffect(()=>{
    detailLesson();
  },[]);
  

  return (
    <div>
      <BasicLayout>
        <hr />
        <form action="/save" method="get">
          <fieldset>
            <p>
              <label htmlFor="classTitle">- 클래스 제목 : </label>
               {lessonDetail.lessonName}<br />
            </p>

            <p>
              <label htmlFor="classStartDay">- 클래스 시작일 : </label>
              {lessonDetail.lessonSchedule}<br />
            </p>

            <p>
              <label htmlFor="classStudentNum">- 인원 : </label>
              <input type='number' id='classStudentNum'></input>
            </p>

            <p>
              <label htmlFor="classCost">- 클래스 가격 : </label>
              {lessonDetail.price}<br />
            </p>

          </fieldset>
          <hr />
          <img src="./images/dog.jpg" alt='???' width="800" />
        </form>
      </BasicLayout>
    </div>

  )

}

export default LessonDetail;