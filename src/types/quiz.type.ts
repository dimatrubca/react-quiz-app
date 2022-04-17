export declare module Quiz {
    export type QuizInfo = {
        id: string,
        title: string,
        questions_count: number
    }

    export type Question = {
        id: number,
        question: string,
        answers: string[] 
    }

    export type Quiz = {
        id: string,
        title: string,
        questions: Question[]
    }
    
    export type Response = {
        question_id: number,
        answer: string,
        user_id: number
    }

    export type ResponseReply = {
        id: number,
        correct_answer: string,
        correct: boolean
    }

    export type CreateQuizQuestion = {
        question: string,
        answers: string[],
        correct_answer: string
    }
}