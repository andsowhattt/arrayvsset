export const array = [];

export function addToArray(item) {
	array.push(item);
}

export function removeFromArray(item) {
	const index = array.indexOf(item);
	if (index !== -1) {
		array.splice(index, 1);
	}
}
