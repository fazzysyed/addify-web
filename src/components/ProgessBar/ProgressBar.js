import React from "react";

const CustomProgressBar = ({ progress, barColor }) => {
  return (
    <>
      <div style={styles.progressBar}>
        <div
          style={{
            ...styles.progress,
            width: `${progress}%`,
            backgroundColor: barColor ? barColor : "#E9B977",
          }}
        />
      </div>
    </>
  );
};

const styles = {
  progressBar: {
    width: `${window.innerWidth / 1.6}px`,
    alignSelf: "center",
    height: 8,
    backgroundColor: "#ccc", // Background color of the progress bar container
    borderRadius: 1, // Border radius to make it rounded
  },
  progress: {
    height: 10,
    // Color of the progress bar
    borderRadius: 10, // Match the container's border radius
  },
};

export default CustomProgressBar;
