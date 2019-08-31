import { observable } from "mobx";
import { RootStore } from "./RootStore";

export class NewComponentStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public form = false;
}
