import { NewComponentStore, HomeStore, ControllerStore } from ".";
import { createContext } from "react";
import { History, createBrowserHistory } from "history";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";

export class RootStore {
  public newComponentStore: NewComponentStore;
  public controllerStore: ControllerStore;
  public homeStore: HomeStore;
  public routerStore: RouterStore;
  public history: History;

  public constructor() {
    const browerHistory = createBrowserHistory();
    this.routerStore = new RouterStore();
    this.history = syncHistoryWithStore(browerHistory, this.routerStore);
    this.newComponentStore = new NewComponentStore(this);
    this.controllerStore = new ControllerStore(this);
    this.homeStore = new HomeStore(this);

    return {
      newComponentStore: this.newComponentStore,
      controllerStore: this.controllerStore,
      homeStore: this.homeStore,
      routerStore: this.routerStore,
      history: this.history,
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
