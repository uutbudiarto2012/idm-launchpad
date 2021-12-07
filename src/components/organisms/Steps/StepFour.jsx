import { FaFacebook, FaGlobe, FaTelegram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Avatar } from "../../../assets"

const StepFour = () => {
  return (
    <>
      <div className="step-info">
        <h3 className="step-title">Finish</h3>
        <span className="desc">
          Review Your Information
        </span>
      </div>
      <div className="form-step">
        <div className="preview-info">
          <div className="left">
            <img src={Avatar} alt="" />
          </div>
          <div className="right">
            <div className="info-additional">
              <div className="item">
                <div className="fa"><FaGlobe /></div>
                <div className="fa"><FaFacebook /></div>
                <div className="fa"><FaTelegram /></div>
                <div className="fa"><FaTwitter /></div>
              </div>
            </div>
            <p className="desc">
              Binance Cake (BCK) is a decentralized digital asset developed based on Binance. It is also certificate of entitlement to the BinanceCake community. The holder has the right to vote in the community, vote in the team, and participate in events. BinanceCake holdersshareCaketokens.  
            </p>
          </div>
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Presale Address" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Token Symbol" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Token Decimals" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Total Supply" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Token For Presale" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Token For Liquidity" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Presale Rate" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Listing Rate" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Soft Cap" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Hard Cap" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Unsold Token" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Presale Start Time" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Listing On" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Liquidity Percent" />
        </div>
        <div className="input-wrapper">
          <input type="text" className="input-token" placeholder="Liquidity Lockup Time" />
        </div>
      </div>
      <div className="action-next">
        {/* <button className="next-link">FINISH</button> */}
        <Link className="next-link" to="/finish">FINISH</Link>
      </div>
    </>
  )
}

export default StepFour
