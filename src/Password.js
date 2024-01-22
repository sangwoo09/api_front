import React, { useState } from 'react';
import "./login.css";
import Login from './Login';
import axios from 'axios';

function Password(){
    const [isPassword, setPassword] = useState(false);
    const [isReturn, setReturn] = useState(false);
    
    const onPassword = () => {

        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;

        axios({
            url : '/password',
            params : {
                id : id,
                password : password
            }
        })
        .then((res) => {
            setPassword(true)
        })
        .catch((error) => {
            if(error.response.status === 503) {
                alert('저장되지 않은 아이디 입니다.')
            }else if(error.response.status === 500) {
                alert('API통신 장애')
            }
        });

    }

    const onReturn = () => {
        setReturn(true)
    }

    return(
        isPassword ?
        <password/>
        :
        
        isReturn ?
        <Login/>
        :
        
        <div className="login">
            <h2>패스워드 찾기</h2>
            <p>ID : <input type='text' id='id' placeholder='아이디를 입력해주세요'/></p>
            <button onClick={onPassword} className="btn">찾기</button>
            <button onClick={onReturn} className="btn">돌아가기</button>
        </div>
    );
}

export default Password;