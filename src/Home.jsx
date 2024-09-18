import './css/App.css'
import HomeAbout from './HomeAbout'
import InfoCards from './InfoCards'
import LandingPage from './LandingPage'
import HomeProjects from './HomeProjects'


function Home() {
  
    return (
      <>
        <LandingPage />
        <InfoCards />
        <HomeAbout />
        <HomeProjects />
      </>
    )
  }
  
  export default Home;