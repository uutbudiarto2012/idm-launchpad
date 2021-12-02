import './Button.scss'
import {Link} from 'react-router-dom'
const Button = ({ w, h, className, title, onClick,to }) => {
  return (
    <Link onClick={onClick} className={className} to={to} style={{ width: w, height: h }}>{title}</Link>
  )
}

export default Button
