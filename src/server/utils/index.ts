export const slugify = (text: string) => {
  return text
    .toString()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
    .toLowerCase();
};

interface Session extends Express.Session {
  userId: string | undefined;
}

export interface Context {
  req: {
    session: Session;
  };
  res: Express.Response;
}
