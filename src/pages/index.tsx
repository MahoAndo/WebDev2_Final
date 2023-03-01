import type { NextPage } from "next";
import { useState } from "react";
import { fetchQuestions } from "../component/api/api";
import QuizCard from "component/question";
import styles from "styles/Home.module.css";
import { questionsState, difficulty } from "../component/api/api";

export type AnswerObj = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
};

//total of questions
const total = 10;

const home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<questionsState[]>([]);
  const [number, setNo] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(
      total,
      difficulty.easy,
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNo(0);
    setLoading(false);
  };
  
  const nextQuestion = () => {
    //user can click until 10
    const next = number + 1;

    if(next === total)
      setGameOver(true);
    else
      setNo(next);
  };

  const checkAnswer = (e: any) => {
    if(!gameOver){
      const answer = e.currentTarget.value;
      // check the answer is true
      const correct = questions[number].correct_answer === answer;
      if(correct)
        setScore((prev) => prev + 1);
        //save user answer
      const answerObj = {
          question : questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Art Quiz</h1>
      {gameOver || userAnswers.length === total ? (
        <button className={styles.start} onClick={startTrivia}>
          start
        </button>
      ) : null}
      
      {!gameOver? <p className={styles.score}>Score: {score}</p> : null}
      {loading ? <p>Loading...</p> : null}
      {!loading && !gameOver && (
        <QuizCard 
          quizNo = {number + 1}
          totalQuiz = {total}
          question = {questions[number].question}
          answers = {questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      { !gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== total - 1 ? (
        <button onClick={nextQuestion}>Next Question</button>
      ) : null}
    </div>
  )
};

export default home