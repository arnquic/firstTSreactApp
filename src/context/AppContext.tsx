import React, { useState, createContext } from "react";

export interface IApartment {
    id: number;
    name: string;
    units: number;
    ownerId: number | null;
}

export interface IOwner {
    id: number;
    name: string;
    age: number;
    apartments: IApartment[] | null;
}

export type TApartment = IApartment | null;
export type TOwner = IOwner | null;

export interface IContextState {
    apartments: TApartment[];
    setApartments: React.Dispatch<React.SetStateAction<TApartment[]>>;
    owners: TOwner[];
    setOwners: React.Dispatch<React.SetStateAction<TOwner[]>>;
}

export type TContextState = IContextState;

interface IChildren {
    children: React.ReactNode;
}

const defaultState: TContextState = {
    apartments: [null],
    setApartments: () => { },
    owners: [null],
    setOwners: () => { }
}

const AppContext = createContext<TContextState>(defaultState);

function AppProvider({ children }: IChildren): JSX.Element {
    const [apartments, setApartments] = useState<TApartment[]>([null]);
    const [owners, setOwners] = useState<TOwner[]>([null]);

    const state: TContextState = {
        apartments: apartments,
        setApartments: setApartments,
        owners: owners,
        setOwners: setOwners
    }

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };