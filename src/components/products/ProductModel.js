import React from 'react'
import styled from 'styled-components'
import ProductImage from './ProductImage'

const Input = styled.input`
    display: none;
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background: #000;
    pointer-events: none;
    opacity: 0;
    transform: scale(0.5);

    ${Input}:checked ~ & {
        pointer-events: auto;
        opacity: 0.8;
        transform: scale(1);
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
`

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%) scale(0.5);
    width: 100%;
    max-width: 640px;
    pointer-events: none;
    opacity: 0;

    ${Input}:checked ~ & {
        pointer-events: auto;
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.5s ease, opacity 0.5s ease;
        transition-delay: 0.1s;
    }
`

const ModalContent = styled.div`
    display: block;
    padding: 2rem;
    background: white;
`

const Label = styled.label`
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all .3s ease-out;
    &:hover {
        border-bottom: 2px solid black;
    }
`

const ProductModel = ({id, img, name, price, description, seller}) => {
    return (
    <>
        <Input type="checkbox" id={id} />
            <Label htmlFor={id} >
                <div><strong>{name}</strong> ${price}</div>
            </Label>
            <Modal>
                <ModalContent>
                    <ProductImage img={img} />
                    <h3><strong>{name}</strong> - ${price}</h3>
                    <p>{description}</p>
                    <p>Sold by: <em>{seller}</em></p>
                    <Label htmlFor={id}>
                        <a><strong>Close</strong></a>
                    </Label>
                </ModalContent>
            </Modal>
        <Overlay></Overlay>
    </>
    )
}

export default ProductModel;