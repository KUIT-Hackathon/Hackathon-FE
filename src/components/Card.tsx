import styled from 'styled-components';

interface MessageCardProps {
  from: string;
  message: string;
  onClick?: () => void;
}


const Card = styled.div`
  width: 158px;
  height: 120px;
  background: #fff;
  border-radius: 19px;
  padding: 27px 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;


const From = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #9C78EF;
`;

const Message = styled.p`
  font-size: 14px;
  color: #2b2b2b;
  margin: 10px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  height:120px;
  line-height:17px
`;

const More = styled.p`
  font-size: 12px;
  color: #c4c4c4;
  margin: 0px 3px;
  text-align: right;
`;


const MessageCard = ({ from, message, onClick }: MessageCardProps) => (
  <Card onClick={onClick}>
    <From>{from}</From>
    <Message>{message}</Message>
    <More>더보기</More>
  </Card>
);

export default MessageCard; 
