import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './pcr.module.css';

const pcr = () => (
  <Layout>
    <Seo title="PCR検査について" />
    <article>
      <h1>PCR検査について</h1>
      <p>PCR検査は新型コロナウイルスに対しておこなわれています。</p>
      <p>
        この検査はSARSコロナウイルス核酸キットの添付文書を読めばわかるとおりに、新型コロナウイルスへの感染の診断には使えません。あくまでもその補助に使用できます。このことは抗原キットも同様です。
      </p>
      <blockquote className={styles.blockquote}>
        生体試料中の SARS-CoV-2 RNA の検出（SARS-CoV-2 感染の診断 の補助）
      </blockquote>
      <blockquote className={styles.blockquote}>
        本製品での判定が陰性であっても、疾患としての
        SARS-CoV-2感染を否定するものではない。
      </blockquote>
      <p>
        つまりこの検査で陽性だからといって新型コロナウイルスに感染したわけでもないし、陰性だからといって感染していないことの証明にもなりません。
      </p>

      <p>以下にSARSコロナウイルス核酸キットの添付文書を示します。</p>
      <ul>
        <li>
          <a
            href="https://www.info.pmda.go.jp/downfiles/ivd/PDF/840863_30200EZX00023000_A_01_04.pdf"
            target="_blank"
            rel="noreferrer"
          >
            TaqPath 新型コロナウイルス(SARS-CoV-2) リアルタイム PCR 検出キット
          </a>
        </li>
        <li>
          <a
            href="https://www.info.pmda.go.jp/downfiles/ivd/PDF/340085_30200EZX00065000_A_01_03.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Ampdirect 2019-nCoV 検出キット
          </a>
        </li>
        <li>
          <a
            href="https://www.info.pmda.go.jp/downfiles/ivd/PDF/400777_30200EZX00076000_A_01_02.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Takara SARS-CoV-2 ダイレクト PCR 検出キット
          </a>
        </li>
      </ul>
      <p>
        2021-07-21 米国のCDC
        (アメリカ疾病予防管理センター)は新型コロナ専用のPCR検査の緊急使用許可を取り下げる発表"
        <a
          href="https://www.cdc.gov/csels/dls/locs/2021/07-21-2021-lab-alert-Changes_CDC_RT-PCR_SARS-CoV-2_Testing_1.html"
          target="_blank"
          rel="noreferrer"
        >
          Lab Alert: Changes to CDC RT-PCR for SARS-CoV-2 Testing
        </a>
        "をしました。
      </p>
      <blockquote
        className={styles.blockquote}
        cite="https://www.cdc.gov/csels/dls/locs/2021/07-21-2021-lab-alert-Changes_CDC_RT-PCR_SARS-CoV-2_Testing_1.html"
      >
        <p>
          2021年12月31日以降、CDCは、SARS-CoV-2のみを検出するために2020年2月に初めて導入されたアッセイであるCDC
          2019-新型コロナウイルス (2019-nCoV) リアルタイム RT-PCR
          診断パネルの米国食品医薬品局（FDA）への緊急使用許可（EUA）の申請を取り下げる。
        </p>
      </blockquote>

      <h2>私の考え</h2>
      <p>
        <a
          href="https://media-virus.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          マスメディア
        </a>
        が陽性者数を感染者数として報道を続けていますが、これは完全に間違いです。コロナウイルスの感染や死亡者数の推移などはTVを見るのを止めて、
        <a
          href="https://github.com/CSSEGISandData/COVID-19"
          target="_blank"
          rel="noreferrer"
        >
          ジョン・ホプキンス大学のCOVID-19データリポジトリ
        </a>
        <a
          href="https://github.com/CSSEGISandData/COVID-19"
          target="_blank"
          rel="noreferrer"
        >
          JHU CSSE COVID-19 Data
        </a>
        (
        <a
          href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
          target="_blank"
          rel="noreferrer"
        >
          PC用ダッシュボード
        </a>
        )(
        <a
          href="http://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61"
          target="_blank"
          rel="noreferrer"
        >
          モバイル用ダッシュボード
        </a>
        )などで世界と日本の統計情報を比較して分析しましょう。
      </p>
    </article>
  </Layout>
);

export default pcr;
