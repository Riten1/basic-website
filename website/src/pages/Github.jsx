import React, { useEffect, useState } from 'react'

const Github = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://api.github.com/users/Riten1')
    .then((response) => response.json())
    .then((res) => {setData(res)
    console.log(data.followers)
    }
    )

  }, [])
  return (
    <div>GitHub Followers: {data.followers}</div>
  )
}
export default Github