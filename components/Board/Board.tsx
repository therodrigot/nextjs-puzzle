'use client';
import React, { useEffect, useState } from 'react';
import Tile from '../Tile/Tile';
import { shuffle, areEqual } from '@/utils/ArrayUtils';



const Board = (props: any) => {

	const [matrix, setMatrix] = useState(props.matrix);
	const [tiles, setTiles] = useState([]);
	const tilenumber = matrix ? matrix[0] * matrix[1] : 16;
	const initialTiles = Array.from({ length: tilenumber }, (_, index) => { { return { 'value': index, animateDirection: '' } } });
	const initialTilesWithoutZero = initialTiles.filter((value) => value.value != 0)

	// console.log(initialTiles);

	useEffect(() => {
		document.documentElement.style.setProperty('--col', matrix[0]);
		document.documentElement.style.setProperty('--row', matrix[1]);

		setTiles(shuffle(initialTiles));
	}, [])

	useEffect(() => {
		// quando setTiles é chamado checa condicao de vitoria
		checkOrder();
	}, [tiles])

	useEffect(() => {
		restart();
		props.setRestart(false);
	}, [props.restart])

	function handleTileClick(e, value) {

		let cols = matrix[0];
		let zeroposition = tiles.indexOf(tiles.filter(mapvalue => mapvalue.value == '0')[0]);
		let position = tiles.indexOf(tiles.filter(mapvalue => mapvalue.value == value.value)[0]);

		let prev = position % cols == 0 ? undefined : tiles[position - 1].value;
		let next = ((position + 1) % cols == 0) ? undefined : tiles[position + 1].value;
		let above = tiles[position - cols] ? tiles[position - cols].value : undefined;
		let below = tiles[position + cols] ? tiles[position + cols].value : undefined;
		// console.log('handleTileClick:', value, 'position:', position, 'prev:', prev, 'next:', next, 'above:', above, 'below:', below);
		// console.log(zeroposition,position);

		if (prev == 0 || next == 0 || above == 0 || below == 0) {
			let mytiles = [...tiles];
			mytiles[position].animateDirection = (prev == 0) ? 'left' : (next == 0) ? 'right' : (above == 0) ? 'up' : below == 0 ? 'down' : '';
			[mytiles[zeroposition], mytiles[position]] = [mytiles[position], mytiles[zeroposition]];
			setTiles(mytiles);
		}
	}

	function checkOrder() {
		let gameSituationWithoutLastElement = tiles.slice(0, -1).map(value => value.value);
		let initialTilesWithoutZeroSimplified = initialTilesWithoutZero.map(value => value.value);
		// console.log(gameSituationWithoutLastElement, initialTilesWithoutZeroSimplified);

		if (areEqual(gameSituationWithoutLastElement, initialTilesWithoutZeroSimplified)) {
			// console.log('win');
			props.setWin(1);
		}
	}

	const solve = () => {
		let t = [...initialTilesWithoutZero];
		t.push(0);
		setTiles(t);
	}

	const restart = () => {
		setTiles(shuffle(initialTiles));
	}

	return (
		<>
			<div className="puzzle-wrapper flex flex-wrap">
				{
					tiles.map((value, i) => {
						return <Tile
							key={i}
							value={value}
							animateDirection={value.animateDirection}
							handleClick={(e: Event) => handleTileClick(e, value)}
						/>
					})
				}
			</div>
			<div className="mt-5 w-full flex justify-between">
				<button onClick={solve} className='bg-slate-200 color-white p-3 px-5'>solve</button>
			</div>
		</>
	)
}

export default Board