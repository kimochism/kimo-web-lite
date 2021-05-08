import React from 'react'
import { Container } from './styles'
import { FuelegonImage, BannerImage } from '../../assets/images'

export default function Banner() {
    return (
        <Container>
            <div className="banner-letter">
                <img src={ BannerImage } />
                <button className="btn-primary">
                    checar agora
                </button>
            </div>
            <div className="banner-image">
                <div className="border-image">
                </div>
                <img src={ FuelegonImage }/>
                
            </div>

        </Container>
    )
}
