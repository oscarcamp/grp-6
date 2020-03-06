import React from 'react'
import { Link } from 'react-router-dom'

    class CreateQuiz extends React.Component{

        state = {
            quizzes: [],
        }
       
        CreateQuiz = () =>{

        }
        
        render(){
            return(           
            <div>
            <h1>Create your own Quiz:</h1>
            
            <form>
            <div className="form-group">

                {/* Title */}
                <div className="input-group mt-4">
                    <label htmlFor="Title" className="mr-2">Title:</label>
                    <input
                        type="text"
                        id="title"
                        aria-label="Title of you Quiz"
                        placeholder="Type in a quiz name.."
                        className="form-control"
                    />
                </div>
                {/* Question */}
                <div className="input-group mt-4">
                    <label htmlFor="Question" className="mr-4 ">Question:</label>
                    <input
                        type="text"
                        id="Question"
                        aria-label="Type in your question"
                        placeholder="Type in a qustion.."
                        className="form-control"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                    </div>
                </div>
                {/* Answer */}
                <div className="input-group mt-4">
                    <label htmlFor="Answer" className="mr-4">Answer:</label>
                    <input
                        type="text"
                        id="answer"
                        aria-label="Type in your answer"
                        placeholder="Type in a answer.."
                        className="form-control"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                    </div>
                </div>
                {/* Answer */}
                <div className="input-group mt-4">
                    <label htmlFor="Answer" className="mr-4">Answer:</label>
                    <input
                        type="text"
                        id="answer"
                        aria-label="Type in your answer"
                        placeholder="Type in a answer.."
                        className="form-control"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                    </div>
                </div>
                <div className="btn-home">
                <Link to="/" className="btn btn-info mt-3"> <span role="img" aria-label="A back arrow">🔙</span> Home</Link>
                <button type="submit" className="btn btn-primary mt-3">Create <span role="img" aria-label="Tools">🛠</span></button>
                </div>
            </div>    

            </form>
            </div>
            )
        }
    }
export default CreateQuiz