import styled from 'styled-components';

export const ListWrapper = styled.div`
    padding-bottom: 20px;
    padding-top: 10px;
`

export const List = styled.div`
    width: 100%;
    padding: 0px 20px;
    max-height: 700px;
    height: 700px;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`