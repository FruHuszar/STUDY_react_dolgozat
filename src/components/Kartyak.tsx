
import Szoba from './Kartya'
import type {  TanuloSzobaTipus } from '../adatok'

interface SzobakPropsTipus {
    szobaLista: TanuloSzobaTipus[]
}

function Szobak({ szobaLista }: SzobakPropsTipus) {
    return (
        <div>
            {
                szobaLista.map((e, i) => {
                    return <Szoba elem={e} index={i} key={i} />
                }
                )
            }
        </div>
    )
}

export default Szobak