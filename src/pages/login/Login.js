import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ form, onInput, onLogin, error }) => {
  const { email, password } = form;

  return (
    <form className='login_index' method='post' onSubmit={onLogin}>
      <input
        className='logintext'
        name='email'
        value={email}
        placeholder='사용자 이메일 또는 아이디'
        onChange={onInput}
      />
      <input
        className='logintext'
        name='password'
        value={password}
        placeholder='비밀번호'
        onChange={onInput}
      />
      <button type='submit' className='loginbtn'>
        로그인
      </button>
      <Link to='/register'>
        <button type='button' className='gosignupbtn'>
          회원 가입
        </button>
      </Link>
      {error && <span>{error}</span>}
    </form>
  );
};

export default Login;
