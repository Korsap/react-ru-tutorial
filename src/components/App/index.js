import React, {Component} from 'react'
import newsList from '../../fixtures'
import NewsList from '../NewsList'
import Comments from '../Comments'
import AddNews from '../AddNews'
import './style.css'

let EventEmitter = require('events').EventEmitter
window.ee = new EventEmitter()

class App extends Component {
	state = {
		news: newsList
	}

	componentDidMount() {
		window.ee.addListener('News.add', (item) => {
			let nextNews = item.concat(this.state.news)
			this.setState({
				news: nextNews
			})
		})
	}

	componentWillUnmount() {
		window.ee.removeListener('News.add')
	}

	render () {
		return (
			<div className='app'>
				<AddNews />
				<h3>Новости</h3>
				<NewsList newsList={this.state.news}/>
				<Comments />
			</div>
		)
	}
}

export default App