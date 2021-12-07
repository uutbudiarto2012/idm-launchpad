import { Link } from 'react-router-dom'
import { Trending } from '../../components'
import './Finish.scss'
const Finish = () => {
  return (
    <>
      <div className="py-5">
        <Trending />
        <div className="_finish">
          <div className="wrapper">
            <h1 className="cong">Congratulations</h1>
            <span className="desc">on your launchpad</span>
          </div>
          <Link to="/" className="back">BACK TO HOME</Link>
        </div>
      </div>
    </>
  )
}

export default Finish
