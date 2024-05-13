/* eslint-disable react/prop-types */
// import { useContext } from "react";
// import NotificationContext from "../NotificationContext";
const AnecdoteForm = (props) => {
  // const [notification, dispatch] = useContext(NotificationContext);
  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.addAnecdote(content);
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
