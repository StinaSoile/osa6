// import { useSelector, useDispatch } from "react-redux";
import Anecdotelist from "./components/Anecdotelist";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification />
      <Filter />
      <Anecdotelist />
      <AnecdoteForm />
    </div>
  );
};

export default App;
