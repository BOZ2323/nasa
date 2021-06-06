import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import BackgroundPic from "./components/BackgroundPic";
import DailySpacePic from "./components/DailySpacePic";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import DatePicker from "react-date-picker";
import LastWeeksPics from "./components/LastWeeksPics";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledSection = styled.section`
  background: lightblue;
`;
const StyledButton = styled.button`
  color: white;
  background-color: red;
  padding: 5px;
  border: none;
  width: 7rem;
  justify-content: center;
  margin: 10px;
`;

const API_KEY = "kJf4F8gQTewDqd17XKGl4oHuXMu5QC6i0ecPYWCP";

function App() {
  const [dailyData, setDailyData] = useState();
  const [date, setDate] = useState(new Date());

  const [weekdays, setWeekdays] = useState([]); //last seven weekdays pics
  const [showWeeklySpacePic, setShowWeeklySpacePic] = useState(false);

  // get today's date, taking the different timezone into account
  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds


// function getDateWithTimeZone(date){
//   if (date !== null || undefined){
//     new Date(date.getTime() - tzoffset).toISOString().substring(0, 10);
//     return
//   }
//   return
// }

// const DATE = getDateWithTimeZone()


  const DATE = new Date(date.getTime() - tzoffset).toISOString().substring(0, 10); // if date === null, getTime() doesn't work
  // const DATE = date.toISOString().substring(0, 10);
  const SEVEN_DAYS_AGO = getAWeekAgoDate().toISOString().substring(0, 10);
  console.log("SEVEN_DAYS_AGO", SEVEN_DAYS_AGO);

  console.log("newDate()", new Date());

  useEffect(() => {
    getDailyData();
    getWeeklyData();
  }, [date]);

  console.log("DATE:", DATE);

  console.log("date", date);
  console.log("date.getTime()", date.getTime());
  console.log("newDate().getTime()", new Date().getTime());
  console.log("weekdays", weekdays);
  const reversedWeekdays = weekdays.reverse();
  console.log("reversedWeekdays", reversedWeekdays.reverse());

  // console.log(date.toISOString())
  // console.log(date.toISOString().substring(0, 10)) // not giving the correct date yet

  function getAWeekAgoDate() {
    const today = new Date(new Date().getTime() - tzoffset);
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5); // why 5, figure out before uploading
    console.log("today", today);
    return lastWeek;
  }

  const getDailyData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE}`);
      const data = await response.json();

      console.log("daily response", data);
      setDailyData(data);
    } catch {
      console.log("API request for daily pics failed");
    }
  };

  const getWeeklyData = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${SEVEN_DAYS_AGO}`
      );
      const data = await response.json();

      const reversedData = data.reverse();
      console.log("reversedData", reversedData);

      setWeekdays(reversedData);
    } catch {
      console.log("API request for weekly pics failed");
    }
  };

  return (
    <>
      <StyledMain>
        <Title showWeeklySpacePic={showWeeklySpacePic} />

        <StyledButton onClick={() => setShowWeeklySpacePic(!showWeeklySpacePic)}>
          {showWeeklySpacePic ? "Choose your special date" : "View this weeks pics"}
        </StyledButton>
        {showWeeklySpacePic &&
          weekdays?.map((weekday) => (
            <LastWeeksPics getWeekAgoDate={() => getAWeekAgoDate()} weekday={weekday} key={weekday.title} />
          ))}

        <StyledSection>
          {!showWeeklySpacePic && (
            <DatePicker minDate={new Date(1995, 5, 16)} maxDate={new Date()} onChange={setDate} value={date} />
          )}
        </StyledSection>
        {!showWeeklySpacePic && dailyData && <DailySpacePic dailyData={dailyData} />}
      </StyledMain>
      
      <BackgroundPic />
    </>
  );
}

export default App;
