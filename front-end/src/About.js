import React, { useEffect, useState } from "react";


const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5002/api/about") 
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="About">
      <h1>{data.name}</h1>
      {data.description.map((desc, i) => (
        <p key={i}>{desc}</p>
      ))}
      {data.imageUrl && (
        <img
          src={`http://localhost:5002${data.imageUrl}`}
          alt={data.name}
          className="about-photo"
        />
      )}
    </div>
  );
};

export default About;
