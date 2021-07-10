import React from 'react';
import { Link } from 'gatsby';
import './FooterNavi.module.css';

const FooterNavi = () => {
  return (
    <nav>
      <Link to ="/">ホーム</Link>
      <Link to="/wakuhara-companys">ワクハラ企業一覧へ</Link>
      <Link to="/mask">マスクについて</Link>
    </nav>
  );
};

export default FooterNavi;
