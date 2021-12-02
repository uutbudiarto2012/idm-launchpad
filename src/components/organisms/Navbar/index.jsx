import { useState } from 'react'
import { Avatar, Logo } from '../../../assets'
import { Button } from '../../atoms'
import './Navbar.scss'
const Navbar = () => {
  const [isLogin] = useState(true)
  return (
    <section className="_navbar">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <img src={Logo} alt="" className="logo" />
          </div>
          <div className="right">
            {
              isLogin ? (
                <div className="menu-logged-in dropstart">
                  <button className="profile" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                    <img className="img" src={Avatar} alt="" />
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/#">Profile</a></li>
                    <li><a className="dropdown-item" href="/#">Logout</a></li>
                  </ul>
                </div>
              ) : (
                <Button
                  h={45} w={120}
                  className="btn-yellow"
                  title="Connect"
                />
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
