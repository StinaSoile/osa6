import { useSelector } from "react-redux";

const Notification = () => {
  const text = useSelector((state) => {
    const text = state.notification.text;
    return text;
  });

  let style = {
    position: "fixed",
    top: "1rem",
    right: "1rem",
    zIndex: "9999",
    padding: "10px",
    border: "solid",
    width: "10rem",
    backgroundColor: "#fff",
  };

  if (!text) return <></>;
  return <div style={style}>{text}</div>;
};

export default Notification;
