import React from 'react';

import {
    Container,
    BackgroundImage,
    MovieDetails,
    MovieTitle,
    MovieInfo,
    MovieOverview,
    MovieButtons,
    MovieWatchButton,
    MovieInfoButton,

    MovieScore,
    MovieReleaseDate,

    PlayIcon,
    ExclamationIcon,
} from './styles';

export default function index({movie}) {
    const movieYear = movie.first_air_date.slice(0,4);

    return (
        <Container>
            <BackgroundImage src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}/>

            <MovieDetails>
                <MovieTitle>{movie.name}</MovieTitle>
                <MovieInfo>
                    <MovieScore>Nota <span>{movie.vote_average}</span></MovieScore>
                    <MovieReleaseDate>Lançado no ano <b>{movieYear}</b></MovieReleaseDate>
                </MovieInfo>
                <MovieOverview>{movie.overview}</MovieOverview>

                <MovieButtons>
                    <MovieWatchButton>
                        <PlayIcon src='/assets/play.svg' />
                        Assistir
                    </MovieWatchButton>
                    <MovieInfoButton>
                        <ExclamationIcon src='/assets/exclamation.svg' />
                        Mais Informações
                    </MovieInfoButton>
                </MovieButtons>
            </MovieDetails>
        </Container>
    )
}