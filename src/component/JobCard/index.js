import {Link} from 'react-router-dom'
import './index.css'

const JobCard = props => {
  const {eachJob} = props
  const {
    title,
    rating,
    packagePerAnnum,
    location,
    jobDescription,
    employmentType,
    companyLogoUrl,
    id,
  } = eachJob

  return (
    <Link to={`/jobspage/${id}`} className="list-link">
      <li className="list-container">
        <div className="logo-container">
          <img src={companyLogoUrl} alt="companyLog" />
          <div>
            <h1 className="title">{title}</h1>
            <p className="rating"> {rating}</p>
          </div>
        </div>
        <div className="emplyment-container">
          <div className="emplyment-Type">
            <p>{location}</p>
            <p>{employmentType}</p>
          </div>
          <p>{packagePerAnnum}</p>
        </div>
        <div className="description">
          <h1>Description</h1>
          <p>{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobCard
