import React from "react";

const Pressable = (props) => {
  const { onPress, icon, style } = props;

  const handleClick = () => {
    if (typeof onPress === "function") {
      onPress();
    }
  };

  return (
    <div style={styles.container} onClick={handleClick}>
      <img src={icon} alt="icon" style={style ? style : styles.icon} />
    </div>
  );
};

export default Pressable;

const styles = {
  container: {
    backgroundColor: "#F2EEEE",
    // height: 70,
    cursor: "pointer",
    display: "flex",
  },
  icon: {
    width: 40,
    height: 40,
  },
};
