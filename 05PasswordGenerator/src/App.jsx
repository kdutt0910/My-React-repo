import { useCallback, useEffect, useRef, useState } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const copyTextRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
      let pass = ""
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      if(includeNumbers){ str += '1234567890' }
      if(includeCharacters){ str += '~!@#$%^&*-_+=[]{}`' }

      for(let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
      }
      setPassword(pass)   
  },[length,includeCharacters,includeNumbers,setPassword])
  const copyPasswordToClip = useCallback(() => {
    copyTextRef.current?.select();
    copyTextRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,includeCharacters,includeNumbers,passwordGenerator])
  

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white gap-8">
      <h1 className="text-3xl font-bold">Password Generator</h1>
      <div className="flex flex-col gap-3 py-5 px-5 bg-gray-800 rounded-lg">
      <div className="flex gap-2">
        <input
          type="text"
          readOnly
          value={password}
          ref={copyTextRef}
          className="bg-gray-700 text-white px-3 py-2 rounded w-full"
        />
        <button 
        onClick={copyPasswordToClip}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Generate
        </button>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex items-center gap-2">
          <input type="range" name="length" className="w-64 cursor-pointer" min={8} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
          <label htmlFor="length" className="whitespace-nowrap">Length ({length})</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="Numeric" className="checkbox" defaultChecked={includeNumbers} onChange={() => setIncludeNumbers((prev) => !prev)} />
          <label htmlFor="Numeric">Include Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="Character" className="checkbox" defaultChecked={includeCharacters} onChange={() => setIncludeCharacters((prev) => !prev)} />
          <label htmlFor="Character">Include Special Characters</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
