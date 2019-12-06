import { NewComponentStore } from ".";
import { createContext } from "react";
import { ControllerStore } from "./ControllerStore";

export class RootStore {
  public newComponentStore: NewComponentStore;
  public controllerStore: ControllerStore;

  public constructor() {
    this.newComponentStore = new NewComponentStore(this);
    this.controllerStore = new ControllerStore(this);

    return {
      newComponentStore: this.newComponentStore,
      controllerStore: this.controllerStore
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
