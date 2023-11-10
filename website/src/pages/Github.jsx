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
      <div className="text-center">Github Followers: {data.followers}</div>
      <div className="text-center">Github following: {data.following}</div>
    </>
  );
};
export default Github;
