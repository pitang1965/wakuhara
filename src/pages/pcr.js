import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import './pcr.module.css';

const pcr = () => (
  <Layout>
    <Seo title="PCR検査について" />
    <h1>PCR検査について</h1>
    <p>PCR検査は新型コロナウイルスに対しておこなわれています。</p>
    <p>
      この検査はSARSコロナウイルス核酸キットの添付文書を読めばわかるとおりに、新型コロナウイルスへの感染の診断には使えません。あくまでもその補助に使用できます。このことは抗原キットも同様です。
    </p>
    <blockquote>
      生体試料中の SARS-CoV-2 RNA の検出（SARS-CoV-2 感染の診断 の補助）
    </blockquote>
    <p>
      つまりこの検査で陽性だからといって新型コロナウイルスに感染したわけでもないし、陰性だからといって感染していないことの証明にもなりません。
    </p>
    <blockquote>
      本製品での判定が陰性であっても、疾患としての
      SARS-CoV-2感染を否定するものではない。
    </blockquote>
    <p>
      <a
        href="https://media-virus.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        マスメディア
      </a>
      が陽性者数を感染者数として報道を続けていますが、これは完全に間違いです。
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
  </Layout>
);

export default pcr;
