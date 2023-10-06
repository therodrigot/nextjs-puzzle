'use client';
import Board from '@/components/Board/Board'
import WinScreen from '@/components/WinScreen/WinScreen'
import { useState } from 'react';

export default function Home() {

  const [isWin, setWin] = useState(false);
  const [doRestart, setRestart] = useState(false);

  const restart = () => {
    setWin(false);
    setRestart(true);
  }

  return (
    <main className="flex flex-col p-24 items-center justify-center w-screen h-screen">
      <Board matrix={[4, 4]} setWin={setWin} restart={doRestart} setRestart={setRestart} />
      {isWin ? <WinScreen handleRestartClick={restart} /> : ''}
    </main >
  )
}
