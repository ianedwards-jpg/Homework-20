import React from 'react';
import { Grid, Cell } from 'react-mdl';


const Landing = () => {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://images.unsplash.com/photo-1533323905636-7f0bfa0ba5ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Software Developer</h1>

                        <hr />
                        <p>JavaScript | HTML5/CSS3 | MySQL | NoSQL | MongoDB | NodeJS | Express | React | Bootstrap</p>

                        <div className="reference-links">

                            <a href="https://linkedin.com/in/ian-edwards-4195586a" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/ianedwards-jpg" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            <a href="https://www.ianedwards.dev" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-envelope-square" aria-hidden="true" />
                            </a>

                            <a href="https://www.arayanawrath.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa fa-file-text fa-xs" aria-hidden="true" />
                            </a>

                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default Landing;

