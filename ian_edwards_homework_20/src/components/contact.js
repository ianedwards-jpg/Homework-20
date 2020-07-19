import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

const Contact = () => {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
         
          <Cell col={12}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                (203)917-1876
                </ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                <a href="https://www.linkedin.com/in/araya-nawrath-31268237/">Ian Edwards</a> 
                </ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Arvo'}}>
                <i className="fa fa-envelope-square" aria-hidden="true"/>
                <a href="mailto:Arayanawrath@gmail.com">ian.edwards@uconn.edu</a>
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
}

export default Contact;