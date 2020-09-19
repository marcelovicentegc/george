import { User } from "../../database/entities";
import { Permission } from "../../gql";
import { Context } from "../../utils";
import { NotFound, Unauthorized } from "./errors";

export async function isLoggedInUserAdmin({ req }: Context) {
  const userIdFromSession = req.session.userId;

  if (userIdFromSession === undefined) {
    throw new Error(NotFound);
  }

  const user = await User.findOne(userIdFromSession);

  if (!user || user.permission !== Permission.Admin) {
    throw new Error(Unauthorized);
  }

  return user;
}
