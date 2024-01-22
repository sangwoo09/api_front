import React, { useState } from 'react';
import "./login.css";
import Login from './Login';
import axios from 'axios';

function Signup(){
    const [isSignup, setSignup] = useState(false);
    const [isReturn, setReturn] = useState(false);
    
    const onSignup = () => {

        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;

        axios({
            url : '/signup',
            params : {
                id : id,
                password : password
            }
        })
        .then((res) => {
            setSignup(true)
        })
        .catch((error) => {
            if(error.response.status === 503) {
                alert('중복된 아이디 입니다.')
            }else if(error.response.status === 500) {
                alert('API통신 장애')
            }
        });

    }

    const onReturn = () => {
        setReturn(true)
    }

    return(
        isSignup ?
        <Login/>
        :

        isReturn ?
        <Login/>
        :
        
        <div className="login">
            <h2>회원가입</h2>
            <p>ID : <input type='text' id='id' placeholder='아이디를 입력해주세요'/></p>
            <p>PW : <input type='password' id='password' placeholder='비밀번호를 입력해주세요'/></p>
            <button onClick={onSignup} className="btn">회원가입</button>
            <button onClick={onReturn} className="btn">돌아가기</button>
        </div>
    );
}

export default Signup;