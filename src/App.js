import React, { useState } from 'react';
import "./login.css";
import axios from 'axios';

function App() {
  
  const [msg, setMsg] = useState(null);
  const [historyList, setHistoryList] = useState(null);
  
  const onClick = () => {
    const searchWord = document.getElementById('msg').value;
    const lang = document.getElementById('lang').value;
    axios({
      method : 'get',
      url : '/translator/save',
      params : {
        searchWord : searchWord,
        lang : lang
      }
    })
      .then((response) => {
        setMsg(response.data.message.result.translatedText);
      });
  };

  const onHistory = () => {
    axios({
      method : 'get',
      url : '/translator/list',
    })
    .then((response) => {
      setHistoryList(response.data)
      console.log(historyList)
    });
  };

  return (
    <div className="login">
        <h2>번역</h2>
        <input type="text" placeholder="번역원본" id="msg" /><br/>
        <select id="lang">
          <option value='en'>영어</option>
          <option value='ja'>일본어</option>
        </select><br/>

        <textarea type="text" placeholder="번역후" value={msg} /><br/>
        <button onClick={onClick} className="btn">번역하기</button>
        <button onClick={onHistory} className="btn">검색이력보기</button><br/>

        {/* historyList가 취득 됐다면 loop처리 취득 되지 않았다면 ""아무것도 하지 않음 */}
        {historyList ? historyList.map((history, index) =>
          <p key={index}>{index+1} 단어 : {history.searchWord} 언어 : {history.searchLang}</p>
        ) : ""}

    </div>
  );
}

export default App;