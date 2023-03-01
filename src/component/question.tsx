import { AnswerObj } from "pages/index";
import styles from "../styles/Home.module.css";

type Props = {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObj | undefined
    quizNo: number
    totalQuiz: number
};

const QuizCard = ({
    question,
    answers,
    callback,
    userAnswer,
    quizNo,
    totalQuiz,
}: Props) => {
    return (

        // display screen
        <div className={styles.container}>
            <p>
                {" "}
                Question: {quizNo} / {totalQuiz}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers.map((answer) => (
                        <button
                        disabled={userAnswer ? true : false}
                        value={answer}
                        onClick={callback}
                    >
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                ))}
            </div>
        </div>
    )
};

export default QuizCard
