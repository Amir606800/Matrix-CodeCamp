import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <>
    <div className="head">
        <div className="title"><img src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg" alt="Small-Logo" /><span>Hi, I'm Amir, Front-End Developer</span></div>
        <div className="subtitle h1">Designing Intuitive <p>Experiences <span className="">Inspire</span></p></div>
        <div className="quote d-flex justify-content-end"><p className="text-start">Your gateway to innovative design, seamless user experiences, and impactful solutions. Turning complex ideas into user-friendly designs.</p></div>
        <div className="bot">
          <div className="left">
            <div className="circle"><img className="circle-background" src="https://html.vikinglab.agency/ovro/assets/img/elements/elements1.png" alt="" /><IoIosArrowRoundForward className="arrow" /></div>
          </div>
        </div>
        <div className="work-together w-100 btn mt-4 ">Let's Work Together <FaArrowRight className='direct' /></div>
       </div>
    </>
  )
}

export default Home