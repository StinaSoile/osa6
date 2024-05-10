import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  removeNotification,
  createNotification,
} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  //   const anecdotes = useSelector((state) => state);

  // const vote = (id) => {
  //   console.log("vote", id);
  // };

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    let timeoutId = setTimeout(() => {
      dispatch(removeNotification(""));
    }, 2000);
    dispatch(
      createNotification({ text: `you created "${content}".`, timeoutId })
    );
    event.target.newAnecdote.value = "";
    dispatch(createAnecdote(content));
  };

  return (
    <>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="newAnecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
