import React, { useEffect, useState } from "react";

import { useNavigation, useRoute } from "react-router-dom";
import { ExecutiveQuestions } from "../../assets/Data/Executive";
import AnimatedLoader from "../Loader/Loader";
import CustomProgressBar from "../ProgessBar/ProgressBar";
import { useNavigate } from "react-router-dom";

const FirstQuestionnaire = () => {
  const navigate = useNavigate();

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

  const showNextItem = (newValue) => {
    console.warn(newValue);
    if (currentIndex < question.length - 1) {
      const updatedQuestions = [...question];

      // const isReversed =
      //   updatedQuestions[currentIndex].questionId !== undefined;

      // // If it's reversed, invert the score
      // if (isReversed) {
      //   score = 6 - score;

      // }

      updatedQuestions[currentIndex]["answer"] = newValue.text;
      updatedQuestions[currentIndex]["score"] = newValue.score;

      setQuestions(updatedQuestions);
      setCurrentIndex(currentIndex + 1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const updatedQuestions = [...question];

      updatedQuestions[currentIndex]["answer"] = newValue.text;
      updatedQuestions[currentIndex]["score"] = newValue.score;

      setQuestions(updatedQuestions);

      navigate("/second");

      // handleAddArraysToUser();
    }
  };

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
          {[question[currentIndex]].map((item) => {
            return (
              <div>
                <div style={{ width: "calc(100% - 100px)" }}>
                  <p style={{ ...styles.headingBottom }}>{item.question}</p>
                  <div style={{ height: "20px" }} />
                  <div style={{ width: "calc(100% - 80px)", margin: "0 auto" }}>
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        height: "80px",
                        display: "flex",
                        flexDirection: "row",
                        borderRadius: "15px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {data.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            showNextItem(item);
                          }}
                          style={{
                            cursor: "pointer",
                            width: "calc((100% - 80px) / 7)",
                            borderTopLeftRadius: index === 0 ? "15px" : "0",
                            borderTopRightRadius: index === 6 ? "15px" : "0",
                            borderBottomLeftRadius: index === 0 ? "15px" : "0",
                            borderBottomRightRadius: index === 6 ? "15px" : "0",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
                            border:
                              index === 0 || index === 6
                                ? "none"
                                : "1px solid #ccc",
                            height: "100%",
                            justifyContent: "center",
                          }}
                        >
                          <span style={{ ...styles.percentage }}>
                            {item.text}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            style={{ margin: "0 auto", marginBottom: 50, textAlign: "center" }}
          >
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
    justifyContent: "center",
    // alignItems: "center",
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  top: {
    backgroundColor: "#FFFFFF",
    height: "20vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  bottom: {
    backgroundColor: "#28CBB0",
    height: "80vh",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    display: "flex",
    alignSelf: "center",
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
