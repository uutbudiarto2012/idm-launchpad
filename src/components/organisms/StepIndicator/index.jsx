import './StepIndicator.scss'
const StepIndicator = ({ step }) => {
  return (
    <div className="_step">
      <div className="line" />
      <div className={`step-item ${step === "1" && 'active'}`}>1</div>
      <div className={`step-item ${step === "2" && 'active'}`}>2</div>
      <div className={`step-item ${step === "3" && 'active'}`}>3</div>
      <div className={`step-item ${step === "4" && 'active'}`}>4</div>
    </div>
  )
}

export default StepIndicator
