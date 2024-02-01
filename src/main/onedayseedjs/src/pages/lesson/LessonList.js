import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicLayout from "../../layouts/BasicLayout"
import axios from 'axios';

function LessonList() {

  const [lessonList, setLessonList] = useState([]);
  const navigate = useNavigate();

  const showLessonList = async () => {
    try {
      const response = await axios.get('/user/lesson/list');
      setLessonList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showLessonList();
  }, []);

  const handleLessonClick = (lessonId) => {
    // 각 레슨의 상세 페이지로 이동
    navigate('/lesson/detail', { state: { lessonId: lessonId } });
  };

  return (
    <div>
      <BasicLayout>
        <section>
          <div className="container text-center">
            <div className="row">
              {lessonList.map((lesson) => (
                <div className="col-lg-6" key={lesson.lessonId}>
                  <div className="card" style={{ width: '30rem' }}>
                    <img src="/boonga.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{lesson.lessonName}</h5>
                      <h5 className="card-title">{lesson.lessonCategory}</h5>
                      <button onClick={() => handleLessonClick(lesson.lessonId)}>
                        상세 보기
                      </button>
                    </div>
                  </div><br/>
                </div>
              ))}
            </div>
          </div>
        </section>
    
      </BasicLayout>
    </div>
  );
}

export default LessonList;