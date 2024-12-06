import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [showData, setShowData] = useState([]);

  function handleData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      // .then((response) => setShowData(response))
      .then((response) => response.json())
      .then((response) => setShowData(response))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      {showData.length > 0 &&
        showData.map((item) => (
          <div key={item.id}>
            <h2>
              {item.id}. {item.title}
            </h2>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
