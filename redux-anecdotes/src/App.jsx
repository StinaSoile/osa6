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
Notificaatio tehdään nyt näin:
dispatch(setNotification(`new anecdote '${content}'`))
setTimeout(() => {
  dispatch(clearNotification())
}, 5000)


Toteuta action creator,
joka mahdollistaa notifikaation antamisen seuraavasti:
dispatch(setNotification(`you voted '${anecdote.content}'`, 10)), missä 10 on aika
*/
