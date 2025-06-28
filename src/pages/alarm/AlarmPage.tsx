import styled from "styled-components";
import NotiPaper from "../../components/alarm/NotiPaper"
import NotiFriend from "../../components/alarm/NotiFriend"

const Container = styled.div`
    width:338px;
    display: flex;
    align-items: center;
    justify-content : center;
    flex-direction: column;
    gap: 10px;
`;

const DateWrapper = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    gap : 15px;
    h3{
        color: #2b2b2b;
        font-size: 18px;
        font-weight: 600;
    }
`;

const AlarmPage = () => {
    return (
        <DateWrapper>
            <h3>2025.06.23.</h3>
            <Container>
                <NotiPaper friend="태성" />
                <NotiFriend friend="태성" />
            </Container>
        </DateWrapper>
    );
};

export default AlarmPage;