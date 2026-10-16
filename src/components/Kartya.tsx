import "./kartyaformazas.css"
import type { TanuloSzobaTipus } from '../adatok'

import { useSzobaContext } from "../contexts/szobaContext";


interface SzobaPropsTipus {

    elem: TanuloSzobaTipus,
    index: number
}
function Szoba({ elem, index }: SzobaPropsTipus) {
    const { allapotKezelo } = useSzobaContext();

    return (
        <article>
            <h2>{elem.szoba_nev}</h2>
            <h3>{elem.szobatipus}</h3>
            <p className="sor"><span className="bal">ID</span><span className="jobb">{elem.id}</span></p>
            <p className="sor"><span className="bal">Szobatípus</span><span className="jobb">{elem.szobatipus}</span></p>
            <p className="sor"><span className="bal">Emele</span><span className="jobb">{elem.emelet}.</span></p>
            <p className="sor"><span className="bal">Férőhely</span><span className="jobb">{elem.ferohely} fő</span></p>
            <p className="sor"><span className="bal">Foglalt Helyek</span><span className="jobb">{elem.foglalt_helyek} fő</span></p>

            <button
                title="foglal"
                onClick={() => allapotKezelo(index, "???")}
            >
                Foglalás
            </button>

        </article>
    )
}

export default Szoba