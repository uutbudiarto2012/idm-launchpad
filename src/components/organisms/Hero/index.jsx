import './Hero.scss'
import {Button} from '../../atoms'
const Hero = () => {
  return (
    <section className="_hero">
      <div className="container">
        <div className="wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1 className="title my-3">
                Get early access to <br /> the ideas of tomorrow.
              </h1>
              <h2 className="sub-title my-3">safest launcpad.</h2>
              <p className="desc my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro cum sequi culpa qui obcaecati natus eveniet, temporibus perspiciatis repellendus.
              </p>
              <div className="d-flex justify-content-around mt-5">
                <Button type="link" to="/create?step=1" w="100%" h={50} className="btn-yellow mx-3" title="Create" />
                <Button type="link" to="/list" w="100%" h={50} className="btn-yellow mx-3" title="Launchpad List" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
