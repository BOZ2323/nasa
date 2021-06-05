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
  const [data, setData] = useState();
  const [date, setDate] = useState(new Date());
  const [seven, setSeven] = useState([]);
  const [showWeeklySpacePic, setShowWeeklySpacePic] = useState(false);

  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  const DATE = new Date(date.getTime() - tzoffset).toISOString().substring(0, 10);
  // const DATE = date.toISOString().substring(0, 10);
  const SEVEN_DAYS_AGO = getAWeekAgoDate().toISOString().substring(0, 10);
  console.log("SEVEN_DAYS_AGO", SEVEN_DAYS_AGO);

  console.log("newDate()", new Date());

  useEffect(() => {
    getData();
    getAWeekAgoDate();
  }, [date]);

  console.log("DATE:", DATE);
  console.log(data);

  console.log("date", date);
  console.log("seven", seven);
  // console.log(date.toISOString())
  // console.log(date.toISOString().substring(0, 10)) // not giving the correct date yet

  function getAWeekAgoDate() {
    const today = new Date(date.getTime() - tzoffset);
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5); // why 5, figure out before uploading
    console.log("today", today);
    return lastWeek;
  }

  const getData = async () => {
    try {
      // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

      const responseWeekdaysPics = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${SEVEN_DAYS_AGO}`
      );
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE}`);
      const data = await response.json();
      const sevenPics = await responseWeekdaysPics.json();
      console.log("response", data);
      setData(data);
      setSeven(sevenPics);
    } catch {
      console.log("API request failed");
    }
  };

  return (
    <>
      <StyledMain>
        <Title />
        <StyledSection>
          <DatePicker minDate={new Date(1995, 5, 16)} maxDate={new Date()} onChange={setDate} value={date} />
        </StyledSection>

        <StyledButton onClick={() => setShowWeeklySpacePic(!showWeeklySpacePic)}></StyledButton>
        {showWeeklySpacePic && seven?.map((seven) => (
        <LastWeeksPics seven={seven} key={seven.title} />
      ))}

        {!showWeeklySpacePic && data && <DailySpacePic data={data} />}

        {/* {seven?.map((seven) => (
        <LastWeeksPics seven={seven} key={seven.title} />
      ))} */}

        {/* <Calendar onChange={handleOnChange} showWeekNumbers value={value} /> */}
      </StyledMain>
      <BackgroundPic />
    </>
  );
}

export default App;
