"use client";
import React from "react";
import { bebas } from "../fonts";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
let theme = "light";

const Work = () => {
  return (
    <section
      className="w-screen h-auto bg-gray-100 flex flex-col justify-center items-center relative"
      id="work"
    >
      <div
        className={
          "text-center text-6xl font-bold mt-12 mb-12" + " " + bebas.className
        }
      >
        Work
      </div>{" "}
      <VerticalTimeline className="relative">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CgWorkAlt />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer(SDE-2)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tyroo Technologies, Gurugram, India
          </h4>
          <p>Fabric.js, React.js, Team Leading, Code Reviews, Mentorship,</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CgWorkAlt />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer(SDE-1)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tyroo Technologies, Gurugram, India
          </h4>
          <p>UI/UX Design, React.js, HTML/CSS, JavaScript</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CgWorkAlt />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nexcode Software Pvt Ltd, Gurugram, India
          </h4>
          <p>
            UI Development, RESTful APIs Integration, Redux State Management
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<LuGraduationCap />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">
            Maharaja Agrasen Institute of Technology, Delhi, India
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Bachelor of Technology in Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaReact />}
          visible={true}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Work;
