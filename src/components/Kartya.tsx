import type { TanuloSzobaTipus } from '../adatok'

import { useSzobaContext } from "../contexts/szobaContext";

interface SzobaPropsTipus {

    elem: TanuloSzobaTipus,
    index: number
}
function Szoba({ elem, index }: SzobaPropsTipus) {
    const { allapotKezelo } = useSzobaContext();
    const ellenorzes = elem.foglalt_helyek === elem.ferohely;

    return (
        <article>
            <h2>{elem.szoba_nev}</h2>
            <h3>{elem.szobatipus}</h3>
            <p className="sor"><span className="bal">ID</span><span className="jobb">{elem.id}</span></p>
            <p className="sor"><span className="bal">Szobatípus</span><span className="jobb">{elem.szobatipus}</span></p>
            <p className="sor"><span className="bal">Emele</span><span className="jobb">{elem.emelet}.</span></p>
            <p className="sor"><span className="bal">Férőhely</span><span className="jobb">{elem.ferohely} fő</span></p>
            <p className="sor"><span className="bal">Foglalt Helyek</span><span className="jobb">{elem.foglalt_helyek} fő</span></p>

            {ellenorzes && <p className="tilos">Nem tudsz foglalni.</p>}

            <button
                className={ellenorzes ? "letiltott" : ""}
                title="foglal"
                onClick={() => allapotKezelo(index, 1)}
            >
            {ellenorzes ? "Megtelt" : "Foglalás"}
            </button>

        </article>
    )
}

export default Szoba