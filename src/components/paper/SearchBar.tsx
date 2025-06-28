import styled from 'styled-components';
import search from '../../assets/icon/paper/search.svg';

interface SearchBarProps {
  searchUserId: string;
  setSearchUserId: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid var(--Grey-200, #c4c4c4);
  background: #fff;
  padding: 0 16px;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 0 12px 12px 0;
  &::placeholder {
    color: var(--Grey-250, #bebebe);
  }
`;

const SearchBar = ({ searchUserId, setSearchUserId, userName, setUserName }: SearchBarProps) => {
  const onChange = (e) => {
    setSearchUserId(e.target.value);
    setUserName('');
  };
  const onkeyDown = (e) => {
    if (e.code === 'Backspace') setUserName('');
  };
  return (
    <Container>
      <Input
        type="text"
        placeholder="친구의 아이디를 입력하세요."
        onChange={(e) => onChange(e)}
        value={userName.length > 0 ? userName : searchUserId}
        onKeyDown={(e) => onkeyDown(e)}
      />
      <img src={search} alt="검색 버튼" />
    </Container>
  );
};

export default SearchBar;
