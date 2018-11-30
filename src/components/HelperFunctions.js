import React from "react";
function putLinkH(input) {
  if (input.includes("https://") || input.includes("http://")){
    return <a href={input} target="_blank" rel="noopener noreferrer">{input} </a>;
  } else {
    return input + " ";
  }
}

function putLink(input) {
  var strs = input.split(" ");
  return strs.map(str =>
    putLinkH(str));


}


function putPictureH(input) {
  if (input.includes("https://") || input.includes("http://")){
    return (<div><br/> <img src={input} height="320" width="280" alt=""/></div>) ;
  } else {
    return input + " " ;
  }
}

export function putPicture(input) {
  var strs = input.split(" ");
  return strs.map(str =>
    putPictureH(str));


}
export default putLink;
