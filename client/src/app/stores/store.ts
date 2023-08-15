import { createContext, useContext } from "react";
import InfoItemStore from "./infoItemStore";

interface Store {
    infoitemStore: InfoItemStore
}

export const store: Store = {
    infoitemStore: new InfoItemStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}