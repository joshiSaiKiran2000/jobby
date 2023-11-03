import './index.css'
import Header from '../Header'

const Home = props => {
  const onJobsPage = () => {
    const {history} = props

    history.push('/jobspage')
  }
  return (
    <div className="home-container">
      <Header />
      <h1 className="home-heading">
        Find The Job That <br />
        Fits Your Life
      </h1>
      <p className="home-paragraph">
        Millions of people are searching for jobs, salary, information, company
        reviews. Find the job that fits your abilities and potential.
      </p>

      <button type="button" className="home-jobs-button" onClick={onJobsPage}>
        Find Jobs
      </button>
    </div>
  )
}

export default Home
