import React from 'react'
import ab from '../../Images/about2.jpg'

export default function AboutShort() {
  return (
    <div>
       <div className="d-flex py-5 container margin10 text-start">
                <div className="w-50 px-4">
                    <h3 className="mb-5 text-danger">Let's Know About <br /> <span className="text-dark">Achevement Gym</span></h3>
                    <p className='pe-5 text-justify'>Succeed in the Fitness Industry with Professional PT Experts. Launch your Personal Training career with online home based study. RTO32107. Nationally Accredited. Professional Support. Supportive Online Courses. Flexible Payment Plans. Affordable. Courses: Cert III in Fitness, Cert IV in Fitness..It's free for all. Bring your mates - no judgments. Workout for free from 29th - 31st October at Crunch Fitness - Sydney CBD. $9.95 a week. 18 locations. Personal training. Luxury change rooms. Free trials. Free WiFi. Services: Body scanning, Tons of equipment, Rows of cardio, Heart pumping classes, World class PTs, Go month to month.High-profile personal trainer Tiffiny Hall has revealed her battle with chronic fatigue syndrome. Credit: Instagram. Hall, 36,</p>
                </div>
                <div className="w-50">
                    <img src={ab} alt="" className="s-pic" />
                </div>
              
            </div>
    </div>
  )
}
