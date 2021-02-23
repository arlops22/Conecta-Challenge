import React from 'react';

import Button from '../Button';

import { CardProduct } from './styles';

export default function Card({ img, productName, description }) {

    return (
        <CardProduct>
           
            <img alt={`Imagem do Produto ${productName}`} src={img} />

            <h4>{productName}</h4>
            <p>{description}</p>

            <Button>Aqui um CTA</Button>

        </CardProduct>
    )
}
