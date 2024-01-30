import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BasicLayout from "../../layouts/BasicLayout"
import axios from 'axios';

function LessonList() {



  return (
    <div>
      <BasicLayout>
        <section>
          <div class="container text-center">
            <div class="row">

              <div class="col-lg-6">
                <div class="card" style="width: 30rem;">
                  <img src="images/fox.JPG" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">여우와 함께 즐거운 시간</h5>
                    <a href="#" class="btn btn-primary">구매 상세</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BasicLayout>
    </div>

  )

}

export default LessonList;