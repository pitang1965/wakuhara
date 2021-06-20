import React from 'react';
import * as styles from './Books.module.css';

const Books = () => {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{
        __html: `
        <div style="display: flex;"><div style="margin-right: 10px;"><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4908925763&linkId=40e74400c69a2d363ae23d78f8996f89"></iframe></div><div style="margin-right: 10px;"><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4908925666&linkId=2c69cf8cf8cf883547cc8ef5ebdd1a7c"></iframe></div><div style="margin-right: 10px;"><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=pitang1965-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4864719942&linkId=bbc6b97b5ce01dc7fbe193cc43f74c31"></iframe></div></div>
        `,
      }}
    />
  );
};

export default Books;
