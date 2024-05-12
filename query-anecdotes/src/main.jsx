import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

/*
6.20
Toteuta anekdoottien hakeminen palvelimelta React Queryn avulla. 
Sovelluksen tulee toimia siten, 
että jos palvelimen kanssa kommunikoinnissa ilmenee ongelmia, 
tulee näkyviin ainoastaan virhesivu, ks kuva.
Ohje virhetilanteen havaitsemiseen: https://tanstack.com/query/latest/docs/react/guides/queries
Voit simuloida palvelimen kanssa tapahtuvaa ongelmaa 
esim. sammuttamalla JSON Serverin. 

Tehtävä 6.21
Toteuta uusien anekdoottien lisääminen palvelimelle React Queryn avulla. 
Sovelluksen tulee automaattisesti renderöidä lisätty anekdootti. 
Huomaa, että anekdootin sisällön pitää olla vähintään 5 merkkiä pitkä, 
muuten palvelin ei hyväksy POST pyyntöä. 
Virheiden käsittelystä ei tarvitse nyt välittää.

Tehtävä 6.22
Toteuta anekdoottien äänestäminen hyödyntäen jälleen React Queryä. 
Sovelluksen tulee automaattisesti renderöidä 
äänestetyn anekdootin kasvatettu äänimäärä.
*/
