import React, {Component} from 'react'
import News from '../NewsList/index'
import Comments from '../Comments'
import AddNews from '../AddNews'
import newsList from '../../fixtures'

class App extends Component {
	render () {
		return (
			<div className='app'>
				<AddNews />
				<h3>Новости</h3>
				<News newsList={newsList}/>
				<Comments />
			</div>
		)
	}
}

export default App