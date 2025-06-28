import styled from 'styled-components';
import Header from '../../components/Header';
import NameBoxButton from '../../components/myPage/NameBoxButton';
import BottomBar from '../../components/BottomBar';
import Search from '../../assets/icon/mypage/search.svg';
import { useState } from 'react';

const Container = styled.div`
  width: 375px;
  height: 815px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f8f8f8;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 22px;
`;

const InputBox = styled.form`
  position: relative;
  width: 335px;
  display: flex;
  flex-direction: column;
  input {
    width: 277px;
    height: 10px;
    padding: 19px 29px;
    border-radius: 12px;
    border: 1px solid #c4c4c4;

    background-color: #fff;
    &::placeholder {
      color: #bebebe;
    }
    font-family: 'Pretendard';
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-top: 19px;
  }
  img {
    position: absolute;
    top: 32px;
    right: 18px;
    width: 24px;
    height: 24px;
    background: none;
    cursor: pointer;
  }
`;

const FindFriendPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('');

  const friends = [
    { name: '김도현', id: 'kdh2732' },
    { name: '백상희', id: 'psh1234' },
  ];

  const filteredFriends = friends.filter((friend) => friend.id.toLowerCase().includes(keyword.toLowerCase()) || friend.name.includes(keyword));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setKeyword(inputValue.trim());
  };

  return (
    <Container>
      <Header title="친구 찾기" />
      <InputBox onSubmit={handleSearch}>
        <input type="text" placeholder="친구의 아이디를 입력하세요." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">
          <img src={Search} alt="검색하기" />
        </button>
      </InputBox>
      <NameContainer>
        {filteredFriends.map((friend) => (
          <NameBoxButton key={friend.id} name={friend.name} ID={friend.id}></NameBoxButton>
        ))}
      </NameContainer>
      <BottomBar />
    </Container>
  );
};

export default FindFriendPage;
