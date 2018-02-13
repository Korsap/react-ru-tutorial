import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'

export default class AddNews extends Component {

	componentDidMount () {
		findDOMNode(this.refs.author).focus()
	}

	render() {
		return (
			<form className='add cf'>
				<input
					type="text"
					className="add__author"
					defaultValue=''
					placeholder='Ваше имя'
					ref='author'
				/>
				<textarea
					className='add_text'
					defaultValue=''
					placeholder='Текст новости'
					ref='text'
				/>
				<label className='add__checkrule'>
					<input type="checkbox" defaultChecked={false} ref='checkrule'/>Я согласен с правилами
				</label>
				<button
					className='add__btn'
					onClick={this.publish}
					ref='alert_button'>
					Запостить!
				</button>
			</form>
		)
	}

	publish = () => {
		console.log(this.refs)
		alert(findDOMNode(this.refs.author).value + ': ' +  findDOMNode(this.refs.text).value)
	}

}