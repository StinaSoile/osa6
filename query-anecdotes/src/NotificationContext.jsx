/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const notificationReducer = (
  state = { text: "", timeoutId: undefined },
  action
) => {
  switch (action.type) {
    case "NONE": {
      return { text: "", timeoutId: undefined };
    }
    case "NEW": {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      return {
        text: `you created anecdote '${action.payload.anecdote}'`,
        timeoutId: action.payload.timeoutId,
      };
    }
    case "VOTE": {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      return {
        text: `you voted anecdote '${action.payload.anecdote}'`,
        timeoutId: action.payload.timeoutId,
      };
    }

    case "FAIL": {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      return {
        text: "too short anecdote, must have length 5 or more",
        timeoutId: action.payload.timeoutId,
      };
    }
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, {
    text: "",
    timeoutId: undefined,
  });
  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
