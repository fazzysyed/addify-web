import React, { useEffect, useState } from "react";

import Button from "../components/Button/Button";
import { useNavigation, useRoute } from "react-router-dom";
import { ExecutiveQuestions } from "../assets/Data/Executive";
import AnimatedLoader from "../components/Loader/Loader";
import CustomProgressBar from "../components/ProgessBar/ProgressBar";
const FirstQuestionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestions] = useState([...ExecutiveQuestions]);

  const data = [
    { key: "1", text: "Strongly Disagree", score: 6 },
    { key: "2", text: "Disagree", score: 5 },
    { key: "3", text: "Tend to Disagree", score: 4 },
    { key: "4", text: "Neutral", score: 3 },
    { key: "5", text: "Tend to Agree", score: 2 },
    { key: "6", text: "Agree", score: 1 },
    { key: "7", text: "Strongly Agree", score: 0 },
  ];

  //   const handleAddArraysToUser = async () => {
  //     try {
  //       setLoading(true);
  //       const userId = route.params.userId;
  //       // Perform actions with userId
  //       console.log("User ID:", userId);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.top}>
          <p style={styles.heading}>
            Please indicate how strongly the following statements apply to you
            by tapping on the appropriate degree from the scale below
          </p>
        </div>
        <div style={styles.bottom}>
          <div style={{ marginBottom: 50 }}>
            <CustomProgressBar progress={(currentQuestion / 36) * 100} />
            <p style={styles.headingQuestion}>{currentQuestion}/36</p>
          </div>
        </div>
      </div>

      {loading && <AnimatedLoader />}
    </>
  );
};

export default FirstQuestionnaire;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  top: {
    backgroundColor: "#FFFFFF",
    flex: 0.27,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    backgroundColor: "#28CBB0",
    flex: 0.8,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#261E35",
    marginVertical: 10,
    width: "80%",
    textAlign: "center",
  },
  headingBottom: {
    fontFamily: "Poppins-Bold",
    fontSize: 34,
    alignSelf: "center",
    textAlign: "center",
    marginVertical: 50,
    marginTop: 100,
    color: "#FFFFFF",
  },
  headingQuestion: {
    fontFamily: "Poppins-SemiBold",

    alignSelf: "center",
    marginVertical: 20,
    color: "#FFFFFF",
    fontSize: 22,
    marginTop: 10,
  },
  percentage: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 5,
    width: 100,
  },
  answer: {
    height: 55,
    backgroundColor: "#fff",
    width: "50%",
    alignSelf: "center",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  comment: {
    marginTop: 30,
    height: 55,
    backgroundColor: "#fff",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    padding: 10,
  },
  answerTitle: {
    fontFamily: "Poppins-SemiBold",
    color: "#261E35",
    fontSize: 20,
  },
};
