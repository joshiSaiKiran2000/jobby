import {Component} from 'react'
import Cookies from 'js-cookie'
import JobCard from '../JobCard'
import Header from '../Header'

// // const jobs = [
// //   {
// //     companyLogoUrl:
// //       'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
// //     employmentType: 'Full Time',
// //     id: 'd6019453-f864-4a2f-8230-6a9642a59466',
// //     jobDescription:
// //       'We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.',
// //     location: 'Bangalore',
// //     packagePerAnnum: '21 LPA',
// //     rating: 4,
// //     title: 'Backend Engineer',
// //   },
// ]

class JobsPage extends Component {
  state = {jobList: []}

  componentDidMount() {
    this.getJobsData()
  }

  getJobsData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const Url = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(Url, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.jobs.map(eachJobData => ({
      id: eachJobData.id,
      title: eachJobData.title,
      rating: eachJobData.rating,
      packagePerAnnum: eachJobData.package_per_annum,
      location: eachJobData.location,
      jobDescription: eachJobData.job_description,
      companyLogoUrl: eachJobData.company_logo_url,
      employmentType: eachJobData.employment_type,
    }))

    this.setState({jobList: updatedData})
  }

  render() {
    const {jobList} = this.state
    return (
      <div>
        <Header />

        <ul>
          {jobList.map(eachJob => (
            <JobCard eachJob={eachJob} key={eachJob.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default JobsPage
