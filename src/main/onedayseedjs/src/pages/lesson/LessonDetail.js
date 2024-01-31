import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BasicLayout from "../../layouts/BasicLayout"
import axios from 'axios';
import css from './host.css'

function LessonDetail() {

  const [lessonDetail, setLessonDetail] = useState({});

  const detailLesson = async () => {
    try {
      const response = await axios.get(`/host/lesson/detail/${lessonDetail.lessonId}`);
      setLessonDetail(response.data);
    } catch (error) {
      console.log("에러" + error)
    }
  }

  useEffect(() => {
    detailLesson();
  }, []);


  return (
    <div>

      <BasicLayout>
        <hr />
        <form action="/cart" method="get">
          <fieldset style={{ textAlign: "center" }}>
            <img style={{ width: "600px", height: "600px" }} src="/images/boonga.jpg" alt='???' width="800" />
            <p>
              <label className='btn' htmlFor="classTitle">- 클래스 제목 : </label>
              {lessonDetail.lessonName}<br />
            </p>

            <p >
              <label className='btn' htmlFor="classStartDay">- 클래스 시작일 : </label>
              {lessonDetail.lessonSchedule}<br />
            </p>

            <p>
              <label htmlFor="classStudentNum">- 인원 : &nbsp;</label>
              <input defaultValue='1' className='styled-input' type='number' id='classStudentNum'></input>
            </p>

            <p>
              <label className='btn' htmlFor="classCost">- 클래스 가격 : </label>
              {lessonDetail.price}<br />
            </p>

            <button className='btn w-btn-indigo-outline w-btn-green styled-input' onClick={() => ""}>CART</button>

          </fieldset>
          <hr />
          <div style={{ textAlign: "center" }}>
            <img src="/images/boonga3.jpeg" alt='???' width="800" />
            <img src="/images/boonga2.jpeg" alt='???' width="800" />
          </div>
        </form>
      </BasicLayout>
    </div>

  )

}

export default LessonDetail;