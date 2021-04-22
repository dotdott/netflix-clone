import React, { useContext, useEffect } from 'react'
import Browse from '../../components/Browse';

import { LoginContext } from '../../contexts/LoginContext';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

import Axios from 'axios';

export default function index({
    movie, 
    trendingAll, 
    dataAnime,
    dataAction,
    dataSciFi,
}) {
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
    const api = Axios.create({
        baseURL: 'https://api.themoviedb.org/3/'
    })

    const popular = await api.get('tv/popular', {
        params: {
            api_key: '77ab091d5e2a05396440cb47def08495',
            language: 'pt-BR'
        }
    })

    const trending = await api.get('trending/all/week', {
        params: {
            api_key: '77ab091d5e2a05396440cb47def08495',
            language: 'pt-BR'
        }
    })    
    
    const animated = await api.get('discover/movie', {
        params: {
            api_key: '77ab091d5e2a05396440cb47def08495',
            language: 'en-US',
            with_genres: '16'
        }
    })    

    const action = await api.get('discover/movie', {
        params: {
            api_key: '77ab091d5e2a05396440cb47def08495',
            language: 'en-US',
            with_genres: '28'
        }
    })

    const comedy = await api.get('discover/movie', {
        params: {
            api_key: '77ab091d5e2a05396440cb47def08495',
            language: 'en-US',
            with_genres: '35'
        }
    })    
    
    const scifi = await api.get('discover/tv', {
        params: {
            api_key: '77ab091d5e2a05396440cb47def08495',
            language: 'en-US',
            with_genres: '878'
        }
    })

    
    return {
         props: {
             movie: popular.data,
             trendingAll: trending.data,
             dataAnime: animated.data,
             dataAction: action.data,
             dataComedy: comedy.data,
             dataSciFi: scifi.data,
         },
         revalidate: 60 * 60 * 8
     }
 }
