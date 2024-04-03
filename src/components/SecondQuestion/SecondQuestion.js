import React, { useEffect, useState } from "react";

import { useNavigation, useRoute } from "react-router-dom";
import { Cadra } from "../../assets/Data/Cadra";
import AnimatedLoader from "../Loader/Loader";
import CustomProgressBar from "../ProgessBar/ProgressBar";
import { useNavigate } from "react-router-dom";

import "./SecondQuestion.css";
const SecondQuestionnaire = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestions] = useState([...Cadra]);
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    { key: "1", text: "Not at all", score: 0 },
    { key: "2", text: "Sometimes", score: 1 },
    { key: "3", text: "Often", score: 2 },
    { key: "4", text: "All the time", score: 3 },

    // Add more data items here
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
      navigate("/third");

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
                    {data.map((item) => (
                      <div onClick={() => showNextItem(item)} key={item.key}>
                        <div
                          className="answerSecond"
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
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}

                    <input
                      className="commentSecond"
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Enter Comment"
                      style={{ color: "#828282" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <div onClick={() => showNextItem()}>
            <div
              className="answerSecond"
              style={{
                backgroundColor: "#FFF",
                marginBottom: 20,
              }}
            >
              <p
                className="answerTitle"
                style={{
                  color: "#000",
                }}
              >
                Next
              </p>
            </div>
          </div>
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

export default SecondQuestionnaire;

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
    alignItems: "center",
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: "calc(16px + 1vw)", // Responsive font size based on viewport width

    display: "flex",
    alignSelf: "center",
    color: "#261E35",
    marginVertical: 10,
    width: "80%",
    textAlign: "center",
  },
  headingBottom: {
    fontFamily: "Poppins-Bold",
    fontSize: "calc(16px + 1vw)",
    alignSelf: "center",
    textAlign: "center",

    marginTop: 20,
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
    // width: 100,
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
