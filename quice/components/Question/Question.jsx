import './Question.css'
import React, { useState } from 'react';
import { useNavigate ,Routes ,Route, useLocation} from "react-router-dom";
import { Header } from '../Header/Header';
import Timer from '../Timer/Timer';

export function Question() {
    const navigate = useNavigate();
    const[qCount,setQcount] = useState(0)
    const[result,setResult] = useState(0)
    const[answer,setAnswer] = useState('')
    const location = useLocation();
    const { name } = location.state || { name: 'Guest' }; 
    const questions = [
        {
          question: '1.What does HTML stand for?',
          options: [
            'Hyper Text Preprocessor',
            'Hyper Text Multiple Language',
            'Hyper Text Markup Language',
            'Hyper Tool Multi Language'
          ],
          correctAnswer: '3'
        },
        {
          question: '2.What does CSS stand for?',
          options: [
            'Colorful Style Sheets',
            'Cascading Style Sheets',
            'Computer Style Sheets',
            'Creative Style Sheets'
          ],
          correctAnswer: '2'
        },
        {
          question: '3.What does JS stand for?',
          options: [
            'JavaScript',
            'JavaSource',
            'JavaStyle',
            'JustScript'
          ],
          correctAnswer: '1'
        },
        {
            question: '4.What does CSS stand for?',
            options: [
              'Cascading Style Sheets',
              'Colorful Style Sheets',
              'Computer Style Sheets',
              'Creative Style Sheets'
            ],
            correctAnswer: '1'
          },
          {
            question: '5.What does CSS stand for?',
            options: [
              'Cascading Style Sheets',
              'Colorful Style Sheets',
              'Computer Style Sheets',
              'Creative Style Sheets'
            ],
            correctAnswer: '1'
          },
      ];

      const handleChange = (value) => {
        setAnswer(value);
        // if(questions[qCount].correctAnswer === value)
        // {
        //   setResult(result + 1);
        // }
      }

      function goNextQuestion() {
        if (questions[qCount].correctAnswer === answer) {
          setResult(result + 1);
          setAnswer('');
          console.log(result)
        }
        if (qCount !== 4) {
          setQcount(qCount + 1);
        } else {
          navigate("/result", { state: { result: result } });
        }
      }

  return (
    <div>
      <Header name ={name} />
      <div className='Time'>
        <Timer/>
        {result}
      </div>
      <div className="Qbox">
        <div className="question-container">
          <h2 className="question_title">Question {qCount + 1}/5 </h2>
          <div className="question-box">
            <div className="question-image">
              <div>
                <h3> {questions[qCount].question}</h3>
                <div>
                  <div className="que">
                    <input type="radio" checked={answer === '1'} onChange={() => handleChange('1')}/>
                    <h5> {questions[qCount].options[0]}</h5>
                  </div>
                  <div className="que">
                    <input type="radio" checked={answer === '2'} onChange={() => handleChange('2')}/>
                    <h5> {questions[qCount].options[1]}</h5>
                  </div>
                  <div className="que">
                    <input type="radio" checked={answer === '3'} onChange={() => handleChange('3')}/>
                    <h5> {questions[qCount].options[2]}</h5>
                  </div>
                  <div className="que">
                    <input type="radio" checked={answer === '4'} onChange={() => handleChange('4')}/>
                    <h5> {questions[qCount].options[3]}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="next_btn">
            <button
              className="btn btn-success"
              onClick={() => {
                goNextQuestion();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}