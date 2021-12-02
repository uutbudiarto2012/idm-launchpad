import { BscScan, Certik, CMC, Gecko, Pancake } from '../../../assets'
import './Footer.scss'
import { FaInstagram, FaTelegram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="_footer">
      <div className="container">
        <div className="wrapper">
          <div className="row mb-4 justify-content-center">
            <div className="col-lg-2 col">
              <div className="coin-item">
                <img src={BscScan} alt="" className="icon img-fluid" />
              </div>
            </div>
            <div className="col-lg-2 col">
              <div className="coin-item">
                <img src={Certik} alt="" className="icon img-fluid" />
              </div>
            </div>
            <div className="col-lg-2 col">
              <div className="coin-item">
                <img src={Pancake} alt="" className="icon img-fluid" />
              </div>
            </div>
            <div className="col-lg-2 col">
              <div className="coin-item">
                <img src={CMC} alt="" className="icon img-fluid" />
              </div>
            </div>
            <div className="col-lg-2 col">
              <div className="coin-item">
                <img src={Gecko} alt="" className="icon img-fluid" />
              </div>
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-1">
              <div className="social-item">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTwitterSquare />
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="social-item">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="social-item">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="col-1">
              <div className="social-item">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center copyright">
            Copyright © 2021 IDM Coop, All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
