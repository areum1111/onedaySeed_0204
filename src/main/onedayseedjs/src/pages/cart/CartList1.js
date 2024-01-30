import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';
import "bootstrap-icons/font/bootstrap-icons.css";
import './cartList.css';

import axios from "axios";

// Cart에서 넘긴 item
function CartList() {


    return (
        <div className='all'>
            <div className='thumb'>
                <img src="/thumb.jpg" width='300px' height='278px' />
            </div>
            <Form>
                <CloseButton className='closeButton' />
                <Form.Group as={Row} className="mb-3" controlId="formGroupName">
                    <Form.Label column sm="3">클래스</Form.Label>
                    <Col sm="9"><Form.Control plaintext readOnly value="베이킹"/></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formGroupDate">
                    <Form.Label column sm="3">날짜</Form.Label>
                    <Col sm="9"><Form.Control plaintext readOnly value="2022-01-02"/></Col>
                </Form.Group>
                <div className='caret'>
                    <i className="bi bi-caret-down-fill" />
                    <i className="bi bi-caret-up-fill" />
                </div>
                <Form.Group as={Row} className="mb-3" controlId="formGroupPerson">
                    <Form.Label column sm="3">인원</Form.Label>
                    <Col sm="9"><Form.Control value="1"/></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formGroupPrice">
                    <Form.Label column sm="3">가격</Form.Label>
                    <Col sm="9"><Form.Control plaintext readOnly value="10000" /></Col>
                </Form.Group>
                <Button id="modify" variant="primary" type="submit">수정</Button>
                <Button id="order" variant="success" >결제</Button>
            </Form>
        </div>
        
    );
}

export default CartList;