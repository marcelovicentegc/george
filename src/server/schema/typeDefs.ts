import gql from 'graphql-tag';

const typeDefs = gql`

    # https://github.com/apollographql/graphql-tools/issues/764
    type Query {
        dummy: String
    }

    type Mutation {
        toggleLed: Boolean!
    }
`

export default typeDefs;