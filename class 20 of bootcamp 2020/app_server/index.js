// const { ApolloServer, gql } = require('apollo-server');

// const students = [
//   {
//     "id": 1,
//     "name": "Ali",
//     "email": "ali@gmail.com",
//     "age": 21
//   },
//   {
//     "id": 2,
//     "name": "Mohsin",
//     "email": "mohsin@gmail.com",
//     "age": 21
//   },
//   {
//     "id": 3,
//     "name": "Aamir",
//     "email": "aamir@gmail.com",
//     "age": 21
//   }
// ]


// const resolvers = {
//   Query: {
//     students: () => students,

//   },
//   Mutation: {
//     addStudent: (e, { input }) => {
//       console.log(input)
//       return {
//         id: input.id,
//         name: input.name,
//         age: input.age,
//         email: input.email
//       }
//     }
//   }
// }

// const typeDefs = gql`
//    type Student{
//      id: Int
//      name: String
//      age : Int
//      email: String
//    }
//    type Query {
//      students : [Student]
//      happy :[Student]
//    }
//    input StdInput {
//      id:Int
//      name: String
//      age : Int
//      email : String
//    }
//    type Mutation {
//      addStudent(input : StdInput): Student
//    }
//    `;




// const server = new ApolloServer({ typeDefs, resolvers });


// server.listen().then(({ url }) => {
//   console.log(`Server is Ready at ${url}`)
// });

const { ApolloServer, gql } = require('apollo-server');

const Books = [
  {
    'name': 'English',
    'quantity': 5,
    'price': 500,
    'customername': 'TariqNawaz'
  },
  {
    'name': 'Islamiate',
    'quantity': 15,
    'price': 5600,
    'customername': 'Nawaz'
  },{
    'name': 'Urdu',
    'quantity': 3,
    'price': 5000,
    'customername': 'DanishNawaz'
  }
]



resolvers={
  Query : {
    books: ()=> Books
  },
  Mutation: {
    addbook: (e, {input})=>{
      console.log(input)
      Books.push(
                {
                  name: input.name,
                  customername: input.customername,
                  price: input.price,
                  quantity: input.quantity
                })
      return {
        name : input.name,
        quantity : input.quantity,
        price: input.price,
        customername: input.customername
      }
    }
  },
  
}

const typeDefs = gql`
  type Book{
    name: String
    quantity: Int 
    price: Int
    customername: String
  }
  type Query {
    books: [Book]
  }
  input BookInput {
    name: String
    quantity: Int 
    price: Int
    customername: String

  }
  type Mutation {
    addbook(input : BookInput): Book
  }
`;



const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
  console.log(`Server is Ready at  ${url}`)
});
















// const { ApolloServer, gql } = require('apollo-server');

// let students = [
//   {
//     "id": 1,
//     "name": "Ali",
//     "email": "ali@gmail.com",
//     "age": 21
//   },
//   {
//     "id": 2,
//     "name": "Mohsin",
//     "email": "mohsin@gmail.com",
//     "age": 21
//   },
//   {
//     "id": 3,
//     "name": "Aamir",
//     "email": "aamir@gmail.com",
//     "age": 21
//   },
// ]

// const resolvers = {
//   Query: {
//     students: () => students,
//   },
//   Mutation: {
//     addStudent: (e, { input }) => {
//       console.log(input)
//       students.push(
//         {
//           name: input.name,
//           age: input.age,
//           email: input.email,
//           id: input.id
//         }
//       )
//       return {
//         name: input.name,
//         age: input.age,
//         email: input.age,
//         id: input.id
//       }
//     }
//   }
// };

// const typeDefs = gql`
//   type Student {
//     id: Int
//     name: String
//     email: String
//     age: Int
//   }
//   input StdInput {
//     id: Int
//     name: String
//     email: String
//     age: Int
//   }

//   // input StdInput {
//   //   id: Int
//   //   name: String

//   // }
//   type Query {
//     students: [Student]
//   }
//   type Mutation {
//     addStudent(input: StdInput): Student
//   }
// `;

// const server = new ApolloServer({ typeDefs, resolvers });

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });