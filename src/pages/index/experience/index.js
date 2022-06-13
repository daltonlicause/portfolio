import React from "react";
import Emoji from "../../../components/emoji";

const ExperienceArray = [
  {
    company: "Heypex Global",
    title:  "VP of  Technology",
    start: "July 2020",
    end: "June 2022",
    role: "Lead the day to day business IT operations and manage all client projects related to technology - development, ecommerce, and digital design.",
    present: false
  },
  {
    company:  "Collective Bias/ Inmar Intelligence",
    title: "Software Engineer",
    start: "July 2017",
    end: "July 2020",
    role: "Worked as part of the engineering team towards development and maintaining of in-house applications, micro-services, and projects.",
    present: false
  },
  {
    company: "Collective Bias/ Inmar Intelligence",
    title: "Jr. Front End Web Developer",
    start: "November  2015",
    end: "July 2017",
    role: "Developed and maintained rapid release client micro-sites in a Wordpress environment using JavaScript, HTML, CSS, and PHP.",
    present: false
  }
]

const Education = {
  school: "Northwest Arkansas Community College",
  degree: "Associate  of Arts, Digital Arts",
  start: "September 2012",
  end: "December 2015"
}

const Experience = () => {

  return (
    <section className="experience">
      <h2><Emoji name="greenCheck"/> Experience</h2>
      {
        ExperienceArray.map((item, i) =>
          <div className="sub-section" key={i}>
            <h3 className="item-title section-headline"> 
              {item.present ? <Emoji name="greenCircle"/> : <Emoji name="purpleCircle"/>}
              {item.title}
            </h3>
            <div className="sub-item">
              <h4 className="sub-item-headline">{item.company}</h4>
              <p className="sub-item-time">{item.start} - {item.end}</p>
              <p className="sub-item-role">{item.role}</p>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Experience;
