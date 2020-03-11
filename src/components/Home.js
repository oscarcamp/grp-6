import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="homecon">
        <div className="container-fluid">
            <div className="home-text">
                <h1>Quiz-app</h1>
                <h2 className="home-h2">By: group-6</h2>
            </div>
            <div className="btn-group btn-group-toggle start-btn" data-toggle="buttons">
                <Link to="./AddQuiz" className="btn btn-1 btn-primary  btn-lg">Create Quiz</Link>
                <Link to="./QuizList" className="btn btn-2 home-select  btn-lg">Select Quiz</Link>
            </div>
         
        </div>
        </div>
    )
}

export default Home

