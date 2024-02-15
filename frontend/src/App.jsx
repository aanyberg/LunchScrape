import React, { useEffect, useState } from 'react'

const App = () => {
  const [message, setMessage] = useState("");
  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log("Something went wrong");
    } else {
      setMessage(data);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div>
      <h6>{message}</h6>
    </div>
  );
}


export default App;
