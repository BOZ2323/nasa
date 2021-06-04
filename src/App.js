import React, { useEffect, useState } from "react";
import DailySpacePic from "./components/DailySpacePic";

const API_KEY = "kJf4F8gQTewDqd17XKGl4oHuXMu5QC6i0ecPYWCP";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2017-07-08&end_date=2017-07-10`);
      const data = await response.json();
      console.log("response", data);
      setData(data);
    } catch {
      console.log("API request failed");
    }
    console.log("data", data);
  };
  return (
    <>
      {/* {data && <DailySpacePic data={data} />} */}
      {data?.map((data) => (
            <DailySpacePic data={data} key={data.title} />
          ))}
    </>
  );
}

export default App;
