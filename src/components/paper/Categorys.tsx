import styled from 'styled-components';
import { CATEGORY } from '../../constants/EventCategory';

interface CategorysProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryButton = styled.button<{ $isClicked?: boolean }>`
  background: ${({ $isClicked }) => ($isClicked ? '#BFA4FF' : '#DEDEDE')};
  padding: 8px 15.5px;
  border-radius: 16px;
  color: var(--White, #fff);
  font-size: 16px;
  font-weight: 700;
  box-sizing: border-box;
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 9px;
`;

const Categorys = ({ type, setType }: CategorysProps) => {
  return (
    <CategoryContainer>
      {Object.values(CATEGORY).map((category) => (
        <CategoryButton key={category} $isClicked={type === category} onClick={() => setType(category)}>
          {category}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
};

export default Categorys;
