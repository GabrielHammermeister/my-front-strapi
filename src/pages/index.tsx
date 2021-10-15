import HeaderSection from 'components/HeaderSection/HeaderSection.index'
import client from 'services/client'
import GET_ALL_STUDENTS from 'services/getAllStudents/getAllStudents'

export default function Home({ students }) {
   return (
      <>
         <HeaderSection students={students} />
      </>
   )
}

export const getStaticProps = async () => {
   const { students } = await client.request(GET_ALL_STUDENTS)
   return {
      props: {
         students
      }
   }
}
