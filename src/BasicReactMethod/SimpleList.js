import React from "react";

//const book = [
//{
//title: "Bill Johnson and Beni Johnson",
//author: "The Happy Intercessor Paperback",
//img: "https://images-na.ssl-images-amazon.com/images/I/41V0BZC9nJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
//},
//{
//title: "Reminders of Him: A Novel Paperback – January",
//author: "by Colleen Hoover  (Author)",
//img: "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg",
//},
//];
const names = ["krishna", "yoga", "jey", "shree"];
const newName = names.map((names) => {
  return <h1>{names}</h1>;
});
console.log(newName);
export function SimpleList() {
  return <section className="Mproject">{newName}</section>;
}

//const Notes = function (props) {
//const { img, title, author, children } = props;

//return (
//<article className="book">
//<img src={img} alt="" style={{ width: "50px", hight: "10px" }} />
//<h1>{title}</h1>
//<h4>{author}</h4>
//{children}
//</article>
//);
//};
