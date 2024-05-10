// import { useSelector, useDispatch } from "react-redux";
import Anecdotelist from "./components/Anecdotelist";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import anecdoteService from "./services/anecdotes";
import { setAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService.getAll().then((anecdotes) => {
      dispatch(setAnecdotes(anecdotes));
    });
  }, []);

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

/*

6.14 
Hae sovelluksen käynnistyessä anekdootit 
JSON Serverillä toteutetusta backendistä. DONE

6.15
Muuta uusien anekdoottien luomista siten, 
että anekdootit talletetaan backendiin.
*/
