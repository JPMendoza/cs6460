import React from "react";
function putLinkH(input) {
  if (input.includes("https://") || input.includes("http://")){
    return <a href={input} target="_blank" rel="noopener noreferrer">{input} </a>;
  } else {
    return input;
  }
}

function putLink(input) {
  var strs = input.split(" ");
  console.log(strs);
  return strs.map(str =>
    putLinkH(str));


}
export default putLink ;
