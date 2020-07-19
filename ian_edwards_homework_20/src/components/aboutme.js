import React from "react";
import { Grid, Cell,} from "react-mdl";



const About = () => {
  return (
    <div className="container-fluid">
     <Grid className="contact-grid">
      <Cell col={12}>
    
            <h2>Ian Edwards</h2>
            <img src = {process.env.PUBLIC_URL + '/img/mee.jpg'}
              alt="me"
              style={{ height: "350px" }}
              style={{ height: "350px" }}
            />
            <h4 style={{ color: "grey" }}>My Story</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          
          
            <p>
            I am a Full stack web developer adept at building responsive web application from front to back. Passionate about learing teachnologies, bring ideas to life, and working with delicated teams to build efficient and robust application suited to the user's needs.

Education:University of Connecticut, Stamford CT (Full Stack Web Development Bootcamp), Feb-July 2020. University of Connecticut, Storrs, CT (Bachelor Arts, Cognitive Science) Aug 2015-Dec 2017.

Skill:HTML5, CSS3, SCSS, Javascript, JavaScript Frameworks (React), JQuery, Node, Express, MySQL, NoSQL (MongoDB), AJAX, Git

            </p>
          </Cell>
          </Grid>
    </div>
  );
}

export default About;