import React from "react";

const Button = (props) => {
  const { onPress, title } = props;

  const handleClick = () => {
    if (typeof onPress === "function") {
      onPress();
    }
  };

  return (
    <button onClick={handleClick} style={styles.container}>
      <span style={styles.title}>{title}</span>
    </button>
  );
};

const styles = {
  container: {
    width: "calc(100% / 1)",
    height: 65,
    backgroundColor: "#28CBB0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    border: "none",
    cursor: "pointer",
  },
  title: {
    color: "#FFFF",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
};

export default Button;
