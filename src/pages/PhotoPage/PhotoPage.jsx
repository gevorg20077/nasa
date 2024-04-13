import { useEffect } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import { currentDateTime } from '../../store/slices/date/date';
import { openCalendar } from '../../store/slices/isCalendar/isCalendar';
import { useDispatch, useSelector } from 'react-redux';
import './photoPage.css';

const PhotoPage = () => {
  const dispatch = useDispatch()
  dispatch(currentDateTime())
  const changeLanguage = useSelector(state => state.changeLanguage)
  const date = useSelector(state => state.date)
  const isCalendar = useSelector(state => state.isCalendar);
  const calendarValue = useSelector(state => state.calendarValue)
  console.log();
  return (
    <form className="photoPage">
      <input type="text" value={calendarValue.day + "/" + calendarValue.month + "/" + calendarValue.year} onFocus={() => dispatch(openCalendar())} />
      {isCalendar && <Calendar />}
      <button>{changeLanguage.russian ? "Поиск" : changeLanguage.armenian ? "Փնտրել" : "Search"}</button>
    </form>
  );
};

export default PhotoPage;
