import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "../../components/navbar";
import { AuthenticationPage } from "../../modules/authentication-page";
import { QuizListPage } from "../../modules/quiz-list-page";
import { QuestionPage } from "../../modules/question-page"
import { CreateQuizPage } from "../../modules/create-quiz-page";


const RouterContainer = () => {
  return (
    <Router>
      <Navbar />
      {/* <h1>.</h1> */}
      <Routes>
        <Route path="/authenticate" element={<AuthenticationPage/>} />
        <Route path="/" element={<QuizListPage/>}/>
        <Route path="/1" element={<QuestionPage />}/>
        <Route path="/quizzes/create" element={<CreateQuizPage/>}/>
      </Routes>
    </Router>
  );
};

export { RouterContainer };