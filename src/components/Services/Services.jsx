import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Time to restart</span>
        <span>Course journey</span>
        <spane>
        Yessss ! To restart your learning gears again  
                <br />
      Choose the subject you need to purue        </spane>
      
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
       >
          <Card
            emoji={HeartEmoji}
            heading={"12 Std"}
            detail={"Choose your domain either Biology or CS or Commerce, And score high"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "10rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"11 std"}
            detail={"Choose your domain either Biology or CS or Commerce, And continue learning"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
        >
          <Card
            emoji={Humble}
            heading={"10 std"}
            detail={
              "Learn Maths, Social science, Physics, chemistry, Tamil, English"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

    {/* 4th */}
    <motion.div
          initial={{ top: "30rem", left: "10rem" }}
        >
          <Card
            emoji={Humble}
            heading={"9 std"}
            detail={
              "Learn History, geography, Physics, chemistry, Tamil, Maths"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
