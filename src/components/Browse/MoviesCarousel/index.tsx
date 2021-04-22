import React from 'react'

import Carousel, { arrowsPlugin, slidesToScrollPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Image from 'next/image';

import {
    Container,
    MovieImg,
    ArrowIcon
} from './styles';

type ImageData = {
    backdrop_path: string;
}


export default function index({movie}) {
    const MovieSlideImages = movie.results.map((image: ImageData) => image.backdrop_path && (
        <Image 
            width={300} 
            height={167} 
            src={'https://image.tmdb.org/t/p/w500' + image.backdrop_path} 
            key={image.backdrop_path}
            alt='image poster'
            objectFit='cover'
        />
    ))

    return (
        <Container>
            <Carousel
                plugins={[
                    'infinite',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 6
                        }
                    },    
                    {
                        resolve: slidesToScrollPlugin,
                        options: {
                         numberOfSlides: 6,
                        },
                      },
                      {
                        resolve: arrowsPlugin,
                        options: {
                          arrowLeft: <ArrowIcon src='/assets/arrow-left.svg' />,
                          arrowRight: <ArrowIcon src='/assets/arrow-right.svg' />,
                          addArrowClickHandler: true,
                        }
                      }
                ]}
                animationSpeed={1000}            
            >   

            {MovieSlideImages}

            </Carousel>
        </Container>
    )
}
