import { Permission } from "../../gql";
import { Context } from "../../utils";
import { Unauthorized } from "./errors";
import { getUserFromSession } from "./users";

export async function isLoggedInUserAdmin({ req, res }: Context) {
  const user = await getUserFromSession({ req, res });

  if (!user || user.permission !== Permission.Admin) {
    throw new Error(Unauthorized);
  }

  return user;
}
