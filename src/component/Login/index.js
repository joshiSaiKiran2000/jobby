import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onUserName = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const Url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(Url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-Container">
        <div className="form-Container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="logo"
          />
          <form className="form">
            <label htmlFor="username"> USERNAME</label>
            <input id="username" onChange={this.onUserName} />
            <label htmlFor="password"> PASSWORD</label>
            <input id="password" onChange={this.onPassword} />
            <button type="button" onClick={this.onLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
