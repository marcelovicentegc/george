import { User } from "../../database/entities";
import { Context } from "../../utils";
import { NotFound } from "./errors";

export async function getUserFromSession({ req }: Context) {
  const userIdFromSession = req.session.userId;

  if (userIdFromSession === undefined) {
    throw new Error(NotFound);
  }

  const user = await User.findOne(userIdFromSession);

  return user;
}
