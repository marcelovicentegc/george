import * as React from "react";
import * as s from "./main.scss";
import { Menu, Header as H1 } from "@fluentui/react-northstar";
import { rootStoreContext } from "../../../stores/RootStore";
import { BASE_ROUTES } from "../../../utils/routes";
import { georgeAlias } from "../../../config";
import { observer } from "mobx-react";

export const Header: React.FC = observer(() => {
  const { routerStore } = React.useContext(rootStoreContext);

  return (
    <header className={s.header}>
      <H1 content={georgeAlias} className={s.h1} />
      <Menu
        className={s.menu}
        items={[
          {
            key: "home",
            content: "Home",
            active:
              routerStore.location.pathname === BASE_ROUTES.HOME ||
              routerStore.location.pathname.includes(BASE_ROUTES.THINGS),
            onClick: () => routerStore.push(BASE_ROUTES.HOME),
          },
          {
            key: "profile",
            content: "Profile",
            active: routerStore.location.pathname === BASE_ROUTES.PROFILE,
            onClick: () => routerStore.push(BASE_ROUTES.PROFILE),
          },
          {
            key: "settings",
            content: "Settings",
            active: routerStore.location.pathname === BASE_ROUTES.SETTINGS,
            onClick: () => routerStore.push(BASE_ROUTES.SETTINGS),
          },
        ]}
        underlined
        primary
      />
    </header>
  );
});
