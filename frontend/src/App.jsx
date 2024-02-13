import React, { useEffect, useState } from 'react'

const App = () => {
  const [message, setMessage] = useState("");
  const fetchSkafferiet = async () => {
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
    fetchSkafferiet();
  }, []);
  

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}


export default App;
