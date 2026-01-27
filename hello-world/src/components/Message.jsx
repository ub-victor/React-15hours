import { useState } from "react";

const Message = () => {
  // state to track subscribed status
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // you can also trigger API call here
    setSubscribed(true);
  };

  return (
    <div style={styles.banner}>
      <h1 style={styles.title}>Welcome Visitor</h1>
      {!subscribed ? (
        <button style={styles.button} onClick={handleSubscribe}>
          Subscribe
        </button>
      ) : (
        <span style={styles.subscribed}>Subscribed</span>
      )}
    </div>
  );
};

export default Message;

const styles = {
  banner: {
    backgroundColor: "#2b2b2b", // dark gray banner
    color: "#fff",
    padding: "40px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    borderRadius: "6px",
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  button: {
    backgroundColor: "#111",
    color: "#fff",
    border: "0",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  subscribed: { 
    marginLeft: 0,
    color: "#fff",
    fontWeight: 500,
  },
};