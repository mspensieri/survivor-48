"use client";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "700px",
  },
};

function Rules() {
  return (
    <div style={styles.container}>
      <img src={"rules.png"} alt="Rules of the game" style={styles.image}></img>
    </div>
  );
}

export default Rules;
