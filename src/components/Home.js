import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="container-home">
            <Link to="./CreateQuiz" className="btn btn-success mt-3">Create Quiz</Link>
            <Link to="./QuizList" className="btn btn-primary mt-3">Select Quiz</Link>
        </div>

    )
}

export default Home

