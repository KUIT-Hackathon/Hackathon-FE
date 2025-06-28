import * as React from "react";
import styled from "styled-components";
import arrowBack from "../assets/icon/arrowBack.svg";
import whitePlus from "../assets/icon/whitePlus.svg";


interface HeaderProps {
    title: string;
}

const Container = styled.div`
    width: 100%;
    height: 51px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: #fff;
    h1{
        width:143px;
        color: #000;
        text-align: center;
        font-family: 'Pretendard';
        font-size: 18px;
        font-weight: 600;
        line-height: 150%;
}
`;

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <Container>
            <img src={arrowBack} alt="뒤로가기" />
            <h1>{title}</h1>
            <img src={whitePlus} alt="빈칸" />
        </Container>
    );
};

export default Header;