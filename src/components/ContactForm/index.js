import React from 'react';

import Button from '../../components/Button';

import { Form, FormControl, FormGroup } from './styles';

import selectArrow from '../../assets/img/arrow-down.png';

export default function ContactForm() {
    return (
        <Form>
            <FormControl>
                <input 
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                />
                <label htmlFor="name">Nome</label>
            </FormControl>
            <FormGroup>
                <FormControl>
                    <input 
                        type="text"
                        name="phoneNumber"
                        placeholder="(21) 00000-0000"
                    />
                    <label htmlFor="phoneNumber">telefone</label>
                </FormControl>
                <FormControl>
                    <input 
                        type="text"
                        name="email"
                        placeholder="email@email.com.br"
                    />
                    <label htmlFor="email">email</label>
                </FormControl>
            </FormGroup>

            <FormControl arrowImage={selectArrow}>
                <select dafaultvalue="" name="select">
                    <option hidden value="">Selecione um assunto</option>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                </select>
                <label htmlFor="select">assunto</label>
            </FormControl>
            <FormControl>
                <textarea 
                    name="menssage"
                    placeholder="Escreva sua mensagem"
                    rows="7"
                ></textarea>
                <label htmlFor="menssage">Mensagem</label>
            </FormControl>
            <Button />
        </Form>
    )
}
