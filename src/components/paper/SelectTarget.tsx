import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import human from '../../assets/icon/paper/human.svg';
import useUserApi from '../../hooks/useUserApi';

interface User {
  id: number;
  name: string;
  loginId: string;
}

interface SelectTargetProps {
  target: string;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  searchUserId: string;
  setSearchUserId: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TargetButtonContainer = styled.div`
  display: flex;
  border-radius: 7px;
  box-sizing: border-box;
  height: 40px;
  > :first-child {
    border-radius: 7px 0px 0px 7px;
  }
  > :last-child {
    border-radius: 0px 7px 7px 0px;
  }
`;

const TargetButton = styled.button<{ $isClicked: boolean }>`
  color: ${({ $isClicked }) => ($isClicked ? '#FAFAFA' : '#454545')};
  background-color: ${({ $isClicked }) => ($isClicked ? '#BFA4FF' : '#fff')};
  border: ${({ $isClicked }) => !$isClicked && '1px solid #bfa4ff'};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 20px;
  gap: 10px;
  border-radius: 13px;
  border: 1px solid var(--Main, #bfa4ff);
  background: #fff;
`;

const SearchItem = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  background: #fff;
`;

const SearchItemName = styled.span`
  color: var(--Grey-800, #2b2b2b);
  font-size: 14px;
  font-weight: 500;
`;

const SelectTarget = ({ target, setTarget, searchUserId, setSearchUserId, userName, setUserName }: SelectTargetProps) => {
  const [follower, setFollower] = useState<User[]>([]);
  const { searchFollower } = useUserApi();
  const filterNames = follower.filter((user) => user.loginId.includes(searchUserId)).map((user) => user.name);
  const isValidDisplay = () => {
    if (searchUserId != '' && filterNames.length > 0 && userName.length == 0) return true;
  };
  useEffect(() => {
    searchFollower().then((result) => setFollower(result ?? []));
  }, []);
  return (
    <Wrapper>
      <TargetButtonContainer>
        <TargetButton $isClicked={target == 'me'} onClick={() => setTarget('me')}>
          나에게 쓰기
        </TargetButton>
        <TargetButton $isClicked={target == 'friend'} onClick={() => setTarget('friend')}>
          친구에게 쓰기
        </TargetButton>
      </TargetButtonContainer>
      {target == 'friend' && (
        <div>
          <SearchBar searchUserId={searchUserId} setSearchUserId={setSearchUserId} userName={userName} setUserName={setUserName} />
          {isValidDisplay() && (
            <SearchContainer>
              {Object.values(
                filterNames.map((userName: string) => (
                  <SearchItem onClick={() => setUserName(userName)}>
                    <img src={human} alt="사람 모양 아이콘" />
                    <SearchItemName>{userName}</SearchItemName>
                  </SearchItem>
                )),
              )}
            </SearchContainer>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default SelectTarget;
