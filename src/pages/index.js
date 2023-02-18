import React from 'react'
import Hero from "../components/Home/Hero"
import HealthySection  from "../components/Home/HealtySide"
import Service from "../components/Home/Service/index"
import WorkOut from "../components/Home/workOut/index"
import DailyMorning from "../components/Home/DailyMorning/index"
import HowItWork from "../components/Home/HowItWork/index"
import Program from "../components/Home/Program/index"
import Testimonials from "../components/Home/Testimonials/index"

const index = () => {
  return (
    <div>
      <Hero></Hero>
     <HealthySection></HealthySection>
     <Service></Service>
     <WorkOut></WorkOut>
     <DailyMorning></DailyMorning>
     <HowItWork></HowItWork>
     <Program></Program>
     <Testimonials></Testimonials>
    </div>
  )
}

export default index