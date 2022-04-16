import React, { useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../components/navbar";
import { AuthenticationPage } from "../../modules/authentication-page";
import { QuizListPage } from "../../modules/quiz-list-page";
import { QuestionPage } from "../../modules/question-page"
import { CreateQuizPage } from "../../modules/create-quiz-page";
import { Userbar } from "../../components/userbar";
import { PrivateRoute } from "../../components/private-route/private-route";
import { AuthContext } from "../../context";


const RouterContainer = () => {
  const authContext = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <Userbar />
      <Routes>
        <Route path="/authenticate" element={<AuthenticationPage/>} />
        {/* <Route path="/" element={<QuizListPage/>}/> */}
        <Route path="/1" element={authContext.isAuthenticated ? <QuestionPage/> : <Navigate to="/authenticate"/>}/>
        <Route path="/quizzes/create" element={authContext.isAuthenticated ? <CreateQuizPage/> : <Navigate to="/authenticate"/>}/>

        <Route path="/" element={authContext.isAuthenticated ? <QuizListPage/> : <Navigate to="/authenticate"  />}/>
      </Routes>
    </Router>
  );
};

export { RouterContainer };