import { NewComponentStore, HomeStore, ControllerStore } from ".";
import { createContext } from "react";

export class RootStore {
  public newComponentStore: NewComponentStore;
  public controllerStore: ControllerStore;
  public homeStore: HomeStore;

  public constructor() {
    this.newComponentStore = new NewComponentStore(this);
    this.controllerStore = new ControllerStore(this);
    this.homeStore = new HomeStore(this);

    return {
      newComponentStore: this.newComponentStore,
      controllerStore: this.controllerStore,
      homeStore: this.homeStore
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
