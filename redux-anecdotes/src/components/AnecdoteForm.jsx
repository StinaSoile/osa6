import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  removeNotification,
  createNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  //   const anecdotes = useSelector((state) => state);

  // const vote = (id) => {
  //   console.log("vote", id);
  // };

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    let timeoutId = setTimeout(() => {
      dispatch(removeNotification(""));
    }, 2000);
    dispatch(
      createNotification({ text: `you created "${content}".`, timeoutId })
    );
    event.target.newAnecdote.value = "";
    const anecdote = await anecdoteService.createNew(content);
    dispatch(createAnecdote(anecdote));
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
