import { useState } from 'react';
import { DatePickerWrapper, Dropdown, DropdownSelect, DropdownIcon } from './Calendar.styles';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { getMonth } from 'date-fns';
import dropdown from '../../assets/icon/dropdown.svg';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const MONTHS = Array.from({ length: 12 }, (_, i) => i); // 0 ~ 11

  return (
    <DatePickerWrapper>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        inline
        locale={ko}
        dayClassName={(date) => {
          const isCurrentMonth = getMonth(date) === getMonth(selectedDate || new Date());
          return isCurrentMonth ? 'current-month' : 'outside-month';
        }}
        renderCustomHeader={({ date, changeMonth }) => {
          const currentMonth = getMonth(date);

          return (
            <Dropdown>
              <DropdownSelect value={currentMonth} onChange={(e) => changeMonth(Number(e.target.value))}>
                {MONTHS.map((monthIdx) => (
                  <option key={monthIdx} value={monthIdx}>
                    {monthIdx + 1}월
                  </option>
                ))}
              </DropdownSelect>
              <DropdownIcon src={dropdown} alt="드롭다운 아이콘" />
            </Dropdown>
          );
        }}
      />
    </DatePickerWrapper>
  );
};

export default Calendar;
