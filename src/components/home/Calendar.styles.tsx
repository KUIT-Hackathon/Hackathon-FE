import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerWrapper = styled.div`
  .react-datepicker {
    width: 351px;
    height: 488px;
    border: none;
  }
  .react-datepicker__header {
    background: var(--Grey-30, #fafafa);
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__day-names {
    display: flex;
    align-items: center;
    background: var(--Main, #bfa4ff);
    height: 48px;
    border-radius: 15px 15px 0 0;
    border: 0.5px solid #d8d8d8;
  }
  .react-datepicker__day-name {
    flex: 1;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.64px;
  }
  .react-datepicker__month {
    margin: 0;
    border-radius: 0 0 15px 15px;
    border: 0.5px solid #d8d8d8;
  }
  .react-datepicker__week {
    display: flex;
    width: 100%;
  }
  .react-datepicker__day {
    flex: 1;
    height: 93px;
    border-right: solid 1px #d8d8d8;
    border-top: solid 1px #d8d8d8;
    margin: 0;
    padding-top: 10px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.64px;
  }
  .react-datepicker__day.outside-month {
    color: var(--Grey-400, #919191);
  }
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  width: 82px;
`;
const DropdownSelect = styled.select`
  appearance: none;
  border: none;
  color: var(--Grey-900, #121212);
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  padding: 8px 32px 8px 12px;
  border: none;
`;
const DropdownIcon = styled.img`
  position: absolute;
  right: 10px;
`;

export { DatePickerWrapper, Dropdown, DropdownSelect, DropdownIcon };
