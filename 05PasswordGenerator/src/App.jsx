import { useState } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white gap-8">
      <h1 className="text-3xl font-bold">Password Generator</h1>
      <div className="flex flex-col gap-3 py-5 px-5 bg-gray-800 rounded-lg">
      <div className="flex gap-2">
        <input
          type="text"
          readOnly
          value="GeneratedPassword123!"
          className="bg-gray-700 text-white px-3 py-2 rounded w-full"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Generate
        </button>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex items-center gap-2">
          <input type="range" name="length" className="w-64 cursor-pointer" min={8} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
          <label htmlFor="length" className="whitespace-nowrap">Length ({length})</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="Numeric" className="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
          <label htmlFor="Numeric">Include Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="Character" className="checkbox" checked={includeCharacters} onChange={(e) => setIncludeCharacters(e.target.checked)} />
          <label htmlFor="Character">Include Special Characters</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
