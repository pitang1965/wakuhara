import React from 'react';
import { Link } from 'gatsby';
import * as styles from './FooterNavi.module.css';

const FooterNavi = () => {
  return (
    <nav>
      <Link to ="/" className={styles.growShadow }>ホーム</Link>
      <Link to="/wakuhara-companys" className={styles.growShadow }>ワクハラ企業一覧</Link>
      <Link to="/mask" className={styles.growShadow }>マスク</Link>
      <Link to="/pcr" className={styles.growShadow }>PCR検査</Link>
    </nav>
  );
};

export default FooterNavi;
