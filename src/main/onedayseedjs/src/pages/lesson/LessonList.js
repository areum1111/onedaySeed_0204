import React, { useEffect, useState } from 'react';
import BasicLayout from "../../layouts/BasicLayout"
import axios from 'axios';

function LessonList2() {

  const [lessonList, setLessonList] = useState([]);

  const showLessonList = async () => {
    try {
      const response = await axios.get('/host/lesson/list');
      setLessonList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showLessonList();
  }, []);



  return (
    <div>
      <BasicLayout>
        <section>
          <div className="container text-center">
            <div className="row">
              {lessonList.map((lesson) => (
                <div className="col-lg-6" key={lesson.lessonId}>
                  <div className="card" style={{ width: '30rem' }}>
                    <img src="/images/boonga.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{lesson.lessonName}</h5>
                      <h5 className="card-title">{lesson.lessonCategory}</h5>
                      <a href={`/lesson/detail/${lesson.lessonId}`} className="btn btn-primary">
                        구매 상세 보기
                      </a>
                    </div>
                  </div><br />
                </div>
              ))}

              <div className="col-lg-6" >
                <div className="card" style={{ width: '30rem' }}>
                  <img style={{ width: '25rem', height: '25rem', margin: '0 auto' }} src="/images/girlsgen.jpeg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">소녀시대의 노래교실</h5>
                    <a href={`/lesson/detail/`} className="btn btn-primary">
                      구매 상세 보기
                    </a>
                  </div>
                </div><br />
              </div>

            </div>
          </div>
        </section>

      </BasicLayout>
    </div>
  );
}

export default LessonList2;