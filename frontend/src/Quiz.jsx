

import React, { useState, useEffect } from "react";
import "./Quiz.css";
import Questions from "./assets/Questions";
import Navbar from "./Navbar";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState({});
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [funFact, setFunFact] = useState(""); // new state for fun facts

  useEffect(() => {
    console.log("Score updated:", score);
  }, [score]);

  useEffect(() => {
    // display a new fun fact every 3 questions
    if (current % 3 === 0 && current !== 0) {
      const funFacts = [
        "Did you know that every child has the right to education?",
        "Children have the right to be protected from all forms of violence!",
        "Every child has the right to express their opinions and be heard!",
        // add more fun facts here
      ];
      setFunFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
    }
  }, [current]);

  const change = () => {
    if (current < Questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const changePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const checkAnswer = (e) => {
    const option = e.target.value;
    setSelectedOption({ ...selectedOption, [current]: option });
    if (!showCorrectAnswer[current]) {
      if (option === Questions[current].Answer) {
        setScore(score + 1);
      }
      setShowCorrectAnswer({ ...showCorrectAnswer, [current]: true });
    }
  };

  return (
    <>
    <Navbar/>
    <div className=" my-[50%] lg:my-[16%] sm:my-[50%] flex flex-col items-center w-full min-h-screen">
      <h1 className="text-lg font-bold">Quiz: Children's Rights</h1>
      <div className="Quiz-container">
        {isQuizCompleted ? (
          <div>
            <h2>Quiz Completed!</h2>
            <p>
              Your score is: {score}/{Questions.length}
            </p>
            {score === 10 && (
              <div className="congrats-message">
                <h3>Congratulations!!👍👍💕😍</h3>
                <p>
                  You scored a perfect 10/10!🎉🎊 You're a quiz master!😎😎 Keep
                  up the amazing work, and remember, there's no limit to what
                  you can achieve. Keep pushing boundaries and aiming for the
                  stars!
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
            <p>
              Score: {score}/{Questions.length}
            </p>
            <div>
              Question {current + 1}: {Questions[current].question}
            </div>
            <div>
              {Questions[current].options.map((opt, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name={`question-${current}`}
                    value={opt}
                    checked={selectedOption[current] === opt}
                    onChange={checkAnswer}
                    disabled={showCorrectAnswer[current] === true}
                  />
                  {opt}
                </div>
              ))}
              {showCorrectAnswer[current] && (
                <p>Correct Answer: {Questions[current].Answer}</p>
              )}
              {funFact && (
                <div className="fun-fact">
                  <p>🎉 Fun Fact: {funFact}</p>
                </div>
              )}
              <div className="buttonContainer">
                <button onClick={changePrev} disabled={current === 0}>
                  Prev
                </button>
                <button
                  onClick={change}
                  disabled={selectedOption[current] === undefined}
                >
                  {current === Questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
