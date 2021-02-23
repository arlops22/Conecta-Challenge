import React from 'react';
import { GrFacebook, GrInstagram } from 'react-icons/gr';

import logo from '../../assets/img/logo.svg';

import { StyledHeader } from './styles';

export default function Home() {
    return (
        <StyledHeader>
            <img alt="Logo da Conecta" src={logo} />
            <ul>
                <li><a href="#"><GrFacebook /></a></li>
                <li><a href="#"><GrInstagram /></a></li>
            </ul>
        </StyledHeader>
    )
}
