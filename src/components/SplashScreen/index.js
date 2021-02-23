import React from 'react';

import { SplashContainer } from './styles';

import logo from '../../assets/img/logo.svg';

export default function SplashScreen() {
    return (
        <SplashContainer>
            <img alt="Logo da Conecta" src={logo}/>
        </SplashContainer>
    )
}
