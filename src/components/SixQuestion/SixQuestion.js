import React, { useEffect, useState } from "react";

import { useNavigation, useRoute } from "react-router-dom";
import { Beck } from "../../assets/Data/Beck";
import AnimatedLoader from "../Loader/Loader";
import CustomProgressBar from "../ProgessBar/ProgressBar";
import "./SixQuestion.css";
const SixQuestionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestions] = useState([...Beck]);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const showNextItem = (newValue, score) => {
    if (currentIndex < question.length - 1) {
      const updatedQuestions = [...question];
      updatedQuestions[currentIndex]["answer"] = newValue;
      updatedQuestions[currentIndex]["score"] = score;

      setQuestions(updatedQuestions);
      setCurrentIndex(currentIndex + 1);
      setCurrentQuestion(currentQuestion + 1);

      setSelectedItem(null);
    } else {
      const updatedQuestions = [...question];
      updatedQuestions[currentIndex]["answer"] = newValue;
      updatedQuestions[currentIndex]["score"] = score;

      setQuestions(updatedQuestions);

      console.log(updatedQuestions);

      setSelectedItem(null);
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.top}>
          <p style={styles.heading}>
            Please read each question, assess your feelings, and select the
            answer on the scale that gives the best answer for you for each
            question.
          </p>
        </div>
        <div style={styles.bottom}>
          {[question[currentIndex]].map((item) => {
            return (
              <div>
                <div
                  style={{
                    width: "calc(100% - 100px)",
                    display: "contents",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p style={{ ...styles.headingBottom }}>{item.question}</p>
                  <div style={{ height: "20px" }} />
                  <div
                    style={{
                      width: "calc(100% - 80px)",
                      margin: "0 auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center", // Aligning the content to the center
                    }}
                  >
                    {item.answers.map((item) => (
                      <div
                        onClick={() => showNextItem(item.name, item.score)}
                        key={item.key}
                      >
                        <div
                          className="answer"
                          style={{
                            backgroundColor:
                              selectedItem && selectedItem.key === item.key
                                ? "gray"
                                : "#FFF",
                          }}
                        >
                          <p
                            className="answerTitle"
                            style={{
                              color:
                                selectedItem && selectedItem.key === item.key
                                  ? "#FFF"
                                  : "#000",
                            }}
                          >
                            {item.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <div
            style={{ margin: "0 auto", marginBottom: 50, textAlign: "center" }}
          >
            <CustomProgressBar progress={(currentQuestion / 21) * 100} />
            <p style={styles.headingQuestion}>{currentQuestion}/21</p>
          </div>
        </div>
      </div>

      {loading && <AnimatedLoader />}
    </>
  );
};

export default SixQuestionnaire;

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
    marginTop: 50,
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
