import { gql } from 'graphql-request'

const GET_ALL_STUDENTS = gql`
   query GET_ALL_STUDENTS {
      students {
         name
         profileImage {
            url
         }
      }
   }
`
export default GET_ALL_STUDENTS
