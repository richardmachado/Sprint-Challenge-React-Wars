import React from 'react';
import styled from "styled-components"

const ContainerBox= styled.div`
border: dashed black 1.7px;
margin: 50px;
text-align: center;
width:50%;
background-color: rgba(255,255,255,0.6);
`
const CrazyName = styled.h2 `
border: 2px solid black;
font-size: 1.7rem;
color: d98225
`
const Birth = styled.h2 `
font-size: 1.6rem;
color: #696c80
`
const Gender = styled.h2`
font-size:1.5rem;
color:#f702b2;
`
const Skin = styled.h2`
font-size:1.4rem;
color:#f77402;
`
const Eye = styled.h2`
font-size:1.4rem;
color:#0577b0;
`
const Height = styled.h2 `
font-size:1.3rem
color:#0f4013;
`

const Weight =styled.h2 `
font-size:1.2rem;
color: #1d960b;
`

const StarWarCards = props => {
    return(
    <ContainerBox>
        <div>
        <CrazyName> Name: {props.name}</CrazyName>
        <Birth> Birth Year: {props.birth_year}</Birth>
        <Gender> Gender: {props.gender}</Gender>
        <Skin> Skin Color: {props.skin}</Skin>
        <Eye> Eye Color: {props.eye_color}</Eye>
        <Height> Height (cm): {props.height}</Height>
        <Weight> Weight (kg): {props.weight} </Weight>
           
        </div>
    </ContainerBox>
    )
}
export default StarWarCards;