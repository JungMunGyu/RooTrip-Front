import React from 'react';
import { getAccessToken, removeTokens } from '../../utils/auth';
import { logout } from '../../services/user';
import Nav from './Nav';
import Article from './Article';
import '../../styles/home/Nav.scss';

const Index = () => {
  const onRemove = async () => {
    const result = await logout(getAccessToken());

    if (result) {
      removeTokens();
      window.location.reload();
    }
  };

  return (
    <div>
      <button onClick={onRemove}>๋ก๊ทธ์์</button>
      <div className='map'>
        <Nav />
        <Article />
      </div>
    </div>
  );
};

export default Index;
