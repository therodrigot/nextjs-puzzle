'use client';
import React, { useEffect, useState } from 'react';

const Tile = (props) => {

	// const [animateDirection, setAnimateDirection] = useState(props.animateDirection);
	const animateDirection = props.animateDirection

	return (
		<button
			className={animateDirection + (props.value.value == '0' ? ' tilezero ' : ' ') + ' tile flex justify-center items-center bg-gray-500 text-white border border-gray'}
			onClick={props.handleClick} >
			{props.value.value}
		</button>
	)
}

export default Tile;