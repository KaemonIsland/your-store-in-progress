import React from 'react'
import styled from 'styled-components'
import ProductImage from './ProductImage'

const ProductContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: .5rem;
    border-radius: .5rem;
    box-shadow: 0 .3rem .3rem rgba(0, 0, 0, .5);
`

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
    padding: 3rem;
    background: white;
`



const Product = ({name, id, description, img, price, rating, seller}) => {
    return (
        <ProductContainer>
            <ProductImage img={img} />
            <p>Rating: {rating} Stars</p>
            <Input type="checkbox" id={id} />
            <label className="button" htmlFor={id} >
                <div><strong>{name}</strong> ${price}</div>
            </label>
            <Modal>
                <ModalContent>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <label htmlFor={id} className="button" >
                        <a>Close</a>
                    </label>
                </ModalContent>
            </Modal>
            <Overlay></Overlay>
        </ProductContainer>
    )
}

export default Product