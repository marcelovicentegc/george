import { Context } from "../../utils";

export async function logout({ req, res }: Context) {
  await new Promise((res) => req.session.destroy(() => res()));
  res.clearCookie("cookie.sid");
}
