import { createContext, useContext, useState, type ReactNode } from "react";
import { TANULOSZOBAK, type TanuloSzobaTipus } from "../adatok";

interface SzobaContextValue {
    allapotKezelo: (index: number, allapot: number) => void,
    SzobaLista: TanuloSzobaTipus[]
}

export const SzobaContext = createContext<SzobaContextValue | undefined>(undefined)


interface SzobaProviderProps {
    children: ReactNode
}

export function SzobaProvider({ children }: SzobaProviderProps) {

    const [SzobaLista, setSzobaLista] = useState<TanuloSzobaTipus[]>(TANULOSZOBAK)

    function allapotKezelo(index: number, allapot: number) {
        console.log(index, allapot)
        const ujSzobaLista: TanuloSzobaTipus[] = [...SzobaLista]

        if (SzobaLista[index].foglalt_helyek + 1 > SzobaLista[index].ferohely){
            console.log("Betelt helyek");
        } else {
            ujSzobaLista[index].foglalt_helyek =  SzobaLista[index].foglalt_helyek + 1;        
        }
        
        setSzobaLista(ujSzobaLista)
    }

    return (
        <SzobaContext.Provider value={{ allapotKezelo, SzobaLista }}>
            {children}
        </SzobaContext.Provider>
    )
}

export function useSzobaContext() {

    const context = useContext(SzobaContext);

    if (context === undefined) {
        throw new Error(
            'Az App csak SzobaProvideren belül használható.',
        );
    }
    return context
}