import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isloading: 'IS_LOADING',
}
const failureImg =
  'https://assets.ccbp.in/frontend/react-js/api-failure-view.png'

class CowinDashboard extends Component {
  state = {
    last7daysVaccination: [],
    vaccinationByage: [],
    VaccinationBygender: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.isloading,
    })

    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(covidVaccinationDataApiUrl)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updated7daysData = data.last_7_days_vaccination.map(eachItem => ({
        dose1: eachItem.dose_1,
        dose2: eachItem.dose_2,
        vaccineDate: eachItem.vaccine_date,
      }))
      const vaccinationByage = data.vaccination_by_age
      const VaccinationBygender = data.vaccination_by_gender

      this.setState({
        last7daysVaccination: updated7daysData,
        vaccinationByage,
        VaccinationBygender,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  VaccinationView = () => {
    const {
      last7daysVaccination,
      vaccinationByage,
      VaccinationBygender,
    } = this.state
    return (
      <>
        <div className="all-container">
          <h1 className="vaccination-coverage">Vaccination Coverage</h1>
          <VaccinationCoverage data={last7daysVaccination} />
        </div>
        <div className="all-container">
          <h1 className="vaccination-coverage">Vaccination by gender</h1>
          <VaccinationByGender data={VaccinationBygender} />
        </div>
        <div className="all-container">
          <h1 className="vaccination-coverage">Vaccination by Age</h1>
          <VaccinationByAge data={vaccinationByage} />
        </div>
      </>
    )
  }

  failureView = () => (
    <div className="failure-view-container">
      <img className="failure-img" src={failureImg} alt="failure view" />
      <h1 className="failure-view--heading">Something went wrong</h1>
    </div>
  )

  loadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.VaccinationView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.isloading:
        return this.loadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="CowinDashboard">
        <div className="CowinDashboard-conatiner">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="icon"
            />
            <h1 className="heading">Co-WIN</h1>
          </div>
          <h1 className="heading-main">CoWIN Vaccination in India</h1>
          {this.renderViews()}
        </div>
      </div>
    )
  }
}
export default CowinDashboard
