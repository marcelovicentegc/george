import { observable, action } from "mobx";
import { RootStore } from "./RootStore";

export class HomeStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public statusMessage: string[] = [];

  @action public setStatusMessage = (statusMessage: string[]) => {
    this.statusMessage = statusMessage;
  };
}
