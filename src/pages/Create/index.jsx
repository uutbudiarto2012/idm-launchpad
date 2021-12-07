import { useSearchParams } from 'react-router-dom';
import { StepFour, StepIndicator, StepOne, StepThree, StepTwo } from '../../components';
import './Create.scss';
const Create = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step')
  return (
    <div className="_create">
      <div className="container">
        <div className="wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="title">Please Finish this step</div>
              <StepIndicator step={step} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {
                step === "1" && <StepOne />
              }
              {
                step === "2" && <StepTwo />
              }
              {
                step === "3" && <StepThree />
              }
              {
                step === "4" && <StepFour />
              }
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="message mt-5">(*) is required field</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
