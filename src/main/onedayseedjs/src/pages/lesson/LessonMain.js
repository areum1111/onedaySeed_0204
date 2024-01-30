import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BasicLayout from "../../layouts/BasicLayout"

function LessonMain() {

  const [lessons, setLessons] = useState([]);

  // useEffect(() => {
  //   const showLesson = async () => {
  //     try {
  //       const response = await axios.get('/host/lesson/main');
  //       setLessons(response.data);
  //     } catch (error) {
  //       console.error('에러 발생:', error);
  //     }
  //   };

  //   showLesson();
  // }, []);// 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  const showLesson = async () => {

    try {
      const response = await axios.get("/host/lesson/main");
      setLessons(response.data);
    } catch (error) {
      console.log("무슨 에러? " + error);
    }
  };

  useEffect(() => {
    showLesson();
  }, []);


  return (
    <div>
      <BasicLayout>
        <section>
          <div>
            <b>
              <span className="title-word">등록하신 CLASS 목록 및 현황 </span>
              <Link to="/lesson/new" className="w-btn w-btn-indigo" type="button">
                클래스 등록
              </Link>
            </b>
          </div>
          {lessons && lessons.length > 0 ? (
            lessons.map((lesson) => (
              <div key={lesson.id}>
                <img src="#" width="200px" height="200px" alt="fox" />
                <Link to={`/lesson/${lesson.id}`}>
                  {lesson.lessonName} / {lesson.price} 원/ {lesson.lessonSchedule}
                </Link>
              </div>
            ))
          ) : (
            <p>등록한 클래스가 없습니다.</p>
          )}
        </section>
      </BasicLayout>
    </div>
  );
}

export default LessonMain;