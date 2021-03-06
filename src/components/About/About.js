import React from "react";
import "./About.css";
import AboutPicture from "../images/about.jpg";
import Stephanie from "../images/stephanie.jpg";
import Chantel from "../images/chantel.jpg";

const About = () => {
  return (
    <div className="about">
      <img src={AboutPicture} alt="about" className="about-picture" />
      <div className="about-section">
        <p>
          Family First Family Services LLC has been in business for 10 years as
          of April 2022. During that time, we have helped countless people work
          towards finding their own balance in their lives. Family First is a
          person-centered organization that focuses on helping families and
          individuals by providing resources, tools, and referrals to give them
          the confidence to live a balanced life.
        </p>
        <p>
          Through our years of practice, we have realized the lack of available
          resources offered to the general public for those seeking a more
          balanced life. Our desire is to collect and provide those resources
          and share them with whoever is interested in their own personal
          growth. If that is something that interests you please take time to
          explore the website.
        </p>
        <p>
          We are a small team that wishes to provide these resources, tools, and
          referrals to all, however, we will not be able to provide any services
          to any individual as this website is designed for you to develop your
          own journey. If you are seeking individual help we have resources
          available for you to find something that may work for you.
        </p>
        <h3 className="vision">
          Our vision is to provide access to tools, resources, and referrals to
          everyone on their journey to cultivating a balanced life at low to no
          cost.
        </h3>
        <div className="stephanie">
          <img src={Stephanie} alt="Stephanie" />
          <div>
            <h2 className="stephanie-name">Stephanie Overton</h2>
            <p className="bio">
              Hi, I'm Stephanie Overton; I graduated from Walden University with
              a Masters of Science in Psychology and have worked in community
              services gaining knowledge and resources along the way. I am the
              mother of five children and the grandmother of ten grandchildren.
              I live in the North Seattle area with my husband and four dogs.
            </p>
            <p className="bio">
              I am passionate about helping people live their best life full of
              health, joy, and well-being. I began working to help people make
              the changes they needed to meet their health and wellness goals in
              the early 1990s. Then, in April of 2012, I opened my practice,
              Family First Family Services. I love working with people on a
              journey to create their best life, whatever that means to them.
            </p>
            <p className="bio">
              My philosophy starts with enhancing the strength you already have
              to create a path to the vision you see for yourself. You will find
              all the tools you need to do this here. It is truly an honor to
              have this platform to help others make the changes, learn the
              skills and find the support to live their best lives. So welcome I
              look forward to serving you!
            </p>
          </div>
        </div>
        <div className="chantel">
          <img src={Chantel} alt="Chantel" className="chantel-top" />
          <div>
            <h2 className="chantel-name">Chantel Wilkes</h2>
            <p className="bio2">
              Hello, I offer support for Stephanie as an office manager and life
              assistant. I am currently working towards getting a master's in
              psychology to help my community. I have a passion for walking with
              those who need the company and who need a safe space to be
              themselves and express and feel all that needs to come to light. I
              have had a lot of life experiences throughout my life, and now
              wish to utilize all that I have learned and continue to learn to
              pave a path for those who need help finding their light, passion,
              and own personal power. I look forward to sharing this growth with
              you.
            </p>
          </div>
          <img src={Chantel} alt="Chantel" className="chantel-bottom" />
        </div>
      </div>
    </div>
  );
};

export default About;
