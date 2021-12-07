import { Link } from "react-router-dom"

const StepTwo = () => {
  return (
    <>
      <div className="step-info">
        <h3 className="step-title">Defi Launchpad Info</h3>
        <span className="desc">
          Information that you want to raise, that should be enter all details youre presale
        </span>
      </div>
      <div className="form-step">
        <div className="input-wrapper desc">
          <span className="isRequired">*</span>
          <textarea  className="input-token" rows="10" placeholder="Description"></textarea>
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Presale Address" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Token Symbol" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Token Decimals" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Total Supply" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Token For Presale" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Token For Liquidity" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Presale Rate" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Listing Rate" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Soft Cap" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Hard Cap" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Unsold Token" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Presale Start Time" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Listing On" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Liquidity Percent" />
        </div>
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Liquidity Lockup Time" />
        </div>
      </div>
      <div className="action-next">
        <Link className="next-link" to="/create?step=3">NEXT</Link>
      </div>
    </>
  )
}

export default StepTwo
