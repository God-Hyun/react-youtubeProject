import React, { useState } from "react";
import useStore from "../store";
import "./Login.css";

function Login({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useStore();

  const adminUserInfo = {
    username: "admin",
    password: "1234",
  };

  const onLogin = () => {
    if (username === adminUserInfo.username && password === adminUserInfo.password) {
      login(username, password);
      alert("admin 로그인 성공");
      onClose();
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
        <button className="close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default Login;
