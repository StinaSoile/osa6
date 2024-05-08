import { useDispatch } from "react-redux";
import { create } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  //   const anecdotes = useSelector((state) => state);

  // const vote = (id) => {
  //   console.log("vote", id);
  // };

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    event.target.newAnecdote.value = "";
    dispatch(create(content));
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
