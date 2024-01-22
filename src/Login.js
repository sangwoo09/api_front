import React, { useState } from 'react';
import App from './App';
import "./login.css";
import axios from 'axios';
import Signup from './Signup';
import Password from './Password';

function Login() {

    const [isLogin, setLogin] = useState(false);
    const [isSignup, setSignup] = useState(false);
    const [isPassword, setPassword] = useState(false);

    const onLogin = () => {

        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;
        
        axios({
            url : '/login',
            params : {
              id : id,
              password : password
            }
        })
        .then((res) => {
            setLogin(true)
        })
        .catch((error) => {
            if(error.response.status === 503) {
                alert('아이디 또는 패스워드 확인')
            } else if(error.response.status === 500) {
                alert('API통신 장애')
            }
        });
    }

    const onSignup = () => {
        setSignup(true)
    }

    const onPassword = () => {
        setPassword(true)
    }

    return(
        // isLogin이 true라면?
        isLogin ?
        <App />
        :

        isSignup ?
        <Signup />
        :

        isPassword ?
        <Password />
        :

        <div className="login">
            <h2>로그인</h2>
            <p>ID : <input type='text' id='id' placeholder='아이디'/></p>
            <p>PW : <input type='password' id='password' placeholder='비밀번호'/></p>
            <button onClick={onLogin} className="btn">로그인</button>
            <button onClick={onSignup} className="btn">회원가입</button><br/>
            <button onClick={onPassword}>비밀번호 찾기</button>
        </div>
    )
        
}
  
  export default Login;