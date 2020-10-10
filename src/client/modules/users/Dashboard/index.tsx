import * as React from "react";
import { Mutation } from "react-apollo";
import { toast } from "react-toastify";
import { Loader } from "@fluentui/react-northstar";
import { createUser, getUsers } from "../../../../gql";
import {
  CreateUserMutation,
  CreateUserMutationVariables,
  Permission,
  useGroupNamesQuery,
} from "../../../gql";
import { DashboardWrapper } from "../../system/DashboardWrapper";
import { CreateUser } from "./CreateUser";

const Users = React.lazy(() => import("./Users"));

const Dashboard: React.FC = () => {
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
          <CreateUser
            mutate={mutate}
            setUserData={setUserData}
            groupOptions={groupOptions}
            permissionOptions={permissionOptions}
            userData={userData}
          />
        )}
      </Mutation>
    </DashboardWrapper>
  );
};

export { Dashboard as default };
