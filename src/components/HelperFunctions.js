import React from "react";
function putLink(input) {
  if (input.includes("https://") || input.includes("http://")){
    return <a href={input} target="_blank">{input} </a>;
  } else {
    return input;
  }
}
export default putLink ;
