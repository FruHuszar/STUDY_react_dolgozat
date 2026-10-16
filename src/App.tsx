import { useState } from "react"; 

import "./App.css"; 

import { TANULOSZOBAK, type szobatipusok, type TanuloSzobaTipus } from "./adatok";
import Szobak from "./components/Kartyak";

  

function App() { 

  const [szobaLista, setszobaLista] = useState<TanuloSzobaTipus[]>(TANULOSZOBAK); 

  

  function allapotKezelo(index: number, allapot: ???) { 

    const ujszobaLista: TanuloSzobaTipus[] = [...szobaLista];  

    /*ujszobaLista[index].allapot = allapot; */

    setszobaLista(ujszobaLista); 

  } 

  

  return ( 

    <> 

      <header><h1>Tanulószoba foglalás</h1></header> 

      <section> 
        <Szobak szobaLista={szobaLista} allapotKezelo={allapotKezelo} />
      </section> 

      <footer><p>Készítette: Huszár Fruzsina Anna</p></footer> 

    </> 

  ); 

} 

export default App; 