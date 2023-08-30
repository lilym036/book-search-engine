const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
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

input Book {
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
    users: [User]!
    user(userID: ID!): User
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: Book!): User
    deleteBook(bookId: ID!): User
}

`

module.exports= typeDefs;