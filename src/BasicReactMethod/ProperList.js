import React from "react";

const book = [
  {
    title: "Bill Johnson and Beni Johnson",
    author: "The Happy Intercessor Paperback",
    img: "https://images-na.ssl-images-amazon.com/images/I/41V0BZC9nJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    title: "Reminders of Him: A Novel Paperback – January",
    author: "by Colleen Hoover  (Author)",
    img: "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg",
  },
  {
    title: "Teen Machine Paperback – 5 July 2022",
    author: "by Ishita Agarwal  (Author",
    img: "https://images-na.ssl-images-amazon.com/images/I/419VeCYzkaL._SX323_BO1,204,203,200_.jpg",
  },
];

export function ProperList() {
  return (
    <section className="Mproject">
      {book.map((book) => {
        return <Notes book={book}></Notes>;
      })}
    </section>
  );
}

const Notes = (props) => {
  console.log(props);
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" style={{ width: "50px", hight: "10px" }} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
