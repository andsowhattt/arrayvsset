import { array, addToArray, removeFromArray } from './array.js';
import { set, addToSet, removeFromSet } from './set.js';


const emojis = ['😴', '❤️', '🥳', '😍', '🤯', '🤔', '🤗', '😒'];
const input = document.getElementById('input');
const randomIndex = Math.floor(Math.random() * emojis.length);
const randomEmoji = emojis[randomIndex];
input.value = randomEmoji;

document.addEventListener('DOMContentLoaded', () => {
	const arrayItems = document.getElementById('array-items');
	const setItems = document.getElementById('set-items');
	arrayItems.innerHTML = '';
	setItems.innerHTML = '';
	render();

	const addButton = document.getElementById('add');

	addButton.addEventListener('click', () => {
		const input = document.getElementById('input');
		const item = input.value;
		if (item) {
			if (array.includes(item)) {
				addToArray(item);
			} else {
				addToArray(item);
				addToSet(item);
			}
			input.value = '';
			render();
		}
	});


	const removeButton = document.getElementById('remove-emoji');
	removeButton.addEventListener('click', () => {
		const emojiInput = document.getElementById('emoji');
		const item = emojiInput.value;
		removeFromArray(item);
		removeFromSet(item);
		emojiInput.value = '';
		render();
	});

	function render() {
		arrayItems.innerHTML = '';
		setItems.innerHTML = '';
		array.forEach(item => {
			const li = document.createElement('li');
			li.textContent = item;
			arrayItems.appendChild(li);
		});
		set.forEach(item => {
			const li = document.createElement('li');
			li.textContent = item;
			setItems.appendChild(li);
		});
	}

});
