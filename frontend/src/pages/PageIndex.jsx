import {Link} from 'react-router-dom'

import PageIndexH1 from "../components/pages/index/PageIndexH1"

export default function PageIndex() {
  return (
    <>
      <PageIndexH1 />
      {/* TODO Linkを固定にするには？layoutの構築 */}
      <Link to="/">Index</Link>
      <Link to="/test/">Test</Link>
    </>
  )
}