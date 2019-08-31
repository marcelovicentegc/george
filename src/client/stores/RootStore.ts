import { NewComponentStore } from ".";
import { createContext } from "react";

export class RootStore {
  public newComponentStore: NewComponentStore;

  public constructor() {
    this.newComponentStore = new NewComponentStore(this);

    return {
      newComponentStore: this.newComponentStore
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
