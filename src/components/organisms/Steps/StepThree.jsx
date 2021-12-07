import { Link } from "react-router-dom"

const StepThree = () => {
  return (
    <>
      <div className="step-info">
        <h3 className="step-title">Add Editional Info</h3>
        <span className="desc">Let people know who you are</span>
      </div>
      <div className="form-step">
        <div className="input-wrapper">
          <span className="isRequired"></span>
          <input type="text" className="input-token" placeholder="Website/Social media account" />
          <div className="option-info">
            <select className="input-token">
              <option value="">Website</option>
              <option value="">Facebook</option>
              <option value="">Twitter</option>
              <option value="">Telegram</option>
              <option value="">Instagram</option>
            </select>
          </div>
        </div>
        <div className="text-end">
          <button className="addNew">+</button>
        </div>
      </div>
      <div className="action-next">
        <Link className="next-link" to="/create?step=4">NEXT</Link>
      </div>
    </>
  )
}

export default StepThree
