import './header.scss'
import { images } from '../../constants'
const Header = () => {
  return (
    <div className='header'>
        <div className='header__image'>
            <img src={images.background} alt="" />
            <div className='header__info'>
              <h1>Partaw Association</h1>
              <h4>Partaw is a group of students in Pune, India. The Association is trying to show the best face of Afghan students to other nations. Partaw is an association that include best, hardworking, talent and motivated students from Afghanistan.</h4>
              <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Header
