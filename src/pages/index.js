import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import ContactForm from '../components/ContactForm';
import VideoContainer from '../components/VideoContainer';
import Books from '../components/Books';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="トップページ" />
      <StaticImage
        src="../images/child.jpg"
        width={1920}
        height={800}
        placeholder={'Blurred'}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A boy being injected"
        style={{ marginBottom: `1.45rem` }}
      />
      <h1>ワクハラ駄目！絶対！</h1>
      <p>
        2020年12月に改正され施行された
        <a href="https://elaws.e-gov.go.jp/document?lawid=323AC0000000068">
          予防接種法
        </a>
        では、予防接種は国民の「努力義務」とされました。実質は「任意」であり、「国民は打つ、打たないを選択できる」。
      </p>
      <p>
        接種していない人への差別、職場や学校での不利益な取り扱いは断じて許されません。
      </p>
      <p>
        そのような不当な取り扱い（以下、ワクハラ）を見つけましたら、ぜひ「ワクハラ通報フォーム」からご連絡ください。
      </p>

      <VideoContainer url="https://www.youtube.com/embed/77VGhVNjct4" />

      <ContactForm />

      <p>
        <Link to="/wakuhara-companys/">ワクハラ企業一覧へ</Link> <br />
      </p>

      <Books />
    </Layout>
  );
};

export default IndexPage;
