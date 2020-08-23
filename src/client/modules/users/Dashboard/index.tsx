import * as React from "react";
import { Mutation } from "react-apollo";
import { toast } from "react-toastify";
import {
  Form,
  Button,
  Dialog,
  Dropdown,
  Loader,
} from "@fluentui/react-northstar";
import { createUser, getUsers } from "../../../../gql";
import {
  CreateUserMutation,
  CreateUserMutationVariables,
  Permission,
  useGroupNamesQuery,
} from "../../../gql";
import { DashboardWrapper } from "../../system/DashboardWrapper";

const Users = React.lazy(() => import("./Users"));

const Dashboard: React.FC = () => {
  const [awaiting, setAwaiting] = React.useState(false);
  const [userData, setUserData] = React.useState<CreateUserMutationVariables>({
    username: "",
    password: "",
    group: "",
    permission: "",
  });
  const [permissionOptions, setPermissionOptions] = React.useState<string[]>(
    []
  );
  const [groupOptions, setGroupOptions] = React.useState<string[]>([]);
  const { data, loading } = useGroupNamesQuery();
  React.useEffect(() => {
    const options: string[] = [];

    // tslint:disable-next-line:forin
    for (const option in Permission) {
      options.push(option);
    }

    setPermissionOptions(options);
  }, []);
  React.useEffect(() => {
    if (!loading && data && data.groupNames.length) {
      setGroupOptions(data.groupNames);
    }
  }, [data, loading]);

  const isValid = () => {
    if (
      userData.username &&
      userData.password &&
      userData.permission &&
      userData.group
    ) {
      return true;
    }

    return false;
  };

  const permissionLabelId = "choose-permission";
  const permissionId = "choose-permission-id";
  const groupLabelId = "choose-group";
  const groupId = "choose-group-id";

  return (
    <DashboardWrapper
      wrapperChildren={
        <React.Suspense fallback={<Loader />}>
          <Users />
        </React.Suspense>
      }
    >
      <Mutation<CreateUserMutation, CreateUserMutationVariables>
        mutation={createUser}
        onError={(error) => {
          toast(error.message);
        }}
        refetchQueries={[
          {
            query: getUsers,
          },
        ]}
        awaitRefetchQueries
      >
        {(mutate) => (
          <Dialog
            cancelButton="Cancel"
            confirmButton={awaiting ? "Submitting" : "Submit"}
            onConfirm={async () => {
              if (isValid() && !awaiting) {
                setAwaiting(true);
                await mutate({
                  variables: {
                    username: userData.username,
                    password: userData.password,
                    group: userData.group,
                    permission: userData.permission,
                  },
                }).finally(() => {
                  setAwaiting(false);
                });
              } else {
                toast("You must fill in every input field.");
              }
            }}
            content={
              <>
                <Form
                  fields={[
                    {
                      label: "Username",
                      name: "username",
                      id: "username",
                      key: "username",
                      required: true,
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        setUserData({
                          ...userData,
                          username: e.target.value,
                        });
                      },
                    },
                    {
                      label: "Password",
                      name: "password",
                      id: "password",
                      key: "password",
                      type: "password",
                      required: true,
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        setUserData({
                          ...userData,
                          password: e.target.value,
                        });
                      },
                    },
                    {
                      label: "Permission",
                      name: "permission",
                      key: permissionId,
                      type: "permission",
                      control: {
                        as: Dropdown,
                        items: permissionOptions,
                        "aria-labelledby": permissionLabelId,
                        placeholder: "Choose a permission",
                        searchInput: {
                          id: permissionId, // id needs to end up on the search input.
                        },
                        id: undefined, // not on the main wrapper element.
                      },
                      required: true,
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        setUserData({
                          ...userData,
                          permission: e.target.value,
                        });
                      },
                    },
                    {
                      label: "Group",
                      name: "group",
                      key: groupId,
                      type: "group",
                      control: {
                        as: Dropdown,
                        items: groupOptions,
                        "aria-labelledby": groupLabelId,
                        placeholder: "Choose a group",
                        searchInput: {
                          id: groupId, // id needs to end up on the search input.
                        },
                        id: undefined, // not on the main wrapper element.
                      },
                      required: true,
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        setUserData({ ...userData, group: e.target.value });
                      },
                    },
                  ]}
                />
              </>
            }
            header="Add user"
            trigger={<Button circular content="+" />}
          />
        )}
      </Mutation>
    </DashboardWrapper>
  );
};

export { Dashboard as default };
