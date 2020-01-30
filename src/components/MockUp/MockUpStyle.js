import styled from "styled-components";
import { color1,color2, color3, color4, color5 } from "../../globalStyle/colorCode";
export const Iphonex = styled.div`
  position: relative;
  margin: 5% auto;
  width: 375px;
  height: 812px;
  max-height: 812px;
  background-color: ${color1};
  border-radius: 35px;
  box-shadow: 0px 0px 0px 11px ${color2}, 0px 0px 0px 13px ${color3}, 0px 0px 0px 20px ${color4};
  &:before,
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    top: 0px;
    width: 56%;
    height: 30px;
    background-color: ${color2};
    border-radius: 0px 0px 40px 40px;
  }

  // remove text highlight when mouse is clicked and dragged
  -webkit-user-select: none;
`

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-bottom: 8px;
`

export const Title = styled.div`
  color: ${color5};
  height: 80px;
  font-size: 1.6em;
  padding: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

export const Span = styled.span`
  margin-left: 10px;
  font-family: "Times New Roman", Times, serif;
`