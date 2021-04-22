import React from 'react';

import Navbar from './Navbar';
import Header  from './Header';
import MoviesCarousel  from './MoviesCarousel';

import {
    ContainerMovies,
    MoviesWrapper,
    MoviesTitle,
} from './styles';
import { CopyrightFooter } from '../CopyrightFooter';


export default function index({
    movie, 
    trending,
    animeMovie,
    actionMovie,
    sciFiTV
}) {
    const random = Math.floor(Math.random() * 21);

    return (
        <ContainerMovies>
            <Navbar />
            <Header movie={movie.results[random]}/>
        
        <MoviesWrapper>
            <MoviesTitle>Em alta</MoviesTitle>            
            <MoviesCarousel movie={trending} />
        </MoviesWrapper>

        <MoviesWrapper>
            <MoviesTitle>Séries de TV Populares</MoviesTitle>            
            <MoviesCarousel movie={movie} />
        </MoviesWrapper>        
        
        <MoviesWrapper>
            <MoviesTitle>Animações</MoviesTitle>            
            <MoviesCarousel movie={animeMovie} />
        </MoviesWrapper>        
        
        <MoviesWrapper>
            <MoviesTitle>Filmes de Ação</MoviesTitle>            
            <MoviesCarousel movie={actionMovie} />
        </MoviesWrapper>   

        <MoviesWrapper>
            <MoviesTitle>Séries de Ficção Científica</MoviesTitle>            
            <MoviesCarousel movie={sciFiTV} />
        </MoviesWrapper>

        <CopyrightFooter />
        </ContainerMovies>
    )
}