import '../css/style.css';
import React from "react";
import ReactDOM from "react-dom";



var event = {
  title: "title",
  content: "content",
  slug: "slug"
};

var arr = JSON.stringify(event);
var arr1 = JSON.stringify(event);
var arr2 = JSON.stringify(event);
var arr3 = JSON.stringify(event);
var arr4 = JSON.stringify(event);
var arr5 = JSON.stringify(event);
var arr6 = JSON.stringify(event);
var arr7 = JSON.stringify(event);
var arr8 = JSON.stringify(event);
var arr9 = JSON.stringify(event);



function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

const numbers = [arr, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);