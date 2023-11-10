import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/Riten1")
      .then((response) => response.json())
      .then((res) => {
        setData(res);  
      });
  }, []);
  return (
    <>
      <div>Github Followers: {data.followers}</div>
      <div>Github following: {data.following}</div>
    </>
  );
};
export default Github;
