import { fetchApi } from "./fetchApi";

const GetQuizzes = () => {
    return fetchApi("/quizzes")
}


const CreateQuiz = () => {
    const requestOptions = {
        method: "POST",
        body: 'formData',
      };

    return fetchApi("/", requestOptions)
}


const ShowQuiz = () => {

}


const SubmitQuizResponse = () => {
    
}