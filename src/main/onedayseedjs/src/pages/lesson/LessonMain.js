import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicLayout from "../../layouts/BasicLayout"
import "./host.css"

function LessonMain() {

  const [lessons, setLessons] = useState([]);

  const navigate = useNavigate();

  const handleClassPlus =()=>{
    navigate("/lesson/new")
  }

  useEffect(() => {
    const showLesson = async () => {
      try {
        const response = await axios.get('/host/lesson/main');
        setLessons(response.data);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };

    showLesson();
  }, []);// 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정


  return (
    <div>
      <BasicLayout>
      
          <div className='lesson-box'>
            <b>
              <h1 className="title-word">CLASS LIST</h1>
              <button id="class-btn" onClick={handleClassPlus} type="button">
                클래스 등록
              </button>
            </b>
          </div>
          {lessons && lessons.map((lesson) => (
            <div className="host-main-sell" key={lesson.id}>
              <img src="images/fox.JPG" width="200px" height="200px" alt="fox" />
              <Link className="fox-a" to={`http://localhost:3000/lesson/${lesson.id}`}>
                {lesson.lessonName} / {lesson.price} / {lesson.lessonSchedule}
              </Link>
            </div>
          ))}
        
      </BasicLayout>
    </div>
  );
}

export default LessonMain;