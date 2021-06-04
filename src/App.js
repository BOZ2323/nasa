import React, { useEffect, useState } from "react";
import DailySpacePic from "./components/DailySpacePic";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const API_KEY = "kJf4F8gQTewDqd17XKGl4oHuXMu5QC6i0ecPYWCP";

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2017-07-08&end_date=2017-07-10`
      );
      const data = await response.json();
      console.log("response", data);
      setData(data);
    } catch {
      console.log("API request failed");
    }
    console.log("data", data);
    // console.log("date value", date);
  };


  console.log(date)

  return (
    <>
    
      {/* {data && <DailySpacePic data={data} />} */}
      {/* {data?.map((data) => (
        <DailySpacePic data={data} key={data.title} />
      ))} */}
      <Calendar onChange={setDate} value={date} />
      {/* <Calendar onChange={handleOnChange} showWeekNumbers value={value} /> */}
    </>
  );
}

export default App;
