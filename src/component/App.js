import React, {Component} from 'react'
import News from './News'
import Comments from './Comments'
import newsList from '../fixtures'

class App extends Component {
	render () {
		return (
			<div>
				<h3>Привет, я компонент React! Я умею отображать новости</h3>
				<News data={newsList}/>
				<Comments/>
			</div>
		)
	}
}

export default App