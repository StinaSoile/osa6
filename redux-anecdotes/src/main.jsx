import ReactDOM from "react-dom/client";
// import { createStore, combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
// import anecdoteReducer from "./reducers/anecdoteReducer";
// import filterReducer from "./reducers/filterReducer";
import store from "./store";

// const store = configureStore({
//   reducer: {
//     anecdotes: anecdoteReducer,
//     filter: filterReducer,
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
/*
6.10 anekdootit, step8
Asenna projektiin Redux Toolkit. DONE
Siirrä tämän jälkeen Redux-storen määrittely omaan tiedostoon store.js DONE
ja hyödynnä sen luonnissa Redux Toolkitin configureStore-funktiota. DONE

Muuta filter reduserin ja action creatorien määrittely tapahtumaan 
Redux Toolkitin createSlice-funktion avulla. DONE

Ota myös käyttöön Redux DevTools 
sovelluksen tilan debuggaamisen helpottamiseksi.

6.11 anekdootit, step9
Muuta myös anekdoottireduserin ja action creatorien määrittely 
tapahtumaan Redux Toolkitin createSlice-funktion avulla.
 */
