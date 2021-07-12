import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './vaccine.module.css';
import VideoContainer from '../components/VideoContainer';
import { StaticImage } from 'gatsby-plugin-image';

const vaccine = () => (
  <Layout>
    <Seo title="ワクチンについて" />
    <article className={styles}>
      <h1>ワクチンについて</h1>
      <p>
        今はファイザー製とモデルナ製の接種がおこなわれています。非常に発症予防効果が高いですが、変異株についての効果はやや低下してきているようです。
      </p>
      <p>
        いずれもこれまで許可されたことのないmRNAワクチンで、緊急使用許可のもと使用が開始されたものであるので、長期的なリスクは不明であり心配です。
      </p>
      <p>
        打つか打たないかは自分の年齢等の状況や最新の添付文書等を確認の上、判断すべきです。
      </p>

      <VideoContainer url="https://www.youtube.com/embed/eSUUh0IE-Po" />

      <h2>ファイザー製のコロナウイルス（SARS-CoV-2）ワクチン</h2>
      <p>
        2021年7月7日に本剤接種後に、心筋炎、心膜炎の報告について
        <a
          href="https://www.pfizer.co.jp/pfizer/notification/documents/20210707.pdf"
          target="_blank"
          rel="noreferrer"
        >
          添付文書に追記
        </a>
        がおこなわれました。
      </p>
      <blockquote className={styles.blockquote}>
        8.重要な基本的注意 8.1～8.5 省略 8.6
        本剤との因果関係は不明であるが、本剤接種
        後に、心筋炎、心膜炎が報告されている。被接種
        者又はその保護者に対しては、心筋炎、心膜炎が
        疑われる症状（胸痛、動悸、むくみ、呼吸困難、
        頻呼吸等）が認められた場合には、速やかに医師
        の診察を受けるよよう事前に知らせること。 ［15.1.1 参照］
      </blockquote>
      <blockquote className={styles.blockquote}>
        15.その他の注意 15.1 臨床使用に基づく情報 15.1.1
        海外において、因果関係は不明である が、コロナウイルス修飾ウリジン RNA
        ワクチン （SARS-CoV-2）接種後に心筋炎、心膜炎が報告
        されている。報告された症例の多くは若年男性 であり、特に 2
        回目接種後数日以内に発現して いる。また、大多数の症例で、入院による安静
        臥床により症状が改善している１）。［8.6 参照］
      </blockquote>
      <p>最新の添付文書は以下から確認できます。</p>
      <ul>
        <li>
          <a
            href="https://www.pmda.go.jp/PmdaSearch/iyakuDetail/GeneralList/631341D"
            target="_blank"
            rel="noreferrer"
          >
            コミナティ筋注
          </a>
        </li>
      </ul>

      <h2>モデルナ製のコロナウイルス（SARS-CoV-2）ワクチン</h2>
      <p>最新の添付文書は以下から確認できます。</p>
      <ul>
        <li>
          <a
            href="https://www.pmda.go.jp/PmdaSearch/iyakuDetail/GeneralList/631341E"
            target="_blank"
            rel="noreferrer"
          >
            ＣＯＶＩＤ－１９ワクチンモデルナ筋注
          </a>
        </li>
      </ul>

      <h2>アストラゼネカ製のコロナウイルス（SARS-CoV-2）ワクチン</h2>
      <p>最新の添付文書は以下から確認できます。</p>
      <ul>
        <li>
          <a
            href="https://www.pmda.go.jp/PmdaSearch/iyakuDetail/GeneralList/631341F"
            target="_blank"
            rel="noreferrer"
          >
            バキスゼブリア筋注
          </a>
        </li>
      </ul>

      <h2>私の考え</h2>
      <p>
        2021/7/5時点のデータ
        <a
          href="http://www.ipss.go.jp/projects/j/Choju/covid19/index.asp"
          target="_blank"
          rel="noreferrer"
        >
          (情報源：国立社会保障・人口問題研究所)
        </a>
        を見ると、年代別の死亡者は若年層では非常に少ないため、未成年への接種は控えたほうがよいと考えます。
      </p>
      <StaticImage
        src="../images/pyramid.png"
        width={710}
        height={521}
        placeholder={'Blurred'}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="死亡者性・年齢階級構造（2021/7/5時点）"
      />

      <VideoContainer url="https://www.youtube.com/embed/XE_92LP-Ycs" />
    </article>
  </Layout>
);

export default vaccine;
