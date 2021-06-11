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
  background: #737e88;
  border: none;
`;
const StyledText = styled.p`
  color: white;
  font-size: 14px;
  margin: 0;
  padding: 0.4rem;
`;
const StyledButton = styled.button`
  border-radius: 3px;
  background-color: #f67520;
  color: white;
  padding: 5px;
  border: none;
  width: 9.8rem;
  justify-content: center;
  margin: 10px;
`;

const API_KEY = "kJf4F8gQTewDqd17XKGl4oHuXMu5QC6i0ecPYWCP";

const App = () => {
  const [dailyData, setDailyData] = useState();
  const [date, setDate] = useState(new Date());

  const [weekdays, setWeekdays] = useState([]); //last seven weekdays pics
  const [showWeeklySpacePic, setShowWeeklySpacePic] = useState(false);

  // get today's date, taking the different timezone into account
  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds

  // const DATE = new Date(date.getTime() - tzoffset).toISOString().substring(0, 10);
  const SEVEN_DAYS_AGO = getAWeekAgoDate().toISOString().substring(0, 10);

  // new Date() returns the same result as date default: Thu Jun 10 2021 16:42:37 GMT+0200 (Central European Summer Time)

  const newDate = new Date();
  console.log("new Date()", new Date());
  console.log("newDate", newDate.toISOString());

  console.log("date:", date);

  const DATE = date.toISOString().substr(0, 10);
  //   const DATE = `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()}`

  console.log("DATE", DATE);

  useEffect(() => {
      getDailyData();
      getWeeklyData();
  }, [date]);

  function getAWeekAgoDate() {
    const today = new Date(new Date().getTime() - tzoffset);
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
    return lastWeek;
  }

  const getDailyData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE}`);
      // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      const data = await response.json();
      console.log("response data:", data);
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
      setWeekdays(reversedData);
    } catch {
      console.log("API request for weekly pics failed");
    }
  };

  const onDateChange = (date) => {
    if (date) {
      setDate(date)
    }
    else {
      setDate(new Date())    
    }

  }

  return (
    <>
      <StyledMain>
        <Title showWeeklySpacePic={showWeeklySpacePic} />

        <StyledButton onClick={() => setShowWeeklySpacePic(!showWeeklySpacePic)}>
          {showWeeklySpacePic ? "Choose your own date" : "See last weeks pictures"}
        </StyledButton>
        {showWeeklySpacePic &&
          weekdays?.map((weekday) => (
            <LastWeeksPics getWeekAgoDate={() => getAWeekAgoDate()} weekday={weekday} key={weekday.title} />
          ))}

        {!showWeeklySpacePic && (
          <>
            <StyledText>Choose here a certain date and you will see that date's picture of the day! </StyledText>
            <StyledSection>
              <DatePicker
                dayAriaLabel="Day"
                minDate={new Date(1995, 5, 16)}
                maxDate={new Date()}
                onChange={onDateChange}
                value={date}
              />
            </StyledSection>
          </>
        )}

        {!showWeeklySpacePic && dailyData && <DailySpacePic dailyData={dailyData} />}
      </StyledMain>

      <BackgroundPic />
    </>
  );
};

export default App;
