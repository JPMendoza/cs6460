import React from 'react'
import {putPicture} from '../HelperFunctions.js';

const Question = ({
  question,
  index,
  onAnswerSelected,
  onSubmit
}) => {
  return (
    <div >
      <h6 style= {{width: '100%',textAlign: 'center'}}>{putPicture(question.question)}</h6>
      <ul style={{listStyleType:"none"}}>
      {question.answers.map((answer, i) =>
        <li  key={`${index}-${i}`}>
          <div style={{wordWrap: 'break-word'}}>
          <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`} defaultChecked={false} value={i} onChange={onAnswerSelected} />
          {' '} <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
          </div>
        </li>
      )}
      </ul>
      <div style={{width: '100%', marginLeft:'auto', textAlign: 'center'}}>
      <button class="btn btn-default" style= {{width: '50%',}}  onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Question
