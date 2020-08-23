import gql from "graphql-tag";

export const sort = gql`
  enum Sort {
    asc
    desc
  }
`;
