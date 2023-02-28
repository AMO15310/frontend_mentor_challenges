import React from "react";
import "./App.css";
import Card from "./components/Card";
import photosnap from "./static-job-listings-master/images/photosnap.svg";
import manage from "./static-job-listings-master/images/manage.svg";
import account from "./static-job-listings-master/images/account.svg";
import myhome from "./static-job-listings-master/images/myhome.svg";
import loopstudios from "./static-job-listings-master/loop-studios.svg";
import faceit from "./static-job-listings-master/images/faceit.svg";
import shortly from "./static-job-listings-master/images/shortly.svg";
import insure from "./static-job-listings-master/images/insure.svg";
import eyecam from "./static-job-listings-master/images/eyecam-co.svg";
import airfilter from "./static-job-listings-master/images/the-air-filter-company.svg";
function App() {
  return (
    <div className="app">
      <div className="header"> {/* <Header /> */}</div>
      <div className="body">
        <div className="content">
          <div className="cards">
            <Card
              name="Photosnap"
              image={photosnap}
              showNew="true"
              showFTD="true"
              title="Senior Frontend Developer"
              day="1d ago"
              time="Full Time"
              country="USA only"
              text1="Frontend"
              text2="Senior"
              text3="HTML"
              text4="CSS"
              showJS="true"
            />
            <Card
              name="Manage"
              image={manage}
              showNew="true"
              showFTD="true"
              title="Fullstack Developer"
              day="1d ago"
              time="Part time"
              country="Remote"
              text1="Fullstack"
              text2="Midweight"
              text3="Python"
              text4="React"
            />
            <Card
              name="Account"
              image={account}
              showNew="true"
              title="Junior Frontend Developer"
              day="2d ago"
              time="Part time"
              country="USA only"
              text1="Frontend"
              text2="Junior"
              text3="React"
              text4="Sass"
              showJS="true"
            />
            <Card
              name="MyHome"
              image={myhome}
              title="Junior Frontend Developer"
              day="5d ago"
              time="Contract"
              country="USA only"
              text1="Frontend"
              text2="Junior"
              text4="CSS"
              showJS="true"
            />
            <Card
              name="Loop Studios"
              image={loopstudios}
              title="Software Engineer"
              day="1w ago"
              time="Full Time"
              country="Worldwide"
              text1="Fullstack"
              text2="Midweight"
              text3="Sass"
              text4="Ruby"
              showJS="true"
            />
            <Card
              name="FaceIt"
              image={faceit}
              title="Junior Backend Developer"
              day="2w ago"
              time="Full Time"
              country="UK only"
              text1="Backend"
              text2="Junior"
              text3="Ruby"
              text4="RoR"
            />
            <Card
              name="Shortly"
              image={shortly}
              title="Junior Developer"
              day="2w ago"
              time="Full Time"
              country="Worldwide"
              text1="Frontend"
              text2="Junior"
              text3="HTML"
              text4="Sass"
              showJS="true"
            />
            <Card
              name="Insure"
              image={insure}
              title="Junior Frontend Developer"
              day="2w ago"
              time="Full Time"
              country="USA only"
              text1="Frontend"
              text2="Junior"
              text3="Vue"
              text4="Sass"
              showJS="true"
            />
            <Card
              name="Eyecam co"
              image={eyecam}
              title="Fullstack Engineer"
              day="3w ago"
              time="full Time"
              country="Worldwide"
              text1="Fullstack"
              text2="Midweight"
              text3="Django"
              text4="Python"
              showJS="true"
            />
            <Card
              name="The Air Filter Company"
              image={airfilter}
              title="Front-end Dev"
              day="1mo ago"
              time="Part Time"
              country="Worldwide"
              text1="Frontend"
              text2="Junior"
              text3="React"
              text4="Sass"
              showJS="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
