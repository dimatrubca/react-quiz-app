import { User } from "../types";
import { fetchApi } from "./fetchApi";
import { Quiz} from '../types'

const GetQuizzes = () => {
    return fetchApi<Quiz.QuizInfo[]>("/quizzes")
}


const GetQuiz = (quizId: number) => {
    return fetchApi<Quiz.Quiz>("/quizzes/" + quizId)
}


const CreateQuiz = (questions: Quiz.CreateQuizQuestion, title: string) => {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify({
            data: {
                title: title,
                questions: questions
            }
        }),
        headers: {
            'Content-Type': 'application/json'
        },
      };

    return fetchApi("/quizzes", requestOptions)
}


const SubmitQuizResponse = (quizResponse: Quiz.Response, quizId: number) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            'data': quizResponse
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    }

    return fetchApi<Quiz.ResponseReply>("/quizzes/" + quizId + '/submit', requestOptions)
}


const QuizAPIService = {
    GetQuizzes,
    GetQuiz,
    CreateQuiz,
    SubmitQuizResponse
}

export { QuizAPIService }