'use client';
import React from 'react';

const WinScreen = (props) => {
	return (
		<div className="top-0 absolute w-screen h-screen bg-black/80 flex flex-col justify-center items-center">
			<div className='flex flex-col item-center'>
				<div className="block text-center text-white">WIN</div>
				<button onClick={props.handleRestartClick} className='table bg-slate-200 color-white p-3 px-5'>restart</button>
			</div>
		</div>
	)
}
export default WinScreen;