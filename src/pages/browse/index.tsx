import React, { useContext, useEffect } from 'react'
import Browse from '../../components/Browse';

import { LoginContext } from '../../contexts/LoginContext';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';


export default function index({
    movie, 
    trendingAll, 
    dataAnime,
    dataAction,
    dataSciFi
}) {
    console.log(dataAnime)
    const { currentUser } = useContext(LoginContext);

    const router = useRouter();
    useEffect(() => {
       (currentUser === null) && router.push('/login')
    }, [])
    

    return (
        <Browse 
            movie={movie} 
            trending={trendingAll}
            animeMovie={dataAnime}
            actionMovie={dataAction}
            sciFiTV={dataSciFi}
        />
    )
}

 export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=77ab091d5e2a05396440cb47def08495&language=pt-BR');
    const data = await response.json();

    const trendingAll = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=77ab091d5e2a05396440cb47def08495&language=pt-BR')
    const dataAll = await trendingAll.json();
    
    const AnimatedMovies = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=77ab091d5e2a05396440cb47def08495&language=en-US&with_genres=16')
    const dataAnime = await AnimatedMovies.json();    
    
    const ActionMovies = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=77ab091d5e2a05396440cb47def08495&language=en-US&with_genres=28')
    const dataAction = await ActionMovies.json();

    const ComedyMovies = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=77ab091d5e2a05396440cb47def08495&language=en-US&with_genres=35')
    const dataComedy = await ComedyMovies.json();

    const SciFiSeries = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=77ab091d5e2a05396440cb47def08495&language=en-US&with_genres=878')
    const dataSciFi = await SciFiSeries.json();
    
    return {
         props: {
             movie: data,
             trendingAll: dataAll,
             dataAnime: dataAnime,
             dataAction: dataAction,
             dataComedy: dataComedy,
             dataSciFi: dataSciFi,
         },
         revalidate: 60 * 60 * 8
     }
 }
