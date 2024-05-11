import Anecdotelist from "./components/Anecdotelist";
import AnecdoteForm from "./components/AnecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useEffect } from "react";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  });

  // const fff = (b) => (c) => (d) => d(c(b()));

  // const ggg = function (b) {
  //   return function (c) {
  //     return function (d) {
  //       return d(c(b()));
  //     };
  //   };
  // };

  // fff(() => "kissa")((x) => x.toUpperCase())((x) => console.log(x));
  // ggg(() => "kissa")((x) => x.toUpperCase())((x) => console.log(x));

  const myAction = () => {
    return async (d) => {
      const x = await myFakeFetchFromServer();
      d(x);
    };
  };

  const myFakeFetchFromServer = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let arr = ["kissa", "koira", "apina", "sika", "hevonen", "kana"];
        let x = arr[Math.floor(Math.random() * arr.length)];
        resolve(x);
      }, 2000);
    });
  };

  const myDispatch = (x) => {
    if (typeof x === "function") {
      x(myDispatch);
    } else {
      console.log(`"${x}" added to fake redux state!`);
    }
  };

  myDispatch(myAction());

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

6.16 anekdootit ja backend, step3
Muuta Redux-storen alustus 
tapahtumaan Redux Thunk ‑kirjaston avulla toteutettuun 
asynkroniseen actioniin. DONE

6.17 anekdootit ja backend, step4
Muuta myös uuden anekdootin luominen tapahtumaan 
Redux Thunk ‑kirjaston avulla toteutettuihin asynkronisiin actioneihin.

6.18 anekdootit ja backend, step5
Äänestäminen ei vielä talleta muutoksia backendiin. 
Korjaa tilanne Redux Thunk ‑kirjastoa hyödyntäen.
*/
