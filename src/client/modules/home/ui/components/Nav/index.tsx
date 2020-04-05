import * as React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import useOnClickOutside from "use-onclickoutside";
import { logoutUser } from "../../../../../../server/schema/graphql/Mutations.graphql";
import { getUserIdFromSession } from "../../../../../../server/schema/graphql/Queries.graphql";
import "./main.scss";
import { Link } from "react-router-dom";
import { LogoutUserMutation } from "../../../../../gql";

interface Props extends RouteComponentProps {
  username: string;
}

const Nav: React.FunctionComponent<Props> = (props) => {
  const [dropDown, setDropDown] = React.useState(false);
  const dropDownMenu = React.useRef();
  const hideDropDown = () => {
    return setDropDown(false);
  };
  useOnClickOutside(dropDownMenu, hideDropDown);

  return (
    <nav className={`${dropDown ? "open" : ""}`}>
      <Link to={"/"}>
        <span>home</span>
      </Link>
      <span onClick={() => setDropDown(true)}>{props.username}</span>
      {dropDown && (
        <div className="nav-dropdown-menu" ref={dropDownMenu}>
          <Mutation<LogoutUserMutation>
            mutation={logoutUser}
            refetchQueries={[{ query: getUserIdFromSession }]}
            awaitRefetchQueries
          >
            {(mutate) => (
              <span
                onClick={async () => {
                  await mutate().then(() => {
                    if (props.location.pathname !== "/") {
                      props.history.push("/");
                    }
                  });
                }}
              >
                Logout
              </span>
            )}
          </Mutation>
        </div>
      )}
    </nav>
  );
};

export const NavWithRouter = withRouter(Nav);
