import * as React from 'react' ;
import * as style from './main.scss';
import { Button, Dialog, Dropdown, Form } from '@fluentui/react-northstar';
import { MutationFunction } from 'react-apollo';
import { toast } from 'react-toastify';
import { CreateUserMutation, CreateUserMutationVariables, Permission } from '../../../../gql';
import { Row } from '../../../system/Row';

interface Props {
    permissionOptions: string[];
    groupOptions: string[];
    userData: CreateUserMutationVariables;
    setUserData: (userData: CreateUserMutationVariables) => void;
    mutate: MutationFunction<CreateUserMutation, CreateUserMutationVariables>
}

export const CreateUser = ({  userData, setUserData, permissionOptions, groupOptions, mutate}: Props) => {
    const [awaiting, setAwaiting] = React.useState(false);


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
    )
}