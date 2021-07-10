import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import VideoContainer from '../components/VideoContainer';

const mask = () => (
  <Layout>
    <Seo title="マスクについて" />
    <h1>マスクについて</h1>
    <p>
      令和2年(2020年)の春頃から日本もほとんどの人がマスクを付けるというそれまでにない状況になりました。
    </p>
    <p>
      しかし、少なくとも2020年2月まで日本医師会はかぜでもない人が通常の環境でマスクを付ける必要性はないと言っていて、それが常識だったのです。ところが、厚生労働省も「新しい生活様式」として、マスクの着用が基本であると言っています。それでも、熱中症になるような状況では外すよう呼びかけています。
    </p>
    <ul>
      <li>
        <a
          href="https://www.tokyo.med.or.jp/wp-content/uploads/press_conference/application/pdf/20200227-3.pdf"
          target="_blank"
          rel="noreferrer"
        >
          COVID-19 東京都医師会からのお知らせ - 日本医師会(2020年2月25日)
        </a>
      </li>
      <li>
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000121431_coronanettyuu.html"
          target="_blank"
          rel="noreferrer"
        >
          「新しい生活様式」における熱中症予防行動のポイントをまとめました（新型コロナウイルス感染症）｜厚生労働省
        </a>
      </li>
    </ul>
    <VideoContainer url="https://www.youtube.com/embed/o3PwzXvuzO4" />
    <p>マスクの効果は限定的であることと正しく使うことが肝要。運動会や真夏の通学に子供にマスクを付けさせるのは避けたいですね。</p>
  </Layout>
);

export default mask;
