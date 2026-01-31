import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alert from './component/Alert.jsx'

function App() {
  const [type, setType] = useState("")

  return (
    <div>

      <button onClick={() => setType("success")}>"Success"</button>
      <button onClick={() => setType("warning")}>"Warning"</button>
      <button onClick={() => setType("error")}>"Error"</button>

      <Alert type={type} />

    </div>
  )
}

export default App
