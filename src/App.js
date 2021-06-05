import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import BackgroundPic from "./components/BackgroundPic";
import DailySpacePic from "./components/DailySpacePic";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import DatePicker from "react-date-picker";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledSection = styled.section`
  background: lightblue;
`;

const API_KEY = "kJf4F8gQTewDqd17XKGl4oHuXMu5QC6i0ecPYWCP";

function App() {
  const [data, setData] = useState();
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getData();
  }, [date]);

  const getData = async () => {
    try {
      // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

      // const response = await fetch(
      //   `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2017-07-08&end_date=2017-07-10`
      // );
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE}`);
      const data = await response.json();
      console.log("response", data);
      setData(data);
    } catch {
      console.log("API request failed");
    }
  };
  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  const DATE = new Date(date.getTime() - tzoffset).toISOString().substring(0, 10);
  // const DATE = date.toISOString().substring(0, 10);
  console.log("DATE:", DATE);

  console.log(data);
  console.log("DATE", DATE);

  console.log("date", date);
  // console.log(date.toISOString())
  // console.log(date.toISOString().substring(0, 10)) // not giving the correct date yet

  return (
    <>
      <StyledMain>
        <Title />
        <StyledSection>
          <DatePicker maxDate={new Date()} onChange={setDate} value={date} />
        </StyledSection>
        {data && <DailySpacePic data={data} />}
        {/* {data?.map((data) => (
        <DailySpacePic data={data} key={data.title} />
      ))} */}
        {/* <Calendar onChange={handleOnChange} showWeekNumbers value={value} /> */}
      </StyledMain>
      <BackgroundPic />
    </>
  );
}

export default App;
