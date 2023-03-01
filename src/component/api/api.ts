import { shuffleArray } from "component/utils/utils";

//Question
export type questions = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
};

//level of difficulty
export enum difficulty {
    easy = "easy",
    medium = "medium",
    hard = "hard"
};

export type questionsState = questions & {answers: string[]};

export const fetchQuestions = async (
    amount: number,
    difficulty: difficulty,
): Promise<questionsState[]> => {
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=25&type=multiple`;
    const data = await (await fetch(apiUrl)).json();

    return data.results.map((question: questions) => ({
        ...question,
        // display questions randomly by shuffleArray
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
        ]),
    }));
};