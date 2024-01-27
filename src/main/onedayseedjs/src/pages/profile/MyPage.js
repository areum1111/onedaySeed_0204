import { Button, Form } from 'react-bootstrap';
import BasicLayout from '../../layouts/BasicLayout';

import './userProfile.css'

const MyPage = ()=>{
  return (

    <>
      <BasicLayout>
        <h1 id="title">프로필 관리</h1>
        
        <Form >
          <img src="/profile.jpg" width="200px" height="200px" alt="프로필 이미지" />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className='name'>이름님, 반가워요!</Form.Label>
            {/* <Form.Control type="text" name="userId" value={users.userId} disabled /> */}
          </Form.Group>
          <Button id="modify" variant="primary" type="submit">
            프로필 수정
          </Button>
          <Button id="modify" variant="primary" type="submit">
             장바구니
          </Button>
          <Button id="modify" variant="primary" type="submit">
            구매내역 
          </Button>
        </Form>
        </BasicLayout>
      </>

  );
}

export default MyPage;