import Rollover from '../Rollover'
import SpecialInfo from '../SpecialInfo'
import ProprietorDesk from '../ProprietorDesk'
import Team from '../Team'
import CallToAction from '../CallToAction'
import Reviews from '../Reviews'
import Statistics from '../Statistics'
import BlogNews from '../BlogNews'


const MainHome = () => {
    return (
      <>
          <Rollover />
  
        {/* Special info - Admission, Notice Board, Vision/Mission */}
        <SpecialInfo />
  
        {/* Call to action - All our schools */}
        {/* <OurSchools /> */}
  
        {/* Information from the Proprietor */}
        <ProprietorDesk />
  
        {/* Team Members */}
        <Team />
  
        {/* Call to action - High School & Primary */}
        <CallToAction />
  
        {/* Awards / Graduation ceremonies
        Library of books - Approved books */}
        {/* <AwardsLibrary /> */}
  
        {/* Reviews from Parents */}
        <Reviews />
  
        {/* General stats from the school */}
        <Statistics />
  
        {/* Blogs content and news */}
        <BlogNews />
  
        {/* The journey to High School */}
        {/* <TakeTour /> */}
      </>
    )
  }
  
  export default MainHome
  