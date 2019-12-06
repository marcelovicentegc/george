import { observable, action } from "mobx";
import { RootStore } from "./RootStore";
import { DataSource } from "../modules/controller/ui";

export class ControllerStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public dataSource: DataSource | null = null;

  @action public setDataSource = (dataSource: DataSource) => {
    this.dataSource = dataSource;
  };
}
