const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [bookSchema]
}

type bookSchema {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String 
    title: String!
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    user: [User]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}

`

module.exports= typeDefs;