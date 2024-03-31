import React from "react";
import Lottie from "lottie-web";

const AnimatedLoader = () => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Animations/loadingjson.json"),
    });

    return () => animation.destroy();
  }, []);

  return (
    <div style={styles.container}>
      <div ref={containerRef} style={styles.animation}></div>
    </div>
  );
};

const styles = {
  animation: {
    width: 200,
    height: 200,
    opacity: 1,
  },
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 200,
    top: 0,
    backgroundColor: "#000",
    opacity: 0.7,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default AnimatedLoader;
