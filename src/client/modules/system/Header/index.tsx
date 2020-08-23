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
  useGetPermissionQuery,
} from "../../../gql";
import { Permission } from "../../../../server/gql";

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
  const {
    data: permissionData,
    loading: permissionLoading,
  } = useGetPermissionQuery();
  const [mutate] = useLogoutUserMutation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [headerTitle, setHeaderTitle] = React.useState(georgeAlias);
  React.useEffect(() => {
    if (
      routerStore.location.pathname === BASE_ROUTES.USERS ||
      routerStore.location.pathname === BASE_ROUTES.HOME ||
      routerStore.location.pathname === BASE_ROUTES.GROUPS ||
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
              permissionData &&
                permissionData.getPermission &&
                permissionData.getPermission === Permission.Admin && {
                  key: "users",
                  content: "Users",
                  active: routerStore.location.pathname === BASE_ROUTES.USERS,
                  onClick: () => routerStore.push(BASE_ROUTES.USERS),
                },
              permissionData &&
                permissionData.getPermission &&
                permissionData.getPermission === Permission.Admin && {
                  key: "groups",
                  content: "Groups",
                  active: routerStore.location.pathname === BASE_ROUTES.GROUPS,
                  onClick: () => routerStore.push(BASE_ROUTES.GROUPS),
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
          {(avatarLoading || usernameLoading || permissionLoading) && (
            <Loader />
          )}
          {!avatarLoading && avatarData && avatarData.getProfileAvatar ? (
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
