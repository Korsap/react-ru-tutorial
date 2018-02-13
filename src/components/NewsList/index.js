import React, {Component} from 'react'
import Article from '../Article'

class News extends Component {

	render() {
		const {newsList} = this.props
		let newsTemplate
			if(newsList.length > 0) {
				newsTemplate = newsList.map((newsElement, index) =>
					<div key={index}>
						<Article newsElement={newsElement}/>
					</div>)
			} else {
				newsTemplate = <p>К сожалению новостей нет</p>
			}

		
		return (
			<div className='news'>
				{newsTemplate}
				<strong className={'news__count ' + (newsList.length > 0 ? '' : 'none')}>Всего новостей: {newsList.length}
				</strong>
			</div>
		)
	}
}

export default News