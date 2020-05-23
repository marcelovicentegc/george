import * as React from "react";
import * as s from "./main.scss";
import {
  Menu,
  Header as H1,
  Flex,
  Avatar,
  Button,
  Loader,
} from "@fluentui/react-northstar";
import { rootStoreContext } from "../../../stores/RootStore";
import { BASE_ROUTES } from "../../../utils/routes";
import { georgeAlias } from "../../../config";
import { observer } from "mobx-react";
import {
  useGetUsernameQuery,
  useLogoutUserMutation,
  useGetProfileAvatarQuery,
} from "../../../gql";

export const Header: React.FC = observer(() => {
  const { routerStore } = React.useContext(rootStoreContext);
  const {
    data: avatarData,
    loading: avatarLoading,
  } = useGetProfileAvatarQuery();
  const {
    data: usernameData,
    loading: usernameLoading,
  } = useGetUsernameQuery();
  const [mutate] = useLogoutUserMutation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [headerTitle, setHeaderTitle] = React.useState(georgeAlias);
  React.useEffect(() => {
    if (
      routerStore.location.pathname === BASE_ROUTES.PROFILE ||
      routerStore.location.pathname === BASE_ROUTES.HOME ||
      routerStore.location.pathname === BASE_ROUTES.SETTINGS
    ) {
      setHeaderTitle(georgeAlias);
    } else {
      setHeaderTitle(georgeAlias + " " + routerStore.location.pathname);
    }
  }, [routerStore.location.pathname]);

  return (
    <header className={s.header}>
      <Flex>
        <Flex column className={s.column}>
          <H1 content={headerTitle} className={s.h1} />
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
        </Flex>
        <Flex hAlign={"end"} className={s.row}>
          {(avatarLoading || usernameLoading) && <Loader />}
          {avatarData && avatarData.getProfileAvatar ? (
            <Avatar image={avatarData.getProfileAvatar} />
          ) : (
            usernameData &&
            usernameData.getUsername && (
              <Avatar name={usernameData.getUsername.toUpperCase()} />
            )
          )}
          <Button
            content="Logout"
            text
            loading={isLoading}
            onClick={async () => {
              setIsLoading(true);
              await mutate()
                .then(() => window.location.reload())
                .finally(() => setIsLoading(false));
            }}
          />
        </Flex>
      </Flex>
    </header>
  );
});
