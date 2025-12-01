
import './index.css'
import './App.css'
import { useState } from 'react';

function App() {
  const [bgColor, setbgColor] = useState('white');

  const changeBackground = (color) => {
    setbgColor(color);
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="App text-center">
        <h1 className="text-3xl font-bold underline">
          BG Changer
        </h1>
        <input 
          type="color" 
          className="mt-5 p-5 border rounded " 
          onChange={(e) => changeBackground(e.target.value)} 
        />
        <div className="mt-5 p-5 bg-gray-200 rounded-lg inline-block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => document.body.style.backgroundColor = 'lightblue'}>
            Light Blue
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => document.body.style.backgroundColor = 'lightgreen'}>
            Light Green
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => document.body.style.backgroundColor = 'lightyellow'}>
            Light Yellow
          </button>
        </div>
      </div>
    </>
  )
}

export default App
