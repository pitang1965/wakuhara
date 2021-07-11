import React from 'react';
import { Link } from 'gatsby';
import './FooterNavi.module.css';

const FooterNavi = () => {
  return (
    <nav>
      <Link to ="/">ホーム</Link>
      <Link to="/wakuhara-companys">ワクハラ企業一覧</Link>
      <Link to="/mask">マスク</Link>
      <Link to="/pcr">PCR検査</Link>
    </nav>
  );
};

export default FooterNavi;
