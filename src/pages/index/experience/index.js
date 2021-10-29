import React from "react";

const ExperienceArray = [
  {
    company: "Heypex Global",
    title:  "VP of  Technology",
    start: "July 2020",
    end: "Present",
    role: "Lead the day to day business IT operations and manage all client projects related to technology - development, ecommerce, and digital design."
  },
  {
    company:  "Collective Bias/ Inmar Intelligence",
    title: "Software Engineer",
    start: "July 2017",
    end: "July 2020",
    role: "Worked as part of the engineering team towards development and maintaining of in-house applications, micro-services, and projects."
  },
  {
    company: "Collective Bias/ Inmar Intelligence",
    title: "Jr. Front End Web Developer",
    start: "November  2015",
    end: "July 2017",
    role: "Developed and maintained rapid release client micro-sites in a Wordpress environment using JavaScript, HTML, CSS, and PHP."
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
      <h2>&#9989; Experience</h2>
      {
        ExperienceArray.map((item, i) =>
          <div className="sub-section" key={i}>
            <h3 className="item-title" className="section-headline">{item.title} - {item.company}</h3>
            <p className="item-time">{item.start} - {item.end}</p>
            <p className="item-role">{item.role}</p>
          </div>
        )
      }
    </section>
  )
}

export default Experience;
