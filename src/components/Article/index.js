import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Article extends Component {
	static propTypes = {
		newsElement: PropTypes.shape({
			author: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			bigText: PropTypes.string.isRequired
		})
	}

	state = {
		visible: false
	}

	render() {
		const {newsElement} = this.props

		return (
			<div className='article'>
				<p className='article__author'>{newsElement.author}:</p>
				<p className='article__text'>{newsElement.text}</p>
				<a href="#"
				   onClick={this.showMore}
				   className={'article__readmore ' + (this.state.visible ? 'none' : '')}>
					Подробнее</a>
				<p className={'article__big-text ' + (this.state.visible ? '' : 'none')}>{newsElement.bigText}</p>
			</div>
		)
	}

	showMore = (e) => {
		e.preventDefault()
		this.setState({
			visible: true
		})
	}

}

export default Article