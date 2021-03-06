// import PropTypes from "prop-types"
import React from 'react'
// import { tech, designTools } from './skillsData'

import '../assets/css/components/skills.scss'

// const createSkillIndicators = elem => {
//   const MAX_SKILL_LEVEL = 6
//   const skillLevel = elem.skillLevel
//   const skillIndicators = []
//
//   for (let i = 1; i <= MAX_SKILL_LEVEL; i++) {
//     if (i <= skillLevel) {
//       // current skill level...
//       skillIndicators.push(<div className={'skilled'} key={i} />)
//     } else {
//       // still to learn...
//       skillIndicators.push(<div key={i} />)
//     }
//   }
//   return skillIndicators
// }

const Skills = () => (
  <div className={'skills'}>
    {/*  T E C H  */}
    <section className="skill">
      <aside className="sidebar-left">
        <h3>Tech Stack</h3>
      </aside>
      <div className="container-full-width">
        <p>
          React, JavaScript, Drupal, HTML5, CSS3, SASS, Node, Express,
          MongoDB/Mongoose, Ava, Docker, Heroku, ESLint, Husky, Prettier, Git
        </p>
        {/*<ul className={'tech-stack stack'}>*/}
        {/*  {tech.map((elem, index) => {*/}
        {/*    return (*/}
        {/*      <li key={elem.name + index} className={'container-third-width'}>*/}
        {/*        {elem.name}*/}
        {/*      </li>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*</ul>*/}
      </div>
    </section>

    {/*  D E S I G N  T O O L S  */}
    <section className="skill">
      <aside className="sidebar-left">
        <h3 className="design-tools">Design Tools</h3>
      </aside>
      <div className="container-full-width">
        <p>Adobe XD, Illustrator, InDesign, Photoshop</p>
        {/*<ul className={'design-tools-stack stack'}>*/}
        {/*  {designTools.map( elem => {*/}
        {/*    return (*/}
        {/*      <li key={elem.id} className={'container-third-width'}>*/}
        {/*        {elem.name}*/}
        {/*      </li>*/}
        {/*    )*/}
        {/*  } )}*/}
        {/*</ul>*/}
      </div>
    </section>
  </div>
)

export default Skills
