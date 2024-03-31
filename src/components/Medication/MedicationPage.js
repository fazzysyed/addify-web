import React, { useEffect, useState } from "react";
import { Medications } from "../../assets/Data/Medications";
import "./MedicationPage.css";
import ArrowDown from "../../assets/Icons/arrowdown.png";

const MedicationPage = () => {
  const [index, setIndex] = useState(0);
  const [strengthIndex, setStrengthIndex] = useState(0);

  const [knowIndex, setKnowIndex] = useState(0);
  const [selectedKnownIndex, setSelectedKnownIndex] = useState(0);
  const [medicationData, setMedicationData] = useState([...Medications]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState("");

  const [noneText, setNoneText] = useState("");

  //known medical

  const [medicalCombination, setMedicalCombination] = useState([
    {
      value: "Yes",
      label: "Yes",
      selected: false,
      message: "",
    },
    {
      value: "No",
      label: "No",
      selected: false,
    },
  ]);

  const [childHood, setChildHood] = useState([
    {
      value: "Yes",
      label: "Yes",
      selected: false,
      message: "",
    },
    {
      value: "No",
      label: "No",
      message: "",
      selected: false,
    },
  ]);

  const [twelve, setTweleve] = useState([
    {
      value: "Yes",
      label: "Yes",
      selected: false,
    },
    {
      value: "No",
      label: "No",
      selected: false,
      message: "",
    },
  ]);

  const [selectChildHood, setSelectChildHood] = useState(null);

  const [selectedTwelve, setSelectedTwelve] = useState(null);
  const [twelveMessage, setTwelveMessage] = useState("");

  const [agree, setAgree] = useState(false);

  const [childHoodMessage, setChildHoodMessage] = useState("");
  const [selectedKnown, setSelectedKnown] = useState(null);

  const [customKnownMessage, setCustomKnownMessage] = useState("");

  const handleChildHood = (medication, index) => {
    setSelectChildHood(medication);

    // Create a new array based on the existing medicalCombination with updated 'selected' property
    const updatedMedicalCombination = medicalCombination.map((item, i) => {
      if (i === index) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });

    setChildHood(updatedMedicalCombination);

    setChildHoodMessage(medication.message ? medication.message : "");

    // setSelectedFrequency(null);
  };

  const handleTwelve = (medication, index) => {
    setSelectedTwelve(medication);
    // Create a new array based on the existing medicalCombination with updated 'selected' property
    const updatedMedicalCombination = medicalCombination.map((item, i) => {
      if (i === index) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });

    setTweleve(updatedMedicalCombination);
  };
  const handleKnownSelection = (medication, index) => {
    setSelectedKnown(medication);

    // Create a new array based on the existing medicalCombination with updated 'selected' property
    const updatedMedicalCombination = medicalCombination.map((item, i) => {
      if (i === index) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });

    setMedicalCombination(updatedMedicalCombination);

    setKnowIndex(index);

    setCustomKnownMessage(medication.message ? medication.message : "");
    setSelectedNeouralAnswer(null);
    // setSelectedFrequency(null);
  };

  const handleKnownInput = (text) => {
    setCustomKnownMessage(text);
  };

  const handleChildHoodInput = (text) => {
    setChildHoodMessage(text);
  };

  const updateMessageByValueChildHood = () => {
    setChildHood((prevCombination) => {
      return prevCombination.map((item) => {
        if (item.value === "Yes") {
          return { ...item, message: customKnownMessage };
        }
        return item;
      });
    });

    console.log(medicalCombination, "aajajajajajaj");
    setSelectChildHood(null);
  };

  const handleTwelveSave = () => {
    setTweleve((prevCombination) => {
      return prevCombination.map((item) => {
        if (item.value === "No") {
          return { ...item, message: customKnownMessage };
        }
        return item;
      });
    });

    setSelectedTwelve(null);
  };

  const updateMessageByValue = () => {
    setMedicalCombination((prevCombination) => {
      return prevCombination.map((item) => {
        if (item.value === "Yes") {
          return { ...item, message: customKnownMessage };
        }
        return item;
      });
    });

    console.log(medicalCombination, "aajajajajajaj");

    setSelectedKnown(null);
  };
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [selectedStrength, setSelectedStrength] = useState(null);
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [customFrequency, setCustomFrequency] = useState("");
  const [isCustomFrequencyModalOpen, setIsCustomFrequencyModalOpen] =
    useState(false);

  //Confirmed states

  const [confirmedIndex, setConfirmedIndex] = useState(0);

  const [confirmFreeText, setConfirmFreeText] = useState("");

  const [confirmedData, setConfirmedData] = useState([
    {
      value: "Depressive disorders",
      label: "Depressive disorders",
      selected: false,
      answers: [
        {
          value: "Yes",
          label: "Yes",
          selected: false,
          message: "",
        },
        {
          value: "No",
          label: "No",
          selected: false,
        },
        {
          value: "Perhaps",
          label: "Perhaps",
          selected: false,
        },
      ],
    },
    {
      value: "Anxiety spectrum disorders",
      label: "Anxiety spectrum disorders",
      selected: false,
      answers: [
        {
          value: "Yes",
          label: "Yes",
          selected: false,
          message: "",
        },
        {
          value: "No",
          label: "No",
          selected: false,
        },
        {
          value: "Perhaps",
          label: "Perhaps",
          selected: false,
        },
      ],
    },
    {
      value: "Bipolar spectrum disorders",
      label: "Bipolar spectrum disorders",
      selected: false,
      answers: [
        {
          value: "Yes",
          label: "Yes",
          selected: false,
          message: "",
        },
        {
          value: "No",
          label: "No",
          selected: false,
        },
        {
          value: "Perhaps",
          label: "Perhaps",
          selected: false,
        },
      ],
    },
    {
      value: "Psychotic spectrum disorders",
      label: "Psychotic spectrum disorders",
      selected: false,
      answers: [
        {
          value: "Yes",
          label: "Yes",
          selected: false,
          message: "",
        },
        {
          value: "No",
          label: "No",
          selected: false,
        },
        {
          value: "Perhaps",
          label: "Perhaps",
          selected: false,
        },
      ],
    },
    {
      value: "Obsessive compulsive spectrum disorders",
      label: "Obsessive compulsive spectrum disorders",
      selected: false,
      answers: [
        {
          value: "Yes",
          label: "Yes",
          selected: false,
          message: "",
        },
        {
          value: "No",
          label: "No",
          selected: false,
        },
        {
          value: "Perhaps",
          label: "Perhaps",
          selected: false,
        },
      ],
    },
    {
      value: "Stress and trauma-related disorders",
      label: "Stress and trauma-related disorders",
      selected: false,
      answers: [
        {
          value: "Yes",
          label: "Yes",
          selected: false,
          message: "",
        },
        {
          value: "No",
          label: "No",
          selected: false,
        },
        {
          value: "Perhaps",
          label: "Perhaps",
          selected: false,
        },
      ],
    },

    {
      value: "Neurodevelopmental disorders",
      label: "Neurodevelopmental disorders",
      answers: [
        {
          value: "ADHD",
          label: "ADHD",
          selected: false,
          message: "",
        },
        {
          value: "ASD",
          label: "ASD",
          selected: false,
          message: "",
        },
        {
          value: "Intellectual disability ",
          label: "Intellectual disability ",
          selected: false,
          message: "",
        },
        {
          value: "Language and communication disorders",
          label: "Language and communication disorders",
          selected: false,
          message: "",
        },
        {
          value: "Dyslexia",
          label: "Dyslexia",
          selected: false,
          message: "",
        },
        {
          value: "Dysgraphia",
          label: "Dysgraphia",
          selected: false,
          message: "",
        },
        {
          value: "Auditory processing disorder",
          label: "Auditory processing disorder",
          selected: false,
          message: "",
        },

        {
          value: "Dyscalculia",
          label: "Dyscalculia",
          selected: false,
          message: "",
        },
        {
          value: "Other",
          label: "Other",
          selected: false,
          message: "",
        },
      ],
    },
  ]);

  const [selectedConfirmed, setSelectedConfirmed] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  //Neoural states

  const [selectedNeouralAnswer, setSelectedNeouralAnswer] = useState(null);
  // const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [customNeouralMessage, setCustomNeouralMessage] = useState("");
  const [isCustomNeouralModalOpen, setIsCustomNeouralyModalOpen] =
    useState(false);

  const handleConfimredSelection = (medication, index) => {
    const updatedMedications = confirmedData.map((med) => {
      if (med.value === medication.value) {
        return { ...med, selected: true };
      } else {
        return { ...med, selected: false };
      }
    });

    setSelectedConfirmed(medication);
    setSelectedAnswer(null);
    setConfirmedIndex(index);
    setConfirmedData(updatedMedications);
    // setSelectedFrequency(null);
  };

  const handleAnswerSelection = (strength) => {
    // Update the selected state for the strength in the medication object
    const updatedMedicationData = confirmedData.map((med) => {
      if (med.value === selectedConfirmed.value) {
        const updatedStrengths = med.answers.map((s) => ({
          ...s,
          selected: s === strength,
        }));
        return {
          ...med,

          answers: updatedStrengths,
        };
      }
      return med;
    });

    console.warn(JSON.stringify(updatedMedicationData), "fff=====");

    // setSelectedConfirmed(
    //   confirmedData.filter(item => item.selected === true)[0],
    // );
    setSelectedAnswer(strength);
    setConfirmFreeText(strength.message ? strength.message : "");
    setConfirmedData(updatedMedicationData);
  };

  const handleMedicationSelection = (medication, index) => {
    const updatedMedications = medicationData.map((med) => {
      if (med.id === medication.id) {
        return { ...med, selected: true };
      } else {
        return { ...med, selected: false };
      }
    });
    setMedicationData(updatedMedications);

    setSelectedMedication(medication);
    setIndex(index);
    setStrengthIndex(0);
    setSelectedStrength(null);
    setSelectedFrequency(null);
  };

  const handleStrengthSelection = (strength, med) => {
    console.log(med, "Lalalalalalalal");

    // Check if the selected strength is the same as the one being clicked
    if (selectedStrength === strength) {
      // Strength is already selected, clear the selection
      setSelectedStrength(null);
    } else {
      // Update the selected state for the strength in the medication object
      const updatedMedicationData = medicationData.map((med) => {
        if (med.value === selectedMedication.value) {
          // Reset the 'selected' property for the old selected strength
          const updatedStrengths = med.strength.map((s) => ({
            ...s,
            selected: s === strength,
          }));
          return { ...med, strength: updatedStrengths };
        }
        return med;
      });

      setSelectedStrength(strength);
      setMedicationData(updatedMedicationData);
      // setSelectedMedication(selectedMedication);
    }
  };

  const handleFrequencySelection = (frequency) => {
    console.log(frequency);

    if (frequency.value != "Other") {
      // Set selected to true for the selected frequency
      const updatedMedicationData = medicationData.map((med) => {
        if (med.value === selectedMedication.value) {
          const updatedStrengths = med.strength.map((strength) => {
            if (strength.value === selectedStrength.value) {
              const updatedFrequency = strength.frequency.map((freq) => ({
                ...freq,
                selected: frequency.value === freq.value ? true : false,
              }));
              return { ...strength, frequency: updatedFrequency };
            }
            return strength;
          });
          return { ...med, strength: updatedStrengths };
        }
        return med;
      });

      console.log(updatedMedicationData[0].strength[0], "Againcheck");
      setMedicationData(updatedMedicationData);
      setSelectedFrequency(frequency);
    } else if (frequency.value === "Other") {
      setCustomFrequency(frequency.message ? frequency.message : "");
      setIsCustomFrequencyModalOpen(true);
    }
  };

  const handleCustomFrequencyInput = (text) => {
    setCustomFrequency(text);
  };

  const saveCustomFrequency = () => {
    const updatedMedicationData = medicationData.map((med) => {
      if (med.value === selectedMedication.value) {
        const updatedStrengths = med.strength.map((strength) => {
          if (strength.value === selectedStrength.value) {
            const updatedFrequency = strength.frequency.map((freq) => ({
              ...freq,
              message: freq.label === "Other" ? customFrequency : "",
              selected: freq.label === "Other" ? true : false,
            }));
            return { ...strength, frequency: updatedFrequency };
          }
          return strength;
        });
        return { ...med, strength: updatedStrengths };
      }
      return med;
    });

    setMedicationData(updatedMedicationData);
    // setSelectedFrequency(frequency);
    setIsCustomFrequencyModalOpen(false);
  };

  const saveConfirmedFreeText = () => {
    // const updatedMedicationData = confirmedData.map(med => {
    //   if (med.value === selectedConfirmed.value) {
    //     const updatedStrengths = med.answers.map(s => ({
    //       ...s,
    //       selected: s.selected ? true : false,
    //       message: confirmFreeText,
    //     }));
    //     return {...med, answers: updatedStrengths};
    //   }
    //   return med;
    // });

    const updatedMedicationData = confirmedData.map((med) => {
      if (med.value === selectedConfirmed.value) {
        const updatedStrengths = med.answers.map((s) => ({
          ...s,
          message: s.selected ? confirmFreeText : s.message,
        }));
        return { ...med, answers: updatedStrengths };
      }
      return med;
    });

    setConfirmFreeText("");
    setSelectedAnswer(null);
    setConfirmedData(updatedMedicationData);
  };

  const handleCreateUser = async () => {
    if (agree) {
      // Set loading to true before calling createUser
      try {
        const filteredData = medicationData.filter((item) => {
          return (
            (item.strength &&
              item.strength.some((strength) => strength.selected === true)) ||
            (item.strength &&
              item.strength.some((strength) =>
                strength.frequency.some(
                  (frequency) => frequency.selected === true
                )
              ))
          );
        });

        const filteredDataAgain = filteredData.map((item) => ({
          ...item,
          strength: item.strength.filter(
            (strengthItem) => strengthItem.selected
          ),
        }));
        // Now, filteredData contains objects with selected strength or frequency

        const medicalCom = medicalCombination.filter((item) => item.selected);

        const selectedAnswers = confirmedData.map((item) => {
          const selectedAnswer = item.answers.find((answer) => answer.selected);
          return {
            value: item.value,
            answer: selectedAnswer ? selectedAnswer : null,
          };
        });

        const selectedTwelveNew = twelve.filter((item) => item.selected);

        const childHoodNew = childHood.filter((item) => item.selected);
      } catch (error) {
        console.error("Error creating user: ", error);
      } finally {
        setLoading(false); // Set loading to false after createUser is done
        // navigation.navigate('First');
      }
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <div style={styles.container}>
        <div style={styles.row}>
          <span style={styles.title}>Current psychostimulant medication</span>
          <button style={styles.button} onClick={() => setOpen(1)}>
            <img src={ArrowDown} alt="arrow icon" style={styles.icon} />
          </button>
        </div>
      </div>

      {1 === 1 && (
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "#F2EEEE",
              flexDirection: "column",
              display: "flex",
            }}
          >
            {medicationData.map((medication, index) => {
              console.log(medication === selectedMedication);
              return (
                <button
                  key={medication.value}
                  className="medicationItem"
                  onClick={() => handleMedicationSelection(medication, index)}
                >
                  <span style={styles.placeholderStyle}>
                    {medication.label}
                  </span>
                </button>
              );
            })}
          </div>
          {selectedMedication && selectedMedication.value != "None" && (
            <div style={styles.strengthList}>
              {medicationData[index].strength.map((strength, index) => {
                return (
                  <button
                    key={strength.value}
                    className="medicationItem"
                    // style={[
                    //   styles.strengthItem,
                    //   strength.selected ? styles.selectedStrength : null,
                    // ]}
                    onClick={() => {
                      setStrengthIndex(index);
                      handleStrengthSelection(strength, selectedMedication);
                    }}
                  >
                    <span style={styles.placeholderStyle}>
                      {strength.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {selectedMedication && selectedMedication.value === "None" && (
            <div style={styles.strengthList}>
              <input
                value={noneText}
                style={styles.customFrequencyInput}
                placeholder="Type Here"
                onChange={(e) => setNoneText(e.target.value)}
              />
              <button
                style={{
                  alignSelf: "center",
                  marginVertical: 10,
                  height: 40,
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  backgroundColor: "#C3E9E4",
                }}
                onClick={() => {
                  setMedicationData((prevCombination) => {
                    return prevCombination.map((item) => {
                      if (item.value === "None") {
                        return { ...item, message: customKnownMessage };
                      }
                      return item;
                    });
                  });
                }}
              >
                <span
                  style={[styles.placeholderStyle, { marginHorizontal: 0 }]}
                >
                  Save
                </span>
              </button>
            </div>
          )}
          {selectedStrength && (
            <div style={styles.frequencyList}>
              {medicationData[index].strength[strengthIndex].frequency.map(
                (frequency) => (
                  <button
                    key={frequency.value}
                    // style={[
                    //   styles.frequencyItem,
                    //   frequency.selected ? styles.selectedFrequency : null,
                    // ]}
                    onClick={() => handleFrequencySelection(frequency)}
                  >
                    <span style={styles.placeholderStyle}>
                      {frequency.label}
                    </span>
                  </button>
                )
              )}
              {isCustomFrequencyModalOpen && (
                <div style={styles.customFrequencyModal}>
                  <input
                    value={customFrequency}
                    // style={styles.customFrequencyInput}
                    placeholder="Type Here"
                    onChange={(e) => handleCustomFrequencyInput(e.target.value)}
                  />
                  <button
                    style={{
                      alignSelf: "center",
                      marginVertical: 10,
                      height: 40,
                      padding: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                      backgroundColor: "#C3E9E4",
                    }}
                    onClick={saveCustomFrequency}
                  >
                    <span
                    // style={[styles.placeholderStyle, { marginHorizontal: 0 }]}
                    >
                      Save
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginHorizontal: 15,
    backgroundColor: "#F2EEEE",
    paddingVertical: 15,
    marginTop: 10,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    height: 30,
    width: 30,
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  medicationItem: {
    padding: 10,
    // backgroundColor: "#F2EEEE",
  },
  selectedMedication: {
    background: "#28CBB0",
  },
  strengthList: {
    flex: 1,
    // borderRightWidth: 1,
    display: "flex",
    flexDirection: "column",
    // borderColor: 'gray',
    background: "#F2EEEE",
  },
  strengthItem: {
    padding: 10,
  },
  selectedStrength: {
    background: "#28CBB0",
  },

  selectedFrequency: {
    background: "#28CBB0",
  },
};

export default MedicationPage;
