import React from "react";
import Emoji from "../../../components/emoji";

const ExperienceArray = [
  {
    company: "Aware",
    title:  " Software Engineer II",
    start: "Sept. 2022",
    end: "Present",
    role: "",
    present: true
  },
  {
    company: "Heypex Global",
    title:  " Lead Software Engineer",
    start: "July 2020",
    end: "June 2022",
    role: "Managed and developed all client projects related to technology - web development, ecommerce, and digital design. Tech stack ranged from MERN (MongoDB, Express, React JS, Node Js) to JAMstack and Shopify/ Liquid",
    present: false
  },
  {
    company:  "Collective Bias/ Inmar Intelligence",
    title: "Software Engineer",
    start: "July 2017",
    end: "July 2020",
    role: "Collaborated as part of the engineering team towards development and maintenance of in-house applications & micro-services. Tech stack included Ruby on Rails, PostgreSQL, Vanilla Javascript and React JS, Docker/ Kubernetes.",
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
      <h2 className="bold"><Emoji name="greenCheck"/> Experience</h2>
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
