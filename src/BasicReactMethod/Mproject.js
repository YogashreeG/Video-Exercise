import React from "react";

export function Mproject() {
  return (
    <section className="Mproject">
      <Image />
      <Title />
      <Author />
    </section>
  );
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/41V0BZC9nJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt=""
    width="90px"
    height="100px"
  />
);

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "10px" }}>
    Bill Johnson and Beni Johnson
  </h4>
);
const Title = () => <h2>The Happy Intercessor Paperback</h2>;
