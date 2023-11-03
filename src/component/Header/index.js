import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <div className="header-Container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="logo"
          />
        </div>
        <div>
          <ul className="header-List">
            <Link to="/" className="home-link">
              <li>Home</li>
            </Link>

            <Link to="/jobspage" className="home-link">
              <li>Jobs</li>
            </Link>
          </ul>
        </div>
        <div>
          {' '}
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
export default withRouter(Header)
