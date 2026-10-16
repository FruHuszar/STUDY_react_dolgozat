import { useSzobaContext } from "./contexts/szobaContext";
import Szobak from "./components/Kartyak";

function App() { 
 
  const {SzobaLista} = useSzobaContext();

  return ( 

    <> 

      <header><h1>Tanulószoba foglalás</h1></header> 

      <section> 
        <Szobak szobaLista={SzobaLista} />
      </section> 

      <footer><p>Készítette: Huszár Fruzsina Anna</p></footer> 

    </> 

  ); 

} 

export default App; 