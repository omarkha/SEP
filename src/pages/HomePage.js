import React from "react";
import "../styles/homepage.css";
import coding from "../media/coding.jpg";
import html from "../media/html.png";
import css from "../media/css.png";
import javascript from "../media/javascript.png";
import python from "../media/python.png";
import mongodb from "../media/mongodb.png";
import react from "../media/react.png";
import redux from "../media/redux.png";
import jwt from "../media/jwt.png";

import omar from "../media/omar3.png";
import generalassembly from "../media/generalassembly.png";

import artbridge from "../media/artbridge.png";
import iraqiexpert from "../media/iraqiexpert.png";
import greenstar from "../media/greenstar.png";
import facebookreplica from "../media/facebookreplica.png";
import bubblefield from "../media/bubblefield.png";
import casey from "../media/casey.png";
import amalsart from "../media/amalsart.png";
import albarq from "../media/albarq.png";
import iqball from "../media/iqball.jpg";
import { Element, scroller } from "react-scroll";

const HomePage = () => {
  const scrollToPortfolio = () => {
    scroller.scrollTo("portfolio", {
      duration: 1628,
      delay: 382,
      smooth: true,
    });
  };

  return (
    <div className="homepage">
      <div className="intro">
        <div className="container">
          <div className="leftside">
            <img src={generalassembly} alt="general assembly's logo" />
            <h1 className="usp">
              Full Stack Software Engineer With 10+ Years of Practice 🔥
            </h1>
            <div className="cta">
              <button onClick={() => scrollToPortfolio()}>
                Click For Portfolio
              </button>
            </div>
          </div>
          <div className="omar" style={{ backgroundImage: `url(${omar})` }} />
        </div>
      </div>
      <div className="main-tech">
        <div className="tech" style={{ backgroundImage: `url(${html})` }}></div>
        <div
          className="tech"
          style={{ backgroundImage: `url(${javascript})` }}
        ></div>
        <div className="tech" style={{ backgroundImage: `url(${css})` }}></div>
        <div
          className="tech"
          style={{ backgroundImage: `url(${python})` }}
        ></div>
        <div
          className="tech"
          style={{ backgroundImage: `url(${react})`, width: "100px" }}
        ></div>
        <div
          className="tech"
          style={{ backgroundImage: `url(${mongodb})` }}
        ></div>
        <div
          className="tech"
          style={{ backgroundImage: `url(${redux})` }}
        ></div>
        <div className="tech" style={{ backgroundImage: `url(${jwt})` }}></div>
      </div>

      <div className="copy">
        <div className="container">
          <h1 className="headline">
            Employ a Software Engineer <u>Who Learns At YOUR Pace</u>
          </h1>
          <p className="hook">
            picture having a software engineer on your team who plays different
            roles. A leader when you need him, deligent when he works, and
            always looking to learn more. I help you maximize efficiency, reduce
            costs, and reduce risk. I've been coding since 2012 and I have
            completed General Assembly's bootcamp which is a testament to my
            commitment to my Software Engineering career.
          </p>
          <img className="coding-image" src={coding} />
          <div className="paragraphs">
            <div className="differentiator">
              <h1 className="subhead">I Develop Different Types of Apps</h1>
              <p className="paragraph">
                My ability to work across multiple platforms allows me to cater
                to a wider range of user needs and deliver comprehensive
                solutions. This versatility not only showcases my adaptability
                as a software engineer but also demonstrates my capacity to
                contribute to various projects within your organization. With my
                experience in developing different types of apps, I can
                seamlessly transition between different technologies and
                frameworks, ensuring efficient and effective development
                processes. By hiring me, you'll have a valuable asset who can
                tackle a variety of projects and contribute to the growth and
                success of your organization.
              </p>
            </div>
            <div className="differentiator">
              <h1 className="subhead">Building Apps since 2012</h1>
              <p className="paragraph">
                With years of learning and practice, I have developed a deep
                understanding of various programming concepts. This extensive
                knowledge allows me to tackle complex challenges with ease and
                deliver efficient solutions. Whether it's front-end development,
                back-end systems, or database management, I've got you covered.
              </p>
            </div>
            <div className="differentiator">
              <h1 className="subhead">
                Currently, I am Learning Machine Learning and Artificial
                Intelligence
              </h1>
              <p className="paragraph">
                My passion doesn't stop there. I am genuinely enthusiastic about
                expanding my expertise in Machine Learning and Artificial
                Intelligence. By staying at the forefront of these cutting-edge
                technologies, I can bring innovative solutions to the table and
                help your organization thrive in the era of AI.
              </p>
            </div>
            <div className="differentiator">
              <h1 className="subhead">
                Graduate of Full Stack Software Engineering Bootcamp
              </h1>
              <p className="paragraph">
                What sets me apart is my comprehensive training in full stack
                software engineering from General Assembly's prestigious Full
                Stack Software Engineering Bootcamp. This intensive program has
                equipped me with the skills to handle every aspect of the
                development process, from designing user-friendly interfaces to
                building robust and scalable applications.
              </p>
            </div>
          </div>
          <div className="offer">
            <p>
              With over 10 years of coding, I can assure you that I quickly
              learning new technologies, skills, and techniques. Not only that.
              But since completing a $15,000 bootcamp on Full Stack Software
              Engineering, I bring you commitment, modern coding skills, and
              risk reduction. I am a versatile developer who can develop for
              different devices. As I continue to learn, in depth, Machine
              Learning and Artificial Intelligence, you get an ideal software
              engineer for the rapidly developing industry of software
              engineering.
              <br />
              <br />
              If you need a qualified entry-level software engineer then please
              scroll down and check out my portfolio.
            </p>
          </div>
        </div>
      </div>
      <Element name="portfolio">
        <div className="portfolio" id="portfolio" name="portfolio">
          <h1>This Is My Portfolio</h1>
          <div className="piece">
            <h3>The Art Bridge - Ecommerce Website for Art</h3>
            <div className="content">
              <a
                href="https://artbridgetobaghdad.onrender.com/"
                target="_blank"
              >
                {" "}
                <img src={artbridge} alt="art bridge website portfolio piece" />
              </a>
              <p>
                An Ecommerce website for a local Middle Eastern artist. The Art
                Bridge to baghdad is a Full-Stack Web Application that
                incorporates React, MongoDB, and even Stripe. PS: it's a bit
                slow to load.
                <div className="links">
                  <a
                    href="https://artbridgetobaghdad.onrender.com/"
                    target="_blank"
                  >
                    Visit Website
                  </a>
                  <a
                    href="https://github.com/omarkha/ArtBridgeToBaghdad"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>

          <div className="piece">
            <h3>Iraqi Expert - Networking Platform for Iraqi Professionals</h3>
            <div className="content">
              <a href="https://iraqiexpert.onrender.com/" target="_blank">
                {" "}
                <img
                  src={iraqiexpert}
                  alt="art bridge website portfolio piece"
                />
              </a>
              <p>
                A Networking Platform App for Iraqi Professionals I made to
                practice Redux. This Full-Stack app uses React, MongoDB, and
                Redux. PS: it's a bit slow to load.
                <div className="links">
                  <a href="https://iraqiexpert.onrender.com/" target="_blank">
                    Visit Website
                  </a>
                  <a href="https://github.com/omarkha/IQLink" target="_blank">
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="piece">
            <h3>NY Soccer Leagues - A Soccer League For New Yorkers</h3>
            <div className="content">
              <a href="https://soccerleagues.onrender.com/" target="_blank">
                {" "}
                <img src={greenstar} alt="art bridge website portfolio piece" />
              </a>
              <p>
                MERN stack app for a project I did in General Assembly's
                bootcamp. It registers leagues, clubs, and players for a league
                I called GreenStar. PS: it's a bit slow to load.
                <div className="links">
                  <a href="https://soccerleagues.onrender.com/" target="_blank">
                    Visit Website
                  </a>
                  <a
                    href="https://github.com/omarkha/NYSoccerLeague"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="piece">
            <h3>Facebook Layout - Replica of Facebooks layout</h3>
            <div className="content">
              <a href="https://omarfacebook.netlify.app/" target="_blank">
                {" "}
                <img
                  src={facebookreplica}
                  alt="art bridge website portfolio piece"
                />
              </a>
              <p>
                I made this to demonstrate my CSS and front-end skills. Just a
                layout of facebook.
                <div className="links">
                  <a href="https://omarfacebook.netlify.app/" target="_blank">
                    Visit Website
                  </a>
                  <a
                    href="https://github.com/omarkha/MyFacebookProfileReplica"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="piece">
            <h3>Bubblefield - JavaScript Game</h3>
            <div className="content">
              <a href="https://bubblefield.netlify.app/" target="_blank">
                {" "}
                <img
                  src={bubblefield}
                  alt="art bridge website portfolio piece"
                />
              </a>
              <p>
                This is the first project for General Assemby's bootcamp.
                Bubblefield is a purely HTML, JavaScript, and CSS game.
                <div className="links">
                  <a href="https://bubblefield.netlify.app/" target="_blank">
                    Visit Website
                  </a>
                  <a
                    href="https://github.com/omarkha/2D-Cube-Field"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="piece">
            <h3>Casey Creations - Cleaning Business</h3>
            <div className="content">
              <a href="https://caseycreations.netlify.app/" target="_blank">
                {" "}
                <img src={casey} alt="art bridge website portfolio piece" />
              </a>
              <p>
                This is a website I created for my friend who's self-employed.
                She has a cleaning business. It's very simple.
                <div className="links">
                  <a href="https://caseycreations.netlify.app/" target="_blank">
                    Visit Website
                  </a>
                  <a
                    href="https://github.com/omarkha/ArtBridgeToBaghdad"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="piece">
            <h3>Amals Art - Website for an Artist</h3>
            <div className="content">
              <a href="https://amalsart.onrender.com/" target="_blank">
                {" "}
                <img src={amalsart} alt="art bridge website portfolio piece" />
              </a>
              <p>
                This is one of many projects that I started but didn't complete.
                It's a bit better than Casey's website, since her website was
                made a very long time ago and ever since then I improved my
                skills.
                <div className="links">
                  <a href="https://amalsart.onrender.com/" target="_blank">
                    Visit Website
                  </a>
                  <a href="https://github.com/omarkha/AmalsArt" target="_blank">
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="piece">
            <h3>The Art Bridge - Ecommerce Website for Art</h3>
            <div className="content">
              <a href="https://albarqacademy.onrender.com/" target="_blank">
                {" "}
                <img src={albarq} alt="art bridge website portfolio piece" />
              </a>
              <p>
                I made this business project to pitch to the Iraqi Ministry of
                Education. Al-Barq Academy provides entrepreneurship courses for
                Iraqis. I researched other online academies and implemented some
                of the things I liked.
                <div className="links">
                  <a href="https://albarqacademy.onrender.com/" target="_blank">
                    Visit Website
                  </a>
                  <a
                    href="https://github.com/omarkha/Baghdad-Institute"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="piece">
            <h3>IQBall - Android App for Soccer Statistics</h3>
            <div className="content">
              <a href="#" target="_blank">
                {" "}
                <img src={iqball} alt="art bridge website portfolio piece" />
              </a>
              <p>
                I made this android app with Python Kivy. It's designed to
                record soccer match data such as passes, shots, and tackles in
                an easy way for the user. I didn't upload the code to Github but
                it's on my MacBook. The laptop's keyboard doesn't function so
                I'm looking to buy a keyboard atm and upload asap.
              </p>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default HomePage;
