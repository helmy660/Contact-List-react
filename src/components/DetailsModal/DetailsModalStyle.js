import styled from "styled-components";
import { color5, color1, color2 } from "../../globalStyle/colorCode";

export const CardInfo = styled.div`
    height: 400px;
    width: 100%;
    position: relative;
`

export const Background = styled.div`
    height: 50%;
    width: 100%;
    background-image: url(https://unsplash.imgix.net/45/ZLSw0SXxThSrkXRIiCdT_DSC_0345.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=857f07b76abac23a7fb7161cc7b12a46);
    background-size: cover;
`

export const ContactImage = styled.img`
    src: "${props => props.src}";
    width: 114px;
    height: 114px;
    top: 50%;
    left: 50%;
    margin: -77px 0 0 -57px;
    border-radius: 100%;
    background-size: contain;
    position: absolute;
    z-index: 1;

    &:hover{
        -webkit-transform: scale(1.06);
        -ms-transform: scale(1.06);
        transform: scale(1.06);
        transition: 0.3s ease;
    }
`

export const ContactDetails = styled.div`
    height: 50%;
    width: 100%;
    position: absolute;
    background-color: ${color1};
    padding-top: 40px;
    text-align: center;
    color: ${color2};
    font-family: "Times New Roman", Times, serif;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const Title1 = styled.h1`
    font-size: 1em;
    margin-bottom: 20px;
    font-weight: bold;
    font-style: oblique;
`

export const Title2 = styled.h1`
    font-size: 0.8em;
    margin-bottom: 10px;
`

export const IconShape = styled.div`
    display: inline;
    color: ${color5};
`