import React from "react";
import { array, string } from "prop-types";

import FlipMove from "react-flip-move";

const ToDoItems = ({ entries, query }) => {
	const filteredItems = entries.filter(
		item => item.text.toLowerCase().indexOf(query.toLowerCase()) !== -1
	);

	const listItems = filteredItems.map(createTasks);

	return (
		<ul className='theList'>
			<FlipMove duration={250} easing='ease-out'>
				{listItems}
			</FlipMove>
		</ul>
	);
};

function createTasks(item) {
	return (
		<li key={item.key} onClick={() => deleteItem(item.key)}>
			{item.text}
		</li>
	);
}

function deleteItem(key) {
	this.props.delete(key);
}

ToDoItems.propTypes = {
	entries: array,
	query: string
};

export default ToDoItems;
