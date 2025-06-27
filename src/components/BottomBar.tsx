import styled from "styled-components";
import grayHome from "../assets/icon/grayHome.svg";
import grayGeneral from "../assets/icon/grayGeneral.svg";
import colorAlarm from "../assets/icon/colorNotiOn.svg";
import grayMy from "../assets/icon/grayMy.svg";
import plus from "../assets/icon/plus.svg";


const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 54px;
    padding: 0 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const Menu = styled.div`
    display: flex;
    width: 55px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap : 4px;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }

    h1 {
        font-size: 12px;
        color: #454545;
        font-family: 'Pretendard';
        font-weight: 600;
        margin: 0;
    }
`;


const Plus = styled.div`
    
    img {
        width: 40px;
        height: 40px;
    }
`;


const BottomBar = () =>{
    return (
        <Container>
            <Menu>
                <img src={grayHome} alt="홈" />
                <h1>홈</h1>
            </Menu>
            <Menu>
                <img src={grayGeneral} alt="공개 페이지" />
                <h1>공개 페이지</h1>
            </Menu>
            <Plus>
                <img src={plus} alt="페이지 추가하기" />
            </Plus>

            <Menu>
                <img src={colorAlarm} alt="소식함" />
                <h1>소식함</h1>
            </Menu>
            <Menu>
                <img src={grayMy} alt="마이페이지" />
                <h1>마이페이지</h1>
            </Menu>

        </Container>
    );
}


export default BottomBar;