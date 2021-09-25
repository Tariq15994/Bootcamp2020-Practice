import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_BOOKS = gql`
  query AllBooks {
    books {
      
      name,
      quantity,
      price,
      customername

    }
  }
`;
const ADD_STUDENT = gql`
  mutation addbooks($name: Int! , $customername : String!, $quantity :Int!, $price :Int!) {
    addbook(
        input :{name: $name,customername : $customername , quantity :$quantity, price: $price}
     ) {
      
      name
      quantity
      price
      customername
    }
  }
`;


function Students() {
    const { loading, error, data } = useQuery(GET_BOOKS);
    const [ addBk ] = useMutation(ADD_STUDENT);

    if (loading)
        return <h1>Loading ...</h1>

    if (error)
        return <h1>Error</h1>

    const { books } = data;

    return (
        <div>
            <h1>Student List</h1>
            <table border="2" width="500">
                <thead>
                    <tr>
                        <th>BOOK NAME</th>
                        <th>Customer Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(std => {
                            return (<tr key={std.name}>
                                <td>{std.name}</td>
                                <td>{std.customername}</td>
                                <td>{std.price}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            

            <button onClick={() =>
                addBk({
                    variables: { 
                        price: 37, name: "Student 2", customername: "temp", quantity: 34
                    },
                    refetchQueries: [{ query: GET_BOOKS }]

                })
            }>
                Add Student</button>

        </div>
    );
}

export default Students;




// import React from 'react';
// import { useQuery, gql, useMutation } from '@apollo/client';

// const GET_STUDENTS = gql`
//   query AllStudents {
//     students {
//       id,
//       name,
//       email,
//       age
//     }
//   }
// `;
// const ADD_STUDENT = gql`
//   mutation AddStudent($id: Int! , $name : String!, $age :Int!, $email :String!) {
//     addStudent(
//         input :{id: $id,name : $name , age :$age, email: $email}
//      ) {
//       id
//       name
//       age 
//       email
//     }
//   }
// `;


// function Students() {
//     const { loading, error, data } = useQuery(GET_STUDENTS);
//     const [ addStd ] = useMutation(ADD_STUDENT);

//     if (loading)
//         return <h1>Loading ...</h1>

//     if (error)
//         return <h1>Error</h1>

//     const { students } = data;

//     return (
//         <div>
//             <h1>Student List</h1>
//             <table border="2" width="500">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         students.map(std => {
//                             return (<tr key={std.id}>
//                                 <td>{std.name}</td>
//                                 <td>{std.age}</td>
//                                 <td>{std.email}</td>
//                             </tr>)
//                         })
//                     }
//                 </tbody>
//             </table>
//             {/* <button onClick={()=> 

//                 update({
//                     variables : {
//                         id : 5,name :'Student1',age:23,email : 'tem@gmail.com' }
//                     , 
//                     refetchQueries:[{query :GET_STUDENTS}]
//                     })
//                 }>Add Student</button> */}

//             <button onClick={() =>
//                 addStd({
//                     variables: { 
//                         id: 15, name: "Student 2", email: "temp2@gmail", age: 3
//                     },
//                     refetchQueries: [{ query: GET_STUDENTS }]

//                 })
//             }>
//                 Add Student</button>

//         </div>
//     );
// }

// export default Students;


