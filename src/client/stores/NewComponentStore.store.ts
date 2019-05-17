import { observable } from "mobx";
import { createContext } from "react";

export class NewComponentStore {
  @observable public form: boolean = false;
}

const NewComponentStoreContext = createContext(new NewComponentStore());
export default NewComponentStoreContext;
