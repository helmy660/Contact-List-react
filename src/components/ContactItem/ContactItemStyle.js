import styled from 'styled-components';
import { color1, color6, color5, color7, color2 } from '../../globalStyle/colorCode';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
`

export const DeleteBtn = styled.div`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    background-color: ${color6};
    box-sizing: border-box;
    margin-bottom: 12px;
    border-radius: 10px;
    width: 18%;
    min-width: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color5};
    font-size: 24px;


    &:hover{
        -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
        transition: 0.3s ease;
        box-shadow: 3px 3px 3px ${color7};
    }
`

export const BorderBottom = styled.div`
    border-bottom: 1px solid ${color2};
    position: absolute;
    left: 10%;
    margin: auto;
    width: 80%;
    bottom: 0;
`

export const Card = styled.div`
    width: ${props => props.status ? "76%" : "96%"};
    min-width: ${props => props.status ? "76%" : "96%"};
    margin-right: 2.1%;
    margin-left: 2%;
    height: 100px;
    margin-bottom:12px;
    border-radius: 15px;
    background-color: ${color1};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 8px;
    position: relative;

    &:hover{
        -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
        transition: 0.3s ease;
        box-shadow: 3px 3px 3px ${color7};
    }

    &:hover ${BorderBottom}{
        transition: 0.3s ease;
        width: 0%;
        left: 0%;
    }
`

export const ContactImage = styled.img`
    src: "${props => props.src}";
    border-radius: 50%;
    height: 80px;
    width: 80px;
`

export const Details = styled.div`
    margin-left: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;   
`

export const ContactName = styled.div`
    color: ${color2};
    font-size: 17px;
    font-style: oblique;
`

export const ContactDetails = styled.div`
    color: ${color7};
    font-size: 13px;
`