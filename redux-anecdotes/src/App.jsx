// import { useSelector, useDispatch } from "react-redux";
import Anecdotelist from "./components/Anecdotelist";
import AnecdoteForm from "./components/AnecdoteForm";

const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdoteForm />
      <Anecdotelist />
    </div>
  );
};

export default App;
