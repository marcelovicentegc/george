import * as React from "react";
import * as style from './main.scss';
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
import { Row } from "../../system/Row";

const Users = React.lazy(() => import("./Users"));

const Dashboard: React.FC = () => {
  const [awaiting, setAwaiting] = React.useState(false);
  const [userData, setUserData] = React.useState<CreateUserMutationVariables>({
    username: "",
    password: "",
    group: "",
    permission: Permission.Common,
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
            className={style.dialog}
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
              <Row>
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
                  ]}
                  className={style.form}
                />
                <Form className={`${style.form} ${style.withDropdowns}`}>  
                  <Dropdown
                    placeholder={"Permission"}
                    items={permissionOptions}
                    onChange={(_, data) =>
                      setUserData({ ...userData, permission: data.value?.toString().toUpperCase() as Permission })
                    }
                    className={style.dropdown}
                  />
                  <Dropdown
                    placeholder={"Group"}
                    items={groupOptions}
                    onChange={(_, data) =>
                      setUserData({ ...userData, group: data.value as string ?? "" })
                    }
                    className={style.dropdown}
                  />
                </Form>
              </Row>
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
