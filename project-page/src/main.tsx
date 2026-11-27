import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Interactive from './Interactive'
import type { SetupKey } from './types'
import './index.css'

function Root() {
  const [setup, setSetup] = useState<SetupKey>('set1')

  return (
    <>
      <App setup={setup} />
      <Interactive setup={setup} onSetupChange={setSetup} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
