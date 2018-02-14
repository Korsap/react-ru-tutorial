import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import './style.css'

export default class AddNews extends Component {
	state = {
		agreeNotChecked: true,
		authorIsEmpty: true,
		textIsEmpty: true
	}

	componentDidMount () {
		findDOMNode(this.refs.author).focus()
	}

	render() {
		return (
			<form className='addnews cf'>
				<input
					type="text"
					className="addnews__author"
					onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
					defaultValue=''
					placeholder='Ваше имя'
					ref='author'
				/>
				<textarea
					className='addnews_text'
					onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
					defaultValue=''
					placeholder='Текст новости'
					ref='text'
				/>
				<label className='addnews__checkrule'>
					<input type="checkbox"
						   defaultChecked={false}
						   ref='checkrule'
						   onChange={this.changeBtn}
					/>Я согласен с правилами
				</label>
				<button
					className='addnews__btn'
					onClick={this.onBtnClickHandler}
					ref='alert_button'
					disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}
				>Запостить!
				</button>
			</form>
		)
	}

	changeBtn = () => this.setState({
		agreeNotChecked: !this.state.agreeNotChecked
	})

	onBtnClickHandler = (e) => {
		e.preventDefault()
		let author = findDOMNode(this.refs.author).value
		let textEl = findDOMNode(this.refs.text)
		let text = textEl.value
		let item = [{
			author: author,
			text: text,
			bigText: '...'
		}]

		window.ee.emit('News.add', item)
		textEl.value = ''
		this.setState({textIsEmpty: true})
	}

	onFieldChange = (fieldName, e) => {
		if(e.target.value.trim().length > 0) {
			this.setState({
				[''+fieldName]: false
			})
		} else {
			this.setState({
				[''+fieldName]: true
			})
		}
	}
}