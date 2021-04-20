import React, { useContext, useEffect } from 'react'
import Browse from '../../components/Browse';

import { LoginContext } from '../../contexts/LoginContext';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';


export default function index({movie}) {
    const random = Math.floor(Math.random() * 21);

    const { currentUser } = useContext(LoginContext);

    const router = useRouter();
    useEffect(() => {
       (currentUser === null) && router.push('/login')
    }, [])
    

    return (
        <Browse movie={movie.results[random]} />
    )
}

 export const getStaticProps: GetStaticProps = async () => {
     const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=77ab091d5e2a05396440cb47def08495&language=pt-BR');
     const data = await response.json();

     return {
         props: {
             movie: data,
         }
     }
 }
