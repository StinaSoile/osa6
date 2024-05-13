/* eslint-disable react/prop-types */
import { useContext } from "react";
import NotificationContext from "../NotificationContext";
const Notification = (props) => {
  const [notification, dispatch] = useContext(NotificationContext);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };
  console.log("TÄSSÄ ON NOTIF ", notification);
  if (notification.text === "") return null;

  return <div style={style}>{notification.text}</div>;
};

export default Notification;
