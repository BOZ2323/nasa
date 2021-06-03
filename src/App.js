import React, { useEffect, useState } from "react";

const API_KEY = 'kJf4F8gQTewDqd17XKGl4oHuXMu5QC6i0ecPYWCP'


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setData(data)
    } catch {
      console.log("API request failed");
    }
  };
  return (
    <main><section><img src={data.hdurl} alt=""/></section></main>
  );
}

export default App;
