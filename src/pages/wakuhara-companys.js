import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WakharaCompanys = () => (
  <Layout>
    <Seo title="ワクハラ企業一覧" />
    <h1>ワクハラをしている会社の一覧です。</h1>
    <p>現在、情報収集中・・・</p>
    <Link to="/">ホームページに戻る</Link>
  </Layout>
)

export default WakharaCompanys
