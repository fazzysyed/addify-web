import React, { useEffect } from "react";

import Pressable from "../../components/PressableIcon/PressableIcon";
import ThirdImage from "../../assets/images/third.svg";
import Button from "../../components/Button/Button";

import { useNavigate } from "react-router-dom";

const Six = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/six-question");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Pressable
          icon={require("../../assets/Icons/backicon.png")}
          style={styles.backButton}
        />
      </div>

      <div style={styles.content}>
        <p style={styles.heading}>Part 6 of 6</p>

        <div style={{ alignSelf: "center" }}>
          <img src={ThirdImage} style={{ height: 400, width: 400 }} />
        </div>

        <div style={{ alignSelf: "center", marginTop: 50 }}>
          <Button title="Start" onPress={handleStart} />
        </div>
      </div>
    </div>
  );
};

export default Six;

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#FFFFFF",
  },
  header: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  content: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    margin: "auto",
    marginTop: 30,
    textAlign: "center",
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    color: "#261E35",
    marginVertical: 10,
    width: 400,
    textAlign: "center",
  },
};
