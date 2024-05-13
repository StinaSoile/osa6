import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getAnecdotes, createAnecdote, updateAnecdote } from "./requests";
import NotificationContext from "./NotificationContext";
import { useContext } from "react";

const App = () => {
  const [notification, dispatch] = useContext(NotificationContext);
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
    },
  });
  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
  });

  console.log(JSON.parse(JSON.stringify(result)));

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>;
  }

  const anecdotes = result.data;

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate(
      { ...anecdote, votes: anecdote.votes + 1 },
      { onSuccess: () => notificate("VOTE", anecdote.content) }
    );
  };

  const addAnecdote = (content) => {
    newAnecdoteMutation.mutate(
      { content },
      {
        onSuccess: () => notificate("NEW", content),
        onError: () => notificate("FAIL", content),
      }
    );
  };

  const notificate = (type, anecdote) => {
    let timeoutId = setTimeout(() => {
      dispatch({ type: "NONE" });
    }, 5000);
    dispatch({ type: type, payload: { anecdote, timeoutId } });
  };

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm addAnecdote={addAnecdote} />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

/*
6.23
Toteuta sovelluksen notifikaation tilan hallinta 
useReducer-hookin ja contextin avulla. 
Notifikaatio kertoo kun uusi anekdootti luodaan 
tai anekdoottia äänestetään. 5 sekuntia taas! 

- 5 sekuntia puuttuu vielä


6.24
lisättävän anekdootin sisällön pituus on vähintään 5 merkkiä. 
Toteuta nyt lisäämisen yhteyteen virheenkäsittely. 
Käytännössä riittää, että 
näytät epäonnistuneen lisäyksen yhteydessä käyttäjälle notifikaation
'too short anecdote, must have length 5 or more'
Virhetilanne kannattaa käsitellä sille rekisteröidyssä takaisinkutsufunktiossa, 
ks täältä miten rekisteröit funktion:
https://tanstack.com/query/latest/docs/react/reference/useMutation
DONE

sitten palautus, mutta HUOM!!!!!!!!!
Minulla on vielä hassuja ylimääräisiä kissa-koira-koodeja 
jotka pitää siivota ennen palautusta!!!!
*/
