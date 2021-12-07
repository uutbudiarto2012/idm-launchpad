import { Link } from "react-router-dom"

const StepOne = () => {
  return (
    <>
      <div className="step-info">
        <h3 className="step-title">Verify Token</h3>
        <span className="desc">Enter the token address and verify token</span>
      </div>
      <div className="form-step">
        <div className="input-wrapper">
          <span className="isRequired">*</span>
          <input type="text" className="input-token" placeholder="Token Address" />
          <div className="action">
            <a href="#/" className="link-action">Select Token</a>
            <a href="#/" className="link-action">Create Token</a>
          </div>
        </div>
        <span className="text">Create pool fee: 1 BNB</span>
      </div>
      <div className="action-next">
        <Link className="next-link" to="/create?step=2">NEXT</Link>
      </div>
    </>
  )
}

export default StepOne
