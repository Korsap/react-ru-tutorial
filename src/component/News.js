import React, {Component} from 'react'

class News extends Component {

	render() {
		const {data} = this.props
		const newsTemplate = data.map((newsElement, index) =>
				<div key={index}>
					<p className='news__author'>{newsElement.author}:</p>
					<p className='news__text'>{newsElement.text}</p>
				</div>)
		
		return (
			<div className='news'>
				{newsTemplate}
			</div>
		)
	}
}

export default News