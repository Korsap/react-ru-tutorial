import React, {Component} from 'react'
import NewsList from '../NewsList'
import Comments from '../Comments'
import AddNews from '../AddNews'
import newsList from '../../fixtures'
import EventEmitter from 'browser-event-emitter'
import './style.css'

window.ee = new EventEmitter()

class App extends Component {
	state = {
		news: newsList
	}

	componentDidMount() {
		let self = this
		window.ee.addListener('News.add', (item) => {
			let nextNews = item.concat(self.state.news)
			self.setState({
				news: nextNews
			})
		})
	}

	componentWillMount() {
		window.ee.removeListener('News.add')
	}

	render () {
		return (
			<div className='app'>
				<AddNews />
				<h3>Новости</h3>
				<NewsList newsList={newsList}/>
				<Comments />
			</div>
		)
	}
}

export default App