import React, { Component } from "react";

import ToDoItems from "./toDoItems";

import "./toDoList.css";

export default class ToDoList extends Component {
	state = {
		items: [],
		term: ""
	};

	render() {
		const { items, term } = this.state;

		return (
			<div className='toDoListMain'>
				<div className='header'>
					<form onSubmit={this.addItem}>
						<input
							type='text'
							ref={val => (this._inputElement = val)}
							placeholder='Enter task'
						/>
						<button type='submit'>Add Task</button>
					</form>
					<input
						type='text'
						placeholder='Search a task..'
						onChange={this.searchHandler}
						value={term}
					/>
				</div>
				<ToDoItems entries={items} delete={this.deleteItem} query={term} />
			</div>
		);
	}

	addItem = event => {
		if (this._inputElement.value !== "") {
			let newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState(prevState => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
		}
		this._inputElement.value = "";

		event.preventDefault();
	};

	deleteItem = key => {
		const filteredItems = this.state.items.filter(item => item.key !== key);

		this.setState({
			items: filteredItems
		});
	};

	searchHandler = event => {
		this.setState({
			term: event.target.value
		});
	};
}
