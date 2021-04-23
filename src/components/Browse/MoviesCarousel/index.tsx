import React from 'react'

import Carousel, { arrowsPlugin, slidesToScrollPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Image from 'next/image';

import {
    Container,
    ArrowIcon
} from './styles';
import { WindowResize } from '../../../Utils/WindowResize';

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

    const size = WindowResize();

    return (
        <Container>
            <Carousel
                plugins={[
                    'infinite',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: size.width > 1600 ? 6 
                            : size.width < 1600 && size.width > 850 ? 4 
                            : size.width < 850 && 2,
                        }
                    },    
                    {
                        resolve: slidesToScrollPlugin,
                        options: {
                            numberOfSlides: size.width > 1600 ? 6 
                            : size.width < 1600 && size.width > 850 ? 4 
                            : size.width < 850 && 2,
                        },
                      },
                      {
                        resolve: arrowsPlugin,
                        options: {
                          arrowLeft: <ArrowIcon src='/assets/arrow-left.svg' />,
                          arrowRight: <ArrowIcon src='/assets/arrow-right.svg' />,
                          addArrowClickHandler: true,
                        }
                      },
                ]}
                animationSpeed={1000}        
            >   

            {MovieSlideImages}

            </Carousel>
        </Container>
    )
}
