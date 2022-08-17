import React from "react";

const firstBook = {
  title: "Bill Johnson and Beni Johnson",
  author: "The Happy Intercessor Paperback",
  img: "https://images-na.ssl-images-amazon.com/images/I/41V0BZC9nJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
};
const secondBook = {
  title: "Reminders of Him: A Novel Paperback – January",
  author: "by Colleen Hoover  (Author)",
  img: "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg",
};
export function Book() {
  return (
    <section className="Mproject">
      <Notes
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          “I'm selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can't handle me
          at my worst, then you sure as hell don't deserve me at my best.”
        </p>
      </Notes>
      <Notes
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Notes>
    </section>
  );
}

const Notes = (props) => {
  const { img, title, author, children } = props;

  return (
    <article className="book">
      <img src={img} alt="" style={{ width: "50px", hight: "10px" }} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
