'use client';
export const shuffle = (array) => {
	return array.sort(() => Math.random() - 0.5);
};

export const areEqual = (arr1, arr2) => {
	return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
}