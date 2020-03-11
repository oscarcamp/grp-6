import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home';
import AddQuiz from './components/create-quiz/AddQuiz';
import QuizList from './components/QuizList';
import SingleQuiz from './components/play-quiz/SingleQuiz';
import AddQuestion from './components/create-quiz/AddQuestion'


function App() {
	return (
		<BrowserRouter>
			<div id="App">
				<Switch> 
					<Route exact path='/' component={Home} />
					<Route path='/AddQuiz' component={AddQuiz} />
					<Route path='/AddQuestion/:id' component={AddQuestion} />
					<Route path='/QuizList' component={QuizList} />
					<Route path='/quiz/:id' component={SingleQuiz} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
