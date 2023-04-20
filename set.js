export const set = new Set();

export function addToSet(item) {
	set.add(item);
}

export function removeFromSet(item) {
	set.delete(item);
}
