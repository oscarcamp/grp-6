import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../modules/firebase'

class AddQuiz extends React.Component{

        state = {
            title: '',
        }

        handleInput = (e) => {
            e.preventDefault();

            console.log("Want to add a new title which is: " + this.state.title);

            // Create a new document for our quizzes in the 'quizzes' collection
            


            db.collection('quizzes').add(this.state)
            .then(docRef => {
                // redirect to quizlist
                this.props.history.push('/QuizList');
            })
            .catch(err => {
                console.error(err);
            });

        }

        handleInputChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value,
            });
        }
        
        render(){
            return(           
            <div>
            
            <form onSubmit={this.handleInput}> 
            <h1>Create a Quiz</h1>
            <div className="form-group">

                {/* Title */}
                <div className="input-group mt-4">
                    <label htmlFor="Title" className="mr-5">Title:</label>
                    <input
                        type="text"
                        id="title"
                        aria-label="Title of your Quiz"
                        placeholder="Type in a quiz name.."
                        className="form-control"
                        required
                        onChange={this.handleInputChange}
						value={this.state.title}
                    />
                </div>
              
              
                <div className="btn-home">
                <Link to="/" className="btn btn-danger mt-3">Home</Link>
                <button type="submit" className="btn btn-primary mt-3">Add to Quiz-List</button>
                </div> 

            </div>    
            </form>
            </div>
            )
        }
    }
export default AddQuiz;