  // const testing = {
  //   firstName: 'Nestor',
  //   lastName: 'Quinones',
  //   email: 'jjjjj.com',
  //   email_verified: true,
  //   gender: 'MALE',
  //   birthday: 'keli',
  //   address: 'Elkoño',
  //   phone: 'telefonito',
  //   city: 'Elñoko',
  //   province: 'Elñokito',
  //   country: 'Elñokazo',
  //   photo: 'webazo.jpg',
  //   role: 'DEVELOPER'
  // }

//   const testing = {
//     tittle: 'Matematicas',
//     description: 'El mejor curso del mundo mundial',
//     photo: 'ola.jpg',
//     courseRole: 'GOLD'
// }

import Head from 'next/head';
import {NextPage} from 'next/types';
import { useQuery, useMutation } from 'react-query';
import { useRouter } from 'next/router'
import { getAdmin, getAdminById, postAdmin, updateAdmin, deleteAdmin } from '../utils/admin';
import { getCourse, getCourseById, postCourse, updateCourse, deleteCourse } from '../utils/courses';
import { getStudent, getStudentById, postStudent, updateStudent, deleteStudent } from '../utils/students';
import { getTeacher, getTeacherById, postTeacher, updateTeacher, deleteTeacher } from '../utils/teacher';

const Home : NextPage = ()=>{

  const route = useRouter();
  const { id } = route.query;

  //Get all
  const { 
    data, 
    isError, 
    isLoading 
  } = useQuery('admins', getAdmin);

  //Get by ID
  const {
    data: adminById,
    isError: error,
    isLoading: loading
  } = useQuery('getAdminById', ()=>{getAdminById(String(id))});

  //Update record

  const update = {
    firstName: 'Larry'
  }
  const { mutate } = useMutation('updateAdmin', {
    onSuccess: ()=>{
      console.log('Correctamente actualizado!')
    }
  });




  return (
    <>
      <Head>
        <title>Trendding App v0.0.1</title>
        <meta name="description" content="Trendding App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Hola mundo!!!
        </h1>

        <button onClick={()=>mutate({id, update})}>
          Testeo
        </button>
      </main>
    </>
  );
};

export default Home;
