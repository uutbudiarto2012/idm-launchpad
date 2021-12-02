import { DummyImage } from '../../../assets'
import './Trending.scss'
import TrendingItem from './TrendingItem'
const Trending = () => {
  return (
    <div className="_trending">
      <div className="container">
        <div className="wrapper">
          <h3 className="title-section text-center my-4">Trending</h3>
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <TrendingItem src={DummyImage} title="Unknown 01" value="100 BNB" />
            </div>
            <div className="col-lg-3">
              <TrendingItem src={DummyImage} title="Unknown 02" value="95 BNB" />
            </div>
            <div className="col-lg-3">
              <TrendingItem src={DummyImage} title="Unknown 03" value="50 BNB" />
            </div>
            <div className="col-lg-3">
              <TrendingItem src={DummyImage} title="Unknown 04" value="15 BNB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
