import {Component} from 'react'
import Cookies from 'js-cookie'

class JobDetails extends Component {
  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)

    const Url = `https://apis.ccbp.in/jobs/:${id}`
    // const response = await Url.json()

    // console.log(response)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(Url, options)
    const fetchedJobsData = await response.json()
    console.log(fetchedJobsData)
  }

  render() {
    // console.log(id)

    return (
      <div>
        <h1>hellow</h1>
      </div>
    )
  }
}

export default JobDetails
