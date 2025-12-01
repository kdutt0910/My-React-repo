import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black text-4xl font-bold p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Kaushik" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60" />
      <Card username="Dutt" image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60" />
    </>
  )
}

export default App
