import React, { useState, useEffect } from 'react';

import { 
    CommentContainer, 
    CommentsBox, 
    SliderContainer,
    Slider, 
    SlideContent,
    CommentBgImage, 
    StyledDots 
} from './styles';

import firtImg from '../../assets/img/drinks.png';
import secondBgImage from '../../assets/img/bartender.png';

export default function CommentsSection() {
    const [ activeSlide, setActiveSlide ] = useState(1);

    const sliderData = [
        {
            id: 1,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.",
            author: "@danielmaciel"
        },
        {
            id: 2,
            comment: "Lorem ipsum, consectetur adipiscing elit. Etiam commodo hendrerit.",
            author: "@matheuserthal"
        },
        {
            id: 3,
            comment: "Lorem ipsum dolor sit amet. Etiam commodo hendrerit.",
            author: "@mussi"
        },
        {
            id: 4,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "@danno"
        }
    ]

    useEffect(() => {

        const interval = setInterval(() => {
            if (activeSlide < 4) {
                setActiveSlide(prevState => prevState + 1)
            } else {
                setActiveSlide(1)
            }
            console.log('holle')
        }, 3000)

        return () => clearInterval(interval)

    }, [activeSlide])


    return (
        <CommentContainer>
            <img alt="Pessoas curtindo com a bebida" src={firtImg}/>
            <CommentsBox>
                <SliderContainer>
                    <Slider>
                        {
                            sliderData.map(data => {
                                
                                return (
                                    <SlideContent active={data.id === activeSlide ? true : false} key={data.id}>
                                        <p>“{data.comment}”</p>
                                        <p>{data.author}</p>
                                    </SlideContent>
                                )
                            })  
                        }
                        
                    </Slider>
                    <StyledDots activeSlide={activeSlide}>
                        <button onClick={() => setActiveSlide(1)}></button>
                        <button onClick={() => setActiveSlide(2)}></button>
                        <button onClick={() => setActiveSlide(3)}></button>
                        <button onClick={() => setActiveSlide(4)}></button>
                    </StyledDots>
                </SliderContainer>
                <CommentBgImage bgImage={secondBgImage}>
                    <h2>Peça para seu bar</h2>
                </CommentBgImage>
            </CommentsBox>
        </CommentContainer>
    )
}
