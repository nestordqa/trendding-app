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
import { getAdmin, getAdminById, postAdmin, updateAdmin, deleteAdmin } from '../utils/admin';
import { getCourse, getCourseById, postCourse, updateCourse, deleteCourse } from '../utils/courses';

const Home : NextPage = ()=>{

    const testing = {
      tittle: 'Matematicas',
      description: 'El mejor curso del mundo mundial',
      photo: 'ola.jpg',
      courseRole: 'GOLD'
  }

  deleteCourse('4f852429-318c-4664-a335-0334b7c0d13d')
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Hola mundo!!!
        </h1>
      </main>
    </>
  );
};

export default Home;
