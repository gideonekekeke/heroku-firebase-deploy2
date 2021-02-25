import React, { useState, useEffect } from "react";
import axios from "axios";

function Gamer() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://my-backend-node.herokuapp.com/api/games"
    );

    console.log(result.data);
    if (result) {
      setData(result.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      {data.map(({ name, id }) => (
        <center
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            fontFamily: "poppins",
            fontSize: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={id}
          >
            {name}
          </div>
        </center>
      ))}
    </div>
  );
}

export default Gamer;
