import BasicLaylout from "../../layouts/BasicLayout";
import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const ApiTest = () => {
    const [newMember, setNewMember] = useState({
        hostNum: "",
        password: "",
        hostName: "",
        phoneNum: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewMember((prevNewMember) => ({
            ...prevNewMember,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 방지

        if (!newMember.hostNum) {
            alert("사업자번호를 입력해주세요.");
            return;
        }

        if (!/^\d{10}$/.test(newMember.hostNum)) {
            alert("사업자번호는 숫자 10자리로 입력해주세요.");
            return;
        }

        if (!newMember.password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        if (newMember.password.length < 6 || newMember.password.length > 12) {
            alert("비밀번호는 6자리 이상 12자리 이하로 입력해주세요.");
            return;
        }

        if (!newMember.hostName) {
            alert("상호명을 입력해주세요.");
            return;
        }

        if (!newMember.phoneNum) {
            alert("전화번호를 입력해주세요.");
            return;
        }

        if (!/^\d+$/.test(newMember.phoneNum)) {
            alert("전화번호는 숫자만 입력해주세요.");
            return;
        }

        try {
            // 사업자 등록번호 확인 API 요청
            const response = await axios.post("/api/hostNew", {
                hostNum: newMember.hostNum,
                password: newMember.password,
                hostName: newMember.hostName,
                phoneNum: newMember.phoneNum,
            });

            if (response.data.alertMessage) {
                alert(response.data.alertMessage);
            }

            if (response.data.successMessage) {
                console.log("Form submitted successfully:", response.data.successMessage);

                const { hostNum, hostName } = response.data;
                localStorage.setItem("hostName", newMember.hostName); // 사용자 이름을 로컬 스토리지에 저장
                navigate("/host/login");
            }
        } catch (error) {
            if (error.response) {
                // 서버 응답이 에러인 경우
                console.error("Error submitting form:", error.response.data);
                alert("에러 발생");
            } else if (error.request) {
                // 요청이 전혀 이루어지지 않은 경우
                console.error("Request error:", error.request);
                alert("에러 발생");
            } else {
                // 기타 에러
                console.error("Unexpected error:", error.message);
                alert("에러 발생");
            }
        }
    };

    // 사업자 등록번호 확인 함수
    const checkBusinessRegistrationNumber = async () => {
        const serviceKey = "jNJwXhsGE%2BR4ssYCiosHjGYR%2FzyXPcxd0kTjAMRluKEZ7UNjAf0G37HlXVE5YGQBs5LgDaSfEdI1K%2F%2B3%2Buf1rQ%3D%3D";
        const data = {
            b_no: [newMember.hostNum],
        };

        try {
            const response = await axios.post(`https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${serviceKey}`, JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            });

            console.log("사업자 등록번호 확인 결과:", response.data);
            // 여기서 결과에 따라 필요한 로직을 추가하면 됩니다.
        } catch (error) {
            console.error("사업자 등록번호 확인 에러:", error);
            alert("사업자 등록번호 확인 중 에러가 발생했습니다.");
        }
    };

    useEffect(() => {
        // 페이지가 로드될 때 사업자 등록번호 확인 함수를 호출합니다.
        checkBusinessRegistrationNumber();
    }, []);

    return (
        <>
            <BasicLaylout>
                <div class="loginBox">
                    <h1>
                        <b>회원가입</b>
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <span className="formName">사업자번호</span>
                        <input
                            className="formInfo"
                            type="text"
                            placeholder="사업자번호를 입력해주세요"
                            name="hostNum"
                            onChange={handleInputChange}
                            value={newMember.hostNum}
                        />

                        <span className="formName">비밀번호</span>
                        <input
                            className="formInfo"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            name="password"
                            onChange={handleInputChange}
                            value={newMember.password}
                        />

                        <span className="formName">상호명</span>
                        <input
                            className="formInfo"
                            type="text"
                            placeholder="상호명을 입력해주세요"
                            name="hostName"
                            onChange={handleInputChange}
                            value={newMember.hostName}
                        />

                        <span className="formName">전화번호</span>
                        <input
                            className="formInfo"
                            type="text"
                            placeholder="전화번호를 입력해주세요"
                            name="phoneNum"
                            onChange={handleInputChange}
                            value={newMember.phoneNum}
                        />

                        <div className="loginBtn">
                            <button type="submit">회원가입</button>
                        </div>
                    </Form>
                </div>
            </BasicLaylout>
        </>
    );
};

export default ApiTest;
