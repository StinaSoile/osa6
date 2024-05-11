import { useDispatch } from "react-redux";
import { createNewAnecdote } from "../reducers/anecdoteReducer";
import {
  createNotification,
  removeNotification,
} from "../reducers/notificationReducer";
const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    event.target.newAnecdote.value = "";

    createNewNotification(content);
    dispatch(createNewAnecdote(content));
  };

  const createNewNotification = (content) => {
    let timeoutId = setTimeout(() => {
      dispatch(removeNotification(""));
    }, 5000);
    dispatch(
      createNotification({ text: `you created "${content}".`, timeoutId })
    );
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

/*

6.17 anekdootit ja backend, step4
Muuta myös uuden anekdootin luominen tapahtumaan 
Redux Thunk ‑kirjaston avulla toteutettuihin asynkronisiin actioneihin.
*/
