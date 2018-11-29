import React from "react";
import Quiz from './quiz/Quiz'
export default class Home extends React.Component {
  render() {
    return (
       <div>
       <p>Welcome to Nutrition, Cooking, Exercise a one stop shop on learning three related topics</p>
       <p>This course is here to challenge your knowledge on these three topics as well as educate and encurage you to take up new skills </p>
       <p>The basic course will take you through a learning about nutrition then go into cooking and lastly into exercise. </p>
       <Quiz />
       </div>
    );
  }

}
