import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {IoIosSchool} from "react-icons/io"
const Experience = () => {
  return (
    <div className='Experience'>
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2007 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<IoIosSchool/>}
        >
          <h3 className="vertical-timeline-element-title">
            High School, Georgia, Tbilisi
          </h3>
          <p> High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<IoIosSchool/>}
        >
          <h3 className="vertical-timeline-element-title">
            My Cool University, BTU
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Information of Technology </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
