import React from "react";

export function Jsx() {
  const title = "Bill Johnson and Beni Johnson";
  const Author = "The Happy Intercessor Paperback";
  return (
    <section className="Mproject">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41V0BZC9nJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
        width="90px"
        height="100px"
      />
      <h4>{title}</h4>
      <h2>{Author}</h2>
      {/* <p>{"let x = 8"}</p> */}
      <p>{6 + 5}</p>
    </section>
  );
}

//const Image = () => (

//);

//const Author = () => (

//);
//const Title = () =>
