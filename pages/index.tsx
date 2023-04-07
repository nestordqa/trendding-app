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
import {NextPage} from 'next';
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import AuthButton from '@components/components/auth/AuthButton';
import { 
  getStudentByEmail, 
  postStudent
} from '../utils/students'

const Home : NextPage = ()=>{


  const { 
    user, 
    error, 
    isLoading 
  } = useUser();

  useEffect(()=>{
   if(!user) return;
   if(user && user.given_name !== undefined){
    let id = user?.sub?.slice(user?.sub.indexOf('|')+1, user.sub.length);
    let data = {
      id: String(id),
      firstName: String(user?.given_name),
      lastName: String(user?.family_name),
      email: String(user?.email),
      email_verified: Boolean(user?.email_verified),
      gender: '',
      birthday: '',
      address: '',
      phone: '1234567890',
      city: 'city',
      province: 'province',
      country: 'country',
      photo: String(user?.picture),
      studentRole: 'SILVER',
      updatedAt: new Date()
    }
    let find;
    getStudentByEmail(user?.email)
     .then((data)=>{
       data ? find = true : find = false;
       console.log('Usuario ya existe!')
     })
     .catch((error)=>{
       error ? find = false : find = true
     });
   if(find) return;
   if(!find){
     postStudent(data)
       .then((data)=>{
         console.log(data)
       })
       .catch((error)=>{
         console.log(error)
       })
   }  
   };
  },[user])

  return (
    <>
      <Head>
        <title>Trendding App v0.0.1</title>
        <meta name="description" content="Trendding App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-center items-center w-screen h-screen'>
        <AuthButton/>
      </main>
    </>
  );
};

export default Home;
