import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @keyframes move4 {
        0% {
            top: 0;
        }
        50% {
            top: 20px;
        }
        100% {
            top: 0;
        }
    }
`;
const NotFoundView = styled.div`
    width: 1670px;
    height: 953px;
    background-color: #fcfcfc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 600;
        font-size: 100px;
        text-align: center;
        transition: all 0.1s linear;
        position: relative;
        animation: move4 1s infinite;
    }
`;
const Content = styled.p`
    color: ${props => props.className === "Top" ? '#36bc9b;' : '#0099ef'}
`;

function NotFound() {
    return (
        <>
            <GlobalStyle />
            <NotFoundView>
                <Content className="Top">NotFound 404</Content>
                <Content>
                    웹 페이지를 <br/>
                    표시할 수 없습니다.
                </Content>
            </NotFoundView>
        </>
    );
}

export default NotFound;